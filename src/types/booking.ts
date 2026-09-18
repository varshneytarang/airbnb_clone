export interface BookingDetails {
  id?: string
  propertyId: string
  checkIn: Date
  checkOut: Date
  guests: GuestCount
  pricing: BookingPricing
  status: BookingStatus
}

export interface GuestCount {
  adults: number
  children: number
  infants: number
  pets: number
}

export interface BookingPricing {
  basePrice: number
  nights: number
  subtotal: number
  cleaningFee?: number
  serviceFee?: number
  taxes?: number
  total: number
  currency: string
}

export interface DateRange {
  startDate: Date | null
  endDate: Date | null
}

export type BookingStatus = 
  | 'draft'
  | 'confirmed'
  | 'cancelled'
  | 'completed'

export interface AvailabilityCalendar {
  month: number
  year: number
  days: CalendarDay[]
}

export interface CalendarDay {
  date: Date
  available: boolean
  price?: number
  isSelected?: boolean
  isInRange?: boolean
  isCheckIn?: boolean
  isCheckOut?: boolean
}