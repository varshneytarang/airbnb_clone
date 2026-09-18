'use client'

import { ReviewStats as ReviewStatsType } from '@/types'
import { formatRating } from '@/utils/formatters'

interface ReviewStatsProps {
  stats: ReviewStatsType
  totalReviews: number
}

const ReviewStats: React.FC<ReviewStatsProps> = ({ stats, totalReviews }) => {
  const categories = [
    { key: 'cleanliness', label: 'Cleanliness', value: stats.cleanliness },
    { key: 'accuracy', label: 'Accuracy', value: stats.accuracy },
    { key: 'checkIn', label: 'Check-in', value: stats.checkIn },
    { key: 'communication', label: 'Communication', value: stats.communication },
    { key: 'location', label: 'Location', value: stats.location },
    { key: 'value', label: 'Value', value: stats.value }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Rating distribution */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Overall rating</h3>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-3">
              <div className="text-sm font-medium w-4">{rating}</div>
              <div className="flex-1 bg-gray-200 rounded h-1">
                <div 
                  className="bg-black h-1 rounded transition-all duration-300"
                  style={{ 
                    width: `${Math.max(4, (stats.distribution[rating as keyof typeof stats.distribution] / totalReviews) * 100)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category ratings */}
      <div>
        <div className="grid grid-cols-1 gap-4">
          {categories.map((category) => (
            <div key={category.key} className="flex items-center justify-between">
              <span className="text-sm font-medium">{category.label}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">
                  {formatRating(category.value)}
                </span>
                <div className="w-24 bg-gray-200 rounded h-1">
                  <div 
                    className="bg-black h-1 rounded"
                    style={{ width: `${(category.value / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewStats