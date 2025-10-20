
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import DepopHeader from '@/components/depop-header';
import DepopFooter from '@/components/depop-footer';
import { products } from '@/lib/mock-data';

export default function Home() {
  const [targetUrl, setTargetUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState('');
  const { toast } = useToast();

  // Helper to get a random product ID from our mock data
  const getRandomProductId = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex].id;
  }

  const handleCreateLink = async () => {
    if (!targetUrl) {
      toast({
        title: 'Error',
        description: 'Please enter a URL.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    setShortUrl('');

    try {
        // We'll use a random product ID from mock data as the short link ID
        const id = getRandomProductId();

        const response = await fetch('/api/redirects', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ targetUrl, id }), // Pass the ID to the API
        });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Failed to create redirect link.');
      }

      const { shortUrl } = await response.json();
      setShortUrl(shortUrl);
      setTargetUrl('');
      toast({
        title: 'Success!',
        description: 'Your short URL has been created.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description:
          error instanceof Error ? error.message : 'An unknown error occurred.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DepopHeader />
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Create a Redirect Link</h1>
        <p className="mb-8 max-w-xl text-muted-foreground">
          Enter a Depop URL below to generate a short link. For this demo, the link will point to a random mock product page.
        </p>
        <div className="w-full max-w-lg space-y-4">
          <Input
            type="url"
            placeholder="https://www.depop.com/your-item"
            value={targetUrl}
            onChange={(e) => setTargetUrl(e.target.value)}
            disabled={loading}
            className="text-center"
          />
          <Button onClick={handleCreateLink} disabled={loading} size="lg" className="w-full">
            {loading ? 'Generating...' : 'Generate Link'}
          </Button>
        </div>
        {shortUrl && (
          <div className="mt-8 w-full max-w-lg rounded-lg border bg-card p-4">
            <p className="text-sm text-muted-foreground">Your short URL is:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-lg text-primary hover:underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </main>
      <DepopFooter />
    </div>
  );
}
