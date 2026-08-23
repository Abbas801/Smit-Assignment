const stats = [
  { label: 'Total projects', value: '12', note: '+2 this month', color: 'text-[#2e765b]' },
  { label: 'Tasks completed', value: '86%', note: 'Good progress', color: 'text-[#a66543]' },
  { label: 'Hours learned', value: '24.5', note: 'This week', color: 'text-[#7d6491]' },
]

const activities = [
  { title: 'Finished React components', time: 'Today, 10:30 AM', type: 'Done', mark: '✓', tone: 'bg-[#dceee3] text-[#2f765b]' },
  { title: 'Started Tailwind practice', time: 'Yesterday, 4:15 PM', type: 'In progress', mark: '↗', tone: 'bg-[#f5e3d3] text-[#a66543]' },
  { title: 'Added project notes', time: 'Monday, 1:20 PM', type: 'Done', mark: '✓', tone: 'bg-[#dceee3] text-[#2f765b]' },
]

function DashboardLayout({ sidebar, children }) {
  return <div className="flex min-h-screen flex-col bg-[#f3f5f1] text-[#202721] md:flex-row"><aside className="border-b border-[#dce4dc] bg-white p-5 md:min-h-screen md:w-56 md:border-b-0 md:border-r md:p-6">{sidebar}</aside><main className="flex-1 p-5 sm:p-8 lg:p-10">{children}</main></div>
}

function StatCard({ label, value, note, color }) {
  return <article className="rounded-lg border border-[#dde5dd] bg-white p-5"><p className="text-sm text-[#737e76]">{label}</p><p className={`mt-3 text-3xl font-bold ${color}`}>{value}</p><p className="mt-2 text-xs text-[#89948b]">{note}</p></article>
}

function ActivityItem({ title, time, type, mark, tone }) {
  return <li className="flex items-center gap-4 border-b border-[#e6ebe5] py-4 last:border-0"><span className={`grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold ${tone}`}>{mark}</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-[#303a33]">{title}</p><p className="mt-1 text-xs text-[#89948b]">{time}</p></div><span className="hidden text-xs text-[#737e76] sm:block">{type}</span></li>
}

function App() {
  return <DashboardLayout sidebar={<><div className="flex items-center gap-3"><span className="grid size-9 place-items-center bg-[#2e765b] text-xs font-bold text-white">MA</span><span className="font-bold">My Dashboard</span></div><nav className="mt-8 flex gap-2 md:block"><a className="block rounded-md bg-[#e7f1e9] px-3 py-2 text-sm font-semibold text-[#2e765b]" href="#overview">Overview</a><a className="block rounded-md px-3 py-2 text-sm text-[#737e76] hover:bg-[#f3f5f1]" href="#activity">Activity</a><a className="block rounded-md px-3 py-2 text-sm text-[#737e76] hover:bg-[#f3f5f1]" href="#settings">Settings</a></nav></>}>
    <div className="mx-auto max-w-5xl"><header className="flex items-start justify-between border-b border-[#dce4dc] pb-6"><div><p className="text-sm text-[#737e76]">Sunday, August 23, 2026</p><h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Good morning, Abbas</h1></div><div className="hidden size-10 place-items-center rounded-full bg-[#e7f1e9] text-sm font-bold text-[#2e765b] sm:grid">AB</div></header><section id="overview" className="mt-7"><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-bold">Overview</h2><button type="button" className="rounded-md border border-[#cfd9d0] bg-white px-3 py-2 text-xs font-semibold text-[#536158]">This week</button></div><div className="grid gap-4 sm:grid-cols-3">{stats.map((stat) => <StatCard key={stat.label} {...stat} />)}</div></section><section id="activity" className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]"><article className="rounded-lg border border-[#dde5dd] bg-white p-5"><h2 className="text-lg font-bold">Recent activity</h2><ul className="mt-2">{activities.map((activity) => <ActivityItem key={activity.title} {...activity} />)}</ul></article><article className="rounded-lg bg-[#2e765b] p-6 text-white"><p className="text-sm text-[#cce4d2]">Next goal</p><h2 className="mt-3 text-2xl font-bold">Build a React project</h2><p className="mt-3 text-sm leading-6 text-[#d8ebdc]">Keep practicing components and props. You are almost there.</p><div className="mt-7 h-2 rounded-full bg-white/20"><div className="h-2 w-3/4 rounded-full bg-[#d8edc9]" /></div><p className="mt-2 text-right text-xs text-[#cce4d2]">3 of 4 steps complete</p></article></section><footer className="mt-10 border-t border-[#dce4dc] pt-5 text-xs text-[#89948b]">Dashboard layout practice using props and children.</footer></div>
  </DashboardLayout>
}

export default App
