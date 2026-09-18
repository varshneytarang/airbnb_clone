'use client'

import { useEffect } from 'react'
import { ModalProps } from '@/types'
import { Icon } from '../Icon'
import { Button } from '../Button'

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white w-full h-full max-w-7xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Button
            variant="ghost"
            onClick={onClose}
            className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2"
          >
            <Icon name="arrow-left" size={16} />
            {title && <span className="font-medium">{title}</span>}
          </Button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal