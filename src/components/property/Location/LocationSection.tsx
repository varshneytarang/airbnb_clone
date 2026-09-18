'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface LocationSectionProps {
  location: {
    city: string
    state: string
    country: string
  }
  description?: string
}

const LocationSection: React.FC<LocationSectionProps> = ({ 
  location, 
  description 
}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">Where you'll be</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {location.city}, {location.state}, {location.country}
        </h3>
        
        {/* Map placeholder */}
        <div className="relative mb-6">
          <div className="w-full h-80 bg-gray-100 rounded-lg border border-gray-200 overflow-hidden relative">
            {/* Map background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
              {/* Grid pattern to simulate map */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-gray-300"></div>
                  ))}
                </div>
              </div>
              
              {/* Location marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                {/* Location label */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                  {location.city}
                </div>
              </div>
              
              {/* Nearby areas simulation */}
              <div className="absolute top-1/4 right-1/4 transform translate-x-2 -translate-y-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                  Beach
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/3 transform -translate-x-2 translate-y-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                  Market
                </div>
              </div>
            </div>
            
            {/* Copyright notice */}
            <div className="absolute bottom-2 left-2 text-xs text-gray-500">
              © 2026 Map Data
            </div>
          </div>
          
          {/* Map controls placeholder */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded border shadow-sm flex items-center justify-center hover:bg-gray-50">
              <span className="text-lg font-bold text-gray-600">+</span>
            </button>
            <button className="w-10 h-10 bg-white rounded border shadow-sm flex items-center justify-center hover:bg-gray-50">
              <span className="text-lg font-bold text-gray-600">−</span>
            </button>
          </div>
          
          {/* Layers control */}
          <div className="absolute bottom-4 left-4">
            <button className="px-3 py-2 bg-white rounded border shadow-sm text-sm hover:bg-gray-50">
              <Icon name="sparkles" size={16} className="inline mr-1" />
              Layers
            </button>
          </div>
        </div>
        
        {/* Location info */}
        <div className="text-sm text-gray-600 mb-6">
          Exact location will be provided after booking.
        </div>
        
        {/* Neighbourhood highlights */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Neighbourhood highlights</h4>
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              {description || `Located in the heart of ${location.city}, this property offers a peaceful stay with easy access to beaches, cafés, and popular attractions.`}
            </p>
            
            {!showMore && (
              <Button
                variant="link"
                className="p-0 font-semibold text-black underline hover:no-underline"
                onClick={() => setShowMore(true)}
              >
                Show more
              </Button>
            )}
            
            {showMore && (
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  The area is known for its vibrant local culture, with numerous restaurants serving authentic Goan cuisine just steps away. 
                  The famous Candolim Beach is within walking distance, offering pristine sands and water sports activities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Public transportation is easily accessible, with regular bus services connecting to other parts of Goa. 
                  The location provides the perfect balance between tranquility and accessibility to local attractions.
                </p>
                <Button
                  variant="link"
                  className="p-0 font-semibold text-black underline hover:no-underline"
                  onClick={() => setShowMore(false)}
                >
                  Show less
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationSection