import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    strength?: number; // How strong the magnetic pull is
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = "",
    strength = 30, // Default strength
    ...props
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const text = textRef.current;
        if (!button || !text) return;

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const textXTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const textYTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * (strength / 100));
            yTo(y * (strength / 100));

            // Text moves slightly more for parallax effect
            textXTo(x * (strength / 80));
            textYTo(y * (strength / 80));
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            textXTo(0);
            textYTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    return (
        <button
            ref={buttonRef}
            className={`relative px-8 py-4 rounded-full border border-stone-800 bg-transparent overflow-hidden group hover:bg-stone-800 transition-colors duration-300 ${className}`}
            {...props}
        >
            <span ref={textRef} className="relative z-10 block text-stone-800 group-hover:text-stone-100 transition-colors duration-300 uppercase tracking-widest text-xs font-bold">
                {children}
            </span>
        </button>
    );
};
