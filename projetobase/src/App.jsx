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
  Clock,
  CodeXml
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
            <CodeXml className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Fantin Hub</span>
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
                        <span className="font-bold tracking-tight">Fantin Hub</span>
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
            Nossa landing page é projetada para capturar a atenção do seu público, aumentar suas conversões e impulsionar seu negócio online.
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
            {[
              {
                label: "Velocidade",
                icon: <Zap className="size-5 text-emerald-400" />,
                description: "Nossa landing page é otimizada para carregamento rápido, garantindo que seus visitantes tenham uma experiência fluida e sem atrasos."
              },
              {
                label: "Segurança",
                icon: <Shield className="size-5 text-sky-400" />,
                description: "Nossa landing page é construída com as melhores práticas de segurança, protegendo suas informações e as dos seus clientes."
              },
              {
                label: "Conversão",
                icon: <Star className="size-5 text-amber-400" />,
                description: "Nossa landing page é projetada para maximizar a conversão, transformando visitantes em clientes."
              }
            ].map((label, i) => (
              <div key={label.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3">
                  {label.icon}
                  <div className="font-semibold">{label.label}</div>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  {label.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Recursos</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">Descubra os recursos que tornam nossa landing page a escolha ideal para impulsionar sua presença online e aumentar suas conversões.</p>
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
              testimonial: "A landing page que eles criaram para mim aumentou significativamente minhas conversões. Estou muito satisfeito com o resultado!"
            },
            {
              name: "Maria Oliveira",
              testimonial: "O suporte foi excelente e a equipe entregou tudo dentro do prazo. Recomendo fortemente!"
            },
            {
              name: "Carlos Santos",
              testimonial: "A integração com minhas ferramentas de marketing foi perfeita. Agora posso gerenciar tudo de forma eficiente."
            }
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

      {/* Preços */}
      <section id="prices" className="mx-auto max-w-6xl px-4 py-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold">Planos</h2>
            <p className="text-slate-300 mt-6 max-w-2xl">Escolha o plano que melhor se adapta às suas necessidades e comece a impulsionar sua presença online hoje mesmo.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" />
                <span>Plano Básico</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" />
                <span>Plano Profissional</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" />
                <span>Plano Empresarial</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-xl font-semibold">Plano Profissional</h3>
            <p className="text-slate-300 mt-2">Ideal para empresas que buscam maximizar suas conversões e presença online.</p>
            <div className="mt-4 text-3xl font-bold text-fuchsia-400">R$ 49,90/mês</div>
            <a href="#" className="mt-6 inline-block bg-fuchsia-400 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Assinar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CodeXml className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Fantin Hub</span>
          </div>
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Fantin Hub. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
