import React from 'react';
import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
