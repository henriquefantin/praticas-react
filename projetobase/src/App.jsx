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
  TrendingUp,
  Trophy,
  Clock
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
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
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

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Recursos</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolor, placeat id dolores ab excepturi accusantium voluptates aspernatur ipsa voluptas tempora magni vitae suscipit et ad alias, odio sapiente quo.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                title: "Design Responsivo", 
                description: "Sua landing page se adapta a qualquer dispositivo, garantindo uma experiência perfeita para todos os usuários.", 
                icon: <Sparkles className="size-5 text-fuchsia-400" />
              },
              { 
                title: "Otimização para Conversão", 
                description: "Estratégias de design e conteúdo que aumentam a taxa de conversão, transformando visitantes em clientes.", 
                icon: <TrendingUp className="size-5 text-emerald-400" />
              },
              { 
                title: "Integração com Ferramentas", 
                description: "Compatível com diversas ferramentas de marketing e análise, facilitando a gestão do seu negócio online.", 
                icon: <Shield className="size-5 text-sky-400" />
              },
              { 
                title: "Suporte e Atualizações", 
                description: "Receba suporte dedicado e atualizações regulares para manter sua landing page sempre atualizada e funcional.", 
                icon: <Trophy className="size-5 text-amber-400" />
              },
              { 
                title: "Garantia de Satisfação", 
                description: "Nossa equipe está comprometida em entregar um produto que atenda às suas expectativas e gere resultados concretos.", 
                icon: <Star className="size-5 text-amber-400" />
              },
              { 
                title: "Tempo de Entrega Rápido", 
                description: "Nossa equipe entrega o projeto dentro do prazo estabelecido, garantindo a eficiência e produtividade do seu negócio.", 
                icon: <Clock className="size-5 text-emerald-400" />
              }
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <div className="font-semibold">{feature.title}</div>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Depoimentos</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">Veja o que nossos clientes têm a dizer sobre nossos serviços e como ajudamos a impulsionar seus negócios online.</p> 
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              name: "João Silva", 
              testimonial: "A landing page que eles criaram para mim aumentou significativamente minhas conversões. Estou muito satisfeito com o resultado!" },
            { 
              name: "Maria Oliveira", 
              testimonial: "O suporte foi excelente e a equipe entregou tudo dentro do prazo. Recomendo fortemente!" },
            { 
              name: "Carlos Santos", 
              testimonial: "A integração com minhas ferramentas de marketing foi perfeita. Agora posso gerenciar tudo de forma eficiente." }
          ].map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-2 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-slate-300">"{t.testimonial}"</p>
              <footer className="mt-3 text-sm text-slate-400">- {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
