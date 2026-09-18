'use client'

import { useEffect } from 'react'

interface UseKeyboardNavigationProps {
  onEscape?: () => void
  onArrowLeft?: () => void
  onArrowRight?: () => void
  onArrowUp?: () => void
  onArrowDown?: () => void
  onEnter?: () => void
  onSpace?: () => void
  enabled?: boolean
}

const useKeyboardNavigation = ({
  onEscape,
  onArrowLeft,
  onArrowRight,
  onArrowUp,
  onArrowDown,
  onEnter,
  onSpace,
  enabled = true
}: UseKeyboardNavigationProps) => {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          event.preventDefault()
          onEscape?.()
          break
        case 'ArrowLeft':
          event.preventDefault()
          onArrowLeft?.()
          break
        case 'ArrowRight':
          event.preventDefault()
          onArrowRight?.()
          break
        case 'ArrowUp':
          event.preventDefault()
          onArrowUp?.()
          break
        case 'ArrowDown':
          event.preventDefault()
          onArrowDown?.()
          break
        case 'Enter':
          event.preventDefault()
          onEnter?.()
          break
        case ' ':
          event.preventDefault()
          onSpace?.()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEscape, onArrowLeft, onArrowRight, onArrowUp, onArrowDown, onEnter, onSpace, enabled])
}

export default useKeyboardNavigation