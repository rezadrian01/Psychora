"use client";

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';

const CTAButton = () => {
    const router = useRouter();

    return (
        <div className="flex gap-6 mt-6">
            <Button onClick={() => router.push('questions')} className="text-black" variant='secondary'>Start Test</Button>
            <Button onClick={() => router.push('about')} variant='ghost'>Learn More</Button>
        </div>
    )
}

export default CTAButton