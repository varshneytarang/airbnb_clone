'use client'

import { PropertyReview } from '@/types'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

interface ReviewCardProps {
  review: PropertyReview
  showFullContent?: boolean
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, showFullContent = false }) => {
  const [isExpanded, setIsExpanded] = useState(showFullContent)
  const maxLength = 300
  const shouldTruncate = review.content.length > maxLength && !showFullContent
  
  const displayContent = isExpanded || !shouldTruncate 
    ? review.content 
    : review.content.substring(0, maxLength) + '...'

  // Generate random avatar background colors
  const avatarColors = [
    { bg: 'rgb(247, 237, 226)', color: 'rgb(193, 133, 42)' },
    { bg: 'rgb(239, 234, 247)', color: 'rgb(139, 111, 196)' },
    { bg: 'rgb(230, 247, 234)', color: 'rgb(76, 175, 80)' },
    { bg: 'rgb(255, 235, 238)', color: 'rgb(233, 30, 99)' }
  ]
  const colorIndex = review.user.name.charCodeAt(0) % avatarColors.length
  const avatarStyle = avatarColors[colorIndex]

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        {review.user.avatar ? (
          <img
            src={review.user.avatar}
            alt={review.user.name}
            className="w-11 h-11 rounded-full object-cover"
          />
        ) : (
          <div 
            className="w-11 h-11 rounded-full flex items-center justify-center text-lg font-medium"
            style={{ 
              backgroundColor: avatarStyle.bg, 
              color: avatarStyle.color 
            }}
          >
            {review.user.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <div className="text-base font-medium">{review.user.name}</div>
          <div className="text-sm text-gray-500">{review.user.memberSince}</div>
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-sm mb-1">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon 
              key={star} 
              name="star-solid" 
              size={10} 
              className={star <= review.rating ? "text-black" : "text-gray-300"} 
            />
          ))}
        </div>
        <span className="text-gray-500 mx-1">·</span>
        <span className="text-gray-500">{review.date}</span>
      </div>
      
      <div className="text-base leading-relaxed">
        {shouldTruncate && !isExpanded ? (
          <div 
            className="overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {review.content}
          </div>
        ) : (
          <div>{displayContent}</div>
        )}
        
        {shouldTruncate && (
          <button
            className="mt-2 text-base font-medium underline hover:no-underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </div>
  )
}

export default ReviewCard