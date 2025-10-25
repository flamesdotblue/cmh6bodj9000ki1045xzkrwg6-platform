import React, { useState } from 'react';
import { ShoppingBag, ChevronDown, Menu, Search, User, Heart } from 'lucide-react';

const nav = [
  {
    label: 'Nursery',
    featured: {
      title: 'Handwoven Cotton Blanket',
      price: '£65.00',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop',
    },
    links: [
      { label: 'Decor', href: '#' },
      { label: 'Bedding', href: '#' },
      { label: 'Storage', href: '#' },
      { label: 'Lighting', href: '#' },
    ],
  },
  {
    label: 'Sleepwear',
    featured: {
      title: 'Organic Sleeper Set',
      price: '£48.00',
      image: 'https://images.unsplash.com/photo-1583512603706-1ff7c6f34d5b?q=80&w=2000&auto=format&fit=crop',
    },
    links: [
      { label: 'Onesies', href: '#' },
      { label: 'Two-piece Sets', href: '#' },
      { label: 'Swaddles', href: '#' },
      { label: 'Sleep Sacks', href: '#' },
    ],
  },
  {
    label: 'Toys',
    featured: {
      title: 'Beech Wood Ring Rattle',
      price: '£22.00',
      image: 'https://images.unsplash.com/photo-1585515825818-8967c1a7a6f6?q=80&w=2000&auto=format&fit=crop',
    },
    links: [
      { label: 'Developmental', href: '#' },
      { label: 'Soft', href: '#' },
      { label: 'Stackers', href: '#' },
      { label: 'Play Gyms', href: '#' },
    ],
  },
  {
    label: 'Gear',
    featured: {
      title: 'Premium Changing Basket',
      price: '£110.00',
      image: 'https://images.unsplash.com/photo-1595435943442-45c79f4ef140?q=80&w=2000&auto=format&fit=crop',
    },
    links: [
      { label: 'Carriers', href: '#' },
      { label: 'Strollers', href: '#' },
      { label: 'Changing', href: '#' },
      { label: 'Bath Time', href: '#' },
    ],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-stone-50/70 border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-stone-100"
            aria-label="Open menu"
            onClick={() => setMobileOpen((s) => !s)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <a href="#" className="text-xl tracking-tight font-medium text-stone-900">
            The Nestling
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-900 transition-colors">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {openMenu === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[640px] rounded-2xl border border-stone-200 bg-white shadow-xl p-6 grid grid-cols-12 gap-6">
                    <div className="col-span-8 grid grid-cols-2 gap-2">
                      {item.links.map((l) => (
                        <a key={l.label} href={l.href} className="group rounded-xl p-3 hover:bg-stone-50 transition">
                          <div className="text-stone-900 font-medium group-hover:underline">{l.label}</div>
                          <div className="text-stone-500 text-sm">Explore</div>
                        </a>
                      ))}
                    </div>
                    <div className="col-span-4">
                      <div className="overflow-hidden rounded-xl aspect-[4/5] mb-3">
                        <img src={item.featured.image} alt={item.featured.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="text-stone-900 font-medium">{item.featured.title}</div>
                      <div className="text-stone-600 text-sm">{item.featured.price}</div>
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
            <button className="p-2 rounded-full hover:bg-stone-100" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-stone-100" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-stone-100" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200">
            <div className="grid gap-4">
              {nav.map((item) => (
                <details key={item.label} className="group rounded-xl border border-stone-200">
                  <summary className="list-none cursor-pointer p-4 flex items-center justify-between">
                    <span className="font-medium text-stone-900">{item.label}</span>
                    <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 grid gap-2">
                    {item.links.map((l) => (
                      <a key={l.label} href={l.href} className="text-stone-700 hover:text-stone-900">
                        {l.label}
                      </a>
                    ))}
                    <div className="mt-2 flex items-center gap-3 rounded-xl bg-stone-50 p-3">
                      <img src={item.featured.image} alt="featured" className="h-16 w-16 object-cover rounded-lg" />
                      <div>
                        <div className="text-stone-900 text-sm font-medium">{item.featured.title}</div>
                        <div className="text-stone-600 text-sm">{item.featured.price}</div>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
