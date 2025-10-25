import React, { useState } from 'react';
import { ShoppingBag, ChevronDown, Search, User } from 'lucide-react';

const NAV = [
  {
    label: 'Nursery Decor',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1600&auto=format&fit=crop',
    price: 'From £48',
    links: ['Wall Art', 'Mobiles', 'Storage Baskets', 'Lighting'],
  },
  {
    label: 'Organic Sleepwear',
    image: 'https://images.unsplash.com/photo-1615631599118-3c2aaca5f05f?q=80&w=1600&auto=format&fit=crop',
    price: 'From £35',
    links: ['Onesies', 'Sleep Sacks', 'Swaddles', 'Blankets'],
  },
  {
    label: 'Developmental Toys',
    image: 'https://images.unsplash.com/photo-1541976076758-347942db197c?q=80&w=1600&auto=format&fit=crop',
    price: 'From £22',
    links: ['Play Gyms', 'Rattles', 'Stackers', 'Books'],
  },
  {
    label: 'Premium Gear',
    image: 'https://images.unsplash.com/photo-1617957743097-89a1b2a9b735?q=80&w=1600&auto=format&fit=crop',
    price: 'From £110',
    links: ['Carriers', 'Strollers', 'Changing', 'Bath Time'],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(null);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-stone-50/70 border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="text-xl tracking-tight font-medium">The Nestling</a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item, idx) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(idx)}
                onMouseLeave={() => setOpen(null)}
              >
                <button className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-900 transition">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {open === idx && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[760px] rounded-2xl border border-stone-200 bg-white shadow-xl p-6 grid grid-cols-12 gap-6">
                    <div className="col-span-8 grid grid-cols-2 gap-2">
                      {item.links.map((l) => (
                        <a key={l} href="#" className="group rounded-xl p-3 hover:bg-stone-50 transition">
                          <div className="text-stone-900 font-medium group-hover:underline">{l}</div>
                          <div className="text-stone-500 text-sm">Explore</div>
                        </a>
                      ))}
                    </div>
                    <div className="col-span-4">
                      <div className="overflow-hidden rounded-xl aspect-[4/5] mb-3">
                        <img src={item.image} alt={item.label} className="h-full w-full object-cover" />
                      </div>
                      <div className="text-stone-900 font-medium">{item.label}</div>
                      <div className="text-stone-600 text-sm">{item.price}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700">
              <Search className="h-4 w-4" />
              <span className="text-sm">Search</span>
            </button>
            <button className="p-2 rounded-full hover:bg-stone-100" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-stone-100" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
