'use client'

import { useState } from 'react'
import { PropertyReview, ReviewStats as ReviewStatsType } from '@/types'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import ReviewCard from './ReviewCard'
import ReviewStats from './ReviewStats'
import ReviewFilters from './ReviewFilters'

interface ReviewsModalProps {
  isOpen: boolean
  onClose: () => void
  reviews: PropertyReview[]
  stats: ReviewStatsType
}

const ReviewsModal: React.FC<ReviewsModalProps> = ({ 
  isOpen, 
  onClose, 
  reviews, 
  stats 
}) => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest'>('newest')

  const handleKeywordToggle = (keyword: string) => {
    setSelectedKeywords(prev => 
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    )
  }

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'highest':
        return b.rating - a.rating
      case 'lowest':
        return a.rating - b.rating
      default:
        return 0
    }
  })

  // Filter by keywords (simplified - in real app would use NLP/search)
  const filteredReviews = selectedKeywords.length > 0
    ? sortedReviews.filter(review => 
        selectedKeywords.some(keyword => 
          review.content.toLowerCase().includes(keyword.toLowerCase())
        )
      )
    : sortedReviews

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex h-full">
        {/* Left sidebar - Stats and filters */}
        <div className="w-1/3 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <div className="space-y-6">
            <ReviewStats stats={stats} totalReviews={reviews.length} />
            
            <div className="border-t border-gray-200 pt-6">
              <ReviewFilters 
                totalReviews={filteredReviews.length}
                selectedKeywords={selectedKeywords}
                onKeywordToggle={handleKeywordToggle}
              />
            </div>
          </div>
        </div>

        {/* Right content - Reviews list */}
        <div className="flex-1 flex flex-col">
          {/* Header with sort options */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''}
            </h2>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-airbnb-red focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="highest">Highest rated</option>
                <option value="lowest">Lowest rated</option>
              </select>
            </div>
          </div>

          {/* Reviews list */}
          <div className="flex-1 overflow-y-auto p-6">
            {filteredReviews.length > 0 ? (
              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <ReviewCard 
                    key={review.id} 
                    review={review} 
                    showFullContent={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Icon name="star" size={48} className="mx-auto mb-4 text-gray-300" />
                <p>No reviews match the selected filters.</p>
                <Button
                  variant="link"
                  onClick={() => setSelectedKeywords([])}
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ReviewsModal