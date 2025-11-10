import { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-blue-500/10 grid place-items-center">
                <span className="text-lg font-black tracking-tight">AF</span>
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight">Absolute <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Fitness</span></span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#programs" className="text-white/80 hover:text-white transition">Programs</a>
              <a href="#coaches" className="text-white/80 hover:text-white transition">Coaches</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition">Stories</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition shadow-inner shadow-white/10">Join Now</a>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 bg-white/10 border border-white/15 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 6a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl p-4 space-y-2">
              <a onClick={() => setMenuOpen(false)} href="#programs" className="block px-3 py-2 rounded-lg hover:bg-white/10">Programs</a>
              <a onClick={() => setMenuOpen(false)} href="#coaches" className="block px-3 py-2 rounded-lg hover:bg-white/10">Coaches</a>
              <a onClick={() => setMenuOpen(false)} href="#pricing" className="block px-3 py-2 rounded-lg hover:bg-white/10">Pricing</a>
              <a onClick={() => setMenuOpen(false)} href="#testimonials" className="block px-3 py-2 rounded-lg hover:bg-white/10">Stories</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero with Spline */}
      <section id="home" className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient overlays that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
        <div className="pointer-events-none absolute -inset-x-20 -bottom-48 h-96 bg-gradient-to-t from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl"></div>

        <div className="relative z-10 h-full">
          <div className="mx-auto max-w-7xl h-full px-6 sm:px-8 grid lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                New: Glassmorphic training experience
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Train in style. Perform with precision.
              </h1>
              <p className="text-white/80 max-w-xl">
                Elevate your fitness journey with immersive 3D visuals, personalized plans, and performance tracking — all wrapped in a modern glass look.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 text-slate-900 font-bold shadow-lg shadow-cyan-500/25">
                  Start Free Trial
                </a>
                <a href="#programs" className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md">
                  Explore Programs
                </a>
              </div>

              {/* Stats glass cards */}
              <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
                {[{label:'Members',value:'25k+'},{label:'Classes',value:'120+'},{label:'Coaches',value:'40+'}].map((s, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl p-4 text-center shadow-md shadow-blue-500/10">
                    <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-300">{s.value}</div>
                    <div className="text-xs text-white/70">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative right column spacing on large screens */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative py-24">
        <div className="absolute inset-0 -z-0">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-80 w-[80%] bg-gradient-to-b from-violet-500/10 via-blue-500/5 to-transparent blur-3xl rounded-full"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Programs built for results</h2>
            <p className="text-white/70 mt-3">From strength to mobility — craft your path with science-backed training.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title:'Strength & Conditioning', desc:'Build power with progressive overload and pro periodization.', emoji:'💪'},
              {title:'HIIT & Metabolic', desc:'Torch calories with short, intense intervals tailored to you.', emoji:'⚡'},
              {title:'Mobility & Recovery', desc:'Improve range of motion and reduce injury risk sustainably.', emoji:'🧘'},
            ].map((card, i) => (
              <div key={i} className="group rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{card.emoji}</div>
                  <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 grid place-items-center text-sm">{i+1}</div>
                </div>
                <h3 className="mt-6 text-xl font-bold">{card.title}</h3>
                <p className="mt-2 text-white/70">{card.desc}</p>
                <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">Elite coaching, human touch</h2>
              <p className="text-white/70 mt-3 max-w-xl">Certified experts tailor your plan and keep you accountable. Chat with coaches, submit form videos, and get weekly progress reviews.</p>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
                {["Form checks","Nutrition","Habit tracking","Community"].map((f, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl px-4 py-3 text-sm">{f}</div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[1,2,3,4].map((n) => (
                <div key={n} className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl p-5">
                  <div className="h-28 rounded-2xl bg-white/10 border border-white/15"></div>
                  <h4 className="mt-4 font-bold">Coach {n}</h4>
                  <p className="text-white/70 text-sm">Strength • Mobility • Mindset</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Simple, transparent pricing</h2>
            <p className="text-white/70 mt-3">Start free. Upgrade when you love it.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {name:'Starter', price:'$0', period:'/mo', features:['3 programs','Basic tracking','Community access'], cta:'Get Started', highlight:false},
              {name:'Pro', price:'$29', period:'/mo', features:['All programs','Coach chat','Weekly reviews','Advanced analytics'], cta:'Go Pro', highlight:true},
              {name:'Ultimate', price:'$59', period:'/mo', features:['1:1 coaching','Custom plan','Nutrition','Priority support'], cta:'Join Ultimate', highlight:false},
            ].map((plan, i) => (
              <div key={i} className={`relative rounded-3xl p-6 backdrop-blur-xl border ${plan.highlight ? 'bg-gradient-to-br from-cyan-400/15 via-blue-400/10 to-violet-400/15 border-cyan-300/30 shadow-cyan-500/20' : 'bg-white/10 border-white/15'} shadow-xl`}>
                {plan.highlight && (
                  <span className="absolute -top-3 right-6 px-3 py-1 text-xs rounded-full bg-white/20 border border-white/30 backdrop-blur-md">Most Popular</span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300"></span>
                      <span className="text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full px-5 py-3 rounded-2xl border ${plan.highlight ? 'bg-white text-slate-900 border-white' : 'bg-white/10 text-white border-white/20 hover:bg-white/15'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Real stories, real progress</h2>
            <p className="text-white/70 mt-3">Thousands transforming their lives with a modern fitness experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              quote:'The glass UI feels premium and the plans are insanely effective. Down 18 lbs in 8 weeks!',
              name:'Ava', role:'Product Designer'
            },{
              quote:'I submit my lifts weekly and get spot-on feedback. My squat jumped 40 lbs.',
              name:'Liam', role:'Engineer'
            },{
              quote:'Beautiful app, motivating visuals, and smart programming. I finally stay consistent.',
              name:'Maya', role:'Photographer'
            }].map((t, i) => (
              <div key={i} className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl p-6 shadow-lg">
                <p className="text-white/90">“{t.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 border border-white/20"></div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-white/70">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-violet-400/20 border border-white/20 backdrop-blur-xl p-10 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to look and feel your best?</h3>
            <p className="text-white/80 mt-2">Start today with a free plan. Upgrade anytime.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#pricing" className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-bold">Create Account</a>
              <a href="/test" className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20">Check System</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 grid place-items-center">
                <span className="text-lg font-black">AF</span>
              </div>
              <div className="text-white/70">© {new Date().getFullYear()} Absolute Fitness. All rights reserved.</div>
            </div>
            <div className="flex gap-4 text-white/70 text-sm">
              <a href="#programs" className="hover:text-white">Programs</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
