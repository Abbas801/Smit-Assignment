import { useState } from 'react'

const colors = [
  { name: 'Apricot', value: '#e9a77e' },
  { name: 'Sage', value: '#a8bd9e' },
  { name: 'Blue', value: '#91b6cc' },
  { name: 'Lilac', value: '#b5a4c8' },
  { name: 'Butter', value: '#e7d28b' },
]

function App() {
  const [clicks, setClicks] = useState(0)
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [message, setMessage] = useState('Choose a color or press the button.')

  function handleClick() {
    setClicks((currentClicks) => currentClicks + 1)
    setMessage('Nice! The button was clicked.')
  }

  function handleColorChange(color) {
    setSelectedColor(color)
    setMessage(`${color.name} is now your selected color.`)
  }

  function resetTracker() {
    setClicks(0)
    setMessage('Counter cleared. Start again when you are ready.')
  }

  return (
    <main className="min-h-screen bg-[#f4f1eb] px-5 py-8 text-[#252821] sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 flex items-center justify-between border-b border-[#d8d4ca] pb-5"><div className="flex items-center gap-3 text-sm font-bold"><span className="grid size-8 place-items-center bg-[#252821] text-xs text-white">06</span> React Events</div><span className="text-sm text-[#77766c]">Assignment</span></header>
        <div className="mb-10"><p className="mb-2 text-sm text-[#a66543]">Event handling practice</p><h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Click Tracker & Color Changer</h1><p className="mt-3 max-w-xl text-base leading-7 text-[#6d6b62]">Try the buttons below to see how event handlers update the page.</p></div>
        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-[#d6d2c8] bg-white p-6 sm:p-8"><p className="text-sm font-semibold text-[#77766c]">Click Tracker</p><h2 className="mt-2 text-2xl font-bold">Button clicked</h2><div className="my-8 text-center"><span className="text-7xl font-bold text-[#a66543]">{clicks}</span><p className="mt-1 text-sm text-[#77766c]">times</p></div><div className="flex gap-3"><button type="button" onClick={handleClick} className="rounded-md bg-[#252821] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3b4036]">Click me</button><button type="button" onClick={resetTracker} className="rounded-md border border-[#cbc7bd] px-5 py-2.5 text-sm font-semibold text-[#55584f] hover:bg-[#f4f1eb]">Reset</button></div></article>
          <article className="rounded-lg border border-[#d6d2c8] bg-white p-6 sm:p-8"><p className="text-sm font-semibold text-[#77766c]">Color Changer</p><h2 className="mt-2 text-2xl font-bold">Select a color</h2><div className="my-8 flex h-32 items-center justify-center rounded-md border border-[#d6d2c8] transition-colors" style={{ backgroundColor: selectedColor.value }}><span className="bg-white/80 px-3 py-1 text-sm font-semibold">{selectedColor.name}</span></div><div className="flex flex-wrap gap-3">{colors.map((color) => <button key={color.name} type="button" onClick={() => handleColorChange(color)} aria-label={`Choose ${color.name}`} className={`size-9 rounded-full border-2 border-white shadow-sm ${selectedColor.name === color.name ? 'outline outline-2 outline-[#252821] outline-offset-2' : ''}`} style={{ backgroundColor: color.value }} />)}</div><p className="mt-6 border-t border-[#e6e2d9] pt-4 text-sm text-[#77766c]">{message}</p></article>
        </section>
        <footer className="mt-10 border-t border-[#d8d4ca] pt-5 text-sm text-[#89877b]">Made with React useState and event handlers.</footer>
      </div>
    </main>
  )
}

export default App
