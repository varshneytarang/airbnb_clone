'use client'

import SearchBar from './SearchBar'
import UserMenu from './UserMenu'
import MobileHeader from './MobileHeader'
import { useScrollPosition, useIsMobile } from '@/hooks'

const Header: React.FC = () => {
  const { isScrolled } = useScrollPosition(10)
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <header className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        isScrolled ? 'shadow-md border-b-0' : 'shadow-none'
      }`}>
        <MobileHeader />
      </header>
    )
  }

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
      isScrolled ? 'shadow-md border-b-0' : 'border-b border-gray-200 shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-airbnb-red cursor-pointer hover:text-airbnb-red-dark transition-colors">
                airbnb
              </div>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* User Menu */}
          <div className="flex-shrink-0">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header