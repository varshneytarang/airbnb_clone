'use client'

import { Property } from '@/types'
import PropertyOverview from './PropertyOverview'
import GuestFavoriteBadge from './GuestFavoriteBadge'
import HostInfo from './HostInfo'
import PropertyHighlights from './PropertyHighlights'
import PropertyDescription from './PropertyDescription'
import SleepingArrangements from './SleepingArrangements'
import CalendarSection from './CalendarSection'
import { AmenitiesList } from '@/components/property/Amenities'
import { ReviewsSection } from '@/components/property/Reviews'
import { LocationSection } from '@/components/property/Location'
import { HostProfileSection } from '@/components/property/HostProfile'
import { ThingsToKnowSection } from '@/components/property/ThingsToKnow'
import { SimilarListingsSection } from '@/components/property/SimilarListings'
import { BookingCard } from '@/components/booking/BookingCard'
import { mockReviews, mockReviewStats } from '@/data/mockData'
import { useIsMobile } from '@/hooks'

interface PropertyDetailsProps {
  property: Property
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Mobile Layout - Single Column */}
        <PropertyOverview property={property} />
        
        {/* Mobile Booking Card - Above the fold */}
        <div className="sticky top-16 z-40 -mx-4 px-4 py-4 bg-white border-t border-b border-gray-200 shadow-sm">
          <BookingCard property={property} />
        </div>
        
        <HostInfo host={property.host} />
        <PropertyHighlights highlights={property.highlights} />
        {property.isGuestFavorite && <GuestFavoriteBadge property={property} />}
        <PropertyDescription description={property.description} />
        <SleepingArrangements arrangements={property.sleepingArrangements} />
        <AmenitiesList amenities={property.amenities} />
        <CalendarSection 
          nights={property.price.nights}
          checkIn={new Date('2026-10-18')}
          checkOut={new Date('2026-10-23')}
        />
        <ReviewsSection 
          reviews={mockReviews} 
          stats={mockReviewStats}
          isGuestFavorite={property.isGuestFavorite}
        />
        <LocationSection 
          location={property.location}
          description="Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions."
        />
        <HostProfileSection host={property.host} />
        <ThingsToKnowSection property={property} />
        <SimilarListingsSection />
      </div>
    )
  }

  // Desktop Layout - Two Columns
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Two-column section with sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main content - Left column */}
        <div className="lg:col-span-2 space-y-0">
          <PropertyOverview property={property} />
          <HostInfo host={property.host} />
          <PropertyHighlights highlights={property.highlights} />
          <PropertyDescription description={property.description} />
          <SleepingArrangements arrangements={property.sleepingArrangements} />
          <AmenitiesList amenities={property.amenities} />
          <CalendarSection 
            nights={property.price.nights}
            checkIn={new Date('2026-10-18')}
            checkOut={new Date('2026-10-23')}
          />
        </div>
        
        {/* Sidebar - Right column */}
        <div className="lg:col-span-1 space-y-6">
          <BookingCard property={property} />
          {property.isGuestFavorite && (
            <GuestFavoriteBadge property={property} />
          )}
        </div>
      </div>
      
      {/* Full-width sections below */}
      <div className="space-y-0">
        <ReviewsSection 
          reviews={mockReviews} 
          stats={mockReviewStats}
          isGuestFavorite={property.isGuestFavorite}
        />
        <LocationSection 
          location={property.location}
          description="Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions."
        />
        <HostProfileSection host={property.host} />
        <ThingsToKnowSection property={property} />
        <SimilarListingsSection />
      </div>
    </div>
  )
}

export default PropertyDetails