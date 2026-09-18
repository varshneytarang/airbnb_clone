'use client'

import { useState } from 'react'
import { GuestCount } from '@/types'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { formatGuestCount } from '@/utils/formatters'

interface GuestSelectorProps {
  guests: GuestCount
  maxGuests?: number
  onGuestChange: (guests: GuestCount) => void
}

const GuestSelector: React.FC<GuestSelectorProps> = ({ 
  guests, 
  maxGuests = 16, 
  onGuestChange 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const updateGuests = (type: keyof GuestCount, change: number) => {
    const newGuests = { ...guests }
    const newValue = Math.max(0, newGuests[type] + change)
    
    // Apply constraints
    if (type === 'adults') {
      newGuests.adults = Math.min(maxGuests, Math.max(1, newValue))
    } else if (type === 'children') {
      const totalGuests = newGuests.adults + newValue
      newGuests.children = totalGuests <= maxGuests ? newValue : newGuests.children
    } else {
      newGuests[type] = Math.min(5, newValue) // Max 5 infants/pets
    }
    
    onGuestChange(newGuests)
  }

  const totalGuests = guests.adults + guests.children
  const canAddChildren = totalGuests < maxGuests

  return (
    <div className="relative">
      <button
        className="w-full p-3 text-left border border-gray-300 rounded-lg hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-gray-900 uppercase">Guests</div>
            <div className="text-sm text-gray-600">
              {formatGuestCount(guests)}
              {guests.infants > 0 && `, ${guests.infants} infant${guests.infants !== 1 ? 's' : ''}`}
              {guests.pets > 0 && `, ${guests.pets} pet${guests.pets !== 1 ? 's' : ''}`}
            </div>
          </div>
          <Icon 
            name={isOpen ? 'chevron-up' : 'chevron-down'} 
            size={16} 
            className="text-gray-600" 
          />
        </div>
      </button>

      {isOpen && (
        <>
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
            <div className="space-y-4">
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Adults</div>
                  <div className="text-sm text-gray-600">Ages 13 or above</div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 rounded-full border border-gray-300 disabled:opacity-50"
                    onClick={() => updateGuests('adults', -1)}
                    disabled={guests.adults <= 1}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{guests.adults}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 rounded-full border border-gray-300 disabled:opacity-50"
                    onClick={() => updateGuests('adults', 1)}
                    disabled={totalGuests >= maxGuests}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Children</div>
                  <div className="text-sm text-gray-600">Ages 2-12</div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 rounded-full border border-gray-300 disabled:opacity-50"
                    onClick={() => updateGuests('children', -1)}
                    disabled={guests.children <= 0}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{guests.children}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 rounded-full border border-gray-300 disabled:opacity-50"
                    onClick={() => updateGuests('children', 1)}
                    disabled={!canAddChildren}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Infants */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Infants</div>
                  <div className="text-sm text-gray-600">Under 2</div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 rounded-full border border-gray-300 disabled:opacity-50"
                    onClick={() => updateGuests('infants', -1)}
                    disabled={guests.infants <= 0}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{guests.infants}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 rounded-full border border-gray-300 disabled:opacity-50"
                    onClick={() => updateGuests('infants', 1)}
                    disabled={guests.infants >= 5}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Pets */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Pets</div>
                  <div className="text-sm text-gray-600">
                    <button className="underline">Bringing a service animal?</button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 rounded-full border border-gray-300 disabled:opacity-50"
                    onClick={() => updateGuests('pets', -1)}
                    disabled={guests.pets <= 0}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{guests.pets}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 rounded-full border border-gray-300 disabled:opacity-50"
                    onClick={() => updateGuests('pets', 1)}
                    disabled={guests.pets >= 5}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button
                variant="ghost"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>

          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  )
}

export default GuestSelector