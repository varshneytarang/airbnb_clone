'use client'

import { useState } from 'react'
import { Amenity } from '@/types'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import AmenityItem from './AmenityItem'

interface AmenitiesModalProps {
  isOpen: boolean
  onClose: () => void
  amenities: Amenity[]
}

const AmenitiesModal: React.FC<AmenitiesModalProps> = ({ 
  isOpen, 
  onClose, 
  amenities 
}) => {
  const [showUnavailable, setShowUnavailable] = useState(false)

  // Group amenities by category
  const groupedAmenities = amenities.reduce((acc, amenity) => {
    if (!acc[amenity.category]) {
      acc[amenity.category] = []
    }
    acc[amenity.category].push(amenity)
    return acc
  }, {} as Record<string, Amenity[]>)

  // Category display names
  const categoryNames: Record<string, string> = {
    'bathroom': 'Bathroom',
    'bedroom-laundry': 'Bedroom and laundry',
    'entertainment': 'Entertainment',
    'family': 'Family',
    'heating-cooling': 'Heating and cooling',
    'home-safety': 'Home safety',
    'internet-office': 'Internet and office',
    'kitchen-dining': 'Kitchen and dining',
    'location-features': 'Location features',
    'outdoor': 'Outdoor',
    'parking-facilities': 'Parking and facilities',
    'services': 'Services'
  }

  const filteredAmenities = showUnavailable 
    ? amenities 
    : amenities.filter(a => a.available)

  const availableCount = amenities.filter(a => a.available).length
  const unavailableCount = amenities.filter(a => !a.available).length

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="What this place offers">
      <div className="p-6">
        {/* Toggle buttons */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={!showUnavailable ? 'primary' : 'ghost'}
            onClick={() => setShowUnavailable(false)}
            className="flex items-center gap-2"
          >
            Available ({availableCount})
          </Button>
          <Button
            variant={showUnavailable ? 'primary' : 'ghost'}
            onClick={() => setShowUnavailable(true)}
            className="flex items-center gap-2"
          >
            All amenities ({amenities.length})
          </Button>
        </div>

        {/* Amenities by category */}
        <div className="space-y-8">
          {Object.entries(groupedAmenities).map(([category, categoryAmenities]) => {
            const visibleAmenities = showUnavailable 
              ? categoryAmenities 
              : categoryAmenities.filter(a => a.available)
            
            if (visibleAmenities.length === 0) return null

            return (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {categoryNames[category] || category}
                </h3>
                <div className="space-y-2">
                  {visibleAmenities.map((amenity) => (
                    <AmenityItem 
                      key={amenity.id} 
                      amenity={amenity} 
                      showUnavailable={showUnavailable}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Unavailable amenities summary */}
        {!showUnavailable && unavailableCount > 0 && (
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              {unavailableCount} amenity{unavailableCount !== 1 ? 'ies are' : ' is'} not available at this property.{' '}
              <button 
                className="text-gray-900 font-medium hover:underline"
                onClick={() => setShowUnavailable(true)}
              >
                See all amenities
              </button>
            </p>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default AmenitiesModal