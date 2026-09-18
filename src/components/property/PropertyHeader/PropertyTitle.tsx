'use client'

import { Property } from '@/types'
import { StarRating } from '@/components/ui/Rating'

interface PropertyTitleProps {
  property: Property
}

const PropertyTitle: React.FC<PropertyTitleProps> = ({ property }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
        {property.title}
      </h1>
      
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <StarRating 
            rating={property.rating.overall} 
            size="sm" 
            showNumber={true}
          />
        </div>
        
        <button className="text-gray-700 hover:underline font-medium">
          {property.rating.count} reviews
        </button>
        
        {property.isGuestFavorite && (
          <div className="flex items-center gap-1 text-gray-700">
            <svg className="w-4 h-4 text-airbnb-red" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Guest favourite</span>
          </div>
        )}
        
        <button className="text-gray-700 hover:underline">
          {property.location.city}, {property.location.state}, {property.location.country}
        </button>
      </div>
    </div>
  )
}

export default PropertyTitle