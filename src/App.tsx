import { useEffect } from 'react'
import { VellorFoodLanding } from './components/VellorFoodLanding'

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
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealNodes.forEach((node) => {
      if (node.getBoundingClientRect().top <= window.innerHeight * 0.9) {
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

  return <VellorFoodLanding />
}

export default App
