import React, { useRef, useState } from 'react';

const items = [
  { id: 'cot', label: 'Cot', color: '#d1c4b7' },
  { id: 'rug', label: 'Rug', color: '#e6ded3' },
  { id: 'mobile', label: 'Mobile', color: '#c8d3cd' },
  { id: 'changer', label: 'Changing Table', color: '#cbb8a0' },
];

export default function NurseryBuilder() {
  const canvasRef = useRef(null);
  const [placed, setPlaced] = useState([]);

  function onDragStart(e, item) {
    e.dataTransfer.setData('application/json', JSON.stringify(item));
  }

  function onDrop(e) {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const data = JSON.parse(e.dataTransfer.getData('application/json'));
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPlaced((p) => [...p, { ...data, x, y }]);
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-medium text-stone-900">Build your dream nursery</h3>
        <p className="text-stone-600 mt-1">Drag and drop essentials onto the room to visualize your look.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-stone-200 bg-white p-4">
            <div className="text-stone-900 font-medium mb-3">Palette</div>
            <div className="flex gap-2 mb-6">
              <span className="h-6 w-6 rounded-full bg-stone-200" title="Oatmeal" />
              <span className="h-6 w-6 rounded-full bg-rose-200" title="Dusty Rose" />
              <span className="h-6 w-6 rounded-full bg-emerald-200" title="Sage" />
              <span className="h-6 w-6 rounded-full bg-orange-200" title="Terracotta" />
              <span className="h-6 w-6 rounded-full bg-blue-900" title="Navy" />
            </div>

            <div className="text-stone-900 font-medium mb-3">Items</div>
            <div className="grid gap-3">
              {items.map((i) => (
                <div
                  key={i.id}
                  draggable
                  onDragStart={(e) => onDragStart(e, i)}
                  className="cursor-grab active:cursor-grabbing rounded-xl border border-stone-200 p-3 flex items-center gap-3 hover:bg-stone-50"
                  title={`Drag ${i.label}`}
                >
                  <span className="h-8 w-8 rounded-md" style={{ background: i.color }} />
                  <span>{i.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-9">
          <div
            ref={canvasRef}
            onDrop={onDrop}
            onDragOver={onDragOver}
            className="relative h-[420px] sm:h-[520px] rounded-3xl border border-stone-200 bg-[url('https://images.unsplash.com/photo-1616594039964-ae9021a0d5f8?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/30" />
            {placed.map((p, idx) => (
              <div
                key={idx}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: p.x, top: p.y }}
              >
                <svg width="120" height="80" viewBox="0 0 120 80">
                  <rect x="10" y="20" width="100" height="40" rx="8" fill={p.color} />
                  <text x="60" y="48" textAnchor="middle" fontSize="10" fill="#3b3b3b">{p.label}</text>
                </svg>
              </div>
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-sm text-stone-800 border border-stone-200">
              Drag items from the left onto the room
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
