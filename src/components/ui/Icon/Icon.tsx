'use client'

import { IconProps } from '@/types'
import { 
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  HeartIcon,
  ShareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  XMarkIcon,
  StarIcon,
  MapPinIcon,
  WifiIcon,
  TvIcon,
  FireIcon,
  SparklesIcon,
  KeyIcon,
  SunIcon,
  BookmarkIcon,
  ArrowLeftIcon,
  CalendarDaysIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

const icons = {
  search: MagnifyingGlassIcon,
  menu: Bars3Icon,
  user: UserCircleIcon,
  heart: HeartIcon,
  'heart-solid': HeartSolidIcon,
  share: ShareIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
  'arrow-left': ArrowLeftIcon,
  close: XMarkIcon,
  star: StarIcon,
  'star-solid': StarSolidIcon,
  'map-pin': MapPinIcon,
  wifi: WifiIcon,
  tv: TvIcon,
  fire: FireIcon,
  sparkles: SparklesIcon,
  snowflake: SparklesIcon, // Using SparklesIcon for cooling/AC effect
  key: KeyIcon,
  sun: SunIcon,
  bookmark: BookmarkIcon,
  calendar: CalendarDaysIcon,
  shield: ShieldCheckIcon,
  cleanliness: SparklesIcon,
  accuracy: ShieldCheckIcon,
  checkin: KeyIcon,
  communication: SparklesIcon,
  location: MapPinIcon,
  value: StarIcon
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => {
  const IconComponent = icons[name as keyof typeof icons]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }
  
  return (
    <IconComponent 
      width={size} 
      height={size} 
      className={className}
      style={{ color }}
    />
  )
}

export default Icon