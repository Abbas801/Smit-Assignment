import { useState } from 'react'

const products = [
  { id: 1, name: 'Cloud lounge chair', category: 'Living', price: 248, likes: 24, tone: 'from-[#e8ded0] to-[#c5ad91]', mark: '01' },
  { id: 2, name: 'Form ceramic set', category: 'Objects', price: 46, likes: 18, tone: 'from-[#d4e0dc] to-[#9bb6aa]', mark: '02' },
  { id: 3, name: 'Noon desk light', category: 'Workspace', price: 92, likes: 31, tone: 'from-[#e5d6e0] to-[#b89ab2]', mark: '03' },
]

function ProductCard({ product, liked, onLike, quantity, onQuantityChange }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#dfe7e0] bg-white shadow-[0_15px_35px_rgba(27,55,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(27,55,42,0.13)]">
      <div className={`relative flex h-64 items-center justify-center bg-gradient-to-br ${product.tone}`}>
        <span className="absolute left-5 top-5 text-xs font-black tracking-[0.2em] text-[#355448]/70">{product.mark} / 03</span>
        <button type="button" onClick={() => onLike(product.id)} aria-label={`${liked ? 'Unlike' : 'Like'} ${product.name}`} className={`absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/75 text-lg transition hover:scale-105 ${liked ? 'text-rose-500' : 'text-[#355448]'}`}>{liked ? '♥' : '♡'}</button>
        <div className="grid size-36 rotate-6 place-items-center rounded-[2.5rem] bg-white/35 text-5xl font-black tracking-[-0.1em] text-white shadow-xl shadow-black/10 backdrop-blur-sm transition duration-500 group-hover:rotate-0 group-hover:scale-105">{product.name.slice(0, 2).toUpperCase()}</div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#849187]"><span>{product.category}</span><span>{product.likes + (liked ? 1 : 0)} likes</span></div>
        <h2 className="text-xl font-black tracking-tight text-[#18211d]">{product.name}</h2>
        <div className="mt-5 flex items-center justify-between gap-3"><span className="text-2xl font-black text-[#18211d]">${product.price}</span><div className="flex items-center rounded-full bg-[#eef3ed] p-1"><button type="button" onClick={() => onQuantityChange(product.id, -1)} className="grid size-7 place-items-center rounded-full text-lg font-bold text-[#355448] hover:bg-white">-</button><span className="w-7 text-center text-sm font-black">{quantity}</span><button type="button" onClick={() => onQuantityChange(product.id, 1)} className="grid size-7 place-items-center rounded-full text-lg font-bold text-[#355448] hover:bg-white">+</button></div></div>
      </div>
    </article>
  )
}

function App() {
  const [likedProducts, setLikedProducts] = useState([])
  const [quantities, setQuantities] = useState({ 1: 1, 2: 1, 3: 1 })
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', ...new Set(products.map((product) => product.category))]
  const visibleProducts = activeCategory === 'All' ? products : products.filter((product) => product.category === activeCategory)
  const totalItems = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0)
  const subtotal = products.reduce((sum, product) => sum + product.price * quantities[product.id], 0)

  function toggleLike(id) {
    setLikedProducts((current) => current.includes(id) ? current.filter((productId) => productId !== id) : [...current, id])
  }

  function changeQuantity(id, amount) {
    setQuantities((current) => ({ ...current, [id]: Math.max(1, current[id] + amount) }))
  }

  return (
    <main className="min-h-screen bg-[#f5f7f3] px-5 py-7 sm:px-8 lg:px-14 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-16 flex items-center justify-between"><div className="flex items-center gap-3 text-sm font-black tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-[#183f32] text-xs text-white">P/</span> PULSE MARKET</div><div className="rounded-full border border-[#d9e4db] bg-white px-4 py-2 text-xs font-black text-[#355448]">{likedProducts.length} liked / {totalItems} items</div></nav>
        <header className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#2d8061]">The Sunday edit</p><h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#18211d] sm:text-7xl">Small things,<br /><span className="text-[#849187]">well chosen.</span></h1></div><p className="max-w-xs text-sm leading-6 text-[#6e7a71]">A considered collection for the spaces and rituals that make up your everyday.</p></header>
        <section aria-label="Product categories" className="mb-8 flex flex-wrap gap-2">{categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${activeCategory === category ? 'bg-[#183f32] text-white shadow-md shadow-[#183f32]/20' : 'bg-white text-[#718076] hover:bg-[#e8eee8]'}`}>{category}</button>)}</section>
        <section className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr_0.7fr]" aria-label="Interactive products">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} liked={likedProducts.includes(product.id)} onLike={toggleLike} quantity={quantities[product.id]} onQuantityChange={changeQuantity} />)}<aside className="rounded-[1.75rem] bg-[#183f32] p-6 text-[#f4f7f2] shadow-[0_15px_35px_rgba(27,55,42,0.12)]"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#a9cbbb]">Your selection</p><strong className="mt-3 block text-5xl font-black tracking-[-0.06em]">{totalItems}</strong><p className="mt-1 text-sm text-[#b9ccc0]">pieces in your edit</p><div className="my-8 h-px bg-white/15" /><p className="text-xs font-bold uppercase tracking-wider text-[#a9cbbb]">Current total</p><p className="mt-1 text-3xl font-black">${subtotal}</p><button type="button" className="mt-8 w-full rounded-full bg-[#d9edc9] px-4 py-3 text-sm font-black text-[#183f32] transition hover:bg-white">Review selection</button></aside></section>
        <footer className="mt-14 flex justify-between border-t border-[#dce5dc] pt-5 text-xs font-bold text-[#8a978e]"><span>Thoughtful goods, simply presented.</span><span>MUHAMMAD ABBAS / 2026</span></footer>
      </div>
    </main>
  )
}

export default App
