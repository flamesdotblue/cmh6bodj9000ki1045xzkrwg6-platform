import React, { useState } from 'react';

const PRODUCTS = [
  {
    id: 'b1',
    name: 'Organic Knit Blanket — Oatmeal',
    price: 65.0,
    img: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1600&auto=format&fit=crop',
    lookbook: [
      'https://images.unsplash.com/photo-1543339308-43f2a1f5b21b?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603732551658-5fabbafa84a8?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 'g1',
    name: 'Scandi Wooden Activity Gym',
    price: 110.0,
    img: 'https://images.unsplash.com/photo-1601132359864-c974e79890fa?q=80&w=1600&auto=format&fit=crop',
    lookbook: [
      'https://images.unsplash.com/photo-1524567493593-c6fdc7f2d015?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 's1',
    name: 'Cotton Muslin Swaddles — Sage (2 pack)',
    price: 35.0,
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    lookbook: [
      'https://images.unsplash.com/photo-1615870216515-1e10d33c7da7?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 'c1',
    name: 'Premium Baby Carrier — Deep Navy',
    price: 140.0,
    img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop',
    lookbook: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
    ],
  },
];

export default function FeaturedProducts() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium">Featured pieces</h2>
          <p className="text-stone-600 mt-1">Considered, beautiful, and made to be loved long after the early days.</p>
        </div>
        <a href="#" className="hidden sm:inline text-stone-700 hover:text-stone-900">View all</a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="group rounded-2xl overflow-hidden bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="rounded-full bg-white/90 px-4 py-2 text-sm text-stone-900 hover:bg-white">Quick Shop</button>
                <button onClick={() => setLightbox({ images: p.lookbook, index: 0 })} className="rounded-full bg-stone-900/90 text-white px-4 py-2 text-sm hover:bg-stone-900">See it in a nursery</button>
              </div>
            </div>
            <div className="p-4">
              <div className="font-medium">{p.name}</div>
              <div className="text-stone-600">£{p.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-[16/10] overflow-hidden rounded-2xl">
              <img src={lightbox.images[lightbox.index]} alt="Lookbook" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-x-0 -bottom-14 flex items-center justify-between text-white">
              <button
                onClick={() => setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }))}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                Prev
              </button>
              <div className="text-sm">Real home inspiration</div>
              <button
                onClick={() => setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % lb.images.length }))}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
