import { useState } from 'react'

const products = [
  { id: 1, name: 'Arc headphones', category: 'Audio', price: 129, oldPrice: 159, rating: 4.9, reviews: 128, badge: 'Best seller', initials: 'AR', color: 'from-[#d9e8e4] to-[#a9c8bd]' },
  { id: 2, name: 'Drift backpack', category: 'Travel', price: 84, rating: 4.8, reviews: 84, badge: 'New arrival', initials: 'DR', color: 'from-[#f2dfbc] to-[#d4a66d]' },
  { id: 3, name: 'Studio lamp', category: 'Workspace', price: 62, oldPrice: 75, rating: 4.7, reviews: 56, badge: '20% off', initials: 'SL', color: 'from-[#e9dce5] to-[#b999b7]' },
  { id: 4, name: 'Field bottle', category: 'Outdoor', price: 28, rating: 4.6, reviews: 42, badge: 'Everyday pick', initials: 'FB', color: 'from-[#dbe3ef] to-[#9eb4cf]' },
]

function ProductCard({ product, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#e1e7df] bg-white shadow-[0_14px_35px_rgba(29,52,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(29,52,42,0.12)]">
      <div className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${product.color}`}>
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#355348]">{product.badge}</span>
        <div className="grid size-32 rotate-6 place-items-center rounded-[2.25rem] bg-white/45 text-4xl font-black tracking-[-0.08em] text-white shadow-xl shadow-black/10 backdrop-blur-sm transition duration-500 group-hover:rotate-0 group-hover:scale-105">{product.initials}</div>
        <span className="absolute bottom-4 right-4 text-xs font-bold text-[#355348]/70">01 / 04</span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#8a978e]"><span>{product.category}</span><span>★ {product.rating} ({product.reviews})</span></div>
        <h2 className="text-xl font-black tracking-tight text-[#18211d]">{product.name}</h2>
        <div className="mt-5 flex items-center justify-between"><div className="flex items-baseline gap-2"><span className="text-2xl font-black text-[#18211d]">${product.price}</span>{product.oldPrice && <del className="text-sm text-[#9ca69e]">${product.oldPrice}</del>}</div><button type="button" onClick={() => onAdd(product)} className="grid size-10 place-items-center rounded-full bg-[#183f32] text-xl text-white transition hover:bg-[#28624f]" aria-label={`Add ${product.name} to cart`}>+</button></div>
      </div>
    </article>
  )
}

function App() {
  const [category, setCategory] = useState('All')
  const [cartCount, setCartCount] = useState(0)
  const categories = ['All', ...new Set(products.map((product) => product.category))]
  const visibleProducts = category === 'All' ? products : products.filter((product) => product.category === category)

  return (
    <main className="min-h-screen bg-[#f7f8f3] px-5 py-7 sm:px-8 lg:px-14 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-16 flex items-center justify-between"><div className="flex items-center gap-3 text-sm font-black tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-[#183f32] text-xs text-white">S/</span> SERA SUPPLY</div><button type="button" className="rounded-full border border-[#dce5dc] px-4 py-2 text-xs font-black text-[#355348]">Cart ({cartCount})</button></nav>
        <header className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#2d8061]">Curated essentials / 2026</p><h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#18211d] sm:text-7xl">Objects with<br /><span className="text-[#849187]">a point of view.</span></h1></div><p className="max-w-xs text-sm leading-6 text-[#6e7a71]">Thoughtful tools for work, rest, and everywhere in between. Designed to stay in your daily rotation.</p></header>
        <section aria-label="Product categories" className="mb-8 flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${category === item ? 'bg-[#183f32] text-white' : 'bg-white text-[#718076] hover:bg-[#e8eee8]'}`}>{item}</button>)}</section>
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="Product list">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={() => setCartCount((count) => count + 1)} />)}</section>
        <footer className="mt-14 flex justify-between border-t border-[#dce5dc] pt-5 text-xs font-bold text-[#8a978e]"><span>Free shipping over $75</span><span>Made for the considered life.</span></footer>
      </div>
    </main>
  )
}

export default App
