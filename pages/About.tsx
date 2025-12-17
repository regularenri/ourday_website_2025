import React from 'react';
import { motion } from 'framer-motion';
import { TextReveal } from '../components/ui/TextReveal';

const sections = [
  {
    id: 1,
    title: "Le Nostre Origini",
    text: "Tutto è iniziato con una matita e un foglio di carta. La passione per il disegno e per le cose belle ci ha spinto a trasformare un hobby in una professione. Crediamo che ogni matrimonio debba raccontare una storia: la vostra. Non ci piacciono le soluzioni standardizzate, preferiamo l'imperfezione unica del fatto a mano.",
    image: "https://picsum.photos/800/1000?random=20"
  },
  {
    id: 2,
    title: "L'Artigianato",
    text: "Nel nostro laboratorio, il tempo rallenta. Utilizziamo carte pregiate, acquerelli di alta qualità e tessuti naturali. Ogni bomboniera viene confezionata a mano, ogni caricatura cattura l'anima e non solo i tratti. La nostra filosofia è 'Earth Tones': colori caldi, materiali sostenibili e un design che rispetta la natura.",
    image: "https://picsum.photos/800/1000?random=21"
  },
  {
    id: 3,
    title: "La Visione",
    text: "Vogliamo portare l'arte negli eventi. Non solo decorazioni, ma vere e proprie esperienze. Immagina i tuoi ospiti che tornano a casa non con un semplice oggetto, ma con un ricordo artistico del tuo giorno speciale. Questo è OUR DAY.",
    image: "https://picsum.photos/800/1000?random=22"
  }
];

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-stone-100 min-h-screen">
      <div className="container mx-auto px-6">

        <header className="text-center mb-24">
          <TextReveal>
            <h1 className="font-serif text-6xl text-stone-800 mb-6">Chi Siamo</h1>
          </TextReveal>
          <TextReveal delay={0.2} yOffset={20}>
            <div className="w-24 h-1 bg-olive-800 mx-auto opacity-50"></div>
          </TextReveal>
        </header>

        <div className="flex flex-col gap-32">
          {sections.map((section, index) => (
            <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>

              {/* Image Side - Keep framer motion for images as it's fine or replace if requested, but request was for TEXT animations. Keeping image animation valid for now. */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <div className="relative">
                  <div className={`absolute -inset-4 border border-stone-300 rounded-2xl z-0 hidden md:block ${index % 2 === 0 ? '-translate-x-4 translate-y-4' : 'translate-x-4 translate-y-4'}`}></div>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[600px] object-cover rounded-2xl shadow-xl relative z-10"
                  />
                </div>
              </motion.div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 md:px-12">
                <TextReveal delay={0.1}>
                  <span className="text-olive-800 font-bold tracking-widest uppercase text-sm mb-2 block">Capitolo {index + 1}</span>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <h2 className="font-serif text-4xl text-stone-800 mb-8">{section.title}</h2>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-stone-600 text-lg font-light leading-relaxed font-sans">
                    {section.text}
                  </p>
                </TextReveal>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};