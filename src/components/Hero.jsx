import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-50" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl tracking-tight font-medium">Welcome to the softest moments</h1>
          <p className="mt-4 text-stone-100 font-serif text-lg leading-relaxed">
            Curated for the art of parenthood — modern essentials in organic textures and calming hues.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#featured" className="inline-flex items-center gap-2 rounded-full bg-stone-100 text-stone-900 px-5 py-3 hover:bg-white transition">
              Shop Featured <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#philosophy" className="inline-flex items-center gap-2 rounded-full border border-stone-200/60 bg-white/10 backdrop-blur px-5 py-3 text-white hover:bg-white/20">
              Our Philosophy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
