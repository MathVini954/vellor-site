import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  ClipboardList,
  Globe2,
  Instagram,
  LayoutDashboard,
  MessageCircleMore,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Ticket,
  UserRound,
  Workflow,
} from 'lucide-react'
import { vellorContact } from '../content/vellorContact'

type MissionCard = {
  title: string
  description: string
  icon: LucideIcon
}

type ProductPillar = {
  eyebrow: string
  title: string
  description: string
  points: string[]
  icon: LucideIcon
}

type WorkflowStep = {
  step: string
  title: string
  description: string
}

type ContactChannel = {
  name: string
  value: string
  description: string
  href: string
  icon: LucideIcon
  actionLabel?: string
  external?: boolean
}

type ManagementStat = {
  label: string
  value: string
  note: string
}

type ManagementModule = {
  eyebrow: string
  title: string
  description: string
}

type ManagementQueueItem = {
  customer: string
  status: string
  amount: string
  time: string
}

type CatalogTab = {
  name: string
  items: string
  active?: boolean
}

type CatalogItem = {
  name: string
  category: string
  description: string
  price: string
  image: string
  tags: string[]
}

const missionCards: MissionCard[] = [
  {
    title: 'Mais pedidos no canal próprio',
    description:
      'Seu restaurante recebe pedidos em um ambiente próprio, com mais margem, mais controle e uma experiência com a sua marca.',
    icon: Rocket,
  },
  {
    title: 'Experiência que converte',
    description:
      'Cardápio visual, categorias claras e destaques bem posicionados ajudam o cliente a escolher rápido e pedir mais.',
    icon: Globe2,
  },
  {
    title: 'Operação organizada',
    description:
      'O pedido chega com itens, observações e total em um fluxo mais limpo para atendimento, cozinha e entrega.',
    icon: LayoutDashboard,
  },
]

const productPillars: ProductPillar[] = [
  {
    eyebrow: 'Cardápio',
    title: 'Um cardápio digital que faz seu restaurante parecer maior',
    description:
      'Visual forte, categorias claras e fotos boas ajudam o cliente a navegar melhor e pedir direto no seu canal.',
    points: [
      'apresente combos, destaques e categorias com clareza',
      'deixe seu cardápio com cara de app grande',
      'conduza a escolha no mobile sem fricção',
    ],
    icon: Sparkles,
  },
  {
    eyebrow: 'Checkout',
    title: 'Checkout simples para o cliente concluir sem travar',
    description:
      'Menos passos confusos, mais contexto de pedido e mais chance de o cliente finalizar a compra no seu próprio canal.',
    points: [
      'busca, carrinho e identificação no momento certo',
      'taxa, observações e total sempre visíveis',
      'fluxo pensado para delivery e retirada',
    ],
    icon: ShieldCheck,
  },
  {
    eyebrow: 'Operação',
    title: 'WhatsApp organizado para a equipe confirmar e produzir melhor',
    description:
      'O pedido sai do app com estrutura clara para atendimento, cozinha e entrega, sem depender de mensagem improvisada.',
    points: [
      'mensagem formatada para leitura rápida',
      'menos erro na passagem do pedido',
      'mais agilidade no atendimento do restaurante',
    ],
    icon: Workflow,
  },
]

const workflowSteps: WorkflowStep[] = [
  {
    step: '01',
    title: 'Seu restaurante publica o cardápio',
    description:
      'Categorias, fotos, destaques e pratos do dia ficam prontos para vender no seu link próprio.',
  },
  {
    step: '02',
    title: 'O cliente escolhe sem se perder',
    description:
      'A interface guia a compra com busca, seções claras e cards visuais que ajudam a decidir.',
  },
  {
    step: '03',
    title: 'O pedido chega com contexto',
    description:
      'Itens, observações, entrega e total aparecem de forma limpa para reduzir dúvidas no atendimento.',
  },
  {
    step: '04',
    title: 'Sua equipe opera mais rápido',
    description:
      'O WhatsApp recebe o pedido estruturado para confirmar, preparar e seguir o fluxo do restaurante.',
  },
]

const managementStats: ManagementStat[] = [
  { label: 'Pedidos de hoje', value: '18', note: 'fila ativa e organizada' },
  { label: 'Pedidos novos', value: '05', note: 'aguardando aceite' },
  { label: 'Em preparo', value: '07', note: 'cozinha em andamento' },
  { label: 'Faturamento', value: 'R$ 2.430', note: 'receita acumulada' },
]

const managementModules: ManagementModule[] = [
  {
    eyebrow: 'Operação',
    title: 'Pedidos',
    description: 'Fila de novos pedidos, aceite, preparo e conclusão em uma rotina mais clara para a equipe.',
  },
  {
    eyebrow: 'Conteúdo',
    title: 'Cardápio',
    description: 'Categorias, itens e disponibilidade atualizados no painel e refletidos no app do restaurante.',
  },
  {
    eyebrow: 'Comercial',
    title: 'Ofertas',
    description: 'Campanhas e destaques para estimular mais pedidos no próprio canal do restaurante.',
  },
  {
    eyebrow: 'Relacionamento',
    title: 'Clientes',
    description: 'Histórico de pedidos e relação com quem já compra direto do seu restaurante.',
  },
]

const managementQueue: ManagementQueueItem[] = [
  { customer: 'Juliana A.', status: 'Em preparo', amount: 'R$ 82,00', time: '08:55' },
  { customer: 'Marcos F.', status: 'Aguardando', amount: 'R$ 47,90', time: '09:12' },
]

const catalogTabs: CatalogTab[] = [
  { name: 'Todos', items: '22 itens', active: true },
  { name: 'Pizzas', items: '4 itens' },
  { name: 'Pratos principais', items: '8 itens' },
  { name: 'Lanches', items: '3 itens' },
  { name: 'Saladas', items: '2 itens' },
  { name: 'Sobremesas', items: '5 itens' },
]

const catalogItems: CatalogItem[] = [
  {
    name: 'Pizza Burrata',
    category: 'Pizzas',
    description: 'Molho artesanal, burrata cremosa, tomate confit e manjericão fresco.',
    price: 'R$ 72,00',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    tags: ['Cebola roxa', 'Azeitona', 'Tomate', '+6 opções'],
  },
  {
    name: 'Pizza Margherita',
    category: 'Pizzas',
    description: 'Molho de tomate, mussarela especial e manjericão fresco.',
    price: 'R$ 54,90',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80',
    tags: ['Cebola roxa', 'Azeitona', 'Tomate', '+6 opções'],
  },
  {
    name: 'Pizza Pepperoni Supreme',
    category: 'Pizzas',
    description: 'Molho da casa, pepperoni fatiado, queijo especial e finalizacao com oregano.',
    price: 'R$ 68,90',
    image:
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80',
    tags: ['Cebola roxa', 'Azeitona', 'Tomate', '+6 opções'],
  },
]

// Atualize os links e textos abaixo com os canais oficiais da Vellor.
const contactChannels: ContactChannel[] = [
  {
    name: 'WhatsApp comercial',
    value: '',
    description:
      'Fale com a Vellor e veja como colocar seu restaurante para vender no próprio canal.',
    href: vellorContact.whatsapp.href,
    icon: MessageCircleMore,
    actionLabel: 'Abrir WhatsApp',
    external: true,
  },
  {
    name: 'Instagram',
    value: vellorContact.instagram.value,
    description:
      'Use o perfil oficial para mostrar novidades e resultados de restaurantes usando a Vellor.',
    href: vellorContact.instagram.href,
    icon: Instagram,
    external: true,
  },
]

const revealDelayClassNames = [
  '',
  'section-reveal-delay-1',
  'section-reveal-delay-2',
  'section-reveal-delay-3',
] as const

function getRevealDelayClass(index: number) {
  return revealDelayClassNames[index % revealDelayClassNames.length]
}

function SectionBackdrop({ className }: { className: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`} />
}

function SectionHeading({
  eyebrow,
  title,
  description,
  theme = 'dark',
}: {
  eyebrow: string
  title: string
  description: string
  theme?: 'dark' | 'light'
}) {
  const titleClassName = theme === 'light' ? 'text-[#081223]' : 'text-white'
  const descriptionClassName =
    theme === 'light' ? 'text-[#4f637f]' : 'text-white/64'

  return (
    <div className="max-w-2xl section-reveal">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff9a6c]">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-[2rem] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-[15px] leading-7 sm:text-base sm:leading-8 ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  )
}

function ManagementAccessCard() {
  return (
    <div className="grid h-full gap-4 overflow-auto hide-scrollbar lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.72fr)] lg:gap-6">
      <article className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,27,40,0.94),rgba(4,16,44,0.96))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:rounded-[2rem] sm:p-6">
        <div className="h-full rounded-[1.35rem] bg-[radial-gradient(circle_at_top,rgba(255,154,108,0.12),transparent_28%),linear-gradient(180deg,rgba(14,18,32,0.62),rgba(3,10,28,0.28))] p-5 sm:rounded-[1.5rem] sm:p-6">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              <img src="/vellor-icon.svg" alt="" className="h-10 w-10 rounded-[1rem]" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-white/72">
                Painel do restaurante
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">
                Vellor Gestão
              </h3>
            </div>
          </div>

          <div className="mt-6 inline-flex rounded-full border border-white/14 bg-white/6 px-4 py-2 text-sm text-white/80">
            Acesso do restaurante e da equipe
          </div>

          <h4 className="mt-8 max-w-[26rem] text-[2rem] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:mt-10 sm:text-4xl sm:leading-[1.18]">
            Acompanhe pedidos, cardápio e atendimento em um só lugar
          </h4>
          <p className="mt-5 max-w-[30rem] text-[15px] leading-7 text-white/74 sm:mt-6 sm:text-lg sm:leading-9">
            Monitore o fluxo do dia, acompanhe a cozinha e mantenha sua equipe
            alinhada com uma interface pensada para a rotina real do restaurante.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-white/62">Tempo médio de preparo</p>
              <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">
                18 min
              </p>
            </div>
            <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-white/62">Pedidos no horário</p>
              <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">
                96%
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="rounded-[1.7rem] bg-[#f4f5f6] p-5 text-[#03132d] shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:rounded-[2rem] sm:p-6">
        <span className="inline-flex rounded-full bg-[#fff1eb] px-4 py-2 text-sm font-medium text-[#ef5f22]">
          Acesso do restaurante
        </span>
        <h3 className="mt-5 text-[1.9rem] font-semibold tracking-[-0.05em] sm:mt-6 sm:text-[2.2rem]">
          Entrar no painel
        </h3>
        <p className="mt-4 text-base leading-8 text-[#4c6488]">
          Use o painel para acompanhar pedidos, editar cardápio e tocar a
          operação do restaurante em tempo real.
        </p>

        <div className="mt-8 grid gap-5">
          <div>
            <label className="text-sm font-medium text-[#03132d]">E-mail</label>
            <div className="mt-3 rounded-[1rem] border border-[#d4dce8] bg-[#eceff4] px-4 py-3.5 text-[#7f8aa2]">
              gestao@seurestaurante.com
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-[#03132d]">Senha</label>
            <div className="mt-3 rounded-[1rem] border border-[#d4dce8] bg-[#eceff4] px-4 py-3.5 text-[#7f8aa2]">
              Digite sua senha
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-[1rem] bg-[#03132d] px-4 py-4 text-sm font-semibold text-white"
        >
          Entrar
        </button>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="rounded-[1rem] border border-[#d4dce8] px-4 py-4 text-sm text-[#2e466a]"
          >
            Esqueci minha senha
          </button>
          <button
            type="button"
            className="rounded-[1rem] border border-[#d4dce8] px-4 py-4 text-sm text-[#6b7ea0]"
          >
            Solicitar acesso com a Vellor
          </button>
        </div>
      </article>
    </div>
  )
}

function ManagementDashboardCard() {
  return (
    <div className="grid h-full overflow-auto hide-scrollbar rounded-[1.7rem] bg-[#f3f5f7] text-[#03132d] shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:grid-cols-[220px_minmax(0,1fr)] md:rounded-[2rem] xl:grid-cols-[232px_minmax(0,1fr)]">
      <aside className="border-b border-[#dbe3ee] bg-[linear-gradient(180deg,#171d44_0%,#151a3a_100%)] p-5 text-white md:border-b-0 md:border-r">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#6c6cff_0%,#9d4bff_100%)] p-1">
            <img src="/vellor-icon.svg" alt="" className="h-full w-full rounded-[1rem]" />
          </span>
          <div>
            <p className="text-xl font-semibold">Vellor</p>
            <p className="text-sm text-white/72">Gestão do restaurante</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/42">
            Rotina
          </p>
          <div className="mt-4 grid gap-3">
            {[
              { label: 'Dashboard', icon: LayoutDashboard, active: true },
              { label: 'Pedidos', icon: ClipboardList },
              { label: 'Cardápio', icon: BookOpenText },
              { label: 'Ofertas', icon: Ticket },
              { label: 'Clientes', icon: UserRound },
              { label: 'Configurações', icon: Settings2 },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-[1.25rem] px-4 py-4 ${
                    item.active
                      ? 'border border-white/10 bg-[linear-gradient(180deg,#34417f_0%,#283567_100%)]'
                      : 'bg-white/[0.02]'
                  }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.08]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-8 rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
          <p className="font-medium">Marina Costa</p>
          <p className="mt-1 text-sm text-white/62">Gestora do restaurante</p>
        </div>
      </aside>

      <div className="grid lg:grid-cols-[minmax(0,1.28fr)_280px] xl:grid-cols-[minmax(0,1.35fr)_296px]">
        <main className="p-4 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[#dbe3ee] bg-white p-4 sm:p-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dbe3ee] bg-[#f5f7fa]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div>
                <p className="text-sm text-[#5d7396]">Bistro da Esquina /</p>
                <h3 className="text-[1.55rem] font-semibold tracking-[-0.05em] sm:text-[1.8rem] xl:text-[2rem]">
                  Central de gestão
                </h3>
                <p className="mt-2 text-sm text-[#5d7396]">
                  Resumo do restaurante com acesso rápido para pedidos,
                  cardápio, ofertas e relacionamento.
                </p>
              </div>
            </div>
            <div className="rounded-[1.2rem] border border-[#dbe3ee] bg-[#f7f9fb] px-4 py-3 text-sm text-[#4c6488]">
              Marina Costa
            </div>
          </div>

          <div className="mt-5 rounded-[1.7rem] border border-[#dbe3ee] bg-white p-4 sm:p-5">
            <div className="grid gap-4 grid-cols-2 2xl:grid-cols-4">
              {managementStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.4rem] border border-[#dbe3ee] bg-[#f9fbfd] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#7890b7]">
                    {stat.label}
                  </p>
                    <p className="mt-5 text-[2rem] font-semibold tracking-[-0.05em] sm:text-[2.4rem] xl:text-4xl">
                      {stat.value}
                    </p>
                  <p className="mt-3 text-sm text-[#50786a]">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[1.7rem] border border-[#dbe3ee] bg-white p-4 sm:p-5">
            <h4 className="text-[1.7rem] font-semibold tracking-[-0.05em] sm:text-[2rem]">
              Módulos principais
            </h4>
            <p className="mt-2 text-sm text-[#5d7396]">
              Acesso direto às áreas que movimentam o restaurante no dia a dia.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {managementModules.map((module) => (
                <article
                  key={module.title}
                  className="rounded-[1.5rem] border border-[#dbe3ee] bg-[#fbfcfd] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#7890b7]">
                    {module.eyebrow}
                  </p>
                  <h5 className="mt-5 text-[1.55rem] font-semibold tracking-[-0.05em] sm:text-[1.9rem]">
                    {module.title}
                  </h5>
                  <p className="mt-4 text-base leading-8 text-[#5d7396]">
                    {module.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </main>

        <aside className="border-t border-[#dbe3ee] bg-[#fbfcfd] p-4 sm:p-5 lg:border-l lg:border-t-0">
          <div className="rounded-[1.5rem] border border-[#dbe3ee] bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-xl font-semibold">Fila recente</h4>
              <button type="button" className="text-sm font-medium text-[#2563eb]">
                Abrir pedidos
              </button>
            </div>

            <div className="mt-5 grid gap-3">
              {managementQueue.map((item) => (
                <article
                  key={item.customer + item.time}
                  className="rounded-[1.25rem] border border-[#dbe3ee] bg-[#fbfcfd] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold">{item.customer}</p>
                    <span className="rounded-full bg-[#eef5ff] px-3 py-1 text-xs text-[#1d4ed8]">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[#5d7396]">{item.time}</p>
                  <p className="mt-4 text-xl font-semibold">{item.amount}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-[#dbe3ee] bg-white p-5">
            <h4 className="text-xl font-semibold">Sincronia entre apps</h4>
            <div className="mt-5 grid gap-4 text-base leading-8 text-[#5d7396]">
              <p>Cardápio e ofertas publicados aqui aparecem no link do seu restaurante.</p>
              <p>Pedidos feitos pelo cliente entram no painel automaticamente.</p>
              <p>Configurações de entrega e WhatsApp seguem o mesmo fluxo do pedido.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function ManagementCatalogCard() {
  return (
    <div className="grid h-full overflow-auto hide-scrollbar rounded-[1.7rem] bg-[#f3f5f7] text-[#03132d] shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:grid-cols-[220px_minmax(0,1fr)] md:rounded-[2rem] xl:grid-cols-[232px_minmax(0,1fr)]">
      <aside className="border-b border-[#dbe3ee] bg-[linear-gradient(180deg,#171d44_0%,#151a3a_100%)] p-5 text-white md:border-b-0 md:border-r">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#6c6cff_0%,#9d4bff_100%)] p-1">
            <img src="/vellor-icon.svg" alt="" className="h-full w-full rounded-[1rem]" />
          </span>
          <div>
            <p className="text-xl font-semibold">Vellor</p>
            <p className="text-sm text-white/72">Cardápio e publicação</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/42">
            Operação
          </p>
          <div className="mt-4 grid gap-3">
            {[
              { label: 'Dashboard', icon: LayoutDashboard },
              { label: 'Pedidos', icon: ClipboardList },
              { label: 'Cardápio', icon: BookOpenText, active: true },
              { label: 'Ofertas', icon: Ticket },
              { label: 'Clientes', icon: UserRound },
              { label: 'Configurações', icon: Settings2 },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-[1.25rem] px-4 py-4 ${
                    item.active
                      ? 'border border-white/10 bg-[linear-gradient(180deg,#34417f_0%,#283567_100%)]'
                      : 'bg-white/[0.02]'
                  }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.08]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </aside>

      <div className="grid lg:grid-cols-[minmax(0,1.24fr)_280px] xl:grid-cols-[minmax(0,1.35fr)_296px]">
        <main className="p-4 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[#dbe3ee] bg-white p-4 sm:p-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dbe3ee] bg-[#f5f7fa]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div>
                <p className="text-sm text-[#5d7396]">Bistro da Esquina /</p>
                <h3 className="text-[1.55rem] font-semibold tracking-[-0.05em] sm:text-[1.8rem] xl:text-[2rem]">
                  Cardápio do restaurante
                </h3>
                <p className="mt-2 text-sm text-[#5d7396]">
                  Atualize catálogo, categorias e personalizações que aparecem no app do seu restaurante.
                </p>
              </div>
            </div>
            <div className="rounded-[1.2rem] border border-[#dbe3ee] bg-[#f7f9fb] px-4 py-3 text-sm text-[#4c6488]">
              Marina Costa
            </div>
          </div>

          <div className="mt-5 rounded-[1.6rem] border border-[#dbe3ee] bg-white p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="hide-scrollbar flex gap-3 overflow-x-auto">
                {catalogTabs.map((tab) => (
                  <div
                    key={tab.name}
                    className={`min-w-fit rounded-[1.2rem] px-4 py-3 ${
                      tab.active ? 'bg-[#131a43] text-white' : 'bg-[#f5f7fa] text-[#03132d]'
                    }`}
                  >
                    <p className="font-medium">{tab.name}</p>
                    <p
                      className={`mt-1 text-sm ${
                        tab.active ? 'text-white/72' : 'text-[#6b7ea0]'
                      }`}
                    >
                      {tab.items}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="w-full rounded-[1rem] bg-[#131a43] px-5 py-3.5 text-sm font-semibold text-white lg:w-auto"
              >
                + Novo item
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h4 className="text-[1.7rem] font-semibold tracking-[-0.05em] sm:text-[2rem]">
                  Todos os itens
                </h4>
                <p className="mt-2 text-sm text-[#5d7396]">
                  Visão geral completa do cardápio do restaurante.
                </p>
              </div>
              <div className="rounded-full border border-[#dbe3ee] px-4 py-2 text-sm text-[#5d7396]">
                22 itens
              </div>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
              {catalogItems.map((item) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-[1.8rem] border border-[#dbe3ee] bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover sm:h-56"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h5 className="text-[1.5rem] font-semibold tracking-[-0.05em] sm:text-[1.8rem]">
                          {item.name}
                        </h5>
                        <p className="mt-2 text-sm text-[#5d7396]">{item.category}</p>
                      </div>
                      <span className="rounded-full bg-[#e8f8ef] px-3 py-1 text-sm text-[#16803f]">
                        Ativo
                      </span>
                    </div>

                    <p className="mt-5 text-base leading-8 text-[#5d7396]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f5eee8] px-3 py-1 text-sm text-[#ef5f22]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <p className="text-[1.8rem] font-semibold tracking-[-0.05em] sm:text-[2.15rem]">
                        {item.price}
                      </p>
                      <span className="rounded-full bg-[#f5f7fa] px-3 py-1 text-sm text-[#4c6488]">
                        {item.category}
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      <button
                        type="button"
                        className="rounded-[1rem] border border-[#dbe3ee] px-4 py-3 text-sm font-medium"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="rounded-[1rem] border border-[#f7d67a] px-4 py-3 text-sm font-medium text-[#9d6200]"
                      >
                        Desativar
                      </button>
                      <button
                        type="button"
                        className="rounded-[1rem] border border-[#f4b9bf] px-4 py-3 text-sm font-medium text-[#d61f45]"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>

        <aside className="border-t border-[#dbe3ee] bg-[#fbfcfd] p-4 sm:p-5 lg:border-l lg:border-t-0">
          {[
            {
              title: 'Restaurante',
              body: 'O painel central acompanha o app público com os dados reais do seu restaurante.',
            },
            {
              title: 'Catálogo vivo',
              body: 'Produtos, categorias e personalizações ficam organizados para publicar sem retrabalho.',
            },
            {
              title: 'Publicação',
              body: 'Toda alteração salva no gerencial reflete no cardápio público do restaurante.',
            },
          ].map((card) => (
            <article
              key={card.title}
              className="mb-5 rounded-[1.5rem] border border-[#dbe3ee] bg-white p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#7890b7]">
                {card.title}
              </p>
              <p className="mt-5 text-lg font-semibold">{card.title}</p>
              <p className="mt-4 text-base leading-8 text-[#5d7396]">{card.body}</p>
            </article>
          ))}
        </aside>
      </div>
    </div>
  )
}

function ManagementPanelShowcase() {
  return (
    <section
      id="painel"
      className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-5 lg:px-6 lg:py-24 xl:px-8"
    >
      <SectionBackdrop className="bg-[radial-gradient(circle_at_18%_16%,rgba(94,162,255,0.08),transparent_26%),radial-gradient(circle_at_82%_22%,rgba(255,154,108,0.06),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,249,252,0.96))]" />

      <div className="relative z-10 mx-auto grid max-w-[1680px] gap-8 lg:grid-cols-[minmax(320px,0.52fr)_minmax(0,1.48fr)] lg:items-start xl:gap-12">
        <div>
          <SectionHeading
            eyebrow="Painel"
            title="Não é só um app bonito: seu restaurante também ganha controle da operação."
            description="A vitrine pública atrai o pedido. O painel ajuda a acompanhar fila, cardápio, ofertas e rotina do restaurante sem bagunça."
            theme="light"
          />

          <div className="interactive-panel mt-8 rounded-[2rem] border border-[#d8e0ec] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] section-reveal section-reveal-delay-1 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#7f8fa8]">
              Cenas do gerencial
            </p>
            <div className="mt-5 grid gap-3">
              {[
                'Acesso rápido para restaurante, equipe e gestão',
                'Dashboard com pedidos, fila e faturamento do dia',
                'Cardápio e ofertas atualizados no mesmo lugar',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-[#d8e0ec] bg-[#f7f9fc] px-4 py-3 text-sm text-[#4f637f]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-reveal section-reveal-delay-1">
          <div className="panel-stage relative min-h-[40rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,10,19,0.98),rgba(5,8,17,0.98))] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:min-h-[48rem] sm:rounded-[2.2rem] sm:p-4 md:min-h-[54rem] lg:min-h-[60rem] lg:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,154,108,0.12),transparent_24%),radial-gradient(circle_at_90%_18%,rgba(94,162,255,0.14),transparent_22%)]" />

            <div className="panel-cycle-card">
              <ManagementAccessCard />
            </div>
            <div className="panel-cycle-card panel-cycle-delay-1">
              <ManagementDashboardCard />
            </div>
            <div className="panel-cycle-card panel-cycle-delay-2">
              <ManagementCatalogCard />
            </div>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0b1324]/72 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/58 backdrop-blur-xl sm:bottom-5 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
              <span className="panel-indicator-dot panel-indicator-dot-0" />
              <span className="panel-indicator-dot panel-indicator-dot-1" />
              <span className="panel-indicator-dot panel-indicator-dot-2" />
              painel em rotação
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function VellorLandingSections() {
  return (
    <>
      <section
        id="missao"
        className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionBackdrop className="bg-[radial-gradient(circle_at_16%_14%,rgba(255,154,108,0.06),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,249,252,0.98))]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Missão"
              title="A Vellor existe para ajudar restaurantes a vender mais no próprio canal."
              description="Esta landing precisa falar com dono e gestora de restaurante: quem quer mais pedidos, mais marca e menos dependência de marketplace."
              theme="light"
            />

          </div>

          <div className="grid gap-4">
            {missionCards.map((card, index) => {
              const Icon = card.icon

              return (
                <article
                  key={card.title}
                  className={`group interactive-panel section-reveal ${getRevealDelayClass(index)} rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,30,0.9),rgba(7,12,24,0.88))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff9a6c]/14 text-[#ff9a6c] transition-colors duration-500 group-hover:bg-[#ff9a6c]/24 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white transition-colors duration-500 group-hover:text-[#ffd9ca]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/58">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="produto"
        className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionBackdrop className="bg-[radial-gradient(circle_at_80%_18%,rgba(94,162,255,0.11),transparent_24%),linear-gradient(180deg,rgba(7,11,22,0.52),rgba(6,9,18,0.9))]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Produto"
            title="Três pontos que fazem seu restaurante vender melhor: vitrine, checkout e operação."
            description="A Vellor Food foi feita para restaurante que quer atrair o cliente, fechar o pedido com menos fricção e organizar a equipe no mesmo fluxo."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {productPillars.map((pillar, index) => {
              const Icon = pillar.icon

              return (
                <article
                  key={pillar.title}
                  className={`group interactive-panel tonal-flow section-reveal ${getRevealDelayClass(index)} rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,31,0.92),rgba(7,12,24,0.88))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)]`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-[#ff9a6c] transition-colors duration-500 group-hover:bg-[#ff9a6c]/24 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                      {pillar.eyebrow}
                    </p>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white transition-colors duration-500 group-hover:text-[#ffe2d5]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {pillar.description}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {pillar.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-3 transition-colors duration-500 group-hover:border-white/14 group-hover:bg-white/[0.05]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9a6c]" />
                        <p className="text-sm leading-6 text-white/62">{point}</p>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <ManagementPanelShowcase />

      <section
        id="fluxo"
        className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionBackdrop className="bg-[radial-gradient(circle_at_22%_22%,rgba(255,154,108,0.09),transparent_20%),radial-gradient(circle_at_88%_78%,rgba(94,162,255,0.08),transparent_24%),linear-gradient(180deg,rgba(6,9,18,0.28),rgba(7,10,19,0.84))]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <SectionHeading
              eyebrow="Fluxo"
              title="O pedido precisa ser bom para o cliente e fácil para a equipe do restaurante."
              description="A Vellor Food conecta descoberta, compra e atendimento em um fluxo claro para delivery e retirada."
            />

            <div className="interactive-panel tonal-flow mt-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,154,108,0.12),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl section-reveal section-reveal-delay-1">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/38">
                leitura comercial
              </p>
              <p className="mt-4 text-lg leading-8 text-white/74">
                Seu restaurante vende com mais autonomia quando o cliente entra, escolhe, fecha o pedido e cai na operação sem ruído.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {workflowSteps.map((item, index) => (
              <article
                key={item.step}
                className={`group interactive-panel section-reveal ${getRevealDelayClass(index)} rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,28,0.92),rgba(7,11,21,0.88))] p-5`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff9a6c]/16 text-sm font-semibold text-[#ff9a6c] transition-colors duration-500 group-hover:bg-[#ff9a6c]/24 group-hover:text-white">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors duration-500 group-hover:text-[#ffe2d5]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="relative isolate overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24"
      >
        <SectionBackdrop className="bg-[radial-gradient(circle_at_78%_18%,rgba(94,162,255,0.08),transparent_24%),radial-gradient(circle_at_16%_76%,rgba(255,154,108,0.08),transparent_24%),linear-gradient(180deg,rgba(7,10,18,0.44),rgba(4,7,15,0.94))]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="tonal-flow overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,12,22,0.98),rgba(10,16,31,0.92)_46%,rgba(7,10,18,0.98))] p-6 shadow-[0_36px_120px_rgba(0,0,0,0.46)] sm:p-8 lg:p-10 section-reveal">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start xl:gap-12">
              <div>
                <SectionHeading
                  eyebrow="Contato"
                  title="Coloque seu restaurante para vender com mais marca, mais controle e mais organização."
                  description="Os canais abaixo ficam prontos para você trocar pelos contatos oficiais da Vellor e transformar esta seção em CTA direto para restaurantes."
                />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={vellorContact.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffa77a_0%,#f27131_100%)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(242,113,49,0.26)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
                  >
                    WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href={vellorContact.instagram.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white/86 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.08] sm:w-auto"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {contactChannels.map((channel, index) => {
                  const Icon = channel.icon

                  return (
                    <a
                      key={channel.name}
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noreferrer' : undefined}
                      className={`group interactive-panel section-reveal ${getRevealDelayClass(index)} min-h-[16rem] rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.06] sm:min-h-[18rem] sm:p-6 lg:min-h-[21rem] lg:p-7`}
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-[#ff9a6c]/16 text-[#ff9a6c] transition-colors duration-500 group-hover:bg-[#ff9a6c]/24 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>

                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-white/40">
                        {channel.name}
                      </p>
                      {channel.actionLabel ? (
                        <span className="mt-4 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#3ce480_0%,#149654_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(20,150,84,0.28)] transition-transform duration-300 group-hover:-translate-y-0.5">
                          {channel.actionLabel}
                        </span>
                      ) : (
                        <p className="mt-4 text-[1.65rem] font-semibold leading-[1.2] text-white transition-colors duration-500 group-hover:text-[#ffe2d5] lg:text-[1.8rem]">
                          {channel.value}
                        </p>
                      )}
                      <p className="mt-4 max-w-[17rem] text-base leading-8 text-white/56">
                        {channel.description}
                      </p>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="mt-10 border-t border-white/8 pt-6">
              <div className="flex flex-col gap-4 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
                <p>Vellor Food | mais pedidos, mais marca e mais controle para restaurantes.</p>
                <p>Cardápio bonito, pedido claro e WhatsApp pronto para atender.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

