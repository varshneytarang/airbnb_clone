'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'

const UserMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" className="text-sm font-semibold text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-full">
        Become a Host
      </Button>
      
      <div className="relative">
        <button
          className="flex items-center gap-2 border border-gray-300 rounded-full py-2 pl-3 pr-2 hover:shadow-md transition-shadow"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name="menu" size={16} />
          <Icon name="user" size={20} className="text-gray-500" />
        </button>
        
        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <button className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm font-medium">
              Sign up
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm">
              Log in
            </button>
            <hr className="my-2" />
            <button className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm">
              Gift cards
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm">
              Airbnb your home
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm">
              Help Center
            </button>
          </div>
        )}
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  )
}

export default UserMenu