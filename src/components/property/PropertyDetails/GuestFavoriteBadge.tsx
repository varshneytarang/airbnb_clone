'use client'

import { Property } from '@/types'
import { StarRating } from '@/components/ui/Rating'

interface GuestFavoriteBadgeProps {
  property: Property
}

const GuestFavoriteBadge: React.FC<GuestFavoriteBadgeProps> = ({ property }) => {
  if (!property.isGuestFavorite) return null

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Guest favourite</h3>
          <p className="text-sm text-gray-600">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{property.rating.overall}</div>
          <StarRating 
            rating={property.rating.overall} 
            size="sm" 
            showNumber={false}
          />
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{property.rating.count}</div>
          <div className="text-sm text-gray-600">Reviews</div>
        </div>
      </div>
    </div>
  )
}

export default GuestFavoriteBadge