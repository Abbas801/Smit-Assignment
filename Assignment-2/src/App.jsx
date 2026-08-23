const name = "Muhammad Abbas";

function App() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] px-5 py-8 text-[#20211f] sm:px-8 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <article className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[#d9d3c8] bg-[#fbfaf7] shadow-[0_24px_70px_rgba(55,49,38,0.14)]">
          <div className="absolute -right-8 -top-10 h-44 w-44 rounded-full bg-[#dce6dc] opacity-70 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#efe1d2] opacity-80 blur-2xl" />

          <div className="relative grid gap-8 p-7 sm:p-10 md:grid-cols-[1fr_0.82fr] md:gap-12 md:p-14">
            <section className="flex flex-col justify-between">
              <div>
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#74746e]">
                    Personal profile
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium text-[#697366]">
                    <span className="h-2 w-2 rounded-full bg-[#77957b]" />
                    Available for work
                  </span>
                </div>

                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#20211f] text-2xl font-semibold tracking-tight text-[#f4f1eb] shadow-lg shadow-[#20211f]/15">
                  MA
                </div>

                <p className="mb-3 text-sm font-medium text-[#8b6c4f]">Hello, I am</p>
                <h1 className="max-w-sm text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl">
                  {name}
                </h1>
                <p className="mt-6 max-w-sm text-base leading-7 text-[#686862]">
                  Software Engineering student building thoughtful digital experiences with clean, purposeful code.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="rounded-full bg-[#20211f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3d403a] focus:outline-none focus:ring-2 focus:ring-[#20211f] focus:ring-offset-2"
                >
                  Contact me <span className="ml-2" aria-hidden="true">-&gt;</span>
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-[#cfc8bc] px-5 py-3 text-sm font-semibold text-[#44453f] transition hover:border-[#20211f] focus:outline-none focus:ring-2 focus:ring-[#20211f] focus:ring-offset-2"
                >
                  Learn more
                </a>
              </div>
            </section>

            <aside id="about" className="relative flex min-h-72 flex-col justify-between overflow-hidden rounded-3xl bg-[#20211f] p-7 text-[#f4f1eb] sm:min-h-80 sm:p-8">
              <img
                src="/src/assets/hero.png"
                alt=""
                className="absolute -right-6 -top-2 w-52 opacity-80"
              />
              <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#babbb2]">
                <span>01 / 01</span>
                <span>About</span>
              </div>
              <div className="relative">
                <p className="mb-4 text-sm text-[#aeb1a7]">Currently focused on</p>
                <h2 className="max-w-xs text-3xl font-medium leading-tight tracking-[-0.03em]">
                  Interfaces that feel as good as they function.
                </h2>
                <div className="mt-8 flex gap-2">
                  <span className="rounded-full border border-[#5b6056] px-3 py-1.5 text-xs text-[#d5d6cc]">React</span>
                  <span className="rounded-full border border-[#5b6056] px-3 py-1.5 text-xs text-[#d5d6cc]">UI design</span>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}

export default App;