'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

const ShareSaveButtons: React.FC = () => {
  const [isSaved, setIsSaved] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const handleShare = () => {
    setShowShareMenu(!showShareMenu)
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  const shareOptions = [
    { label: 'Copy link', action: () => navigator.clipboard.writeText(window.location.href) },
    { label: 'Email', action: () => {} },
    { label: 'Messages', action: () => {} },
    { label: 'WhatsApp', action: () => {} },
    { label: 'Facebook', action: () => {} },
    { label: 'Twitter', action: () => {} }
  ]

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2 underline"
          onClick={handleShare}
        >
          <Icon name="share" size={16} />
          Share
        </Button>
        
        {showShareMenu && (
          <>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              {shareOptions.map((option) => (
                <button
                  key={option.label}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => {
                    option.action()
                    setShowShareMenu(false)
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setShowShareMenu(false)}
            />
          </>
        )}
      </div>
      
      <Button 
        variant="ghost" 
        className={`flex items-center gap-2 rounded-lg px-3 py-2 underline ${
          isSaved 
            ? 'text-airbnb-red hover:bg-red-50' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        onClick={handleSave}
      >
        <svg 
          className={`w-4 h-4 ${isSaved ? 'fill-current' : 'fill-none stroke-current'}`}
          viewBox="0 0 24 24" 
          strokeWidth="2"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        {isSaved ? 'Saved' : 'Save'}
      </Button>
    </div>
  )
}

export default ShareSaveButtons