'use client'

import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { useScrollPosition } from '@/hooks'

const ScrollToTop: React.FC = () => {
  const { scrollY } = useScrollPosition()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (scrollY < 300) return null

  return (
    <Button
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      onClick={scrollToTop}
    >
      <Icon name="chevron-up" size={20} />
    </Button>
  )
}

export default ScrollToTop