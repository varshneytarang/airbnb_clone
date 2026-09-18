'use client'

import { PropertyImage } from '@/types'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { useIntersectionObserver } from '@/hooks'

interface PhotoGridProps {
  images: PropertyImage[]
  onShowAllPhotos: (index?: number) => void
  onPhotoClick: (index: number) => void
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ images, onShowAllPhotos, onPhotoClick }) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px'
  })

  // Display maximum 5 images in the grid
  const displayImages = images.slice(0, 5)
  const remainingCount = Math.max(0, images.length - 5)

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`relative transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Mobile: Single column stack */}
      <div className="block md:hidden">
        <div className="space-y-2">
          {displayImages.map((image, index) => (
            <div key={image.id} className="relative aspect-[4/3] group overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                onClick={() => onPhotoClick(index)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              
              {/* Show remaining count overlay on last image */}
              {index === displayImages.length - 1 && remainingCount > 0 && (
                <div 
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer hover:bg-opacity-60 transition-all duration-300"
                  onClick={() => onShowAllPhotos(index)}
                >
                  <div className="text-center">
                    <div className="text-white font-semibold text-lg mb-1">
                      +{remainingCount}
                    </div>
                    <div className="text-white text-sm opacity-90">
                      more photos
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Airbnb grid layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[400px] rounded-xl overflow-hidden">
          {/* Main image - left half, full height */}
          {displayImages[0] && (
            <div className="col-span-2 row-span-2 relative group overflow-hidden">
              <img
                src={displayImages[0].url}
                alt={displayImages[0].alt}
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                onClick={() => onPhotoClick(0)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          )}
          
          {/* Top right image */}
          {displayImages[1] && (
            <div className="col-span-1 row-span-1 relative group overflow-hidden">
              <img
                src={displayImages[1].url}
                alt={displayImages[1].alt}
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                onClick={() => onPhotoClick(1)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          )}
          
          {/* Top far right image */}
          {displayImages[2] && (
            <div className="col-span-1 row-span-1 relative group overflow-hidden">
              <img
                src={displayImages[2].url}
                alt={displayImages[2].alt}
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                onClick={() => onPhotoClick(2)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          )}
          
          {/* Bottom right image */}
          {displayImages[3] && (
            <div className="col-span-1 row-span-1 relative group overflow-hidden">
              <img
                src={displayImages[3].url}
                alt={displayImages[3].alt}
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                onClick={() => onPhotoClick(3)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          )}
          
          {/* Bottom far right image - with remaining count if applicable */}
          {displayImages[4] && (
            <div className="col-span-1 row-span-1 relative group overflow-hidden">
              <img
                src={displayImages[4].url}
                alt={displayImages[4].alt}
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                onClick={() => onPhotoClick(4)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              
              {/* Show remaining count overlay if there are more photos */}
              {remainingCount > 0 && (
                <div 
                  className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all duration-300 group"
                  onClick={(e) => {
                    e.stopPropagation()
                    onShowAllPhotos(4)
                  }}
                >
                  <div className="text-center">
                    <div className="text-white font-semibold text-lg group-hover:scale-105 transition-transform duration-200 mb-1">
                      +{remainingCount}
                    </div>
                    <div className="text-white text-sm opacity-90">
                      more
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Show all photos button */}
      <Button
        variant="secondary"
        className="absolute bottom-4 right-4 flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 z-10"
        onClick={() => onShowAllPhotos(0)}
      >
        <Icon name="sparkles" size={16} />
        <span className="hidden sm:inline">Show all</span> {images.length} photos
      </Button>
    </div>
  )
}

export default PhotoGrid