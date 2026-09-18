'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

const MobileHeader: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Mobile Header Bar */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold text-airbnb-red">
            airbnb
          </div>
        </div>
        
        <Button
          variant="ghost"
          onClick={() => setIsSearchOpen(true)}
          className="flex-1 mx-4 justify-start bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2"
        >
          <Icon name="search" size={20} className="text-gray-600 mr-3" />
          <div className="text-left">
            <div className="text-sm font-medium text-gray-900">Where to?</div>
            <div className="text-xs text-gray-600">Anywhere • Any week • Add guests</div>
          </div>
        </Button>
        
        <Button variant="ghost" className="p-2 rounded-full">
          <Icon name="heart" size={24} className="text-gray-600" />
        </Button>
      </div>

      {/* Mobile Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Button
              variant="ghost"
              onClick={() => setIsSearchOpen(false)}
              className="p-2 rounded-full"
            >
              <Icon name="close" size={24} />
            </Button>
            <h2 className="text-lg font-semibold">Search</h2>
            <div className="w-10" />
          </div>
          
          <div className="p-4 space-y-6">
            {/* Where */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Where</h3>
              <div className="flex items-center bg-gray-100 rounded-lg p-4">
                <Icon name="search" size={20} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search destinations"
                  className="flex-1 bg-transparent outline-none placeholder-gray-500"
                />
              </div>
            </div>

            {/* When */}
            <div>
              <h3 className="text-lg font-semibold mb-4">When</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 border border-gray-300 rounded-lg text-left">
                  <div className="text-sm font-medium">Check in</div>
                  <div className="text-xs text-gray-500">Add dates</div>
                </button>
                <button className="p-4 border border-gray-300 rounded-lg text-left">
                  <div className="text-sm font-medium">Check out</div>
                  <div className="text-xs text-gray-500">Add dates</div>
                </button>
              </div>
            </div>

            {/* Who */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Who</h3>
              <button className="w-full p-4 border border-gray-300 rounded-lg text-left">
                <div className="text-sm font-medium">Guests</div>
                <div className="text-xs text-gray-500">Add guests</div>
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
            <Button className="w-full py-3">
              <Icon name="search" size={20} className="mr-2" />
              Search
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileHeader