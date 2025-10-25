import React, { useMemo, useState } from 'react';
import { ArrowRight, Star, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'p1',
    name: 'Organic Knit Romper',
    price: '£42.00',
    image: 'https://images.unsplash.com/photo-1541537103745-ea3429c65dc1?q=80&w=1800&auto=format&fit=crop',
    lookbook: [
      'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615870216515-1e10d33c7da7?q=80&w=2000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p2',
    name: 'Handwoven Cotton Blanket',
    price: '£65.00',
    image: 'https://images.unsplash.com/photo-1582582621959-48d0ae9b9672?q=80&w=1800&auto=format&fit=crop',
    lookbook: [
      'https://images.unsplash.com/photo-1543339308-43f2a1f5b21b?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p3',
    name: 'Beech Wood Ring Rattle',
    price: '£22.00',
    image: 'https://images.unsplash.com/photo-1544435253-f0ead49638b9?q=80&w=1800&auto=format&fit=crop',
    lookbook: [
      'https://images.unsplash.com/photo-1524567493593-c6fdc7f2d015?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495197359483-d092478c170a?q=80&w=2000&auto=format&fit=crop',
    ],
  },
  {
    id: 'p4',
    name: 'Premium Changing Basket',
    price: '£110.00',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1800&auto=format&fit=crop',
    lookbook: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2000&auto=format&fit=crop',
    ],
  },
];

const categories = [
  {
    label: 'Nursery Decor',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
  },
  {
    label: 'Organic Sleepwear',
    image: 'https://images.unsplash.com/photo-1617824076653-43c650b1b4b7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    label: 'Developmental Toys',
    image: 'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop',
  },
  {
    label: 'Premium Gear',
    image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef0472?q=80&w=1200&auto=format&fit=crop',
  },
];

const testimonials = [
  {
    quote: 'The quality is unreal — every detail is considered. Our nursery finally feels like us.',
    name: 'Amelia R.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
  },
  {
    quote: 'Soft, sustainable, and so beautiful. The Nestling makes parenting feel like art.',
    name: 'Priya K.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
  },
  {
    quote: 'It’s the only baby brand my partner and I both truly love.',
    name: 'Marco L.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <BrandStory />
      <Testimonials />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-baby-steps-4987/1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-50"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-medium">Welcome to the softest moments</h1>
          <p className="mt-4 text-stone-100 font-serif text-lg leading-relaxed">
            Curated for the art of parenthood — modern essentials in organic textures and calming hues.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#featured" className="inline-flex items-center gap-2 rounded-full bg-stone-100 text-stone-900 px-5 py-3 hover:bg-white transition">
              Shop New Arrivals <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#story" className="inline-flex items-center gap-2 rounded-full border border-stone-200/60 bg-white/10 backdrop-blur px-5 py-3 text-white hover:bg-white/20">
              Our Philosophy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium text-stone-900">Featured pieces</h2>
          <p className="text-stone-600 mt-1">Considered, beautiful, and made to be loved long after the early days.</p>
        </div>
        <a href="#" className="hidden sm:inline text-stone-700 hover:text-stone-900">View all</a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, idx) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -4 }}
            className="group rounded-2xl overflow-hidden bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="rounded-full bg-white/90 px-4 py-2 text-sm text-stone-900 hover:bg-white">Quick Shop</button>
                <button onClick={() => setLightbox({ images: p.lookbook, index: 0 })} className="rounded-full bg-stone-900/90 text-white px-4 py-2 text-sm hover:bg-stone-900">See it in a nursery</button>
              </div>
            </div>
            <div className="p-4">
              <div className="text-stone-900 font-medium">{p.name}</div>
              <div className="text-stone-600">{p.price}</div>
            </div>
          </motion.div>
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

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="rounded-3xl bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 p-8 sm:p-12 border border-stone-200">
        <h3 className="text-xl sm:text-2xl font-medium text-stone-900">Shop by feeling</h3>
        <p className="text-stone-600 mt-1">Warm neutrals, muted greens, dusty rose, terracotta, and deep navy accents.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((c) => (
            <a key={c.label} href="#" className="group block text-center">
              <div className="mx-auto w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-1 ring-stone-200 shadow-sm">
                <img src={c.image} alt={c.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-3 text-stone-900 font-medium group-hover:underline">{c.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section id="story" className="relative py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" style={{ backgroundAttachment: 'fixed' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/80 to-white" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-stone-200 bg-white/70 backdrop-blur p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-medium text-stone-900">We believe in better basics, softer snuggles, and more beautiful moments.</h3>
          <p className="mt-4 text-stone-700 font-serif text-lg leading-relaxed">
            Each piece at The Nestling is crafted with organic materials and a reverence for the quiet magic of everyday rituals. From the gentle weight of a knit blanket to the glow of warm wood, we design to soothe the senses and elevate the practice of parenthood.
          </p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 text-white px-5 py-3 hover:bg-stone-800">
            Read Our Philosophy <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = useMemo(() => [...testimonials, ...testimonials], []);
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-2xl sm:text-3xl font-medium text-stone-900">Loved by parents</h3>
          <p className="text-stone-600 mt-1">Warm words from our community</p>
        </div>
        <a href="#" className="hidden sm:inline text-stone-700 hover:text-stone-900 flex items-center gap-2">
          Follow along <Instagram className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="flex gap-6 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <figure key={i} className="min-w-[320px] max-w-sm rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <figcaption>
                  <div className="text-stone-900 font-medium">{t.name}</div>
                  <div className="flex text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400" />
                  </div>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-stone-700 font-serif leading-relaxed">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
