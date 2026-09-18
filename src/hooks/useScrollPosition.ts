'use client'

import { useState, useEffect } from 'react'

interface UseScrollPositionReturn {
  scrollY: number
  scrollDirection: 'up' | 'down' | null
  isScrolled: boolean
}

const useScrollPosition = (threshold: number = 0): UseScrollPositionReturn => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY
      
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > threshold)
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }
      
      lastScrollY = currentScrollY
    }

    const throttledUpdateScrollPosition = throttle(updateScrollPosition, 16) // ~60fps

    window.addEventListener('scroll', throttledUpdateScrollPosition)
    
    // Set initial state
    updateScrollPosition()

    return () => {
      window.removeEventListener('scroll', throttledUpdateScrollPosition)
    }
  }, [threshold])

  return { scrollY, scrollDirection, isScrolled }
}

// Throttle function to limit scroll event frequency
function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
  let inThrottle: boolean
  return ((...args: any[]) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }) as T
}

export default useScrollPosition