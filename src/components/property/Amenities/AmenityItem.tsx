'use client'

import { Amenity } from '@/types'
import { Icon } from '@/components/ui/Icon'

interface AmenityItemProps {
  amenity: Amenity
  showUnavailable?: boolean
}

const AmenityItem: React.FC<AmenityItemProps> = ({ amenity, showUnavailable = false }) => {
  const getAmenityIcon = (iconName: string) => {
    // Map amenity icons to our available icons
    const iconMap: { [key: string]: string } = {
      kitchen: 'fire',
      wifi: 'wifi',
      desk: 'sparkles',
      parking: 'key',
      pool: 'sparkles',
      'hot-tub': 'fire',
      pet: 'heart',
      ac: 'sparkles',
      tv: 'tv',
      washer: 'sparkles'
    }
    
    return iconMap[iconName] || 'sparkles'
  }

  if (!amenity.available && !showUnavailable) {
    return null
  }

  return (
    <div className={`flex items-center gap-4 py-3 ${!amenity.available ? 'opacity-50' : ''}`}>
      <div className="flex-shrink-0">
        <Icon 
          name={getAmenityIcon(amenity.icon)} 
          size={24} 
          className={amenity.available ? 'text-gray-700' : 'text-gray-400'} 
        />
      </div>
      
      <div className="flex-1">
        <span className={`${amenity.available ? 'text-gray-900' : 'text-gray-500'}`}>
          {amenity.name}
        </span>
        {!amenity.available && (
          <span className="ml-2 text-sm text-gray-400">(Not available)</span>
        )}
      </div>
      
      {!amenity.available && showUnavailable && (
        <div className="flex-shrink-0">
          <Icon name="close" size={16} className="text-gray-400" />
        </div>
      )}
    </div>
  )
}

export default AmenityItem