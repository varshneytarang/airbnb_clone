export interface Property {
  id: string
  title: string
  location: {
    city: string
    state: string
    country: string
    exactLocation?: string
  }
  type: string // "Entire serviced apartment"
  capacity: {
    guests: number
    bedrooms: number
    beds: number
    bathrooms: number
  }
  price: {
    basePrice: number
    currency: string
    nights: number
    totalPrice: number
  }
  rating: {
    overall: number
    count: number
  }
  images: PropertyImage[]
  host: Host
  description: string
  amenities: Amenity[]
  houseRules: HouseRules
  cancellationPolicy: string
  isGuestFavorite: boolean
  sleepingArrangements: SleepingArrangement[]
  highlights: PropertyHighlight[]
}

export interface PropertyImage {
  id: string
  url: string
  alt: string
  category?: 'living-room' | 'bedroom' | 'kitchen' | 'bathroom' | 'exterior' | 'pool' | 'gym' | 'additional'
}

export interface Host {
  id: string
  name: string
  avatar: string
  yearsHosting: number
  responseRate: number
  responseTime: string
  school?: string
  birthDecade?: string
  coHosts?: CoHost[]
}

export interface CoHost {
  id: string
  name: string
  avatar?: string
}

export interface Amenity {
  id: string
  name: string
  icon: string
  category: 'bathroom' | 'bedroom-laundry' | 'entertainment' | 'family' | 'heating-cooling' | 'home-safety' | 'internet-office' | 'kitchen-dining' | 'location-features' | 'outdoor' | 'parking-facilities' | 'services'
  available: boolean
}

export interface SleepingArrangement {
  id: string
  room: string
  bedType: string
  count: number
}

export interface PropertyHighlight {
  id: string
  title: string
  description: string
  icon: string
}

export interface HouseRules {
  checkIn: string
  checkOut: string
  maxGuests: number
  smoking?: boolean
  parties?: boolean
  pets?: boolean
  additionalRules?: string[]
}

export interface PropertyReview {
  id: string
  user: ReviewUser
  rating: number
  date: string
  content: string
  categories?: ReviewCategories
}

export interface ReviewUser {
  id: string
  name: string
  avatar?: string
  memberSince: string
}

export interface ReviewCategories {
  comfort?: number
  accuracy?: number
  hotTub?: number
  condition?: number
  hospitality?: number
  cleanliness?: number
  amenities?: number
  decor?: number
  indoorSpaces?: number
  location?: number
}

export interface ReviewStats {
  overall: number
  cleanliness: number
  accuracy: number
  checkIn: number
  communication: number
  location: number
  value: number
  distribution: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
}