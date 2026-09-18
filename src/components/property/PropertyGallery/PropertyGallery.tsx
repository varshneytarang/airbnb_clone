'use client'

import { useState } from 'react'
import { Property } from '@/types'
import PhotoGrid from './PhotoGrid'
import PhotoModal from './PhotoModal'

interface PropertyGalleryProps {
  property: Property
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [initialPhotoIndex, setInitialPhotoIndex] = useState(0)

  const handleShowAllPhotos = (index: number = 0) => {
    setInitialPhotoIndex(index)
    setIsModalOpen(true)
  }

  const handlePhotoClick = (index: number) => {
    setInitialPhotoIndex(index)
    setIsModalOpen(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PhotoGrid 
        images={property.images}
        onShowAllPhotos={handleShowAllPhotos}
        onPhotoClick={handlePhotoClick}
      />
      
      <PhotoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={property.images}
        initialIndex={initialPhotoIndex}
      />
    </div>
  )
}

export default PropertyGallery