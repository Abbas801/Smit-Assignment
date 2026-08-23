import { useState } from 'react'

const cards = [
  {
    title: 'React',
    description: 'Build interfaces from small, reusable components.',
    category: 'Frontend',
    level: 'Core',
    color: 'from-cyan-400 to-blue-500',
    icon: 'R',
  },
  {
    title: 'Node.js',
    description: 'Run fast, scalable JavaScript on the server.',
    category: 'Backend',
    level: 'Core',
    color: 'from-lime-300 to-emerald-500',
    icon: 'N',
  },
  {
    title: 'MongoDB',
    description: 'Store flexible data with a document-first database.',
    category: 'Database',
    level: 'Core',
    color: 'from-amber-300 to-orange-500',
    icon: 'M',
  },
  {
    title: 'Tailwind CSS',
    description: 'Compose expressive designs directly in your markup.',
    category: 'Frontend',
    level: 'Explore',
    color: 'from-fuchsia-300 to-purple-500',
    icon: 'T',
  },
]

function Card({ title, description, category, level, color, icon, featured = false }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-5 shadow-[0_12px_32px_rgba(31,52,44,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(31,52,44,0.13)] ${featured ? 'md:col-span-2 md:flex md:items-end md:justify-between' : ''}`}>
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${color}`} />
      <div className="relative z-10">
        <div className="mb-8 flex items-start justify-between">
          <div className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${color} text-xl font-black text-white shadow-lg shadow-black/10`}>
            {icon}
          </div>
          <span className="rounded-full bg-[#f2f5f0] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#6b766d]">{level}</span>
        </div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8a958b]">{category}</p>
        <h2 className="text-2xl font-black tracking-tight text-[#17221f]">{title}</h2>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[#69766d]">{description}</p>
      </div>
      <button className="relative z-10 mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#245b49] transition group-hover:gap-3 md:mt-0" type="button">
        Explore component <span aria-hidden="true">-&gt;</span>
      </button>
    </article>
  )
}

function App() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Frontend', 'Backend', 'Database']
  const visibleCards = filter === 'All' ? cards : cards.filter((card) => card.category === filter)

  return (
    <main className="min-h-screen bg-[#f5f7f2] px-5 py-8 sm:px-8 lg:px-14 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm font-black tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-[#173d32] text-white">&lt;/&gt;</span> component.lab</div>
          <span className="hidden rounded-full border border-[#dce5dc] px-4 py-2 text-xs font-bold text-[#6b766d] sm:block">ASSIGNMENT 03 / REACT</span>
        </nav>

        <header className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#2d8061]">A small library of ideas</p>
            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#17221f] sm:text-7xl">Build once.<br /><span className="text-[#7d8d80]">Use everywhere.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#69766d]">A component card system for the modern JavaScript stack. Each card is powered by the same reusable component and a different set of props.</p>
          </div>
          <div className="flex gap-8 border-l border-[#dce5dc] pl-6">
            <div><strong className="block text-3xl font-black text-[#17221f]">04</strong><span className="text-xs font-bold uppercase tracking-wider text-[#8a958b]">Cards</span></div>
            <div><strong className="block text-3xl font-black text-[#17221f]">03</strong><span className="text-xs font-bold uppercase tracking-wider text-[#8a958b]">Layers</span></div>
          </div>
        </header>

        <section aria-label="Technology filters" className="mb-7 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs font-black uppercase tracking-wider text-[#8a958b]">Filter by</span>
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setFilter(category)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${filter === category ? 'bg-[#173d32] text-white shadow-md shadow-[#173d32]/20' : 'bg-white text-[#69766d] hover:bg-[#e7eee6]'}`}>
              {category}
            </button>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2" aria-label="Component cards">
          {visibleCards.map((card, index) => <Card key={card.title} {...card} featured={index === 0 && filter === 'All'} />)}
        </section>
        <footer className="mt-12 flex items-center justify-between border-t border-[#dce5dc] pt-5 text-xs font-bold text-[#8a958b]"><span>Designed with reusable pieces.</span><span>MUHAMMAD ABBAS / 2026</span></footer>
      </div>
    </main>
  );
}

export default App;