
import { NextRequest, NextResponse } from 'next/server';
import { collection, doc, setDoc, getFirestore, initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { customAlphabet } from 'nanoid';
import { firebaseConfig } from '@/firebase/config';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 6);

// Helper function to initialize Firebase on the server-side if not already done.
function initializeServerApp() {
  if (getApps().length > 0) {
    return getApp();
  }
  return initializeApp(firebaseConfig);
}

export async function POST(req: NextRequest) {
  try {
    const app = initializeServerApp();
    const firestore = initializeFirestore(app, {
      cacheSizeBytes: CACHE_SIZE_UNLIMITED
    });

    const { targetUrl } = await req.json();

    if (!targetUrl || typeof targetUrl !== 'string') {
      return NextResponse.json({ error: 'targetUrl is required' }, { status: 400 });
    }

    const id = nanoid();
    const origin = req.nextUrl.protocol + '//' + req.nextUrl.host;
    const shortUrl = `${origin}/item/${id}`;

    const newLink = {
      id,
      shortUrl,
      targetUrl,
      createdTimestamp: new Date().toISOString(),
    };

    const redirectLinksRef = collection(firestore, 'redirectLinks');
    await setDoc(doc(redirectLinksRef, id), newLink);

    return NextResponse.json({ shortUrl }, { status: 201 });
  } catch (error) {
    console.error('Error creating redirect link:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
}
