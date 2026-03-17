import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  ChevronRight,
  Heart,
  Home,
  Instagram,
  MessageCircleMore,
  Plus,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  UserRound,
  UtensilsCrossed,
} from 'lucide-react'
import { vellorContact } from '../content/vellorContact'

type CategoryTile = {
  name: string
  image: string
}

type MenuCard = {
  section: string
  title: string
  description: string
  image: string
}

type NavItem = {
  label: string
  icon: LucideIcon
  active?: boolean
}

const restaurantProfile = {
  name: 'Bistro da Esquina',
  city: 'São Paulo, SP',
  intro: 'O que vai sair hoje em Bistro da Esquina?',
  logoUrl:
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80',
  offerImage:
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
}

const showcaseNavigation = [
  { label: 'Produto', href: '#produto' },
  { label: 'Painel', href: '#painel' },
  { label: 'Missão', href: '#missao' },
  { label: 'Fluxo', href: '#fluxo' },
  { label: 'Contato', href: '#contato' },
]

const showcaseActions = [
  {
    label: 'WhatsApp',
    href: vellorContact.whatsapp.href,
    icon: MessageCircleMore,
    className:
      'bg-[linear-gradient(135deg,#3ce480_0%,#149654_100%)] text-white shadow-[0_18px_40px_rgba(20,150,84,0.3)] hover:-translate-y-0.5',
  },
  {
    label: 'Instagram',
    href: vellorContact.instagram.href,
    icon: Instagram,
    className:
      'border border-white/14 bg-white/[0.04] text-white/86 backdrop-blur-xl hover:bg-white/[0.08]',
  },
] as const

const showcaseBadges = [
  'Canal próprio para o seu restaurante',
  'Mais pedidos sem depender só de marketplace',
  'WhatsApp organizado para a sua equipe',
]

const impactStats = [
  { value: 'mais margem', label: 'pedido feito direto no canal do seu restaurante' },
  { value: 'mais marca', label: 'cliente compra em uma experiência com a sua identidade' },
  { value: 'mais controle', label: 'cardápio, pedido e operação no mesmo fluxo' },
]

const categoryTiles: CategoryTile[] = [
  {
    name: 'Pizzas',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Pratos prin...',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Lanches',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Saladas',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Sobremesas',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80',
  },
]

const topSellingCards: MenuCard[] = [
  {
    section: 'SALADAS',
    title: 'Salada Mediterrânea',
    description: 'Mix de folhas, tomate sweet grape, pepino, feta e molho da casa.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
  },
  {
    section: 'SOBREMESAS',
    title: 'Brownie com Sorvete',
    description: 'Brownie quente servido com sorvete de creme e calda intensa.',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80',
  },
]

const suggestionCards: MenuCard[] = [
  {
    section: 'PRATOS PRINCIPAIS',
    title: 'Bowl Fit do Chef',
    description: 'Seleção fresca com legumes, folhas, grãos e proteína leve.',
    image:
      'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?auto=format&fit=crop&w=500&q=80',
  },
  {
    section: 'PRATOS PRINCIPAIS',
    title: 'Parmegiana de Frango',
    description: 'Molho encorpado, queijo gratinado e acompanhamento do dia.',
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=500&q=80',
  },
]

const bottomNavItems: NavItem[] = [
  { label: 'Início', icon: Home, active: true },
  { label: 'Cardápio', icon: UtensilsCrossed },
  { label: 'Carrinho', icon: ShoppingCart },
  { label: 'Perfil', icon: UserRound },
]

type PhoneFrameProps = {
  children: ReactNode
}

function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative overflow-hidden rounded-[2.6rem] border border-white/14 bg-[linear-gradient(180deg,rgba(20,24,40,0.98),rgba(7,9,15,0.98))] p-[8px_8px_6px] shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.18)] sm:rounded-[3.15rem] sm:p-[10px_10px_8px] sm:shadow-[0_48px_120px_rgba(0,0,0,0.66),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.18)]">
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#f6f0ea] sm:rounded-[2.8rem]">
        {children}
        <div
          aria-hidden="true"
          className="screen-sheen pointer-events-none absolute inset-y-[-30%] left-[-52%] w-[42%] bg-gradient-to-r from-transparent via-white/24 to-transparent blur-xl"
        />
      </div>
    </div>
  )
}

function CategoryCard({
  category,
  index,
}: {
  category: CategoryTile
  index: number
}) {
  return (
    <article
      className="tile-rise min-w-[84px] rounded-[1.35rem] bg-white/92 p-2.5 shadow-[0_12px_24px_rgba(15,23,42,0.06)]"
      style={{ animationDelay: `${0.42 + index * 0.08}s` }}
    >
      <img
        src={category.image}
        alt={category.name}
        className="h-14 w-full rounded-[1rem] object-cover"
        loading="lazy"
      />
      <p className="mt-2 text-center text-[11px] font-medium text-[#111827]">
        {category.name}
      </p>
    </article>
  )
}

function ProductCard({
  card,
  index,
}: {
  card: MenuCard
  index: number
}) {
  return (
    <article
      className="phone-card tile-rise rounded-[1.8rem] bg-white/92 p-3 shadow-[0_18px_30px_rgba(15,23,42,0.08)]"
      style={{ animationDelay: `${0.56 + index * 0.1}s` }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="h-36 w-full rounded-[1.35rem] object-cover"
        loading="lazy"
      />

      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#94a3b8]">
        {card.section}
      </p>
      <h4 className="mt-2 text-lg font-semibold leading-6 text-[#0f172a]">
        {card.title}
      </h4>
      <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-[#475569]">
        {card.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          aria-label={`Favoritar ${card.title}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9e0ea] bg-white text-[#94a3b8]"
        >
          <Heart className="h-4 w-4" />
        </button>

        <button
          type="button"
          aria-label={`Adicionar ${card.title}`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ef3b2d] text-white shadow-[0_14px_24px_rgba(239,59,45,0.24)]"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </article>
  )
}

export function HeroPhoneMockup() {
  return (
    <div className="relative mx-auto flex h-[38rem] w-full items-center justify-center sm:h-[46rem] md:h-[53rem] lg:h-[60rem]">
      <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-[radial-gradient(circle_at_center,rgba(242,113,49,0.16),transparent_24%),radial-gradient(circle_at_center,rgba(94,162,255,0.14),transparent_42%)] blur-3xl" />

      <div className="relative z-20 w-full max-w-[22rem] sm:w-[88%] sm:max-w-[30rem] lg:max-w-[36rem]">
        <div className="hero-device-enter">
          <PhoneFrame>
            <div className="relative h-[39rem] bg-[linear-gradient(180deg,#f7f2ec_0%,#f2ede6_100%)] sm:h-[48rem] md:h-[52rem] lg:h-[58rem]">
              <div className="hide-scrollbar h-full overflow-y-auto px-3.5 pb-28 pt-4 sm:px-5 sm:pb-32 sm:pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={restaurantProfile.logoUrl}
                      alt={restaurantProfile.name}
                      className="h-11 w-11 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-[1.45rem] font-medium tracking-[-0.04em] text-[#0f172a] sm:text-[1.75rem]">
                        Olá, <span className="text-[#ef3b2d]">cliente</span>
                      </p>
                      <p className="mt-1 text-sm text-[#0b3d73]">
                        {restaurantProfile.intro}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label="Abrir carrinho"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6dde7] bg-[#f3f4f6] text-[#0f172a]"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-5 flex gap-3">
                  <label className="flex flex-1 items-center gap-3 rounded-[1.3rem] border border-[#d6dde7] bg-[#f5f5f5] px-4 py-3.5">
                    <Search className="h-4 w-4 text-[#94a3b8]" />
                    <input
                      readOnly
                      value=""
                      aria-label="Buscar pratos e categorias"
                      placeholder="Buscar pratos e categorias"
                      className="w-full border-none bg-transparent text-sm text-[#0f172a] outline-none placeholder:text-[#6b7280]"
                    />
                  </label>

                  <button
                    type="button"
                    aria-label="Filtrar categorias"
                    className="flex h-[54px] w-[54px] items-center justify-center rounded-[1.3rem] border border-[#d6dde7] bg-[#f3f4f6] text-[#0f172a]"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-6 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0f172a] sm:text-[1.15rem]">
                      Categorias
                    </h3>
                    <p className="mt-2 max-w-[15rem] text-[13px] leading-5 text-[#334155] sm:text-sm sm:leading-6">
                      Sabores autorais, operação ágil e uma experiência pensada para cada pedido.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-[#0f172a]"
                  >
                    Ver cardápio
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="hide-scrollbar mt-4 flex gap-3 overflow-x-auto pb-2">
                  {categoryTiles.map((category, index) => (
                    <CategoryCard key={category.name} category={category} index={index} />
                  ))}
                </div>

                <div className="mt-1 h-1 w-[73%] rounded-full bg-[#c4c0ba]" />

                <div className="mt-8">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[1.15rem] font-semibold text-[#0f172a]">
                        Ofertas em destaque
                      </h3>
                      <p className="mt-2 text-sm text-[#334155]">
                        Campanhas publicadas pelo restaurante
                      </p>
                    </div>
                  </div>

                  <article className="mt-5 overflow-hidden rounded-[2rem] border border-[#2d3748]/18 bg-[#101828] shadow-[0_26px_50px_rgba(15,23,42,0.16)]">
                    <div className="relative h-[15rem] overflow-hidden sm:h-[19rem]">
                      <img
                        src={restaurantProfile.offerImage}
                        alt="Menu especial"
                        className="offer-pan h-full w-full scale-110 object-cover blur-sm"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.22),rgba(17,24,39,0.58)_52%,rgba(7,16,39,0.92)_100%)]" />

                      <div className="absolute inset-0 p-5 text-white">
                        <div className="flex items-start justify-between gap-3">
                          <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] backdrop-blur-md">
                            Especial do dia
                          </span>
                          <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[11px] font-medium backdrop-blur-md">
                            Válida até 31/03/2026
                          </span>
                        </div>

                        <div className="mt-10 sm:mt-16">
                          <span className="inline-flex rounded-full border border-white/20 bg-black/22 px-4 py-2 text-[1.05rem] font-semibold backdrop-blur-md">
                            Menu especial
                          </span>
                          <h4 className="mt-6 text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:mt-8 sm:text-[2.5rem]">
                            Prato do Dia
                          </h4>
                          <p className="mt-2 text-base text-white/90 sm:mt-3 sm:text-lg">
                            Prato executivo
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 bg-[#0a1631] py-4">
                      <span className="h-2.5 w-10 rounded-full bg-white" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    </div>
                  </article>
                </div>

                <div className="mt-8 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[1.15rem] font-semibold text-[#0f172a]">
                      Mais pedidos
                    </h3>
                    <p className="mt-2 text-sm text-[#334155]">
                      Baseado nos itens mais vendidos do restaurante
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-[#0f172a]"
                  >
                    Ver tudo
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                  {topSellingCards.map((card, index) => (
                    <ProductCard key={card.title} card={card} index={index} />
                  ))}
                </div>

                <div className="mt-8 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[1.15rem] font-semibold text-[#0f172a]">
                      Sugestões para você
                    </h3>
                    <p className="mt-2 text-sm text-[#334155]">
                      Seleção viva do cardápio real
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-[#0f172a]"
                  >
                    Ver tudo
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                  {suggestionCards.map((card, index) => (
                    <ProductCard
                      key={card.title}
                      card={card}
                      index={index + topSellingCards.length}
                    />
                  ))}
                </div>
              </div>

              <nav className="dock-rise absolute inset-x-0 bottom-0 border-t border-[#d9e1ea] bg-[#f7f7f8]/96 px-4 py-2.5 backdrop-blur-xl sm:px-5 sm:py-3">
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {bottomNavItems.map((item) => {
                    const Icon = item.icon

                    return (
                      <button
                        key={item.label}
                        type="button"
                        className="flex flex-col items-center gap-1.5 rounded-[1rem] py-1"
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            item.active ? 'text-[#ef3b2d]' : 'text-[#6b7da5]'
                          }`}
                        />
                        <span className="text-[11px] font-medium text-[#0f172a]">
                          {item.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </nav>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </div>
  )
}

export function VellorFoodShowcase() {
  return (
    <section id="showcase" className="relative pb-20 pt-0 lg:pb-28">
      <div className="w-full">
        <div className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(135deg,rgba(6,9,18,0.98),rgba(9,14,28,0.92)_44%,rgba(7,10,18,0.98))] px-4 pb-8 pt-20 shadow-[0_44px_150px_rgba(0,0,0,0.66)] backdrop-blur-2xl sm:px-6 sm:pb-10 sm:pt-28 lg:px-10 lg:pb-12 lg:pt-24 xl:px-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(242,113,49,0.16),transparent_22%),radial-gradient(circle_at_86%_16%,rgba(94,162,255,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_28%)]" />
          <div className="orb-breathe pointer-events-none absolute -left-28 top-14 h-72 w-72 rounded-full bg-[#f27131]/12 blur-3xl" />
          <div className="orb-breathe pointer-events-none absolute right-0 top-28 h-72 w-72 rounded-full bg-[#6ca7ff]/12 blur-3xl [animation-delay:1.6s]" />
          <div className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

          <div className="absolute left-4 right-4 top-4 z-30 flex justify-end sm:left-6 sm:right-6 sm:top-5 lg:left-10 lg:right-10 xl:left-14 xl:right-14">
            <div className="flex items-center gap-3">
              <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl md:flex">
                {showcaseNavigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm text-white/62 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-2 text-xs font-medium text-white/78 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.09] sm:px-4 sm:py-2.5 sm:text-sm"
              >
                Quero vender com a Vellor
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-center xl:gap-14">
            <div className="hero-sequence max-w-2xl">
              <span className="hero-step inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl">
                <img src="/vellor-icon.svg" alt="" className="h-4 w-4 rounded-md" />
                Vellor Food
              </span>

              <h1 className="hero-step mt-6 max-w-xl text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.55rem]">
                Seu restaurante vendendo no próprio canal com cara de marca grande.
              </h1>

              <p className="hero-step mt-5 max-w-xl text-[15px] leading-7 text-white/66 sm:text-lg sm:leading-8">
                A Vellor Food ajuda restaurantes a vender mais com um cardápio
                digital bonito, pedido organizado e envio estruturado para o
                WhatsApp da equipe.
              </p>

              <p className="hero-step mt-4 max-w-xl text-sm leading-7 text-white/48 sm:text-base">
                Você ganha um canal próprio para delivery e retirada, com uma
                experiência premium para o cliente e mais clareza para a
                operação do restaurante.
              </p>

              <div className="hero-step mt-8 flex flex-col gap-3 sm:flex-row">
                {showcaseActions.map((action) => {
                  const Icon = action.icon

                  return (
                    <a
                      key={action.label}
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 sm:w-auto ${action.className}`}
                    >
                      <Icon className="h-4 w-4" />
                      {action.label}
                    </a>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {showcaseBadges.map((badge, index) => (
                  <span
                    key={badge}
                    className="hero-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/72 backdrop-blur-xl sm:text-sm"
                    style={{ animationDelay: `${0.42 + index * 0.08}s` }}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#ff9a6c]" />
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {impactStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="hero-chip rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                    style={{ animationDelay: `${0.58 + index * 0.1}s` }}
                  >
                    <p className="text-base font-semibold tracking-[-0.04em] text-white sm:text-lg">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex h-[38rem] w-full items-center justify-center sm:h-[46rem] md:h-[53rem] lg:h-[60rem]">
              <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-[radial-gradient(circle_at_center,rgba(242,113,49,0.16),transparent_24%),radial-gradient(circle_at_center,rgba(94,162,255,0.14),transparent_42%)] blur-3xl" />

              <div className="relative z-20 w-full max-w-[22rem] sm:w-[88%] sm:max-w-[30rem] lg:max-w-[36rem]">
                <div className="hero-device-enter">
                  <PhoneFrame>
                    <div className="relative h-[39rem] bg-[linear-gradient(180deg,#f7f2ec_0%,#f2ede6_100%)] sm:h-[48rem] md:h-[52rem] lg:h-[58rem]">
                      <div className="hide-scrollbar h-full overflow-y-auto px-3.5 pb-28 pt-4 sm:px-5 sm:pb-32 sm:pt-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={restaurantProfile.logoUrl}
                              alt={restaurantProfile.name}
                              className="h-11 w-11 rounded-full object-cover"
                              loading="lazy"
                            />
                            <div>
                              <p className="text-[1.45rem] font-medium tracking-[-0.04em] text-[#0f172a] sm:text-[1.75rem]">
                                Olá, <span className="text-[#ef3b2d]">cliente</span>
                              </p>
                              <p className="mt-1 text-sm text-[#0b3d73]">
                                {restaurantProfile.intro}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            aria-label="Abrir carrinho"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6dde7] bg-[#f3f4f6] text-[#0f172a]"
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-5 flex gap-3">
                          <label className="flex flex-1 items-center gap-3 rounded-[1.3rem] border border-[#d6dde7] bg-[#f5f5f5] px-4 py-3.5">
                            <Search className="h-4 w-4 text-[#94a3b8]" />
                            <input
                              readOnly
                              value=""
                              aria-label="Buscar pratos e categorias"
                              placeholder="Buscar pratos e categorias"
                              className="w-full border-none bg-transparent text-sm text-[#0f172a] outline-none placeholder:text-[#6b7280]"
                            />
                          </label>

                          <button
                            type="button"
                            aria-label="Filtrar categorias"
                            className="flex h-[54px] w-[54px] items-center justify-center rounded-[1.3rem] border border-[#d6dde7] bg-[#f3f4f6] text-[#0f172a]"
                          >
                            <SlidersHorizontal className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-6 flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-semibold text-[#0f172a] sm:text-[1.15rem]">
                              Categorias
                            </h3>
                            <p className="mt-2 max-w-[15rem] text-[13px] leading-5 text-[#334155] sm:text-sm sm:leading-6">
                              Sabores autorais, operação ágil e uma experiência
                              pensada para cada pedido.
                            </p>
                          </div>

                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-[#0f172a]"
                          >
                            Ver cardápio
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="hide-scrollbar mt-4 flex gap-3 overflow-x-auto pb-2">
                          {categoryTiles.map((category, index) => (
                            <CategoryCard
                              key={category.name}
                              category={category}
                              index={index}
                            />
                          ))}
                        </div>

                        <div className="mt-1 h-1 w-[73%] rounded-full bg-[#c4c0ba]" />

                        <div className="mt-8">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-[1.15rem] font-semibold text-[#0f172a]">
                                Ofertas em destaque
                              </h3>
                              <p className="mt-2 text-sm text-[#334155]">
                                Campanhas publicadas pelo restaurante
                              </p>
                            </div>
                          </div>

                          <article className="mt-5 overflow-hidden rounded-[2rem] border border-[#2d3748]/18 bg-[#101828] shadow-[0_26px_50px_rgba(15,23,42,0.16)]">
                            <div className="relative h-[15rem] overflow-hidden sm:h-[19rem]">
                              <img
                                src={restaurantProfile.offerImage}
                                alt="Menu especial"
                                className="offer-pan h-full w-full scale-110 object-cover blur-sm"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.22),rgba(17,24,39,0.58)_52%,rgba(7,16,39,0.92)_100%)]" />

                              <div className="absolute inset-0 p-5 text-white">
                                <div className="flex items-start justify-between gap-3">
                                  <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] backdrop-blur-md">
                                    Especial do dia
                                  </span>
                                  <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[11px] font-medium backdrop-blur-md">
                                    Válida até 31/03/2026
                                  </span>
                                </div>

                                <div className="mt-10 sm:mt-16">
                                  <span className="inline-flex rounded-full border border-white/20 bg-black/22 px-4 py-2 text-[1.05rem] font-semibold backdrop-blur-md">
                                    Menu especial
                                  </span>
                                  <h4 className="mt-6 text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:mt-8 sm:text-[2.5rem]">
                                    Prato do Dia
                                  </h4>
                                  <p className="mt-2 text-base text-white/90 sm:mt-3 sm:text-lg">
                                    Prato executivo
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-center gap-2 bg-[#0a1631] py-4">
                              <span className="h-2.5 w-10 rounded-full bg-white" />
                              <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                            </div>
                          </article>
                        </div>

                        <div className="mt-8 flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-[1.15rem] font-semibold text-[#0f172a]">
                              Mais pedidos
                            </h3>
                            <p className="mt-2 text-sm text-[#334155]">
                              Baseado nos itens mais vendidos do restaurante
                            </p>
                          </div>

                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-[#0f172a]"
                          >
                            Ver tudo
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                          {topSellingCards.map((card, index) => (
                            <ProductCard key={card.title} card={card} index={index} />
                          ))}
                        </div>

                        <div className="mt-8 flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-[1.15rem] font-semibold text-[#0f172a]">
                              Sugestões para você
                            </h3>
                            <p className="mt-2 text-sm text-[#334155]">
                              Seleção viva do cardápio real
                            </p>
                          </div>

                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-[#0f172a]"
                          >
                            Ver tudo
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                          {suggestionCards.map((card, index) => (
                            <ProductCard
                              key={card.title}
                              card={card}
                              index={index + topSellingCards.length}
                            />
                          ))}
                        </div>
                      </div>

                      <nav className="dock-rise absolute inset-x-0 bottom-0 border-t border-[#d9e1ea] bg-[#f7f7f8]/96 px-4 py-2.5 backdrop-blur-xl sm:px-5 sm:py-3">
                        <div className="grid grid-cols-4 gap-2 sm:gap-3">
                          {bottomNavItems.map((item) => {
                            const Icon = item.icon

                            return (
                              <button
                                key={item.label}
                                type="button"
                                className="flex flex-col items-center gap-1.5 rounded-[1rem] py-1"
                              >
                                <Icon
                                  className={`h-5 w-5 ${
                                    item.active ? 'text-[#ef3b2d]' : 'text-[#6b7da5]'
                                  }`}
                                />
                                <span
                                  className={`text-[11px] font-medium ${
                                    item.active ? 'text-[#0f172a]' : 'text-[#0f172a]'
                                  }`}
                                >
                                  {item.label}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </nav>
                    </div>
                  </PhoneFrame>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
