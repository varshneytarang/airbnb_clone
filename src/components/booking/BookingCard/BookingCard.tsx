'use client'

import { Property, DateRange, GuestCount, BookingPricing } from '@/types'
import { StarRating } from '@/components/ui/Rating'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'
import { formatPrice } from '@/utils/formatters'
import BookingForm from './BookingForm'

interface BookingCardProps {
  property: Property
  onReserve?: (booking: {
    dateRange: DateRange
    guests: GuestCount
    pricing: BookingPricing
  }) => void
}

const BookingCard: React.FC<BookingCardProps> = ({ property, onReserve }) => {
  const handleReserve = (booking: {
    dateRange: DateRange
    guests: GuestCount
    pricing: BookingPricing
  }) => {
    console.log('Booking submitted:', booking)
    alert('Booking functionality would be implemented here!')
    
    if (onReserve) {
      onReserve(booking)
    }
  }

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 sticky top-24">
      {/* Promotional banner */}
      <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
        <div className="flex items-center gap-2 mb-1">
          <Icon name="sparkles" size={16} className="text-green-600" />
          <span className="text-sm font-semibold text-green-800">
            Get 10% off your next stay.
          </span>
        </div>
        <p className="text-xs text-green-700">Terms apply</p>
        <button className="text-xs font-medium text-green-800 hover:underline mt-1">
          Claim
        </button>
      </div>

      {/* Price header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold text-gray-900">
            {formatPrice(property.price.basePrice, property.price.currency)}
          </span>
          <span className="text-gray-600">for {property.price.nights} nights</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <StarRating 
          rating={property.rating.overall} 
          size="sm" 
          showNumber={false}
        />
        <span className="text-sm font-medium text-gray-900">
          {property.rating.overall}
        </span>
        <span className="text-sm text-gray-600">·</span>
        <button className="text-sm text-gray-600 hover:underline">
          {property.rating.count} reviews
        </button>
      </div>

      {/* Booking form */}
      <BookingForm
        basePrice={property.price.basePrice}
        maxGuests={property.capacity.guests}
        onReserve={handleReserve}
      />

      {/* Cancellation policy */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="sparkles" size={16} className="text-gray-600" />
          <span className="text-sm text-gray-700">
            Free cancellation before 17 October
          </span>
        </div>
      </div>

      {/* Report listing */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <Icon name="heart" size={16} />
          Report this listing
        </button>
      </div>
    </div>
  )
}

export default BookingCard