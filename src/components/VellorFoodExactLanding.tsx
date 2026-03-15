import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
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
  features: string[]
  cta: string
  featured?: boolean
}

type FaqItem = {
  question: string
  answer: string
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
      'Mensagens misturadas, sem controle e sem historico organizado causam erros e insatisfacao.',
    icon: MessageCircleMore,
  },
  {
    title: 'Cardapio dificil de atualizar',
    description:
      'Atualizar precos, remover itens esgotados ou criar combos demora tempo e confunde a equipe.',
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
    title: 'Clientes sem historico',
    description:
      'Nao saber quem sao seus clientes frequentes impede acoes de fidelizacao mais eficazes.',
    icon: Users,
  },
]

const features: CardItem[] = [
  {
    title: 'Cardapio Digital',
    description:
      'Monte e atualize seu cardapio online com fotos, descricoes, precos e categorias.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Pedidos via WhatsApp',
    description:
      'O cliente escolhe no cardapio digital e o pedido vai direto para o WhatsApp do restaurante.',
    icon: MessageCircleMore,
  },
  {
    title: 'Painel Gerencial',
    description:
      'Acompanhe pedidos, faturamento, ticket medio e indicadores em tempo real.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Controle de Mesas',
    description:
      'Visualize o mapa de mesas em tempo real e identifique quais estao livres, ocupadas ou reservadas.',
    icon: LayoutGrid,
  },
  {
    title: 'Base de Clientes',
    description:
      'Registre seus clientes, historico de pedidos e preferencias para vender com mais contexto.',
    icon: Users,
  },
]

const steps: StepItem[] = [
  {
    step: '01',
    title: 'Cadastre seu restaurante',
    description:
      'Crie sua conta, configure o perfil do estabelecimento e prepare a operacao em poucos minutos.',
  },
  {
    step: '02',
    title: 'Monte cardapio, ofertas e operacao',
    description:
      'Adicione produtos com fotos e precos, crie combos, configure mesas e deixe a equipe pronta.',
  },
  {
    step: '03',
    title: 'Receba pedidos e gerencie com controle',
    description:
      'Compartilhe seu cardapio digital, receba pedidos no WhatsApp e acompanhe tudo pelo painel.',
  },
]

const benefitItems = [
  {
    title: 'Atendimento mais rapido',
    description:
      'Com cardapio digital e pedidos automaticos, a equipe foca em servir em vez de anotar pedidos.',
  },
  {
    title: 'Menos confusao nos pedidos',
    description:
      'Cada pedido chega completo, organizado e com o nome do cliente. Sem ruido na comunicacao.',
  },
  {
    title: 'Cardapio sempre atualizado',
    description:
      'Alterou preco ou acabou um produto? Atualize em segundos e o cardapio reflete na hora.',
  },
  {
    title: 'Melhor experiencia para o cliente',
    description:
      'Cardapio visual com fotos, precos claros e pedido facil pelo WhatsApp elevam a percepcao.',
  },
  {
    title: 'Mais profissionalismo para o restaurante',
    description:
      'Painel gerencial, historico e dados em tempo real transformam a gestao do negocio.',
  },
]

const plans: PlanItem[] = [
  {
    name: 'Plano Inicial',
    price: 'R$97',
    period: 'por mes',
    features: [
      'Cardapio digital com ate 30 itens',
      'Link e QR Code do cardapio',
      'Pedidos via WhatsApp',
      'Controle de ate 10 mesas',
      '1 usuario operador',
      'Suporte por e-mail',
    ],
    cta: 'Comecar agora',
  },
  {
    name: 'Plano Profissional',
    price: 'R$197',
    period: 'por mes',
    features: [
      'Cardapio digital ilimitado',
      'Link, QR Code e pagina personalizada',
      'Pedidos via WhatsApp + historico',
      'Controle de ate 30 mesas',
      'Painel gerencial completo',
      'Base de clientes + fidelizacao',
      'Criacao de ofertas e combos',
      '3 usuarios operadores',
      'Suporte via WhatsApp',
    ],
    cta: 'Quero este plano',
    featured: true,
  },
  {
    name: 'Plano Premium',
    price: 'R$347',
    period: 'por mes',
    features: [
      'Tudo do Plano Profissional',
      'Mesas ilimitadas',
      'Multiplas unidades',
      'Relatorios avancados e exportacao',
      'Integracoes com sistemas externos',
      'Usuarios ilimitados',
      'Implantacao assistida',
      'Gerente de conta dedicado',
      'Suporte prioritario',
    ],
    cta: 'Falar com consultor',
  },
]

const trustItems = [
  {
    value: '1 dia',
    title: 'Implantacao rapida',
    description: 'Do cadastro ao cardapio publicado em menos de um dia.',
  },
  {
    value: '100%',
    title: 'Sistema facil de usar',
    description: 'Interface pensada para donos e equipes de restaurante.',
  },
  {
    value: 'Proximo',
    title: 'Atendimento proximo',
    description: 'Suporte para configuracao, duvidas e ajustes da operacao.',
  },
]

const faqItems: FaqItem[] = [
  {
    question: 'A Vellor Food serve para qualquer tipo de restaurante?',
    answer:
      'Sim. A Vellor Food foi desenvolvida para restaurantes, hamburguerias, pizzarias, cafeterias, food trucks e operacoes de delivery local.',
  },
  {
    question: 'O pedido e feito dentro do sistema?',
    answer:
      'O cliente escolhe no cardapio digital e, ao finalizar, o pedido e enviado pelo WhatsApp do proprio cliente para o numero do restaurante.',
  },
  {
    question: 'O cliente precisa instalar algum aplicativo?',
    answer:
      'Nao. O cardapio digital funciona pelo navegador do celular ou computador, sem precisar instalar nada.',
  },
  {
    question: 'Voces ajudam na implantacao?',
    answer:
      'Sim. A equipe acompanha o cadastro do restaurante, a montagem do cardapio, a configuracao das mesas e os primeiros passos no painel.',
  },
  {
    question: 'Posso cancelar o plano quando quiser?',
    answer:
      'Sim. Nao ha contrato de fidelidade nem multa por cancelamento. O plano pode ser interrompido quando fizer sentido para a operacao.',
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
      <small className="fd-muted-note">58% de ocupacao</small>
    </div>
  )
}

function MenuPhone() {
  return (
    <div className="fd-app fd-app-menu">
      <div className="fd-app-topbar fd-app-topbar-orange">
        <span>Cardapio Digital</span>
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
        <span>Envio automatico do pedido</span>
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
        <strong>Ticket medio</strong>
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

function WhatsAppMessage({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`fd-wa ${compact ? 'is-compact' : ''}`}>
      <div className="fd-wa-day">Hoje</div>
      <div className="fd-wa-bubble">
        <p>Novo pedido - Casa do Patio</p>
        <p>Cliente: Clara Monteiro</p>
        <p>Telefone: (81) 99876-4312</p>
        <p>Tipo: Entrega</p>
        <p>Endereco: Rua das Acacias, 148</p>
        <p>Bairro: Boa Vista</p>
        <p>Itens:</p>
        <p>- 1x Smash Bacon Duplo - R$ 42,90</p>
        <p>Personalizacao: Sem cebola</p>
        <p>Subtotal: R$ 42,90</p>
        <p>Taxa de entrega: R$ 0,00</p>
        <p>Total: R$ 42,90</p>
        <p>Pagamento: Pix</p>
        <p>Observacao: -</p>
        <span className="fd-wa-time">10:08</span>
      </div>
    </div>
  )
}

function ScreenThumb({
  title,
  fileLabel,
  children,
}: {
  title: string
  fileLabel: string
  children: ReactNode
}) {
  return (
    <article className="fd-screen-thumb section-reveal">
      <div className="fd-screen-inner">{children}</div>
      <div className="fd-screen-copy">
        <strong>{title}</strong>
        <span>{fileLabel}</span>
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
            <small>Cardapio, ofertas e pedido pelo WhatsApp</small>
          </div>
        </div>
        <div className="fd-showcase-cards">
          {[
            ['Cardapio', mockupImages.burger, 'X-Burguer Classico'],
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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
              href={whatsappLink('Ola! Gostaria de conhecer a Vellor Food.')}
              target="_blank"
              rel="noreferrer"
              className="fd-btn fd-btn-primary"
            >
              Solicitar demonstracao
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
              Organize os pedidos do seu restaurante <span>em um so lugar</span>
            </h1>
            <p className="section-reveal fd-delay-2">
              Sistema para restaurantes com cardapio digital, pedidos online via
              WhatsApp, controle de mesas, ofertas e gestao de clientes.
            </p>
            <div className="fd-hero-actions section-reveal fd-delay-3">
              <a
                href={whatsappLink('Quero conhecer a Vellor Food.')}
                target="_blank"
                rel="noreferrer"
                className="fd-btn fd-btn-primary"
              >
                Quero conhecer a Vellor Food
              </a>
              <a href="#como-funciona" className="fd-btn fd-btn-secondary">
                Ver demonstracao
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
          <span className="fd-logos-label">Feito para negocios como:</span>
          {marketSegments.map((item) => (
            <strong key={item}>{item}</strong>
          ))}
        </div>
      </section>

      <section className="fd-section fd-section-alt" id="dores">
        <div className="fd-container">
          <SectionHeader
            tag="Problemas reais"
            title="Seu restaurante perde tempo com atendimento desorganizado?"
            description="Esses problemas sao mais comuns do que parecem e a Vellor Food foi feita exatamente para resolve-los."
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
            title="A Vellor Food centraliza a operacao do restaurante"
            description="Todas as ferramentas que seu estabelecimento precisa integradas em um unico painel intuitivo."
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
            title="Do cadastro a operacao em 3 passos"
            description="Simples de implantar, facil de usar e pensado para organizar a rotina do restaurante."
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
              tag="Telas do produto"
              title="Um sistema feito para o dia a dia do seu restaurante"
              description="As imagens seguem os mockups ja criados e o pedido recebido foi recriado em estilo WhatsApp com nome e numero ficticios."
              dark
            />
            <div className="fd-screens-grid">
              <ScreenThumb title="Cardapio Digital" fileLabel="cardapio-digital.png">
                <img src={mockupImages.pizza} alt="Cardapio digital" className="fd-full-image" />
              </ScreenThumb>
              <ScreenThumb title="Pedidos Online" fileLabel="pedidos-online.png">
                <WhatsAppMessage compact />
              </ScreenThumb>
              <ScreenThumb title="Painel Gerencial" fileLabel="painel-gerencial.png">
                <DashboardPhone />
              </ScreenThumb>
              <ScreenThumb title="Controle de Mesas" fileLabel="controle-mesas.png">
                <TablesPhone />
              </ScreenThumb>
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
            title="Mais organizacao no atendimento. Mais controle na operacao."
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
            tag="Planos e precos"
            title="Escolha o plano ideal para o seu restaurante"
            description="Sem taxa de implantacao. Sem contrato de fidelidade. Cancele quando quiser."
            centered
          />
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
                <div className="fd-plan-divider" />
                <ul className="fd-plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Ola! Quero conhecer o ${plan.name} da Vellor Food.`)}
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
            tag="Duvidas frequentes"
            title="Perguntas frequentes"
            description="Encontre respostas para as duvidas mais comuns sobre a Vellor Food."
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

      <section className="fd-final-cta" id="contato">
        <div className="fd-container fd-final-inner">
          <div className="section-reveal">
            <SectionTag>Comece hoje</SectionTag>
          </div>
          <h2 className="section-reveal fd-delay-1">
            Leve mais organizacao para o seu restaurante <span>com a Vellor Food</span>
          </h2>
          <p className="section-reveal fd-delay-2">
            Implantacao em 1 dia. Sem contrato de fidelidade. Suporte proximo.
          </p>
          <div className="fd-final-actions section-reveal fd-delay-3">
            <a
              href={whatsappLink('Ola! Gostaria de solicitar uma demonstracao da Vellor Food.')}
              target="_blank"
              rel="noreferrer"
              className="fd-btn fd-btn-primary"
            >
              Solicitar demonstracao
            </a>
            <a href="#planos" className="fd-btn fd-btn-dark">
              Ver planos e precos
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
              Sistema para restaurantes com cardapio digital, pedidos online e painel
              gerencial completo.
            </p>
            <div className="fd-footer-actions">
              <a
                href={whatsappLink('Ola! Gostaria de falar com o comercial da Vellor Food.')}
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
    </main>
  )
}

