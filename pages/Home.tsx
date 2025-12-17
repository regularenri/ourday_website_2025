import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { FeatureSteps } from '../components/ui/feature-section';
import { TextReveal } from '../components/ui/TextReveal';
import { MagneticButton } from '../components/ui/MagneticButton';

import 'swiper/css';
import 'swiper/css/effect-fade';

const galleryImages = [
  "https://picsum.photos/800/600?random=1",
  "https://picsum.photos/800/600?random=2",
  "https://picsum.photos/800/600?random=3",
  "https://picsum.photos/800/600?random=4",
  "https://picsum.photos/800/600?random=5",
];

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax for key images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-stone-100">

      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[5%] w-[300px] h-[400px]">
            <img src="https://picsum.photos/800/1200?random=1" className="w-full h-full object-cover rounded-2xl" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-[10%] right-[5%] w-[350px] h-[500px]">
            <img src="https://picsum.photos/800/1200?random=2" className="w-full h-full object-cover rounded-2xl" />
          </motion.div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <TextReveal>
            <h1 className="font-serif text-[12vw] leading-[0.85] text-stone-900 mb-6 text-center mix-blend-overlay opacity-90">
              OUR <span className="italic font-light text-stone-600">DAY</span>
            </h1>
          </TextReveal>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
            <TextReveal delay={0.3}>
              <p className="text-stone-600 text-lg md:text-xl font-light tracking-wide max-w-xs text-left">
                Creiamo oggetti unici per matrimoni indimenticabili. L'arte del fatto a mano.
              </p>
            </TextReveal>

            <TextReveal delay={0.5}>
              <Link to="/chi-siamo">
                <MagneticButton>Scopri la Storia</MagneticButton>
              </Link>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Intro - Asymmetric Layout */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-end">
            <div className="lg:w-1/2 relative">
              <TextReveal>
                <h2 className="font-serif text-5xl md:text-7xl leading-tight text-stone-800 mb-8">
                  Dettagli che <br />
                  <span className="ml-12 italic text-olive-800">fanno la differenza.</span>
                </h2>
              </TextReveal>
              <div className="relative h-[600px] w-full mt-12 overflow-hidden rounded-2xl">
                <img src="https://picsum.photos/800/1200?random=3" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="lg:w-1/2 lg:pb-24">
              <TextReveal delay={0.2}>
                <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed mb-12 max-w-lg">
                  "Nel nostro laboratorio, il tempo rallenta. Ogni pezzo è unico, dalle caricature disegnate dal vivo ai bouquet eterni."
                </p>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-stone-500 mb-12 max-w-md">
                  Crediamo nell'imperfezione dell'artigianato. Non usiamo stampi, ma solo mani, carta, colori e tanta passione. Il tuo matrimonio merita di essere un'opera d'arte.
                </p>
              </TextReveal>
              <TextReveal delay={0.4}>
                <Link to="/menu">
                  <MagneticButton className="border-stone-400 text-stone-600">Vedi i Servizi</MagneticButton>
                </Link>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Full Width */}
      <section className="bg-stone-900 py-32 text-stone-100">
        <div className="container mx-auto px-6 mb-20 text-center">
          <TextReveal className="inline-block">
            <span className="text-rust-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Esplora</span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="font-serif text-5xl md:text-6xl">Le Nostre Creazioni</h2>
          </TextReveal>
        </div>
        <FeatureSteps
          className="text-stone-100"
          features={[
            {
              step: 'Intrattenimento',
              title: 'Caricature Live',
              content: 'Intrattenimento unico per i tuoi ospiti. Un ricordo simpatico e originale che renderà il tuo evento indimenticabile.',
              image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop'
            },
            {
              step: 'Fiori Eterni',
              title: 'Bouquet Artigianali',
              content: 'Fiori eterni fatti a mano con carta e tessuto. Una scelta ecologica e duratura per conservare le emozioni del tuo giorno speciale.',
              image: 'https://images.unsplash.com/photo-1563241527-3004b7be025b?q=80&w=2000&auto=format&fit=crop'
            },
            {
              step: 'Dettagli',
              title: 'Wedding Bags',
              content: 'Kit di benvenuto curati in ogni dettaglio per coccolare i tuoi invitati fin dal primo momento.',
              image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop'
            }
          ]}
          title=""
          autoPlayInterval={4000}
        />
      </section>

      {/* Gallery - Horizontal Stagger */}
      <section className="py-32 overflow-hidden bg-stone-100">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <TextReveal>
            <h2 className="font-serif text-4xl text-stone-800">Momenti Rubati</h2>
          </TextReveal>
          <TextReveal delay={0.2} yOffset={20}>
            <div className="hidden md:block text-stone-500 font-sans text-xs tracking-[0.3em] uppercase">Scorri per esplorare</div>
          </TextReveal>
        </div>

        <div className="pl-6 md:pl-0">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1.5}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.5, centeredSlides: false },
              1024: { slidesPerView: 3.5, centeredSlides: false },
            }}
            className="w-full !overflow-visible"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative overflow-hidden aspect-[3/4] group cursor-none">
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-40 bg-stone-100 text-center px-6 border-t border-stone-200">
        <div className="container mx-auto max-w-4xl relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-rust-500/10 to-olive-800/10 blur-[100px] rounded-full pointer-events-none" />

          <TextReveal>
            <Star className="w-12 h-12 mx-auto mb-12 text-rust-500 animate-spin-slow" />
          </TextReveal>

          <TextReveal delay={0.1}>
            <h2 className="font-serif text-6xl md:text-8xl mb-12 text-stone-900">Creiamo Insieme</h2>
          </TextReveal>

          <TextReveal delay={0.3}>
            <div className="flex justify-center">
              <MagneticButton strength={50} className="bg-stone-900 text-stone-100 border-stone-900 hover:bg-stone-800">Inizia il Progetto</MagneticButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </div>
  );
};