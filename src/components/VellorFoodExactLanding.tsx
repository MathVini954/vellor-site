import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  ChartNoAxesCombined,
  ChevronDown,
  Clock3,
  LayoutGrid,
  Menu,
  MessageCircleMore,
  MonitorSmartphone,
  Table2,
  Users,
  X,
} from 'lucide-react'
import { vellorContact } from '../content/vellorContact'

type NavItem = {
  label: string
  href: string
}

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
  price: string
  period: string
  description: string
  features: Array<{
    title: string
    note?: string
  }>
  cta: string
  featured?: boolean
}

type FaqItem = {
  question: string
  answer: string
}

type FunctionalityItem = {
  title: string
  meta: string
  description: string
  screen: ReactNode
}

const navItems: NavItem[] = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const marketSegments = [
  'Hamburguerias',
  'Pizzarias',
  'Restaurantes',
  'Cafeterias',
  'Delivery Local',
  'Food Trucks',
]

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

const painPoints: CardItem[] = [
  {
    title: 'Pedidos perdidos no WhatsApp',
    description:
      'Mensagens misturadas, sem controle e sem histórico organizado causam erros e insatisfação.',
    icon: MessageCircleMore,
  },
  {
    title: 'Cardápio difícil de atualizar',
    description:
      'Atualizar preços, remover itens esgotados ou criar combos demora tempo e confunde a equipe.',
    icon: BookOpenText,
  },
  {
    title: 'Falta de controle das mesas',
    description:
      'Sem saber quais mesas estao livres ou ocupadas, o atendimento fica lento e desorganizado.',
    icon: Table2,
  },
  {
    title: 'Atendimento confuso no pico',
    description:
      'No rush do almoco ou jantar, pedidos duplicados e falhas de comunicacao causam prejuizo.',
    icon: Clock3,
  },
  {
    title: 'Clientes sem histórico',
    description:
      'Não saber quem são seus clientes frequentes impede ações de fidelização mais eficazes.',
    icon: Users,
  },
]

const features: CardItem[] = [
  {
    title: 'Cardápio Digital',
    description:
      'Monte um cardápio digital para restaurante com fotos, categorias, preços e menu QR code restaurante.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Pedidos via WhatsApp',
    description:
      'Receba pedidos via WhatsApp restaurante de forma organizada, com itens, observações e total.',
    icon: MessageCircleMore,
  },
  {
    title: 'Painel Gerencial',
    description:
      'Acompanhe pedido online restaurante, faturamento, ticket médio e indicadores em um painel simples.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Controle de Mesas',
    description:
      'Tenha controle de mesas restaurante com status em tempo real para melhorar o atendimento no salão.',
    icon: LayoutGrid,
  },
  {
    title: 'Base de Clientes',
    description:
      'Registre clientes, histórico de pedidos e preferências para vender com mais contexto e fidelização.',
    icon: Users,
  },
]

const steps: StepItem[] = [
  {
    step: '01',
    title: 'Cadastre seu restaurante',
    description:
      'Crie sua conta, configure o perfil do estabelecimento e prepare a operação em poucos minutos.',
  },
  {
    step: '02',
    title: 'Monte cardápio, ofertas e operação',
    description:
      'Adicione produtos com fotos e preços, crie combos, configure mesas e deixe a equipe pronta.',
  },
  {
    step: '03',
    title: 'Receba pedidos e gerencie com controle',
    description:
      'Compartilhe seu cardápio digital, receba pedidos no WhatsApp e acompanhe tudo pelo painel.',
  },
]

const benefitItems = [
  {
    title: 'Atendimento mais rapido',
    description:
      'Com cardápio digital e pedidos automáticos, a equipe foca em servir em vez de anotar pedidos.',
  },
  {
    title: 'Menos confusao nos pedidos',
    description:
      'Cada pedido chega completo, organizado e com o nome do cliente. Sem ruído na comunicação.',
  },
  {
    title: 'Cardápio sempre atualizado',
    description:
      'Alterou preço ou acabou um produto? Atualize em segundos e o cardápio reflete na hora.',
  },
  {
    title: 'Melhor experiência para o cliente',
    description:
      'Cardápio visual com fotos, preços claros e pedido fácil pelo WhatsApp elevam a percepção.',
  },
  {
    title: 'Mais profissionalismo para o restaurante',
    description:
      'Painel gerencial, histórico e dados em tempo real transformam a gestão do negócio.',
  },
]

const implementationFeatures = [
  'Configuração do restaurante no sistema',
  'Personalização da página do restaurante',
  'Cadastro inicial do cardápio',
  'Geração de QR Code',
  'Treinamento do painel gerencial',
  'Suporte na ativação do sistema',
]

const plans: PlanItem[] = [
  {
    name: 'Plano Inicial',
    price: 'R$97',
    period: 'por mês',
    description:
      'Ideal para restaurantes que querem começar a digitalizar o atendimento.',
    features: [
      { title: 'Cardápio digital completo' },
      { title: 'Link e QR Code do cardápio' },
      { title: 'Pedidos via WhatsApp organizados' },
      { title: 'Controle de mesas' },
      { title: 'Painel gerencial' },
      { title: 'Base de clientes' },
      { title: 'Atualização rápida do cardápio' },
      { title: '1 usuário operador' },
      { title: 'Suporte por e-mail' },
    ],
    cta: 'Começar agora',
  },
  {
    name: 'Plano Profissional',
    price: 'R$197',
    period: 'por mês',
    description:
      'Ideal para restaurantes que querem mais organização e controle da operação.',
    features: [
      { title: 'Tudo do plano Inicial' },
      { title: 'Página personalizada do restaurante' },
      { title: 'Histórico de pedidos' },
      { title: 'Base de clientes com fidelização' },
      { title: 'Criação de ofertas e combos' },
      { title: 'Painel gerencial completo' },
      { title: 'Até 3 usuários operadores' },
      { title: 'Suporte via WhatsApp' },
    ],
    cta: 'Quero este plano',
    featured: true,
  },
  {
    name: 'Plano Premium',
    price: 'R$347',
    period: 'por mês',
    description:
      'Para restaurantes que querem presença digital completa e gestão avançada.',
    features: [
      { title: 'Tudo do plano Profissional' },
      { title: 'Usuários ilimitados' },
      { title: 'Relatórios avançados' },
      { title: 'Exportação de dados' },
      { title: 'Integrações com sistemas externos' },
      {
        title: 'Site institucional do restaurante',
        note: 'Página profissional com informações do restaurante, cardápio integrado e link para pedidos online.',
      },
      { title: 'Página personalizada integrada ao cardápio' },
      { title: 'Implantação assistida' },
      { title: 'Gerente de conta dedicado' },
      { title: 'Suporte prioritário' },
    ],
    cta: 'Falar com consultor',
  },
]

const trustItems = [
  {
    value: '1 dia',
    title: 'Implantação rápida',
    description: 'Do cadastro ao cardápio publicado em menos de um dia.',
  },
  {
    value: '100%',
    title: 'Sistema fácil de usar',
    description: 'Interface pensada para donos e equipes de restaurante.',
  },
  {
    value: 'Proximo',
    title: 'Atendimento próximo',
    description: 'Suporte para configuração, dúvidas e ajustes da operação.',
  },
]

const faqItems: FaqItem[] = [
  {
    question: 'Preciso instalar algo no restaurante?',
    answer:
      'Não. A Vellor Food funciona no navegador do computador, tablet ou celular. O restaurante acessa tudo online.',
  },
  {
    question: 'A Vellor funciona para qualquer restaurante?',
    answer:
      'Sim. O sistema para restaurante atende hamburguerias, pizzarias, cafeterias, bares, delivery local e operações com salão.',
  },
  {
    question: 'O pedido e feito pelo WhatsApp?',
    answer:
      'Sim. O cliente monta o pedido online no cardápio digital e o envio acontece pelo WhatsApp para o restaurante.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim. Não há contrato de fidelidade. O restaurante pode cancelar quando fizer sentido para a operação.',
  },
  {
    question: 'Vocês ajudam na implantação?',
    answer:
      'Sim. A implantação inclui configuração do restaurante, cadastro inicial do cardápio, QR Code e treinamento do sistema.',
  },
]

function whatsappLink(message: string) {
  const baseNumber = vellorContact.whatsapp.href.replace('https://wa.me/', '')
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`
}

function SectionTag({ children }: { children: ReactNode }) {
  return <span className="fd-tag">{children}</span>
}

function SectionHeader({
  tag,
  title,
  description,
  centered = false,
  dark = false,
}: {
  tag: string
  title: string
  description: string
  centered?: boolean
  dark?: boolean
}) {
  return (
    <div
      className={`fd-section-header section-reveal ${centered ? 'is-centered' : ''} ${
        dark ? 'is-dark' : ''
      }`}
    >
      <SectionTag>{tag}</SectionTag>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function InfoCard({
  item,
  index,
}: {
  item: CardItem
  index: number
}) {
  const Icon = item.icon

  return (
    <article className={`fd-card section-reveal fd-delay-${(index % 5) + 1}`}>
      <span className="fd-card-icon">
        <Icon className="h-5 w-5" />
      </span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  )
}

function PhoneShell({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`fd-phone ${className}`}>
      <div className="fd-phone-notch" />
      <div className="fd-phone-screen">{children}</div>
      <div className="fd-phone-home" />
    </div>
  )
}

function TablesPhone() {
  const items = [
    ['01', 'Livre', 'is-free'],
    ['02', 'Ocup.', 'is-busy'],
    ['03', 'Livre', 'is-free'],
    ['04', 'Ocup.', 'is-busy'],
    ['05', 'Reserv.', 'is-booked'],
    ['06', 'Livre', 'is-free'],
    ['07', 'Ocup.', 'is-busy'],
    ['08', 'Livre', 'is-free'],
    ['09', 'Ocup.', 'is-busy'],
  ]

  return (
    <div className="fd-app fd-app-dark">
      <div className="fd-app-topbar">
        <span>Controle de Mesas</span>
        <i />
      </div>
      <div className="fd-stats-row">
        <div>
          <strong>12</strong>
          <span>Mesas</span>
        </div>
        <div>
          <strong>7</strong>
          <span>Livres</span>
        </div>
        <div>
          <strong>5</strong>
          <span>Ocupadas</span>
        </div>
      </div>
      <div className="fd-table-grid">
        {items.map(([num, label, tone]) => (
          <div key={num} className={`fd-table-card ${tone}`}>
            <strong>{num}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="fd-bar">
        <div style={{ width: '58%' }} />
      </div>
      <small className="fd-muted-note">58% de ocupação</small>
    </div>
  )
}

function MenuPhone() {
  return (
    <div className="fd-app fd-app-menu">
      <div className="fd-app-topbar fd-app-topbar-orange">
        <span>Cardápio Digital</span>
        <i />
      </div>
      <div className="fd-chip-row">
        <span className="is-active">Hamburgueres</span>
        <span>Bebidas</span>
        <span>Sobremesas</span>
      </div>
      <div className="fd-menu-item">
        <img src={mockupImages.burger} alt="X-Burguer Classico" />
        <div>
          <strong>X-Burguer Classico</strong>
          <span>Pao brioche, carne 180g e queijo</span>
          <small>R$ 28,90</small>
        </div>
      </div>
      <div className="fd-menu-item">
        <img src={mockupImages.offer} alt="Smash Burger Duplo" />
        <div>
          <strong>Smash Burger Duplo</strong>
          <span>Dois discos, molho especial</span>
          <small>R$ 38,90</small>
        </div>
      </div>
      <div className="fd-offer-box">
        <img src={mockupImages.pizza} alt="Oferta do Dia" />
        <div>
          <strong>Oferta do Dia</strong>
          <span>Combo com batata e refri</span>
          <small>R$ 45,90</small>
        </div>
      </div>
      <div className="fd-whatsapp-chip">
        <strong>Pedir via WhatsApp</strong>
        <span>Envio automático do pedido</span>
      </div>
    </div>
  )
}

function DashboardPhone() {
  return (
    <div className="fd-app fd-app-dark">
      <div className="fd-app-topbar">
        <span>Painel Gerencial</span>
        <i />
      </div>
      <div className="fd-kpi-grid">
        <div>
          <strong>R$2.4k</strong>
          <span>Faturamento hoje</span>
        </div>
        <div>
          <strong>47</strong>
          <span>Pedidos hoje</span>
        </div>
      </div>
      <div className="fd-panel-card">
        <strong>Pedidos recentes</strong>
        <div className="fd-order-line">
          <span>#0047 Rafael</span>
          <small className="is-done">Entregue</small>
        </div>
        <div className="fd-order-line">
          <span>#0046 Larissa</span>
          <small className="is-prep">Em preparo</small>
        </div>
        <div className="fd-order-line">
          <span>#0045 Vinicius</span>
          <small className="is-wait">Aguardando</small>
        </div>
      </div>
      <div className="fd-panel-card">
        <strong>Ticket médio</strong>
        <div className="fd-bar">
          <div style={{ width: '72%' }} />
        </div>
        <div className="fd-panel-foot">
          <span>Meta: R$60</span>
          <small>R$51,06</small>
        </div>
      </div>
    </div>
  )
}

function ClientBaseScreen() {
  return (
    <div className="fd-app fd-app-dark">
      <div className="fd-app-topbar">
        <span>Base de Clientes</span>
        <i />
      </div>
      <div className="fd-client-list">
        {[
          ['Mariana S.', '3 pedidos no mes', 'Prefere retirada'],
          ['Rafael M.', 'Ticket medio R$ 61', 'Cliente frequente'],
          ['Casa 24', 'Pede combo familia', 'Contato salvo'],
        ].map(([name, info, tag]) => (
          <div key={name} className="fd-client-card">
            <div>
              <strong>{name}</strong>
              <span>{info}</span>
            </div>
            <small>{tag}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

function WhatsAppMessage({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`fd-wa ${compact ? 'is-compact' : ''}`}>
      <div className="fd-wa-day">Hoje</div>
      <div className="fd-wa-bubble">
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
        <p>Observação: -</p>
        <span className="fd-wa-time">10:08</span>
      </div>
    </div>
  )
}

function ScreenThumb({
  title,
  meta,
  children,
}: {
  title: string
  meta: string
  children: ReactNode
}) {
  return (
    <article className="fd-screen-thumb section-reveal">
      <div className="fd-screen-inner">{children}</div>
      <div className="fd-screen-copy">
        <strong>{title}</strong>
        <span>{meta}</span>
      </div>
    </article>
  )
}

function ShowcasePhone() {
  return (
    <PhoneShell className="fd-phone-large">
      <div className="fd-showcase-phone-app">
        <div className="fd-showcase-hero">
          <img src={mockupImages.offer} alt="Vellor Food em destaque" />
          <div className="fd-showcase-overlay">
            <span>Vellor Food</span>
            <strong>Restaurante Exemplo</strong>
            <small>Cardápio, ofertas e pedido pelo WhatsApp</small>
          </div>
        </div>
        <div className="fd-showcase-cards">
          {[
            ['Cardápio', mockupImages.burger, 'X-Burguer Classico'],
            ['Ofertas', mockupImages.pizza, 'Pizza Margherita G'],
            ['Mais pedidos', mockupImages.dessert, 'Combo Familia'],
          ].map(([label, image, title]) => (
            <div key={title} className="fd-showcase-mini">
              <img src={image} alt={title} />
              <div>
                <strong>{label}</strong>
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  )
}

export function VellorFoodExactLanding() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [leadForm, setLeadForm] = useState({
    name: '',
    restaurant: '',
    city: '',
    phone: '',
  })

  const functionalityItems: FunctionalityItem[] = [
    {
      title: 'Cardápio digital para restaurante',
      meta: 'cardapio-digital-restaurante',
      description:
        'Monte um cardápio digital para restaurante com fotos, categorias e atualização rápida.',
      screen: <img src={mockupImages.pizza} alt="Cardápio digital para restaurante" className="fd-full-image" />,
    },
    {
      title: 'Pedidos via WhatsApp restaurante',
      meta: 'pedido-online-whatsapp-restaurante',
      description:
        'Organize pedido online restaurante com mensagem pronta no WhatsApp e menos erro no atendimento.',
      screen: <WhatsAppMessage compact />,
    },
    {
      title: 'Controle de mesas restaurante',
      meta: 'controle-de-mesas-restaurante',
      description:
        'Veja mesas livres, ocupadas e reservadas para melhorar o fluxo do salão.',
      screen: <TablesPhone />,
    },
    {
      title: 'Painel gerencial do sistema para restaurante',
      meta: 'sistema-para-restaurante',
      description:
        'Acompanhe pedidos, faturamento, ticket médio e operação em um único painel.',
      screen: <DashboardPhone />,
    },
    {
      title: 'Base de clientes e fidelizacao',
      meta: 'menu-qr-code-restaurante',
      description:
        'Registre clientes, histórico e comportamento para vender mais no próprio canal.',
      screen: <ClientBaseScreen />,
    },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleLeadFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const message = [
      'Olá, quero conhecer a Vellor Food para meu restaurante.',
      `Nome: ${leadForm.name || '-'}`,
      `Restaurante: ${leadForm.restaurant || '-'}`,
      `Cidade: ${leadForm.city || '-'}`,
      `Telefone: ${leadForm.phone || '-'}`,
    ].join('\n')

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="fd-landing">
      <header className={`fd-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="fd-container fd-header-inner">
          <a href="#top" className="fd-logo" onClick={() => setMobileOpen(false)}>
            <span className="fd-logo-icon">
              <img src="/vellor-icon.svg" alt="Vellor Food" />
            </span>
            <span className="fd-logo-text">
              <strong>Vellor Food</strong>
              <small>Vellor Sistemas</small>
            </span>
          </a>

          <nav className="fd-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="fd-header-actions">
            <a
              href={whatsappLink('Olá! Gostaria de conhecer a Vellor Food.')}
              target="_blank"
              rel="noreferrer"
              className="fd-btn fd-btn-primary"
            >
              Solicitar demonstração
            </a>
            <button
              type="button"
              className="fd-burger"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className={`fd-mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
          <div className="fd-container">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="fd-hero" id="top">
        <div className="fd-container fd-hero-grid">
          <div className="fd-hero-copy">
            <div className="section-reveal">
              <SectionTag>Sistema para Restaurantes</SectionTag>
            </div>
            <h1 className="section-reveal fd-delay-1">
              Sistema para Restaurantes com <span>Cardápio Digital e Pedidos via WhatsApp</span>
            </h1>
            <p className="section-reveal fd-delay-2">
              Organize pedidos, cardápio e atendimento do seu restaurante em um
              único painel simples e profissional.
            </p>
            <div className="fd-hero-actions section-reveal fd-delay-3">
              <a
                href={whatsappLink('Olá, quero conhecer a Vellor Food para meu restaurante.')}
                target="_blank"
                rel="noreferrer"
                className="fd-btn fd-btn-primary"
              >
                Solicitar demonstração
              </a>
              <a href="#como-funciona" className="fd-btn fd-btn-secondary">
                Ver como funciona
              </a>
            </div>
            <div className="fd-hero-trust section-reveal fd-delay-4">
              <div className="fd-trust-dots">
                <span />
                <span />
                <span />
              </div>
              Ideal para restaurantes, hamburguerias, pizzarias, cafeterias e delivery local.
            </div>
          </div>

          <div className="fd-hero-phones section-reveal fd-delay-2">
            <div className="fd-phone-scene">
              <PhoneShell className="fd-phone-left">
                <TablesPhone />
              </PhoneShell>
              <PhoneShell className="fd-phone-main">
                <MenuPhone />
              </PhoneShell>
              <PhoneShell className="fd-phone-right">
                <DashboardPhone />
              </PhoneShell>
              <div className="fd-floating-badge fd-badge-1">
                <i className="is-green" />
                Pedido recebido via WhatsApp
              </div>
              <div className="fd-floating-badge fd-badge-2">
                <i className="is-orange" />
                +47 pedidos hoje
              </div>
              <div className="fd-floating-badge fd-badge-3">
                <i className="is-blue" />
                Mesa 04 ocupada
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fd-logos-bar">
        <div className="fd-container fd-logos-inner">
          <span className="fd-logos-label">Feito para negócios como:</span>
          {marketSegments.map((item) => (
            <strong key={item}>{item}</strong>
          ))}
        </div>
      </section>

      <section className="fd-section fd-section-alt" id="dores">
        <div className="fd-container">
          <SectionHeader
            tag="Problemas reais"
            title="Seu restaurante sofre com isso?"
              description="Essas dores aparecem todos os dias em operações de restaurante e afetam atendimento, faturamento e experiência do cliente."
            centered
          />
          <div className="fd-card-grid fd-card-grid-five">
            {painPoints.map((item, index) => (
              <InfoCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="fd-section" id="funcionalidades">
        <div className="fd-container">
          <SectionHeader
            tag="Solucao completa"
            title="A Vellor Food centraliza a operação do restaurante"
            description="Todas as ferramentas que seu estabelecimento precisa integradas em um único painel intuitivo."
            centered
          />
          <div className="fd-card-grid">
            {features.map((item, index) => (
              <InfoCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="fd-section fd-section-alt" id="como-funciona">
        <div className="fd-container">
          <SectionHeader
            tag="Como funciona"
            title="Do cadastro à operação em 3 passos"
            description="Simples de implantar, fácil de usar e pensado para organizar a rotina do restaurante."
            centered
          />
          <div className="fd-steps-grid">
            {steps.map((item, index) => (
              <article key={item.step} className={`fd-step-card section-reveal fd-delay-${index + 1}`}>
                <div className="fd-step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fd-showcase" id="produto">
        <div className="fd-container fd-showcase-grid">
          <div>
            <SectionHeader
              tag="Funcionalidades do sistema"
            title="Cardápio digital, pedido online restaurante e painel gerencial em um único sistema"
              description="A Vellor Food combina cardápio digital para restaurante, pedidos via WhatsApp restaurante, controle de mesas restaurante e base de clientes em uma operação centralizada."
              dark
            />
            <div className="fd-keyword-row section-reveal">
              {[
                'cardapio digital para restaurante',
                'sistema para restaurante',
                'pedidos via WhatsApp restaurante',
                'controle de mesas restaurante',
                'pedido online restaurante',
                'menu QR code restaurante',
              ].map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
            <div className="fd-screens-grid">
              {functionalityItems.map((item) => (
                <ScreenThumb key={item.title} title={item.title} meta={item.meta}>
                  <div className="fd-screen-stack">
                    <div className="fd-screen-stack-visual">{item.screen}</div>
                    <div className="fd-screen-stack-copy">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </ScreenThumb>
              ))}
            </div>
          </div>
          <div className="fd-showcase-phone section-reveal fd-delay-2">
            <ShowcasePhone />
          </div>
        </div>
      </section>

      <section className="fd-section" id="beneficios">
        <div className="fd-container">
          <SectionHeader
            tag="Vantagens"
            title="Mais organização no atendimento. Mais controle na operação."
            description="A Vellor Food transforma a forma como seu restaurante opera do primeiro pedido ao fechamento do dia."
            centered
          />
          <div className="fd-benefits-grid">
            {benefitItems.map((item, index) => (
              <article key={item.title} className={`fd-benefit-card section-reveal fd-delay-${(index % 5) + 1}`}>
                <span className="fd-benefit-check">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fd-section fd-section-alt" id="planos">
        <div className="fd-container">
          <SectionHeader
            tag="Planos e preços"
            title="Escolha o plano ideal para o seu restaurante"
              description="Sem contrato de fidelidade. O plano Profissional segue como destaque para operações que precisam de mais controle."
            centered
          />
          <div className="fd-implementation-card section-reveal">
            <div className="fd-implementation-head">
              <SectionTag>Implantacao unica</SectionTag>
              <div>
                <strong>R$497</strong>
                <span>Pagamento único</span>
              </div>
            </div>
            <p>
              Inclui toda a configuração inicial para colocar o restaurante no ar
              com rapidez e com o painel pronto para a equipe operar.
            </p>
            <div className="fd-implementation-grid">
              {implementationFeatures.map((feature) => (
                <div key={feature} className="fd-implementation-item">
                  <BadgeCheck className="h-4 w-4" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fd-pricing-grid">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`fd-plan-card section-reveal fd-delay-${index + 1} ${plan.featured ? 'is-featured' : ''}`}
              >
                {plan.featured ? <span className="fd-plan-badge">Mais escolhido</span> : null}
                <p className="fd-plan-name">{plan.name}</p>
                <div className="fd-plan-price">{plan.price}</div>
                <div className="fd-plan-period">{plan.period}</div>
                <p className="fd-plan-description">{plan.description}</p>
                <div className="fd-plan-divider" />
                <ul className="fd-plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature.title}>
                      <div>
                        <span>{feature.title}</span>
                        {feature.note ? <small>{feature.note}</small> : null}
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Olá! Quero conhecer o ${plan.name} da Vellor Food.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`fd-btn ${plan.featured ? 'fd-btn-light' : 'fd-btn-secondary'}`}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fd-section" id="confianca">
        <div className="fd-container">
          <SectionHeader
            tag="Por que a Vellor?"
            title="Um sistema feito perto de quem usa"
            description="Desenvolvemos a Vellor Food com foco em simplicidade e resultado para restaurantes de verdade."
            centered
          />
          <div className="fd-trust-grid">
            {trustItems.map((item, index) => (
              <article key={item.title} className={`fd-trust-card section-reveal fd-delay-${index + 1}`}>
                <strong>{item.value}</strong>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="fd-trust-logos section-reveal">
            {marketSegments.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="fd-section fd-section-alt" id="faq">
        <div className="fd-container fd-faq-wrap">
          <SectionHeader
            tag="Dúvidas frequentes"
            title="Perguntas frequentes"
            description="Encontre respostas para as dúvidas mais comuns sobre a Vellor Food."
            centered
          />
          <div className="fd-faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index

              return (
                <article key={item.question} className={`fd-faq-item section-reveal ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="fd-faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="fd-faq-icon">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div className="fd-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="fd-section" id="lead-form">
        <div className="fd-container">
          <div className="fd-lead-grid">
            <div className="section-reveal">
              <SectionHeader
            tag="Demonstração"
            title="Solicite uma demonstração para o seu restaurante"
              description="Se você quer entender como funciona o sistema para restaurante da Vellor Food, envie seus dados e continue a conversa pelo WhatsApp."
              />
              <div className="fd-lead-copy">
                <p>
                  A equipe apresenta como o cardápio digital para restaurante, o
                  pedido online restaurante e o painel gerencial se encaixam na sua
                  operação.
                </p>
              </div>
            </div>

            <form className="fd-lead-form section-reveal fd-delay-2" onSubmit={handleLeadFormSubmit}>
              <label>
                <span>Nome</span>
                <input
                  type="text"
                  value={leadForm.name}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="Seu nome"
                />
              </label>
              <label>
                <span>Restaurante</span>
                <input
                  type="text"
                  value={leadForm.restaurant}
                  onChange={(event) =>
                    setLeadForm((current) => ({
                      ...current,
                      restaurant: event.target.value,
                    }))
                  }
                  placeholder="Nome do restaurante"
                />
              </label>
              <label>
                <span>Cidade</span>
                <input
                  type="text"
                  value={leadForm.city}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, city: event.target.value }))
                  }
                  placeholder="Sua cidade"
                />
              </label>
              <label>
                <span>Telefone</span>
                <input
                  type="tel"
                  value={leadForm.phone}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, phone: event.target.value }))
                  }
                  placeholder="(00) 00000-0000"
                />
              </label>
              <button type="submit" className="fd-btn fd-btn-primary">
                Enviar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="fd-final-cta" id="contato">
        <div className="fd-container fd-final-inner">
          <div className="section-reveal">
            <SectionTag>Comece hoje</SectionTag>
          </div>
          <h2 className="section-reveal fd-delay-1">
            Leve mais organizacao para o seu restaurante
          </h2>
          <p className="section-reveal fd-delay-2">
            Implantacao em 1 dia. Sem contrato de fidelidade. Suporte proximo.
          </p>
          <div className="fd-final-actions section-reveal fd-delay-3">
            <a
              href={whatsappLink('Olá, quero conhecer a Vellor Food para meu restaurante.')}
              target="_blank"
              rel="noreferrer"
              className="fd-btn fd-btn-primary"
            >
              Quero conhecer a Vellor Food
            </a>
            <a href="#planos" className="fd-btn fd-btn-dark">
              Ver planos e preços
            </a>
          </div>
          <small className="section-reveal fd-delay-4">
            Sem compromisso. Resposta em menos de 1 hora.
          </small>
        </div>
      </section>

      <footer className="fd-footer">
        <div className="fd-container fd-footer-grid">
          <div className="fd-footer-brand">
            <a href="#top" className="fd-logo">
              <span className="fd-logo-icon">
                <img src="/vellor-icon.svg" alt="Vellor Food" />
              </span>
              <span className="fd-logo-text">
                <strong>Vellor Food</strong>
                <small>Vellor Sistemas</small>
              </span>
            </a>
            <p>
              Sistema para restaurantes com cardápio digital, pedidos online e painel
              gerencial completo.
            </p>
            <div className="fd-footer-actions">
              <a
                href={whatsappLink('Olá! Gostaria de falar com o comercial da Vellor Food.')}
                target="_blank"
                rel="noreferrer"
                className="fd-footer-whatsapp"
              >
                WhatsApp comercial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={vellorContact.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="fd-footer-instagram"
              >
                Instagram
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="fd-container fd-footer-bottom">
          <p>© 2026 Vellor Food. Todos os direitos reservados.</p>
          <div>
            <a href="#top">Politica de Privacidade</a>
            <a href="#top">Termos de Uso</a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink('Olá, quero conhecer a Vellor Food para meu restaurante.')}
        target="_blank"
        rel="noreferrer"
        className="fd-whatsapp-float"
        aria-label="Falar no WhatsApp sobre a Vellor Food"
      >
        <MessageCircleMore className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>
    </main>
  )
}

