'use client'

import { useState } from 'react'
import { Amenity } from '@/types'
import { Button } from '@/components/ui/Button'
import AmenityItem from './AmenityItem'
import AmenitiesModal from './AmenitiesModal'

interface AmenitiesListProps {
  amenities: Amenity[]
  maxDisplayed?: number
}

const AmenitiesList: React.FC<AmenitiesListProps> = ({ 
  amenities, 
  maxDisplayed = 10 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter to only available amenities for the preview
  const availableAmenities = amenities.filter(amenity => amenity.available)
  const displayedAmenities = availableAmenities.slice(0, maxDisplayed)
  const remainingCount = Math.max(0, amenities.length - maxDisplayed)

  return (
    <div className="py-6 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        What this place offers
      </h3>
      
      {/* Grid of amenities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {displayedAmenities.map((amenity) => (
          <AmenityItem key={amenity.id} amenity={amenity} />
        ))}
      </div>
      
      {/* Show all amenities button */}
      {remainingCount > 0 && (
        <div className="mt-6">
          <Button
            variant="secondary"
            className="border-gray-900 text-gray-900 hover:bg-gray-50"
            onClick={() => setIsModalOpen(true)}
          >
            Show all {amenities.length} amenities
          </Button>
        </div>
      )}
      
      {/* Modal */}
      <AmenitiesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amenities={amenities}
      />
    </div>
  )
}

export default AmenitiesList