import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-medium">The Nestling</div>
            <p className="mt-2 text-stone-600 font-serif leading-relaxed">Better basics. Softer snuggles. More beautiful moments.</p>
          </div>
          <div>
            <div className="font-medium">Shop</div>
            <ul className="mt-2 space-y-2 text-stone-700">
              <li><a href="#" className="hover:text-stone-900">Nursery Decor</a></li>
              <li><a href="#" className="hover:text-stone-900">Organic Sleepwear</a></li>
              <li><a href="#" className="hover:text-stone-900">Developmental Toys</a></li>
              <li><a href="#" className="hover:text-stone-900">Premium Gear</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">About</div>
            <ul className="mt-2 space-y-2 text-stone-700">
              <li><a href="#philosophy" className="hover:text-stone-900">Our Philosophy</a></li>
              <li><a href="#" className="hover:text-stone-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-stone-900">Journal</a></li>
              <li><a href="#" className="hover:text-stone-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Newsletter</div>
            <p className="mt-2 text-stone-600">Join for gentle updates and early access.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Email address" className="w-full rounded-full border border-stone-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300" />
              <button type="submit" className="rounded-full bg-stone-900 text-white px-4 py-2 hover:bg-stone-800">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-600">
          <div>© {new Date().getFullYear()} The Nestling. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-900">Privacy</a>
            <a href="#" className="hover:text-stone-900">Terms</a>
            <a href="#" className="hover:text-stone-900">Shipping</a>
            <a href="#" className="hover:text-stone-900">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}