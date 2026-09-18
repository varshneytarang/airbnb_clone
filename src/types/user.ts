import type { GuestCount } from './booking'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  memberSince: Date
  isHost: boolean
  verified: boolean
  preferences?: UserPreferences
}

export interface UserPreferences {
  language: string
  currency: string
  timezone: string
}

export interface SearchFilters {
  location?: string
  checkIn?: Date
  checkOut?: Date
  guests?: GuestCount
  priceRange?: {
    min: number
    max: number
  }
  propertyTypes?: string[]
  amenities?: string[]
}