'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface SimilarListing {
  id: string
  image: string
  title: string
  price: number
  rating: number
}

interface SimilarListingsSectionProps {
  listings?: SimilarListing[]
}

const SimilarListingsSection: React.FC<SimilarListingsSectionProps> = ({ 
  listings = defaultListings 
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const itemsPerPage = 5
  const totalPages = Math.ceil(listings.length / itemsPerPage)
  
  const scrollToPage = (page: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const itemWidth = container.scrollWidth / listings.length
      const scrollPosition = (page - 1) * itemsPerPage * itemWidth
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
      setCurrentPage(page)
    }
  }
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      scrollToPage(currentPage - 1)
    }
  }
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      scrollToPage(currentPage + 1)
    }
  }

  return (
    <section className="py-12 border-t border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium text-gray-900 m-0">More stays nearby</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 mr-1.5">
            {currentPage} / {totalPages}
          </span>
          <button
            className={`w-8 h-8 border border-gray-400 rounded-full bg-white flex items-center justify-center ${
              currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <Icon name="chevron-left" size={12} />
          </button>
          <button
            className={`w-8 h-8 border border-gray-400 rounded-full bg-white flex items-center justify-center ${
              currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <Icon name="chevron-right" size={12} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-1"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {listings.map((listing, index) => (
          <div 
            key={listing.id} 
            className="flex-shrink-0 min-w-0 w-72 sm:w-60 md:w-52 lg:w-48 xl:w-56"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full aspect-square object-cover rounded-xl block"
            />
            <div className="text-sm font-medium mt-2 text-gray-900 overflow-hidden" style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {listing.title}
            </div>
            <div className="text-sm mt-1 text-gray-900 flex items-center gap-1">
              ₹{listing.price.toLocaleString()}
              <Icon name="star-solid" size={10} className="text-black ml-1" />
              {listing.rating}
            </div>
          </div>
        ))}
      </div>
      
      {/* Hide scrollbar CSS */}
      <style jsx global>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

const defaultListings: SimilarListing[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop',
    title: 'Beautiful Studio with a view to die for',
    price: 23600,
    rating: 4.91
  },
  {
    id: '2', 
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop',
    title: 'NAQAB - 1bhk with private pool',
    price: 42218,
    rating: 4.95
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: 44506,
    rating: 4.94
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    title: 'The Tropical Studio | 5 mins to Beach',
    price: 22824,
    rating: 4.96
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1584622781808-6e5581d049a8?w=400&h=400&fit=crop',
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: 39942,
    rating: 4.95
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
    title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
    price: 45648,
    rating: 5.0
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop',
    title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
    price: 48786,
    rating: 4.93
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop',
    title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.',
    price: 22824,
    rating: 4.92
  }
]

export default SimilarListingsSection