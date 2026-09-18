'use client'

import { Property } from '@/types'
import { StarRating } from '@/components/ui/Rating'

interface PropertyOverviewProps {
  property: Property
}

const PropertyOverview: React.FC<PropertyOverviewProps> = ({ property }) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {property.type} in {property.location.city}, {property.location.country}
        </h2>
        <p className="text-gray-600">
          {property.capacity.guests} guests · {property.capacity.bedrooms} bedroom{property.capacity.bedrooms !== 1 ? 's' : ''} · {property.capacity.beds} bed{property.capacity.beds !== 1 ? 's' : ''} · {property.capacity.bathrooms} bathroom{property.capacity.bathrooms !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  )
}

export default PropertyOverview