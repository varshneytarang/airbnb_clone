import { Property, PropertyReview, ReviewStats, Amenity } from '@/types'

export const mockAmenities: Amenity[] = [
  // Kitchen and dining
  { id: "1", name: "Kitchen", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "2", name: "Fridge", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "3", name: "Freezer", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "4", name: "Microwave", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "5", name: "Cooking basics", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "6", name: "Crockery and cutlery", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "7", name: "Kettle", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "8", name: "Coffee", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "9", name: "Wine glasses", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "10", name: "Toaster", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "11", name: "Blender", icon: "kitchen", category: "kitchen-dining", available: true },
  { id: "12", name: "Cooker", icon: "kitchen", category: "kitchen-dining", available: true },
  
  // Internet and office
  { id: "13", name: "Wifi", icon: "wifi", category: "internet-office", available: true },
  { id: "14", name: "Dedicated workspace", icon: "desk", category: "internet-office", available: true },
  
  // Parking and facilities
  { id: "15", name: "Free parking on premises", icon: "parking", category: "parking-facilities", available: true },
  { id: "16", name: "Pool", icon: "pool", category: "parking-facilities", available: true },
  { id: "17", name: "Hot tub", icon: "hot-tub", category: "parking-facilities", available: true },
  { id: "18", name: "Gym", icon: "sparkles", category: "parking-facilities", available: true },
  
  // Services
  { id: "19", name: "Pets allowed", icon: "pet", category: "services", available: true },
  { id: "20", name: "Cleaning available during stay", icon: "sparkles", category: "services", available: true },
  { id: "21", name: "Long-term stays allowed", icon: "sparkles", category: "services", available: true },
  
  // Heating and cooling
  { id: "22", name: "Air conditioning", icon: "ac", category: "heating-cooling", available: true },
  { id: "23", name: "Ceiling fan", icon: "sparkles", category: "heating-cooling", available: true },
  
  // Entertainment
  { id: "24", name: "TV", icon: "tv", category: "entertainment", available: true },
  
  // Bedroom and laundry
  { id: "25", name: "Washing machine", icon: "washer", category: "bedroom-laundry", available: true },
  { id: "26", name: "Hangers", icon: "sparkles", category: "bedroom-laundry", available: true },
  { id: "27", name: "Bed linen", icon: "sparkles", category: "bedroom-laundry", available: true },
  { id: "28", name: "Room-darkening blinds", icon: "sparkles", category: "bedroom-laundry", available: true },
  { id: "29", name: "Iron", icon: "sparkles", category: "bedroom-laundry", available: true },
  { id: "30", name: "Clothes storage", icon: "sparkles", category: "bedroom-laundry", available: true },
  { id: "31", name: "Cot", icon: "sparkles", category: "bedroom-laundry", available: true },
  
  // Bathroom
  { id: "32", name: "Hairdryer", icon: "sparkles", category: "bathroom", available: true },
  { id: "33", name: "Cleaning products", icon: "sparkles", category: "bathroom", available: true },
  { id: "34", name: "Shampoo", icon: "sparkles", category: "bathroom", available: true },
  { id: "35", name: "Hot water", icon: "sparkles", category: "bathroom", available: true },
  { id: "36", name: "Shower gel", icon: "sparkles", category: "bathroom", available: true },
  
  // Family
  { id: "37", name: "Cot", icon: "sparkles", category: "family", available: true },
  
  // Home safety
  { id: "38", name: "Exterior security cameras on property", icon: "sparkles", category: "home-safety", available: true },
  { id: "39", name: "Carbon monoxide alarm", icon: "sparkles", category: "home-safety", available: true },
  { id: "40", name: "Smoke alarm", icon: "sparkles", category: "home-safety", available: true },
  
  // Location features
  { id: "41", name: "Private entrance", icon: "key", category: "location-features", available: true },
  
  // Outdoor
  { id: "42", name: "Patio or balcony", icon: "sparkles", category: "outdoor", available: true },
  { id: "43", name: "Outdoor dining area", icon: "sparkles", category: "outdoor", available: true },
  
  // Some unavailable amenities
  { id: "44", name: "Fireplace", icon: "fire", category: "heating-cooling", available: false },
  { id: "45", name: "Piano", icon: "sparkles", category: "entertainment", available: false },
  { id: "46", name: "Game console", icon: "tv", category: "entertainment", available: false },
  { id: "47", name: "Jacuzzi", icon: "hot-tub", category: "parking-facilities", available: false },
  { id: "48", name: "Sauna", icon: "fire", category: "parking-facilities", available: false },
  { id: "49", name: "Beach access", icon: "sparkles", category: "outdoor", available: false },
  { id: "50", name: "Mountain view", icon: "sparkles", category: "outdoor", available: false }
]

export const mockProperty: Property = {
  id: "1",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  location: {
    city: "Candolim",
    state: "Goa",
    country: "India"
  },
  type: "Entire serviced apartment",
  capacity: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1
  },
  price: {
    basePrice: 5699,
    currency: "₹",
    nights: 5,
    totalPrice: 28499
  },
  rating: {
    overall: 4.95,
    count: 19
  },
  images: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      alt: "Living room with sofa and TV",
      category: "living-room"
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      alt: "Private jacuzzi area", 
      category: "living-room"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop", 
      alt: "Full kitchen with appliances",
      category: "kitchen"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      alt: "Bedroom with double bed",
      category: "bedroom"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1584622781808-6e5581d049a8?w=800&h=600&fit=crop",
      alt: "Full bathroom",
      category: "bathroom"
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
      alt: "Outdoor pool area",
      category: "pool"
    },
    {
      id: "7",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      alt: "Building exterior view",
      category: "exterior"
    },
    {
      id: "8",
      url: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      alt: "Gym and fitness area",
      category: "gym"
    },
    {
      id: "9",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      alt: "Dining area setup",
      category: "kitchen"
    },
    {
      id: "10",
      url: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=800&h=600&fit=crop",
      alt: "Balcony with city view",
      category: "exterior"
    }
  ],
  host: {
    id: "host-1",
    name: "Mirashya Homes", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    yearsHosting: 2,
    responseRate: 100,
    responseTime: "within an hour",
    school: "NICMAR GOA",
    birthDecade: "80s",
    coHosts: [
      { id: "cohost-1", name: "Sharath" },
      { id: "cohost-2", name: "Aman Dev Pahwa" },
      { id: "cohost-3", name: "Maria Karen Priyanka" }
    ]
  },
  description: "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
  amenities: mockAmenities,
  houseRules: {
    checkIn: "after 2:00 pm",
    checkOut: "before 11:00 am", 
    maxGuests: 3,
    pets: true
  },
  cancellationPolicy: "Free cancellation before 17 October",
  isGuestFavorite: true,
  sleepingArrangements: [
    {
      id: "1",
      room: "Bedroom",
      bedType: "1 double bed", 
      count: 1
    },
    {
      id: "2",
      room: "Living room",
      bedType: "1 sofa",
      count: 1
    }
  ],
  highlights: [
    {
      id: "1",
      title: "Outdoor entertainment",
      description: "The pool and alfresco dining are great for summer trips.",
      icon: "sun"
    },
    {
      id: "2", 
      title: "Designed for staying cool",
      description: "Beat the heat with the A/C and ceiling fan.",
      icon: "snowflake"
    },
    {
      id: "3",
      title: "Self check-in", 
      description: "You can check in with the building staff.",
      icon: "key"
    }
  ]
}

export const mockReviews: PropertyReview[] = [
  {
    id: "1",
    user: {
      id: "user-1",
      name: "Amit",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      memberSince: "2 months on Airbnb"
    },
    rating: 5,
    date: "1 week ago",
    content: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property."
  },
  {
    id: "2",
    user: {
      id: "user-2", 
      name: "Aheesh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      memberSince: "3 years on Airbnb"
    },
    rating: 5,
    date: "2 weeks ago", 
    content: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again."
  },
  {
    id: "3",
    user: {
      id: "user-3",
      name: "Samiksha",
      memberSince: "8 months on Airbnb"
    },
    rating: 5,
    date: "May 2026",
    content: "the host nitish was really great help"
  },
  {
    id: "4",
    user: {
      id: "user-4",
      name: "Vedant", 
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      memberSince: "4 years on Airbnb"
    },
    rating: 5,
    date: "May 2026",
    content: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine. The highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable. The property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!"
  },
  {
    id: "5",
    user: {
      id: "user-5",
      name: "Vaibhav S",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=50&h=50&fit=crop&crop=face",
      memberSince: "3 years on Airbnb"
    },
    rating: 5,
    date: "May 2026",
    content: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too."
  },
  {
    id: "6",
    user: {
      id: "user-6",
      name: "Mohd",
      memberSince: "5 years on Airbnb"
    },
    rating: 5,
    date: "May 2026",
    content: "Great place. Exactly as described in the listing."
  },
  {
    id: "7",
    user: {
      id: "user-7",
      name: "Priya",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=50&h=50&fit=crop&crop=face",
      memberSince: "1 year on Airbnb"
    },
    rating: 5,
    date: "April 2026",
    content: "Absolutely loved the decor and the indoor spaces. Everything was so well thought out and comfortable. The host's hospitality was outstanding and they were always available when we needed anything."
  },
  {
    id: "8",
    user: {
      id: "user-8",
      name: "Rajesh",
      memberSince: "6 months on Airbnb"
    },
    rating: 4,
    date: "April 2026",
    content: "Good stay overall. The property has great amenities and the location is convenient. The comfort level was excellent, though there were minor issues with some facilities."
  },
  {
    id: "9",
    user: {
      id: "user-9",
      name: "Sarah",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      memberSince: "2 years on Airbnb"
    },
    rating: 5,
    date: "March 2026",
    content: "Perfect getaway! The hot tub was the highlight of our trip. The cleanliness and condition of the property were impeccable. Great location too, very convenient for exploring the area."
  },
  {
    id: "10",
    user: {
      id: "user-10",
      name: "Michael",
      memberSince: "4 years on Airbnb"
    },
    rating: 5,
    date: "March 2026",
    content: "Fantastic experience! The comfort level was amazing and all the amenities worked perfectly. The host showed great hospitality and the property's condition was excellent."
  },
  {
    id: "11",
    user: {
      id: "user-11",
      name: "Sneha",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
      memberSince: "1 year on Airbnb"
    },
    rating: 5,
    date: "February 2026",
    content: "Beautiful indoor spaces with amazing decor. The accuracy of the listing was spot on - everything was exactly as advertised. Highly recommend for couples looking for a romantic getaway."
  },
  {
    id: "12",
    user: {
      id: "user-12",
      name: "David",
      memberSince: "3 years on Airbnb"
    },
    rating: 4,
    date: "February 2026",
    content: "Great location and good amenities. The property was in excellent condition and very comfortable. The cleanliness standards were high and we enjoyed our stay."
  }
]

export const mockReviewStats: ReviewStats = {
  overall: 4.95,
  cleanliness: 5.0,
  accuracy: 5.0,
  checkIn: 5.0,
  communication: 5.0,
  location: 4.8,
  value: 4.8,
  distribution: {
    5: 18,
    4: 1,
    3: 0,
    2: 0,
    1: 0
  }
}