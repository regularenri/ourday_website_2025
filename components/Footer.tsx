import React from 'react';
import { Link } from 'react-router-dom';
import { TextReveal } from './ui/TextReveal';
import { MagneticButton } from './ui/MagneticButton';
import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-900 text-stone-400 py-24 border-t border-stone-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <TextReveal>
                            <h2 className="font-serif text-4xl text-stone-100 mb-6">OUR DAY</h2>
                        </TextReveal>
                        <TextReveal delay={0.1}>
                            <p className="font-light text-stone-400 leading-relaxed">
                                Handmade wedding details crafted with love and patience. Making your special moments timeless.
                            </p>
                        </TextReveal>
                    </div>

                    {/* Links */}
                    <div className="flex gap-12 sm:gap-24">
                        <div>
                            <TextReveal>
                                <h3 className="text-stone-100 uppercase tracking-widest text-xs font-bold mb-6">Esplora</h3>
                            </TextReveal>
                            <div className="flex flex-col gap-4">
                                {['Home', 'Chi Siamo', 'Menu'].map((item, i) => (
                                    <div key={item}>
                                        <TextReveal delay={0.1 + (i * 0.1)}>
                                            <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-stone-100 transition-colors inline-block">
                                                {item}
                                            </Link>
                                        </TextReveal>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <TextReveal>
                                <h3 className="text-stone-100 uppercase tracking-widest text-xs font-bold mb-6">Social</h3>
                            </TextReveal>
                            <div className="flex flex-col gap-4">
                                <TextReveal delay={0.1}>
                                    <a href="#" className="flex items-center gap-2 hover:text-stone-100 transition-colors group">
                                        <Instagram size={18} /> Instagram
                                    </a>
                                </TextReveal>
                                <TextReveal delay={0.2}>
                                    <a href="#" className="flex items-center gap-2 hover:text-stone-100 transition-colors group">
                                        <Facebook size={18} /> Facebook
                                    </a>
                                </TextReveal>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-stone-800 text-xs font-mono uppercase tracking-widest opacity-50">
                    <TextReveal>
                        <p>&copy; {currentYear} Our Day Handmade</p>
                    </TextReveal>
                    <TextReveal delay={0.1}>
                        <a href="mailto:info@ourday.it" className="hover:text-stone-100 transition-colors">info@ourday.it</a>
                    </TextReveal>
                </div>

                <div className="mt-8 flex justify-center">
                    <TextReveal delay={0.3}>
                        {/* Big Text fit */}
                        <span className="font-serif text-[12vw] leading-none text-stone-800 opacity-20 select-none pointer-events-none">
                            HANDMADE
                        </span>
                    </TextReveal>
                </div>

            </div>
        </footer>
    );
};
