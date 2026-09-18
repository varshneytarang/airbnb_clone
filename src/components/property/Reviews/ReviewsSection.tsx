'use client'

import { useState } from 'react'
import { PropertyReview, ReviewStats as ReviewStatsType } from '@/types'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import ReviewCard from './ReviewCard'
import ReviewsModal from './ReviewsModal'

interface ReviewsSectionProps {
  reviews: PropertyReview[]
  stats: ReviewStatsType
  isGuestFavorite?: boolean
  maxDisplayed?: number
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ 
  reviews, 
  stats, 
  isGuestFavorite = false,
  maxDisplayed = 6 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const displayedReviews = reviews.slice(0, maxDisplayed)
  const hasMoreReviews = reviews.length > maxDisplayed

  const reviewMentions = [
    { label: 'Comfort', count: 6, image: '/api/placeholder/20/20' },
    { label: 'Accuracy', count: 5, image: '/api/placeholder/20/20' },
    { label: 'Hot tub', count: 5, image: '/api/placeholder/20/20' },
    { label: 'Condition', count: 4, image: '/api/placeholder/20/20' },
    { label: 'Hospitality', count: 8, image: '/api/placeholder/20/20' },
    { label: 'Cleanliness', count: 4, image: '/api/placeholder/20/20' },
    { label: 'Amenities', count: 2, image: '/api/placeholder/20/20' },
    { label: 'Decor', count: 2, image: '/api/placeholder/20/20' },
    { label: 'Indoor spaces', count: 2, image: '/api/placeholder/20/20' },
    { label: 'Location', count: 2, image: '/api/placeholder/20/20' }
  ]

  const categoryRatings = [
    { label: 'Cleanliness', rating: stats.cleanliness, icon: 'cleanliness' },
    { label: 'Accuracy', rating: stats.accuracy, icon: 'accuracy' },
    { label: 'Check-in', rating: stats.checkIn, icon: 'checkin' },
    { label: 'Communication', rating: stats.communication, icon: 'communication' },
    { label: 'Location', rating: stats.location, icon: 'location' },
    { label: 'Value', rating: stats.value, icon: 'value' }
  ]

  return (
    <section className="py-12 border-t border-gray-200">
      {/* Guest Favorite Header */}
      {isGuestFavorite && (
        <div className="text-center py-2 pb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=110&h=110&fit=crop" 
              alt="Laurel left" 
              className="h-28"
            />
            <div className="text-8xl font-medium tracking-tight">{stats.overall}</div>
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=110&h=110&fit=crop" 
              alt="Laurel right" 
              className="h-28 scale-x-[-1]"
            />
          </div>
          <div className="text-2xl font-medium mb-2">Guest favourite</div>
          <div className="text-gray-600 text-base max-w-md mx-auto leading-snug mb-4">
            This home is a guest favourite based on ratings, reviews and reliability
          </div>
          <button className="text-sm font-medium underline">
            How reviews work
          </button>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-7 gap-0 py-2 pb-10 lg:grid-cols-7 md:grid-cols-2">
        {/* Overall Rating */}
        <div className="px-6 lg:px-6 md:py-2 md:px-0">
          <div className="text-sm font-medium mb-3">Overall rating</div>
          <div className="flex flex-col gap-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="grid grid-cols-[8px_1fr] gap-2 items-center">
                <span className="text-xs">{rating}</span>
                <div className="h-1 bg-gray-200 rounded overflow-hidden">
                  <div 
                    className="h-full bg-black"
                    style={{ 
                      width: `${rating === 5 ? '95%' : rating === 4 ? '5%' : '0%'}` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Ratings */}
        {categoryRatings.map((category, index) => (
          <div key={category.label} className="px-6 border-l border-gray-300 lg:px-6 md:py-2 md:px-0 md:border-l-0">
            <div className="text-sm font-medium mb-3">{category.label}</div>
            <div className="text-lg font-medium mb-2">{category.rating}</div>
            <Icon name={category.icon} size={32} className="text-gray-700" />
          </div>
        ))}
      </div>

      {/* Review Mentions */}
      <div className="flex gap-3 overflow-x-auto pb-1 mb-10" style={{ scrollbarWidth: 'none' }}>
        {reviewMentions.map((mention, index) => (
          <button 
            key={index} 
            className="flex-shrink-0 flex items-center gap-2 border border-gray-300 rounded-2xl py-3 px-4 text-sm font-medium bg-white hover:bg-gray-50"
          >
            <div className="w-5 h-5 bg-gray-200 rounded flex-shrink-0" />
            {mention.label}
            <span className="text-gray-500 font-normal">{mention.count}</span>
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-8 pb-10">
        {displayedReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Show All Reviews Button */}
      {hasMoreReviews && (
        <button 
          className="border border-black bg-white rounded-xl py-3 px-6 text-base font-medium hover:bg-gray-50 transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          Show all {reviews.length} reviews
        </button>
      )}

      {/* Reviews Modal */}
      <ReviewsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reviews={reviews}
        stats={stats}
      />

      <style jsx global>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default ReviewsSection