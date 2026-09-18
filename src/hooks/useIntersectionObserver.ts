'use client'

import { useState, useEffect, useRef } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        
        if (isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            setHasTriggered(true)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return {
    elementRef,
    isVisible: triggerOnce ? (hasTriggered || isVisible) : isVisible
  }
}

export default useIntersectionObserver