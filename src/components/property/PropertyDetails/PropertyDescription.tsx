'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface PropertyDescriptionProps {
  description: string
  maxLength?: number
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({ 
  description, 
  maxLength = 300 
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = description.length > maxLength
  
  const displayText = isExpanded || !shouldTruncate 
    ? description 
    : description.substring(0, maxLength) + '...'

  return (
    <div className="py-6 border-b border-gray-200">
      <div className="mb-4">
        <p className="text-gray-600 text-sm bg-blue-50 border border-blue-200 rounded-lg p-3">
          <Icon name="sparkles" size={16} className="inline mr-2 text-blue-600" />
          Some info has been automatically translated.{' '}
          <button className="text-blue-600 hover:underline font-medium">
            Show original
          </button>
        </p>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {displayText}
        </p>
        
        {shouldTruncate && (
          <Button
            variant="link"
            className="flex items-center gap-2 p-0 font-semibold text-gray-900 hover:text-gray-700"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show less' : 'Show more'}
            <Icon 
              name={isExpanded ? 'chevron-up' : 'chevron-down'} 
              size={16} 
            />
          </Button>
        )}
      </div>
    </div>
  )
}

export default PropertyDescription