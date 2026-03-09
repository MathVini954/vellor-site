import { useEffect } from 'react'
import { VellorFoodShowcase } from './components/VellorFoodShowcase'
import { VellorLandingSections } from './components/VellorLandingSections'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready')

    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>('.section-reveal'),
    )

    if (revealNodes.length === 0) {
      return
    }

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    if (reducedMotionQuery.matches) {
      revealNodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealNodes.forEach((node) => {
      if (node.getBoundingClientRect().top <= window.innerHeight * 0.88) {
        node.classList.add('is-visible')
        return
      }

      observer.observe(node)
    })

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,255,125,0.08),transparent_18%),radial-gradient(circle_at_80%_16%,rgba(94,162,255,0.12),transparent_20%)]" />

        <VellorFoodShowcase />
        <VellorLandingSections />
      </div>
    </main>
  )
}

export default App
