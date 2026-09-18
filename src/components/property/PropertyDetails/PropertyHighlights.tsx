'use client'

import { PropertyHighlight } from '@/types'
import { Icon } from '@/components/ui/Icon'

interface PropertyHighlightsProps {
  highlights: PropertyHighlight[]
}

const PropertyHighlights: React.FC<PropertyHighlightsProps> = ({ highlights }) => {
  return (
    <div className="space-y-6 py-6 border-b border-gray-200">
      {highlights.map((highlight) => (
        <div key={highlight.id} className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <Icon name={highlight.icon} size={24} className="text-gray-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              {highlight.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {highlight.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertyHighlights