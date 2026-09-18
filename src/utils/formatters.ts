import { format, differenceInDays } from 'date-fns'

export const formatPrice = (price: number, currency: string = '₹'): string => {
  return `${currency}${price.toLocaleString()}`
}

export const formatDate = (date: Date, formatStr: string = 'dd/MM/yyyy'): string => {
  return format(date, formatStr)
}

export const formatDateRange = (startDate: Date, endDate: Date): string => {
  const start = format(startDate, 'dd MMM')
  const end = format(endDate, 'dd MMM yyyy')
  return `${start} - ${end}`
}

export const calculateNights = (checkIn: Date, checkOut: Date): number => {
  return differenceInDays(checkOut, checkIn)
}

export const formatRating = (rating: number, decimals: number = 1): string => {
  return rating.toFixed(decimals)
}

export const formatGuestCount = (guests: { adults: number; children: number; infants: number }): string => {
  const total = guests.adults + guests.children
  if (total === 1) return '1 guest'
  return `${total} guests`
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const formatHostingDuration = (years: number): string => {
  if (years === 1) return '1 year hosting'
  return `${years} years hosting`
}