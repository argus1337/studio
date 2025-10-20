'use server';

import { NextRequest, NextResponse } from 'next/server';
import { collection, doc, setDoc, getFirestore } from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import { initializeFirebase } from '@/firebase';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 6);

// This is a server-side route, but we use the client SDK for simplicity in this environment.
// In a real production app, you would use the Admin SDK with service account credentials.

export async function POST(req: NextRequest) {
  try {
    // We need to get a Firestore instance. Since this is a server-side
    // action, we'll initialize a temporary client instance.
    const { firestore } = initializeFirebase();

    const { targetUrl } = await req.json();

    if (!targetUrl || typeof targetUrl !== 'string') {
      return NextResponse.json({ error: 'targetUrl is required' }, { status: 400 });
    }

    const id = nanoid();
    // Construct the origin URL carefully.
    const origin = req.nextUrl.protocol + '//' + req.nextUrl.host;
    const shortUrl = `${origin}/item/${id}`;

    const newLink = {
      id,
      shortUrl,
      targetUrl,
      createdTimestamp: new Date().toISOString(),
    };

    // Get a reference to the document and set the data
    const redirectLinksRef = collection(firestore, 'redirectLinks');
    await setDoc(doc(redirectLinksRef, id), newLink);

    return NextResponse.json({ shortUrl }, { status: 201 });
  } catch (error) {
    console.error('Error creating redirect link:', error);
    // Ensure the error is an instance of Error
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
}
