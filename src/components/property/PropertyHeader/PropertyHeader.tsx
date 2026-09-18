'use client'

import { Property } from '@/types'
import PropertyTitle from './PropertyTitle'
import ShareSaveButtons from './ShareSaveButtons'

interface PropertyHeaderProps {
  property: Property
}

const PropertyHeader: React.FC<PropertyHeaderProps> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <PropertyTitle property={property} />
        </div>
        
        <div className="flex-shrink-0">
          <ShareSaveButtons />
        </div>
      </div>
    </div>
  )
}

export default PropertyHeader