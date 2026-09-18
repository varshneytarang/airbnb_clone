'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { PropertyImage } from '@/types'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface PhotoModalProps {
  isOpen: boolean
  onClose: () => void
  images: PropertyImage[]
  initialIndex?: number
}

const PhotoModal: React.FC<PhotoModalProps> = ({ 
  isOpen, 
  onClose, 
  images, 
  initialIndex = 0 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [viewMode, setViewMode] = useState<'slideshow' | 'grid'>('slideshow')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  // Reset current index when modal opens
  useEffect(() => {
    if (isOpen && initialIndex !== undefined) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Add a class to prevent background scrolling
      document.documentElement.classList.add('modal-open')
    } else {
      document.body.style.overflow = 'unset'
      document.documentElement.classList.remove('modal-open')
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.documentElement.classList.remove('modal-open')
    }
  }, [isOpen])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          e.preventDefault()
          goToPrevious()
          break
        case 'ArrowRight':
          e.preventDefault()
          goToNext()
          break
        case 'g':
        case 'G':
          e.preventDefault()
          setViewMode(prev => prev === 'grid' ? 'slideshow' : 'grid')
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, onClose])

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [images.length, isTransitioning])

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [images.length, isTransitioning])

  const switchToSlideshow = (index: number) => {
    setCurrentIndex(index)
    setViewMode('slideshow')
  }

  // Get category name for display
  const getCategoryName = (category?: string) => {
    if (!category) return 'All spaces'
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  // Group images by category for better organization
  const imagesByCategory = images.reduce((acc, image, index) => {
    const category = image.category || 'additional'
    if (!acc[category]) acc[category] = []
    acc[category].push({ ...image, globalIndex: index })
    return acc
  }, {} as Record<string, (PropertyImage & { globalIndex: number })[]>)

  // Sort categories in a meaningful order
  const categoryOrder = ['living-room', 'bedroom', 'kitchen', 'bathroom', 'pool', 'gym', 'exterior', 'additional']
  const sortedCategories = Object.keys(imagesByCategory).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a)
    const indexB = categoryOrder.indexOf(b)
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB)
  })

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-white photo-modal-backdrop photo-modal">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="bg-white border-b border-gray-100 p-4 lg:p-6">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                  <Icon name="arrow-left" size={20} />
                </div>
                <span className="hidden md:inline font-medium">Close</span>
              </button>

              {/* View Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setViewMode('slideshow')}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      viewMode === 'slideshow' 
                        ? 'bg-white text-black shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Photos
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-white text-black shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    All {images.length}
                  </button>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                    <Icon name="share" size={18} />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                    <Icon name="heart" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full h-full pt-24 pb-4 bg-white">
          {viewMode === 'slideshow' ? (
            /* Slideshow View */
            <div className="flex h-full bg-white">
              {/* Main Image Area */}
              <div className="flex-1 flex items-center justify-center relative px-4 lg:px-8 bg-gray-50">
                <div className="relative w-full h-full flex items-center justify-center">
                  {images[currentIndex] && (
                    <div 
                      className={`relative transition-all duration-300 ${
                        isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                      }`}
                    >
                      <img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].alt}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-xl photo-modal-image"
                      />
                      
                      {/* Image Category Tag */}
                      {images[currentIndex].category && (
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-full text-sm font-medium shadow-sm">
                          {getCategoryName(images[currentIndex].category)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={goToPrevious}
                        disabled={isTransitioning}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-800 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                      >
                        <Icon name="chevron-left" size={24} />
                      </button>
                      
                      <button
                        onClick={goToNext}
                        disabled={isTransitioning}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-800 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                      >
                        <Icon name="chevron-right" size={24} />
                      </button>
                    </>
                  )}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnail Sidebar - Desktop Only */}
              <div className="hidden xl:block w-80 border-l border-gray-200 bg-white thumbnail-sidebar">
                <div className="p-6 h-full flex flex-col bg-gray-50">
                  <h3 className="text-gray-900 font-semibold text-lg mb-4 border-b border-gray-200 pb-3">
                    All photos ({images.length})
                  </h3>
                  
                  <div className="flex-1 overflow-y-auto space-y-3 photo-modal-scrollbar">
                    {images.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`relative w-full aspect-square rounded-lg overflow-hidden transition-all thumbnail-item bg-white border ${
                          index === currentIndex 
                            ? 'active ring-2 ring-airbnb-red shadow-lg scale-105 border-airbnb-red' 
                            : 'border-gray-200 opacity-70 hover:opacity-100 hover:scale-105 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        {index === currentIndex && (
                          <div className="absolute inset-0 bg-airbnb-red/10 flex items-center justify-center">
                            <div className="w-3 h-3 bg-airbnb-red rounded-full shadow-lg"></div>
                          </div>
                        )}
                        
                        {/* Thumbnail number */}
                        <div className="absolute top-2 left-2 bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium shadow-sm">
                          {index + 1}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Grid View */
            <div 
              ref={scrollContainerRef}
              className="h-full overflow-y-auto px-4 lg:px-8 photo-modal-scrollbar bg-gray-50"
            >
              <div className="max-w-7xl mx-auto pb-8">
                {/* Category Sections */}
                {sortedCategories.map((category, categoryIndex) => {
                  const categoryImages = imagesByCategory[category]
                  return (
                    <div 
                      key={category} 
                      className="mb-12 category-section"
                      style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                    >
                      <h2 className="text-gray-900 font-semibold text-xl mb-6 capitalize">
                        {getCategoryName(category)} ({categoryImages.length})
                      </h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {categoryImages.map((image) => (
                          <div 
                            key={image.id}
                            ref={(el) => { imageRefs.current[image.globalIndex] = el }}
                            className="relative aspect-square group cursor-pointer photo-grid-item bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md"
                            onClick={() => switchToSlideshow(image.globalIndex)}
                          >
                            <img
                              src={image.url}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-all group-hover:scale-105"
                            />
                            
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg" />
                            
                            {/* Image number overlay */}
                            <div className="absolute top-3 left-3 bg-white/90 text-gray-800 px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                              {image.globalIndex + 1}
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl border border-gray-200">
                                <Icon name="sparkles" size={24} className="text-airbnb-red" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation - Only shown in slideshow mode */}
        {viewMode === 'slideshow' && (
          <div className="xl:hidden absolute bottom-4 left-0 right-0">
            <div className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-sm mx-4 rounded-full py-3 px-6 border border-gray-200 shadow-lg">
              <button
                onClick={goToPrevious}
                disabled={isTransitioning}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="chevron-left" size={20} />
              </button>
              
              <span className="text-gray-800 font-medium text-sm">
                {currentIndex + 1} of {images.length}
              </span>
              
              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="chevron-right" size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Keyboard Shortcuts Hint - Desktop Only */}
        <div className="hidden lg:block absolute top-28 right-6 bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg text-sm space-y-1 keyboard-hint border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">←→</kbd>
            <span>Navigate</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">G</kbd>
            <span>Grid view</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white/20 rounded text-xs">ESC</kbd>
            <span>Close</span>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .modal-open {
          overflow: hidden;
        }
      `}</style>
    </>
  )
}

export default PhotoModal