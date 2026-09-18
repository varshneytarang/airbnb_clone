'use client'

import { Button } from '@/components/ui/Button'

interface ReviewFiltersProps {
  totalReviews: number
  selectedKeywords: string[]
  onKeywordToggle: (keyword: string) => void
}

const ReviewFilters: React.FC<ReviewFiltersProps> = ({ 
  totalReviews, 
  selectedKeywords, 
  onKeywordToggle 
}) => {
  // Mock keyword data - in a real app, this would come from analyzing reviews
  const keywords = [
    { name: 'Comfort', count: 6 },
    { name: 'Accuracy', count: 5 },
    { name: 'Hot tub', count: 5 },
    { name: 'Condition', count: 4 },
    { name: 'Hospitality', count: 8 },
    { name: 'Cleanliness', count: 4 },
    { name: 'Amenities', count: 2 },
    { name: 'Decor', count: 2 },
    { name: 'Indoor spaces', count: 2 },
    { name: 'Location', count: 2 }
  ]

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        {totalReviews} review{totalReviews !== 1 ? 's' : ''}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => {
          const isSelected = selectedKeywords.includes(keyword.name)
          return (
            <Button
              key={keyword.name}
              variant={isSelected ? 'primary' : 'secondary'}
              size="sm"
              className={`text-sm ${
                isSelected 
                  ? 'bg-gray-900 text-white border-gray-900' 
                  : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
              onClick={() => onKeywordToggle(keyword.name)}
            >
              {keyword.name}
              <span className="ml-1 text-xs">
                {keyword.count}
              </span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewFilters