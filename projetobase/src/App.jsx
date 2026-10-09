import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
} from 'lucide-react';

const navLinks = [
  { href: "#features", label: "Recursos", icon: Star },
  { href: "#testimonials", label: "Testemunhos", icon: Check },
  { href: "#price", label: "Preços", icon: Zap },
  { href: "#faq", label: "FAQ", icon: Sparkles },
];

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      {/* Navbar*/}
      <header className="sticky top-0 z-40 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha Marca</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {
              navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-fuchsia-300 transition">
                  <span>{l.label}</span>
                </a>
              ))
            }
          </nav>

          <button className="md:hidden p-2 rounded-lg" onClick={() => setOpen(true)}>
            <Menu className="size-5" />
          </button>

          {
            open && (
              <div className="md:hidden">
                <div className="fixed bg-black/60" onClick={() => setOpen(false)}>
                  <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-white/10 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="size-5 text-fuchsia-400" />
                        <span className="font-bold tracking-tight">Minha Marca</span>
                      </div>
                      <button className="p-2 roinded-lh" onClick={() => setOpen(false)} >
                        <X className="size-5" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-4 bg-slate-900 p-4 w-90">
                      {
                        navLinks.map((l) => (
                          <a key={l.href} href={l.href} className="text-slate-200" onClick={() => setOpen(false)}>
                            <span>{l.label}</span>
                          </a>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="text-4xl md:text-6xl font-bold text-center"
          >
            Acelere sua presença online com uma landing page moderna e responsiva.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="mt-4 text-slate-300 max-w-2xl mx-auto text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus, numquam laudantium deserunt delectus enim placeat, reiciendis alias facilis iusto doloribus nulla voluptas vero, repellendus voluptatibus doloremque odit. Praesentium, eligendi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3"
          >
            <a href="#" className="bg-fuchsia-400 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Comece Agora <ArrowRight className="inline size-4 ml-1" />
            </a>
            <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300 font-bold py-2 px-4 rounded-lg transition-colors border border-white/10 hover:bg-white/1">
              Ver Recursos
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="mt-14 grid grid-cols-3 gap-4"
          >
            {["Velocidade", "Segurança", "Conversão"].map((label, i) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3">
                  {i === 0 && <Zap className="size-5 text-emerald-400" />}
                  {i === 1 && <Shield className="size-5 text-sky-400" />}
                  {i === 2 && <Star className="size-5 text-amber-400" />}
                  <div className="font-semibold">{label}</div>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate hic consequuntur odio excepturi voluptate reprehenderit dignissimos sequi ipsam. Nihil temporibus repellat vel recusandae officia necessitatibus consectetur saepe ratione nostrum.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App
