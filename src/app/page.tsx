
'use client';

import { Suspense } from 'react';
import BotVerifier from '@/components/bot-verifier';
import DepopHeader from '@/components/depop-header';
import DepopFooter from '@/components/depop-footer';

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      <DepopHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <BotVerifier />
        </Suspense>
      </main>
      <DepopFooter />
    </div>
  );
}
