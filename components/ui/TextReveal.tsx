import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
    threshold?: number;
    once?: boolean;
}

export function TextReveal({
    children,
    className,
    delay = 0,
    duration = 1,
    yOffset = 50,
    threshold = 0.1,
    once = true,
}: TextRevealProps) {
    const elRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                elRef.current,
                {
                    y: yOffset,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: duration,
                    delay: delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: elRef.current,
                        start: `top ${100 - (threshold * 100)}%`, // Trigger when top of element hits X% of viewport height
                        toggleActions: once ? "play none none none" : "play none none reverse",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [delay, duration, yOffset, threshold, once]);

    return (
        <div ref={elRef} className={cn("will-change-transform", className)}>
            {children}
        </div>
    );
}
