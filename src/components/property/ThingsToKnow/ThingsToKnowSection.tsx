'use client'

import { Property } from '@/types'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface ThingsToKnowSectionProps {
  property: Property
}

const ThingsToKnowSection: React.FC<ThingsToKnowSectionProps> = ({ property }) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-8">Things to know</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cancellation Policy */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Icon name="calendar" size={24} className="text-gray-700" />
            <h3 className="text-lg font-semibold">Cancellation policy</h3>
          </div>
          
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              {property.cancellationPolicy || "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund."}
            </p>
            
            <div className="space-y-2">
              <Button variant="link" className="p-0 text-black font-semibold underline hover:no-underline block">
                Review this host's full policy for details.
              </Button>
              <Button variant="link" className="p-0 text-black font-semibold underline hover:no-underline block">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        
        {/* House Rules */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Icon name="key" size={24} className="text-gray-700" />
            <h3 className="text-lg font-semibold">House rules</h3>
          </div>
          
          <div className="space-y-3">
            {property.houseRules && (
              <div className="space-y-2">
                <p className="text-gray-700">
                  Check-in {property.houseRules.checkIn}
                </p>
                <p className="text-gray-700">
                  Checkout {property.houseRules.checkOut}
                </p>
                <p className="text-gray-700">
                  {property.houseRules.maxGuests} guests maximum
                </p>
              </div>
            )}
            
            <Button variant="link" className="p-0 text-black font-semibold underline hover:no-underline">
              Learn more
            </Button>
          </div>
        </div>
        
        {/* Safety & Property */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Icon name="shield" size={24} className="text-gray-700" />
            <h3 className="text-lg font-semibold">Safety & property</h3>
          </div>
          
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="text-gray-700">Carbon monoxide alarm not reported</p>
              <p className="text-gray-700">Smoke alarm not reported</p>
              <p className="text-gray-700">Exterior security cameras on property</p>
            </div>
            
            <Button variant="link" className="p-0 text-black font-semibold underline hover:no-underline">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThingsToKnowSection