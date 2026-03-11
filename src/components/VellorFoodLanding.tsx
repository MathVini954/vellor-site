import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  ClipboardList,
  Clock3,
  Globe,
  LayoutDashboard,
  MessageCircleMore,
  QrCode,
  ShieldCheck,
  Sparkles,
  Store,
  TabletSmartphone,
  Users,
  UtensilsCrossed,
  Waypoints,
  Instagram,
} from 'lucide-react'
import { vellorContact } from '../content/vellorContact'
import { HeroPhoneMockup } from './VellorFoodShowcase'

type CardItem = {
  title: string
  description: string
  icon: LucideIcon
}

type StepItem = {
  step: string
  title: string
  description: string
}

type PlanItem = {
  name: string
  description: string
  features: string[]
  monthly: string
  yearly: string
  setup: string
  cta: string
  featured?: boolean
}

const painPoints: CardItem[] = [
  {
    title: 'WhatsApp desorganizado',
    description:
      'Pedidos chegam misturados, sem padrao e com risco alto de erro no atendimento.',
    icon: MessageCircleMore,
  },
  {
    title: 'Atendimento mais lento',
    description:
      'A equipe perde tempo confirmando itens, valores e observacoes em varios canais.',
    icon: Clock3,
  },
  {
    title: 'Cardapio desatualizado',
    description:
      'O cliente encontra informacoes confusas e hesita na hora de pedir.',
    icon: BookOpenText,
  },
  {
    title: 'Operacao sem visibilidade',
    description:
      'Fica dificil controlar salao, retirada e online ao mesmo tempo com clareza.',
    icon: LayoutDashboard,
  },
]

const solutionItems: CardItem[] = [
  {
    title: 'Cardapio digital',
    description: 'Visual profissional para apresentar produtos, categorias e destaques.',
    icon: TabletSmartphone,
  },
  {
    title: 'Pedido online no WhatsApp',
    description: 'O cliente monta o pedido e envia de forma organizada para o restaurante.',
    icon: MessageCircleMore,
  },
  {
    title: 'Controle de mesas',
    description: 'Acompanhe pedidos do salao com mais ordem e menos retrabalho.',
    icon: Store,
  },
  {
    title: 'Gerencial de pedidos',
    description: 'Centralize fila, status e rotina operacional em um painel simples.',
    icon: ClipboardList,
  },
  {
    title: 'Historico de clientes',
    description: 'Consulte pedidos anteriores e ganhe contexto para o atendimento.',
    icon: Users,
  },
  {
    title: 'Site profissional',
    description: 'No plano premium, sua operacao ganha presenca digital mais forte.',
    icon: Globe,
  },
]

const benefits: CardItem[] = [
  {
    title: 'Atendimento mais rapido',
    description: 'Menos tempo procurando informacoes e mais agilidade na rotina.',
    icon: Waypoints,
  },
  {
    title: 'Pedidos mais organizados',
    description: 'Os dados do pedido chegam com mais clareza para a equipe.',
    icon: ClipboardList,
  },
  {
    title: 'Menos confusao no WhatsApp',
    description: 'A conversa deixa de ser o centro da operacao e vira canal de confirmacao.',
    icon: MessageCircleMore,
  },
  {
    title: 'Cardapio por QR Code',
    description: 'O cliente acessa rapido pelo celular no salao ou em campanhas.',
    icon: QrCode,
  },
  {
    title: 'Operacao centralizada',
    description: 'Salao, cardapio e pedidos online em um fluxo mais previsivel.',
    icon: ClipboardList,
  },
  {
    title: 'Presenca mais profissional',
    description: 'Sua marca transmite mais valor e mais confianca para o cliente.',
    icon: Sparkles,
  },
]

const steps: StepItem[] = [
  {
    step: '01',
    title: 'O cliente acessa o cardapio',
    description: 'Entra pelo celular e visualiza os produtos de forma simples.',
  },
  {
    step: '02',
    title: 'Faz o pedido ou consulta a mesa',
    description: 'O pedido pode ser feito online e enviado de forma organizada.',
  },
  {
    step: '03',
    title: 'O restaurante recebe e gerencia',
    description: 'Tudo fica centralizado no gerencial para facilitar o atendimento.',
  },
]

const trustItems: CardItem[] = [
  {
    title: 'Feito para restaurantes',
    description: 'A proposta resolve atendimento, cardapio e operacao no contexto real do negocio.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Implantacao com suporte inicial',
    description: 'A entrada e a configuracao acontecem com acompanhamento para acelerar a adocao.',
    icon: ShieldCheck,
  },
  {
    title: 'Interface simples no dia a dia',
    description: 'A equipe aprende rapido e usa com menos friccao na rotina.',
    icon: BadgeCheck,
  },
]

const plans: PlanItem[] = [
  {
    name: 'Plano Inicial',
    description:
      'Ideal para restaurantes que querem organizar o atendimento e ter um cardapio digital.',
    features: [
      'App gerencial do restaurante',
      'Cadastro e gestao de produtos',
      'Cardapio digital para visualizacao dos clientes',
      'QR Code do cardapio',
    ],
    monthly: 'R$ 129 / mes',
    yearly: 'R$ 1290 / ano',
    setup: 'Implantacao R$ 600',
    cta: 'Comecar agora',
  },
  {
    name: 'Plano Profissional',
    description:
      'Para restaurantes que querem receber pedidos online organizados diretamente no WhatsApp.',
    features: [
      'Tudo do plano Inicial',
      'Pedido online pelo cardapio',
      'Pedido enviado direto para o WhatsApp do restaurante',
      'Link do cardapio para divulgar no Instagram e WhatsApp',
      'Mensagem automatica com pedido organizado',
      'Historico de pedidos no gerencial',
    ],
    monthly: 'R$ 179 / mes',
    yearly: 'R$ 1790 / ano',
    setup: 'Implantacao R$ 900',
    cta: 'Quero receber pedidos online',
    featured: true,
  },
  {
    name: 'Plano Premium',
    description: 'Para restaurantes que querem presenca digital completa.',
    features: [
      'Tudo do plano Profissional',
      'Site profissional do restaurante',
      'Pagina com cardapio e botao de pedido',
      'Informacoes do restaurante',
      'Integracao com WhatsApp',
      'Layout personalizado',
    ],
    monthly: 'R$ 249 / mes',
    yearly: 'R$ 2490 / ano',
    setup: 'Implantacao R$ 1200',
    cta: 'Quero presenca digital completa',
  },
]

const navigation = [
  { label: 'Solucao', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Planos', href: '#planos' },
]

function whatsappPlanLink(planName: string) {
  const baseNumber = vellorContact.whatsapp.href.replace('https://wa.me/', '')
  const message = encodeURIComponent(
    `Olá! Tenho interesse no plano ${planName} da Vellor Food.`,
  )

  return `https://wa.me/${baseNumber}?text=${message}`
}

function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
}) {
  return (
    <div
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} section-reveal`}
    >
      <p className="landing-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-white/64 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

function FeatureCard({
  item,
  className = '',
}: {
  item: CardItem
  className?: string
}) {
  const Icon = item.icon

  return (
    <article className={`landing-card section-reveal ${className}`}>
      <span className="landing-icon">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-white">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
    </article>
  )
}

export function VellorFoodLanding() {
  return (
    <main className="landing-shell min-h-screen bg-[#060606] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="landing-grid absolute inset-0 opacity-60" />
        <div className="landing-glow landing-glow-left" />
        <div className="landing-glow landing-glow-right" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-18 pt-5 sm:px-6 lg:px-8 lg:pb-28 lg:pt-7">
          <header className="section-reveal flex items-center justify-between gap-6 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl sm:px-6">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06]">
                <img src="/vellor-icon.svg" alt="Vellor Food" className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-white/42">
                  Vellor Sistemas
                </p>
                <p className="text-base font-semibold tracking-[-0.04em] text-white">
                  Vellor Food
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.02] p-1 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-white/64 transition-colors duration-300 hover:bg-white/[0.07] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={vellorContact.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="landing-button landing-whatsapp-cta hidden bg-[#25d366] text-white lg:inline-flex lg:px-5 lg:py-3"
            >
              Falar com um de nossos especialistas
            </a>
          </header>

          <div
            id="top"
            className="grid gap-14 pb-6 pt-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:pt-20"
          >
            <div className="max-w-2xl">
              <span className="section-reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/66">
                Plataforma para restaurantes
              </span>

              <h1 className="section-reveal mt-7 text-[2.9rem] font-semibold leading-[0.96] tracking-[-0.07em] text-white sm:text-[4.35rem]">
                Organize pedidos, mesas e atendimento do seu restaurante em um so
                lugar
              </h1>

              <p className="section-reveal mt-6 max-w-xl text-base leading-8 text-white/66 sm:text-lg">
                A Vellor Food ajuda restaurantes a terem cardapio digital, pedidos
                online e gestao simples para o dia a dia.
              </p>

              <div className="section-reveal mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={vellorContact.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="landing-button landing-whatsapp-cta bg-[#25d366] text-white"
                >
                  Falar com um de nossos especialistas
                </a>
                <a href="#planos" className="landing-button landing-button-primary">
                  Quero apresentar no meu restaurante
                </a>
              </div>

              <p className="section-reveal mt-6 text-sm text-white/48 sm:text-base">
                Implantacao rapida • suporte inicial • sistema simples de usar
              </p>

              <div className="section-reveal mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['Cardapio digital', 'Experiencia moderna para clientes'],
                  ['Pedidos online', 'Fluxo mais claro para a equipe'],
                  ['Controle operacional', 'Mais organizacao no dia a dia'],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                  >
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/50">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-reveal relative mx-auto w-full max-w-3xl">
              <HeroPhoneMockup />
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Dores"
            title="Seu restaurante perde tempo e pedidos por falta de organizacao"
            description="Quando o atendimento depende de improviso, o cliente sente a demora e a equipe trabalha sob pressao desnecessaria."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {painPoints.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="solucao" className="landing-section border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Solucao"
            title="A Vellor Food simplifica a operacao do restaurante"
            description="Um sistema pensado para facilitar o atendimento, organizar pedidos e dar mais praticidade ao cliente."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutionItems.map((item) => (
              <FeatureCard key={item.title} item={item} className="min-h-[250px]" />
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="landing-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
            <SectionHeader
              eyebrow="Fluxo"
              title="Como funciona na pratica"
              description="A jornada foi desenhada para reduzir atrito na compra e dar mais previsibilidade ao restaurante."
            />

            <div className="grid gap-4">
              {steps.map((item) => (
                <article
                  key={item.step}
                  className="landing-card section-reveal flex gap-5 sm:items-start"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="landing-section border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Beneficios"
            title="Mais organizacao para o restaurante, mais praticidade para o cliente"
            description="A combinacao de experiencia digital e gestao operacional ajuda o negocio a parecer mais profissional e funcionar melhor."
            centered
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="landing-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Planos"
            title="Planos para digitalizar e organizar seu restaurante"
            description="Escolha o plano ideal para o momento do seu restaurante."
            centered
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`section-reveal rounded-[2rem] border p-7 shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? 'border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))]'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/42">
                      {plan.name}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {plan.description}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full border border-white/12 bg-white px-3 py-1 text-xs font-semibold text-black">
                      Mais escolhido
                    </span>
                  ) : null}
                </div>

                <div className="mt-8">
                  <p className="text-4xl font-semibold tracking-[-0.06em] text-white">
                    {plan.monthly}
                  </p>
                  <p className="mt-2 text-base text-white/52">{plan.yearly}</p>
                  <p className="mt-3 text-sm text-white/38">{plan.setup}</p>
                </div>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-1 text-white/70">
                        <BadgeCheck className="h-4 w-4" />
                      </span>
                      <p className="text-sm leading-6 text-white/64">{feature}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappPlanLink(plan.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="landing-button landing-whatsapp-cta mt-8 inline-flex w-full items-center justify-center gap-2 bg-[#25d366] px-5 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Confianca"
            title="Tecnologia simples, visual profissional e implantacao rapida"
            description="Uma solucao pensada para transmitir clareza, confianca e facilidade de implantacao para restaurantes."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trustItems.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-reveal overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,#ffffff_0%,#e7e7e7_46%,#cfcfcf_100%)] p-8 text-black shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-black/45">
                  CTA final
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                  Leve mais organizacao e praticidade para o seu restaurante
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-black/68 sm:text-lg">
                  Apresente a Vellor Food no seu restaurante e veja como o
                  atendimento pode ficar mais simples, moderno e organizado.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={vellorContact.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="landing-button landing-whatsapp-cta bg-[#25d366] text-white"
                  >
                    Falar com a Vellor no WhatsApp
                  </a>
                  <a
                    href="#planos"
                    className="landing-button border border-black/12 bg-white text-black"
                  >
                    Ver planos novamente
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="section-reveal flex items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <img src="/vellor-icon.svg" alt="Vellor Sistemas" className="h-7 w-7" />
            </span>
            <div>
              <p className="text-lg font-semibold tracking-[-0.04em] text-white">
                Vellor Sistemas / Vellor Food
              </p>
              <p className="mt-2 max-w-md text-sm leading-7 text-white/48">
                Solucao para restaurantes que querem atendimento mais organizado,
                cardapio digital e operacao mais profissional.
              </p>
            </div>
          </div>

          <div className="section-reveal flex flex-col gap-3 text-sm text-white/58 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={vellorContact.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
            >
              <MessageCircleMore className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={vellorContact.instagram.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <p>© 2026 Vellor Sistemas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
