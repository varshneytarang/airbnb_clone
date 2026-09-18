'use client'

import { useState } from 'react'
import { DateRange, GuestCount, BookingDetails, BookingStatus } from '@/types'

interface UseBookingReturn {
  dateRange: DateRange
  guests: GuestCount
  status: BookingStatus
  setDateRange: (dateRange: DateRange) => void
  setGuests: (guests: GuestCount) => void
  submitBooking: (propertyId: string) => Promise<void>
  resetBooking: () => void
}

const useBooking = (): UseBookingReturn => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null
  })

  const [guests, setGuests] = useState<GuestCount>({
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0
  })

  const [status, setStatus] = useState<BookingStatus>('draft')

  const submitBooking = async (propertyId: string) => {
    setStatus('confirmed')
    
    // Mock API call
    try {
      console.log('Submitting booking:', {
        propertyId,
        dateRange,
        guests,
        status: 'confirmed'
      })
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, this would make an API call
      alert('Booking submitted successfully!')
      
    } catch (error) {
      console.error('Booking failed:', error)
      setStatus('draft')
      throw error
    }
  }

  const resetBooking = () => {
    setDateRange({ startDate: null, endDate: null })
    setGuests({ adults: 2, children: 0, infants: 0, pets: 0 })
    setStatus('draft')
  }

  return {
    dateRange,
    guests,
    status,
    setDateRange,
    setGuests,
    submitBooking,
    resetBooking
  }
}

export default useBooking