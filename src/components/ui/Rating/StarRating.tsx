'use client'

import { RatingProps } from '@/types'
import { Icon } from '../Icon'
import { clsx } from 'clsx'

const StarRating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showNumber = true,
  readOnly = true,
  onChange
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  const handleStarClick = (starRating: number) => {
    if (!readOnly && onChange) {
      onChange(starRating)
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, index) => {
          const starValue = index + 1
          const isFilled = starValue <= rating
          const isPartial = starValue - 1 < rating && rating < starValue
          
          return (
            <button
              key={index}
              className={clsx(
                'relative',
                !readOnly && 'hover:scale-110 transition-transform cursor-pointer',
                readOnly && 'cursor-default'
              )}
              onClick={() => handleStarClick(starValue)}
              disabled={readOnly}
            >
              <svg
                className={clsx(
                  sizeClasses[size],
                  isFilled ? 'text-airbnb-red' : 'text-gray-300'
                )}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              
              {/* Partial star overlay */}
              {isPartial && (
                <svg
                  className={clsx(
                    'absolute top-0 left-0 text-airbnb-red',
                    sizeClasses[size]
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{
                    clipPath: `polygon(0 0, ${((rating - (starValue - 1)) * 100)}% 0, ${((rating - (starValue - 1)) * 100)}% 100%, 0 100%)`
                  }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )}
            </button>
          )
        })}
      </div>
      
      {showNumber && (
        <span className={clsx(
          'font-medium text-gray-900 ml-1',
          textSizeClasses[size]
        )}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}

export default StarRating