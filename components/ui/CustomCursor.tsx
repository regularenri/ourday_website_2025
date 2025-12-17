import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Hide default cursor
        document.body.classList.add('cursor-none');

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleLinkHover = () => setIsHovering(true);
        const handleLinkLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);

        // Add event listeners for all clickable elements
        const links = document.querySelectorAll('a, button, .cursor-pointer');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleLinkHover);
            link.addEventListener('mouseleave', handleLinkLeave);
        });

        // Use MutationObserver to attach listeners to dynamic elements
        const observer = new MutationObserver(() => {
            const newLinks = document.querySelectorAll('a, button, .cursor-pointer');
            newLinks.forEach(link => {
                link.addEventListener('mouseenter', handleLinkHover);
                link.addEventListener('mouseleave', handleLinkLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.body.classList.remove('cursor-none');
            window.removeEventListener('mousemove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHover);
                link.removeEventListener('mouseleave', handleLinkLeave);
            });
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const follower = followerRef.current;
        if (!follower) return;

        if (isHovering) {
            gsap.to(follower, {
                scale: 3,
                backgroundColor: 'rgba(63, 77, 63, 0.2)', // Olive-800 with opacity
                mixBlendMode: 'difference',
                duration: 0.3
            });
        } else {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'transparent',
                mixBlendMode: 'normal',
                duration: 0.3
            });
        }
    }, [isHovering]);

    return (
        <>
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-stone-800 rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
            />
            {/* Follower Ring */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-stone-800 rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 transition-colors"
                style={{
                    willChange: 'transform'
                }}
            />
        </>
    );
};
