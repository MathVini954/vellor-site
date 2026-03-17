import { useState } from 'react'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  ChevronDown,
  ClipboardList,
  Clock3,
  Globe,
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

type FaqItem = {
  question: string
  answer: string
}

const mockupImages = {
  burger:
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
  pizza:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  dessert:
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
  offer:
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
}

const menuPreviewItems = [
  {
    title: 'Smash Bacon Duplo',
    price: 'R$ 42,90',
    image: mockupImages.burger,
  },
  {
    title: 'Pizza Burrata',
    price: 'R$ 72,00',
    image: mockupImages.pizza,
  },
  {
    title: 'Brownie com Sorvete',
    price: 'R$ 24,90',
    image: mockupImages.dessert,
  },
]

const painPoints: CardItem[] = [
  {
    title: 'Pedidos perdidos no WhatsApp',
    description:
      'Mensagens misturadas, sem contexto e sem histórico geram erros no atendimento.',
    icon: MessageCircleMore,
  },
  {
    title: 'Cardápio difícil de atualizar',
    description:
      'Preço, disponibilidade e combos ficam desatualizados, e a equipe perde tempo para corrigir tudo.',
    icon: BookOpenText,
  },
  {
    title: 'Falta de controle das mesas',
    description:
      'Sem visibilidade do salão, o atendimento perde ritmo e a ocupação fica menos eficiente.',
    icon: Store,
  },
  {
    title: 'Horário de pico confuso',
    description:
      'Pedidos duplicados, observações perdidas e repasse manual criam ruído na operação.',
    icon: Clock3,
  },
  {
    title: 'Clientes sem histórico',
    description:
      'Sem registro do que cada cliente pede, fica difícil fidelizar e criar campanhas inteligentes.',
    icon: Users,
  },
]

const solutionItems: CardItem[] = [
  {
    title: 'Cardápio digital',
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
    description: 'Acompanhe pedidos do salão com mais ordem e menos retrabalho.',
    icon: Store,
  },
  {
    title: 'Gerencial de pedidos',
    description: 'Centralize fila, status e rotina operacional em um painel simples.',
    icon: ClipboardList,
  },
  {
    title: 'Histórico de clientes',
    description: 'Consulte pedidos anteriores e ganhe contexto para o atendimento.',
    icon: Users,
  },
  {
    title: 'Site profissional',
    description: 'No plano premium, sua operação ganha presença digital mais forte.',
    icon: Globe,
  },
]

const benefits: CardItem[] = [
  {
    title: 'Atendimento mais rápido',
    description: 'Menos tempo procurando informações e mais agilidade na rotina.',
    icon: Waypoints,
  },
  {
    title: 'Pedidos mais organizados',
    description: 'Os dados do pedido chegam com mais clareza para a equipe.',
    icon: ClipboardList,
  },
  {
    title: 'Menos confusão no WhatsApp',
    description: 'A conversa deixa de ser o centro da operação e vira canal de confirmação.',
    icon: MessageCircleMore,
  },
  {
    title: 'Cardapio por QR Code',
    description: 'O cliente acessa rápido pelo celular no salão ou em campanhas.',
    icon: QrCode,
  },
  {
    title: 'Operação centralizada',
    description: 'Salão, cardápio e pedidos online em um fluxo mais previsível.',
    icon: ClipboardList,
  },
  {
    title: 'Presença mais profissional',
    description: 'Sua marca transmite mais valor e mais confiança para o cliente.',
    icon: Sparkles,
  },
]

const steps: StepItem[] = [
  {
    step: '01',
    title: 'Cadastre seu restaurante',
    description:
      'Configure nome, logo, horário de funcionamento e informações de contato em poucos minutos.',
  },
  {
    step: '02',
    title: 'Monte cardápio, ofertas e operação',
    description:
      'Adicione fotos, preços, categorias, combos, mesas e deixe a equipe pronta para operar.',
  },
  {
    step: '03',
    title: 'Receba pedidos e gerencie com controle',
    description:
      'Compartilhe o cardápio digital, receba pedidos no WhatsApp e acompanhe tudo em tempo real.',
  },
]

const trustItems: CardItem[] = [
  {
    title: 'Feito para restaurantes',
    description: 'A proposta resolve atendimento, cardápio e operação no contexto real do negócio.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Implantação com suporte inicial',
    description: 'A entrada e a configuração acontecem com acompanhamento para acelerar a adoção.',
    icon: ShieldCheck,
  },
  {
    title: 'Interface simples no dia a dia',
    description: 'A equipe aprende rápido e usa com menos fricção na rotina.',
    icon: BadgeCheck,
  },
]

const plans: PlanItem[] = [
  {
    name: 'Plano Inicial',
    description:
      'Ideal para restaurantes que querem cardápio digital e pedidos organizados.',
    features: [
      'Cardápio digital com até 30 itens',
      'Link e QR Code do cardápio',
      'Pedidos via WhatsApp',
      'Controle de até 10 mesas',
      '1 usuário operador',
      'Suporte por e-mail',
    ],
    monthly: 'R$ 97 / mês',
    yearly: 'Sem fidelidade',
    setup: 'Sem taxa de implantação',
    cta: 'Começar agora',
  },
  {
    name: 'Plano Profissional',
    description:
      'Para operações que querem mais controle, histórico e um fluxo mais profissional.',
    features: [
      'Cardápio digital ilimitado',
      'Link, QR Code e página personalizada',
      'Pedidos via WhatsApp + histórico',
      'Controle de até 30 mesas',
      'Painel gerencial completo',
      'Base de clientes + fidelização',
      'Ofertas e combos',
      '3 usuários operadores',
      'Suporte via WhatsApp',
    ],
    monthly: 'R$ 197 / mês',
    yearly: 'Sem fidelidade',
    setup: 'Mais escolhido',
    cta: 'Quero este plano',
    featured: true,
  },
  {
    name: 'Plano Premium',
    description: 'Para restaurantes com operação mais robusta e necessidade de escala.',
    features: [
      'Tudo do Plano Profissional',
      'Mesas ilimitadas',
      'Múltiplas unidades',
      'Relatórios avançados e exportação',
      'Integrações com sistemas externos',
      'Usuários ilimitados',
      'Implantação assistida',
      'Gerente de conta dedicado',
      'Suporte prioritário',
    ],
    monthly: 'R$ 347 / mês',
    yearly: 'Sob medida para escalar',
    setup: 'Implantação assistida',
    cta: 'Falar com consultor',
  },
]

const navigation = [
  { label: 'Funcionalidades', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
]

const faqs: FaqItem[] = [
  {
    question: 'A Vellor Food serve para qualquer tipo de restaurante?',
    answer:
      'Sim. A plataforma atende restaurantes, hamburguerias, pizzarias, cafeterias, food trucks e operações de delivery local.',
  },
  {
    question: 'O pedido é feito dentro do sistema?',
    answer:
      'O cliente monta o pedido no cardápio digital e finaliza enviando a mensagem estruturada para o WhatsApp do restaurante.',
  },
  {
    question: 'O cliente precisa instalar algum aplicativo?',
    answer:
      'Não. O cardápio digital funciona direto no navegador do celular ou computador, sem app para instalar.',
  },
  {
    question: 'Vocês ajudam na implantação?',
    answer:
      'Sim. A equipe acompanha a configuração inicial do restaurante, do cardápio e dos primeiros passos no painel.',
  },
  {
    question: 'Posso cancelar o plano quando quiser?',
    answer:
      'Sim. Não há contrato de fidelidade nem multa de cancelamento.',
  },
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

function OrderMessagePreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`whatsapp-preview ${compact ? 'min-h-[15rem] rounded-[1.1rem] p-3 text-[10px]' : ''}`}
    >
      <div className={`whatsapp-day ${compact ? 'mb-2.5 text-[9px]' : ''}`}>Hoje</div>
      <div className={`whatsapp-bubble ${compact ? 'rounded-[1rem] p-3' : ''}`}>
        <p>Novo pedido - Casa do Pátio</p>
        <p>Cliente: Clara Monteiro</p>
        <p>Telefone: (81) 99876-4312</p>
        <p>Tipo: Entrega</p>
        <p>Endereço: Rua das Acácias, 148</p>
        <p>Bairro: Boa Vista</p>
        <p>Itens:</p>
        <p>- 1x Smash Bacon Duplo - R$ 42,90</p>
        <p>Personalização: Sem cebola</p>
        <p>Subtotal: R$ 42,90</p>
        <p>Taxa de entrega: R$ 0,00</p>
        <p>Total: R$ 42,90</p>
        <p>Pagamento: Pix</p>
        <p>Observação: Sem observações</p>
        <span className="whatsapp-time">10:08</span>
      </div>
    </div>
  )
}

function ScreenTile({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <article className="section-reveal rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
      <div className="overflow-hidden rounded-[1rem] border border-white/8 bg-[#090d15]">
        {children}
      </div>
      <h3 className="mt-4 text-base font-semibold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-white/52">{description}</p>
    </article>
  )
}

export function VellorFoodLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="landing-shell min-h-screen bg-transparent text-white">
      <section className="landing-band landing-band-hero relative isolate overflow-hidden border-b border-white/10">
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
              Solicitar demonstração
            </a>
          </header>

          <div
            id="top"
            className="grid gap-14 pb-6 pt-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:pt-20"
          >
            <div className="hero-intro max-w-2xl">
              <span className="hero-intro-step inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/66">
                Sistema para restaurantes
              </span>

              <h1 className="hero-intro-step mt-7 text-[2.9rem] font-semibold leading-[0.96] tracking-[-0.07em] text-white sm:text-[4.35rem]">
                Organize os pedidos do seu restaurante em um só lugar
              </h1>

              <p className="hero-intro-step mt-6 max-w-xl text-base leading-8 text-white/66 sm:text-lg">
                Cardápio digital, pedidos via WhatsApp, controle de mesas, ofertas
                e gestão de clientes em um painel simples e profissional.
              </p>

              <div className="hero-intro-step mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={vellorContact.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="landing-button landing-whatsapp-cta bg-[#25d366] text-white"
                >
                  Quero conhecer a Vellor Food
                </a>
                <a
                  href="#como-funciona"
                  className="landing-button landing-button-primary"
                >
                  Ver demonstração
                </a>
              </div>

              <p className="hero-intro-step mt-6 text-sm text-white/48 sm:text-base">
                Implantação rápida • suporte inicial • sistema simples de usar
              </p>

              <div className="hero-intro-step mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['Cardápio digital', 'Fotos, categorias e QR Code para vender melhor'],
                  ['Pedidos via WhatsApp', 'Mensagem estruturada para a equipe receber'],
                  ['Controle operacional', 'Mesas, histórico e painel em um fluxo só'],
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

      <section className="border-y border-white/8 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/42">
            Feito para negócios como
          </span>
          {[
            'Hamburguerias',
            'Pizzarias',
            'Restaurantes',
            'Cafeterias',
            'Delivery local',
            'Food trucks',
          ].map((item) => (
            <strong
              key={item}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-white/68"
            >
              {item}
            </strong>
          ))}
        </div>
      </section>

      <section className="landing-band landing-band-warm landing-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Dores"
            title="Seu restaurante perde tempo e pedidos por falta de organização"
            description="Quando o atendimento depende de improviso, o cliente sente a demora e a equipe trabalha sob pressão desnecessária."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {painPoints.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="solucao"
        className="landing-band landing-band-cool landing-section border-y border-white/8"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Solucao"
            title="A Vellor Food simplifica a operação do restaurante"
            description="Um sistema pensado para facilitar o atendimento, organizar pedidos e dar mais praticidade ao cliente."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutionItems.map((item) => (
              <FeatureCard key={item.title} item={item} className="min-h-[250px]" />
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="landing-band landing-band-deep landing-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
            <SectionHeader
              eyebrow="Fluxo"
              title="Como funciona na prática"
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

      <section
        id="produto"
        className="relative isolate overflow-hidden border-y border-white/8 bg-[linear-gradient(180deg,#06080f_0%,#0a0f18_100%)] py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(232,98,26,0.12),transparent_20%),radial-gradient(circle_at_82%_24%,rgba(232,98,26,0.1),transparent_18%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Telas do produto"
              title="Um sistema feito para o dia a dia do seu restaurante"
              description="Reaproveitamos as imagens já usadas nos mockups atuais da Vellor e criamos a tela de pedido recebido no estilo WhatsApp com dados fictícios."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ScreenTile
                title="Cardápio digital"
                description="Imagem já presente nos mockups atuais para destacar o produto."
              >
                <img
                  src={mockupImages.pizza}
                  alt="Cardápio digital da Vellor Food"
                  className="aspect-[9/14] w-full object-cover"
                />
              </ScreenTile>

              <ScreenTile
                title="Pedido recebido"
                description="Mensagem de pedido no WhatsApp com nome e telefone fictícios."
              >
                <OrderMessagePreview compact />
              </ScreenTile>

              <ScreenTile
                title="Painel gerencial"
                description="Resumo rápido dos pedidos e faturamento do dia."
              >
                <div className="aspect-[9/14] bg-[linear-gradient(180deg,#0f1118_0%,#171d29_100%)] p-4 text-white">
                  <div className="flex items-center justify-between rounded-2xl bg-white/6 px-3 py-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
                      Dashboard
                    </span>
                    <span className="text-[10px] text-[#ff9a6c]">Hoje</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/6 p-3">
                      <p className="text-[10px] text-white/48">Faturamento</p>
                      <strong className="mt-3 block text-xl">R$2,4k</strong>
                    </div>
                    <div className="rounded-2xl bg-white/6 p-3">
                      <p className="text-[10px] text-white/48">Pedidos</p>
                      <strong className="mt-3 block text-xl">47</strong>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-white/6 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/52">
                      Recentes
                    </p>
                    {[
                      ['#0047 Rafael', 'Entregue'],
                      ['#0046 Larissa', 'Em preparo'],
                      ['#0045 Vinicius', 'Aguardando'],
                    ].map(([label, status]) => (
                      <div
                        key={label}
                        className="mt-3 flex items-center justify-between gap-3 border-b border-white/6 pb-2 last:border-none last:pb-0"
                      >
                        <span className="text-[11px] text-white/74">{label}</span>
                        <small className="rounded-full bg-white/10 px-2 py-1 text-[9px] text-[#ff9a6c]">
                          {status}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              </ScreenTile>

              <ScreenTile
                title="Controle de mesas"
                description="Visão simples das mesas livres, ocupadas e reservadas."
              >
                <div className="aspect-[9/14] bg-[linear-gradient(180deg,#0f1118_0%,#171d29_100%)] p-4 text-white">
                  <div className="flex items-center justify-between rounded-2xl bg-white/6 px-3 py-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
                      Mesas
                    </span>
                    <span className="text-[10px] text-[#ff9a6c]">58% ocup.</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      ['01', 'Livre', 'bg-white/8 text-white/58'],
                      ['02', 'Ocup.', 'bg-[#e8621a]/20 text-[#ff9a6c]'],
                      ['03', 'Livre', 'bg-white/8 text-white/58'],
                      ['04', 'Ocup.', 'bg-[#e8621a]/20 text-[#ff9a6c]'],
                      ['05', 'Reserv.', 'bg-[#ffd84a]/16 text-[#ffd84a]'],
                      ['06', 'Livre', 'bg-white/8 text-white/58'],
                      ['07', 'Ocup.', 'bg-[#e8621a]/20 text-[#ff9a6c]'],
                      ['08', 'Livre', 'bg-white/8 text-white/58'],
                      ['09', 'Ocup.', 'bg-[#e8621a]/20 text-[#ff9a6c]'],
                    ].map(([number, label, className]) => (
                      <div
                        key={number}
                        className={`rounded-2xl px-2 py-4 text-center ${className}`}
                      >
                        <strong className="block text-lg">{number}</strong>
                        <span className="mt-1 block text-[10px]">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScreenTile>
            </div>
          </div>

          <div className="section-reveal">
            <div className="mx-auto max-w-[22rem] overflow-hidden rounded-[2.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(18,20,28,0.98),rgba(7,8,12,0.98))] p-[10px] shadow-[0_40px_120px_rgba(0,0,0,0.56)]">
              <div className="overflow-hidden rounded-[2.2rem] bg-[#f6efe8]">
                <div className="relative h-[40rem] overflow-hidden">
                  <img
                    src={mockupImages.offer}
                    alt="Oferta especial da Vellor Food"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,17,24,0.12),rgba(14,17,24,0.72)_62%,rgba(7,10,19,0.92)_100%)]" />
                  <div className="absolute inset-x-0 top-0 flex justify-center pt-4">
                    <div className="h-6 w-24 rounded-full bg-black/80" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="inline-flex rounded-full border border-white/18 bg-black/24 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
                      Menu em destaque
                    </div>
                    <h3 className="mt-5 text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em]">
                      Visual forte para vender mais no seu próprio canal
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/76">
                      Cardápio, ofertas e pedidos chegando com clareza para a equipe e
                      com mais valor percebido pelo cliente.
                    </p>
                    <div className="mt-6 grid gap-3">
                      {menuPreviewItems.map((item) => (
                        <div
                          key={item.title}
                          className="flex items-center gap-3 rounded-[1.25rem] border border-white/12 bg-white/10 p-3 backdrop-blur-md"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-14 w-14 rounded-[1rem] object-cover"
                          />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold">{item.title}</p>
                            <p className="mt-1 text-xs text-white/64">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="beneficios"
        className="landing-band landing-band-soft landing-section border-y border-white/8"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Beneficios"
            title="Mais organização para o restaurante, mais praticidade para o cliente"
            description="A combinação de experiência digital e gestão operacional ajuda o negócio a parecer mais profissional e funcionar melhor."
            centered
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="landing-band landing-band-cool landing-section">
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

      <section className="landing-band landing-band-warm landing-section border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Confiança"
            title="Tecnologia simples, visual profissional e implantação rápida"
            description="Uma solução pensada para transmitir clareza, confiança e facilidade de implantação para restaurantes."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trustItems.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="landing-band landing-band-soft landing-section border-t border-white/8"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes"
            description="Respostas para as dúvidas mais comuns sobre a Vellor Food."
            centered
          />

          <div className="mt-12 space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index

              return (
                <article
                  key={item.question}
                  className="section-reveal overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-5 backdrop-blur-xl"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold tracking-[-0.03em] text-white">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-7 text-white/62">{item.answer}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="landing-band landing-band-cta landing-section pt-10 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-reveal overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,#ffffff_0%,#e7e7e7_46%,#cfcfcf_100%)] p-8 text-black shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-black/45">
                  CTA final
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                  Leve mais organização e praticidade para o seu restaurante
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
                Solução para restaurantes que querem atendimento mais organizado,
                cardápio digital e operação mais profissional.
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

