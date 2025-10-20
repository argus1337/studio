import { NextRequest, NextResponse } from 'next/server';
import { getFirestore } from 'firebase-admin/firestore';
import { customAlphabet } from 'nanoid';
import { getApps, initializeApp, getApp } from 'firebase-admin/app';

if (!getApps().length) {
  initializeApp();
}
const db = getFirestore();

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 6);

export async function POST(req: NextRequest) {
  try {
    const { targetUrl } = await req.json();

    if (!targetUrl || typeof targetUrl !== 'string') {
      return NextResponse.json({ error: 'targetUrl is required' }, { status: 400 });
    }

    const id = nanoid();
    const shortUrl = `${req.nextUrl.origin}/item/${id}`;

    const newLink = {
      id,
      shortUrl,
      targetUrl,
      createdTimestamp: new Date().toISOString(),
    };

    await db.collection('redirectLinks').doc(id).set(newLink);

    return NextResponse.json({ shortUrl }, { status: 201 });
  } catch (error) {
    console.error('Error creating redirect link:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
