'use client';

import { Suspense, useEffect, useState, useMemo } from 'react';
import { notFound, useParams } from 'next/navigation';
import BotVerifier from '@/components/bot-verifier';
import DepopHeader from '@/components/depop-header';
import DepopFooter from '@/components/depop-footer';
import { doc } from 'firebase/firestore';
import { useDoc } from '@/firebase/firestore/use-doc';
import { useFirestore, useMemoFirebase } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';

function RedirectPage() {
  const { id } = useParams();
  const firestore = useFirestore();
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  const redirectLinkRef = useMemoFirebase(() => {
    if (!firestore || !id) return null;
    return doc(firestore, 'redirectLinks', id as string);
  }, [firestore, id]);
  
  const { data: redirectLink, isLoading } = useDoc(redirectLinkRef);

  useEffect(() => {
    if (redirectLink) {
      setTargetUrl(redirectLink.targetUrl);
    }
  }, [redirectLink]);

  if (isLoading) {
    return <RedirectLoadingSkeleton />;
  }

  if (!redirectLink && !isLoading) {
    notFound();
  }

  return (
     <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      <DepopHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <BotVerifier redirectUrl={targetUrl ?? 'https://depop.com'} />
        </Suspense>
      </main>
      <DepopFooter />
    </div>
  );
}

function RedirectLoadingSkeleton() {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
            <DepopHeader />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <Skeleton className="h-8 w-64 mt-4" />
                    <Skeleton className="h-4 w-80 mt-2" />
                </div>
            </main>
            <DepopFooter />
        </div>
    );
}


export default function ItemPage() {
    return (
        <Suspense fallback={<RedirectLoadingSkeleton />}>
            <RedirectPage />
        </Suspense>
    )
}
