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
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia500/30">
      {/* Navbar*/}
      <header className="sticky top-0 z-40 border-b border-white/5">
        <div>
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha Marca</span>
          </a>

          <nav>
            {
              navLinks.map((l) => (
                <a key={l.href} href={l.href}>
                  <span>{l.label}</span>
                </a>
              ))
            }
          </nav>
        </div>
      </header>

    </div>
  )
}

export default App
