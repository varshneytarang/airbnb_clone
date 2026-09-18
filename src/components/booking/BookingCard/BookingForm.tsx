'use client'

import { useState } from 'react'
import { DateRange, GuestCount, BookingPricing } from '@/types'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import DatePicker from './DatePicker'
import GuestSelector from './GuestSelector'
import PriceBreakdown from './PriceBreakdown'
import { calculateNights } from '@/utils/formatters'
import { calculateBookingPrice } from '@/utils/priceCalculator'
import { useLoadingState, useLocalStorage } from '@/hooks'

interface BookingFormProps {
  basePrice: number
  maxGuests: number
  onReserve: (booking: {
    dateRange: DateRange
    guests: GuestCount
    pricing: BookingPricing
  }) => void
}

const BookingForm: React.FC<BookingFormProps> = ({ 
  basePrice, 
  maxGuests, 
  onReserve 
}) => {
  // Persist guest selection in localStorage
  const [storedGuests, setStoredGuests] = useLocalStorage<GuestCount>('airbnb-guests', {
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0
  })

  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null
  })
  
  const [guests, setGuests] = useState<GuestCount>(storedGuests)
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false)
  const { isLoading, executeAsync } = useLoadingState()

  // Update localStorage when guests change
  const handleGuestChange = (newGuests: GuestCount) => {
    setGuests(newGuests)
    setStoredGuests(newGuests)
  }

  // Calculate pricing
  const nights = dateRange.startDate && dateRange.endDate 
    ? calculateNights(dateRange.startDate, dateRange.endDate)
    : 5 // Default for display

  const pricing = calculateBookingPrice(basePrice, nights)

  const canReserve = dateRange.startDate && dateRange.endDate && guests.adults > 0 && !isLoading

  const handleReserve = async () => {
    if (canReserve) {
      await executeAsync(async () => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        onReserve({
          dateRange,
          guests,
          pricing
        })
      })
    }
  }

  return (
    <div className="space-y-4">
      {/* Date selection */}
      <div className="relative">
        <DatePicker 
          dateRange={dateRange}
          onDateChange={setDateRange}
        />
      </div>

      {/* Guest selection */}
      <GuestSelector
        guests={guests}
        maxGuests={maxGuests}
        onGuestChange={handleGuestChange}
      />

      {/* Reserve button */}
      <Button
        className="w-full py-3 text-lg font-semibold relative"
        disabled={!canReserve}
        onClick={handleReserve}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            Reserving...
          </>
        ) : (
          'Reserve'
        )}
      </Button>

      {/* No charge message */}
      <p className="text-center text-sm text-gray-600">
        You won't be charged yet
      </p>

      {/* Price breakdown toggle */}
      <button
        className="w-full flex items-center justify-between py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
        onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
      >
        <span className="text-gray-700">
          Price breakdown
        </span>
        <Icon 
          name={showPriceBreakdown ? 'chevron-up' : 'chevron-down'} 
          size={16} 
          className="text-gray-600" 
        />
      </button>

      {/* Price breakdown */}
      <div className={`transition-all duration-300 overflow-hidden ${
        showPriceBreakdown ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <PriceBreakdown 
          pricing={pricing}
          showBreakdown={true}
        />
      </div>
      
      {/* Total (always visible) */}
      {!showPriceBreakdown && (
        <PriceBreakdown 
          pricing={pricing}
          showBreakdown={false}
        />
      )}
    </div>
  )
}

export default BookingForm