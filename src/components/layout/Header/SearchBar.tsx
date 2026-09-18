'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'

const SearchBar: React.FC = () => {
  const [activeField, setActiveField] = useState<string | null>(null)

  return (
    <div className="flex items-center border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 bg-white max-w-md">
      <button
        className={`flex-1 px-6 py-3 text-left rounded-l-full hover:bg-gray-100 transition-colors ${
          activeField === 'location' ? 'bg-gray-100' : ''
        }`}
        onClick={() => setActiveField(activeField === 'location' ? null : 'location')}
      >
        <div className="text-sm font-medium text-gray-900">Anywhere</div>
      </button>
      
      <div className="w-px h-6 bg-gray-300" />
      
      <button
        className={`flex-1 px-6 py-3 text-left hover:bg-gray-100 transition-colors ${
          activeField === 'dates' ? 'bg-gray-100' : ''
        }`}
        onClick={() => setActiveField(activeField === 'dates' ? null : 'dates')}
      >
        <div className="text-sm font-medium text-gray-900">Anytime</div>
      </button>
      
      <div className="w-px h-6 bg-gray-300" />
      
      <div className="flex items-center">
        <button
          className={`px-6 py-3 text-left hover:bg-gray-100 transition-colors ${
            activeField === 'guests' ? 'bg-gray-100' : ''
          }`}
          onClick={() => setActiveField(activeField === 'guests' ? null : 'guests')}
        >
          <div className="text-sm font-medium text-gray-600">Add guests</div>
        </button>
        
        <Button className="ml-2 mr-2 p-2 rounded-full bg-airbnb-red hover:bg-airbnb-red-dark">
          <Icon name="search" size={16} className="text-white" />
        </Button>
      </div>
    </div>
  )
}

export default SearchBar