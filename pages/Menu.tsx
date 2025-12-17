import React from 'react';
import { Button } from '../components/ui/Button';
import { TextReveal } from '../components/ui/TextReveal';

const menuCategories = [
  {
    category: "Intrattenimento & Arte",
    items: [
      { name: "Caricature dal Vivo", price: "da €450", desc: "Intrattenimento live per 3-4 ore. Include fogli brandizzati e materiali." },
      { name: "Ritratti su Commissione", price: "da €80", desc: "Ritratti ad acquerello o digitale da foto, ideali per inviti o regali." },
    ]
  },
  {
    category: "Fiori & Decor",
    items: [
      { name: "Bouquet di Carta", price: "da €120", desc: "Bouquet sposa eterno, realizzato con carta pregiata e pagine di libri." },
      { name: "Boutonniere", price: "da €15/pz", desc: "Per lo sposo e i testimoni, in coordinato con il bouquet." },
      { name: "Centrotavola Artigianali", price: "da €45/pz", desc: "Composizioni uniche non floreali (legno, carta, tessuto)." },
    ]
  },
  {
    category: "Stationery & Gifts",
    items: [
      { name: "Wedding Bags", price: "da €12/pz", desc: "Kit completi per gli ospiti (include ventaglio, riso, fazzoletti, acqua)." },
      { name: "Bomboniere Eco", price: "da €8/pz", desc: "Prodotti locali o piante grasse in vasetti dipinti a mano." },
      { name: "Inviti Calligrafici", price: "da €5/pz", desc: "Scritti a mano uno ad uno su carta cotone." },
    ]
  }
];

export const Menu: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-stone-100 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="text-center mb-16">
          <TextReveal>
            <h1 className="font-serif text-6xl text-stone-800 mb-6">Menu dei Servizi</h1>
          </TextReveal>
          <TextReveal delay={0.2} yOffset={20}>
            <p className="text-stone-600 italic">Prezzi indicativi per la stagione 2024. Contattaci per un preventivo su misura.</p>
          </TextReveal>
        </header>

        <div className="space-y-16">
          {menuCategories.map((cat, catIndex) => (
            <div key={catIndex}>
              <TextReveal delay={catIndex * 0.1}>
                <h2 className="font-serif text-3xl text-olive-800 border-b border-stone-300 pb-4 mb-8">{cat.category}</h2>
              </TextReveal>
              <ul className="space-y-8">
                {cat.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <TextReveal delay={(catIndex * 0.1) + (itemIndex * 0.05)} yOffset={20}>
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 group w-full">
                        <div className="w-full">
                          <div className="flex justify-between items-baseline w-full">
                            <h3 className="font-bold text-xl text-stone-800 font-serif">{item.name}</h3>
                            <span className="md:hidden font-mono text-olive-800">{item.price}</span>
                          </div>
                          <div className="hidden md:block w-full border-b border-dotted border-stone-400 mx-4 relative top-[-6px] opacity-30"></div>
                          <p className="text-stone-500 font-light text-sm mt-1">{item.desc}</p>
                        </div>
                        <span className="hidden md:block font-mono text-lg text-olive-800 min-w-max">{item.price}</span>
                      </div>
                    </TextReveal>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-serif text-2xl text-stone-800 mb-8">Hai trovato quello che cercavi?</p>
          <Button>Richiedi Preventivo</Button>
        </div>
      </div>
    </div>
  );
};