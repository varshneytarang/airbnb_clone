'use client'

import { BookingPricing } from '@/types'
import { formatPrice } from '@/utils/formatters'

interface PriceBreakdownProps {
  pricing: BookingPricing
  showBreakdown?: boolean
}

const PriceBreakdown: React.FC<PriceBreakdownProps> = ({ 
  pricing, 
  showBreakdown = false 
}) => {
  if (!showBreakdown) {
    return (
      <div className="flex items-center justify-between py-4 border-t border-gray-200">
        <span className="text-lg font-semibold text-gray-900">Total</span>
        <span className="text-lg font-semibold text-gray-900">
          {formatPrice(pricing.total, pricing.currency)}
        </span>
      </div>
    )
  }

  return (
    <div className="space-y-3 py-4 border-t border-gray-200">
      {/* Base price */}
      <div className="flex items-center justify-between">
        <span className="text-gray-700">
          {formatPrice(pricing.basePrice, pricing.currency)} × {pricing.nights} nights
        </span>
        <span className="text-gray-900">
          {formatPrice(pricing.subtotal, pricing.currency)}
        </span>
      </div>

      {/* Service fee */}
      {pricing.serviceFee && (
        <div className="flex items-center justify-between">
          <span className="text-gray-700 underline cursor-help" title="This helps us run our platform and offer 24/7 support for your trip">
            Service fee
          </span>
          <span className="text-gray-900">
            {formatPrice(pricing.serviceFee, pricing.currency)}
          </span>
        </div>
      )}

      {/* Cleaning fee */}
      {pricing.cleaningFee && (
        <div className="flex items-center justify-between">
          <span className="text-gray-700 underline cursor-help" title="One-time fee charged by host to cover the cost of cleaning their space">
            Cleaning fee
          </span>
          <span className="text-gray-900">
            {formatPrice(pricing.cleaningFee, pricing.currency)}
          </span>
        </div>
      )}

      {/* Taxes */}
      {pricing.taxes && (
        <div className="flex items-center justify-between">
          <span className="text-gray-700 underline cursor-help" title="Taxes and fees charged by local government">
            Taxes
          </span>
          <span className="text-gray-900">
            {formatPrice(pricing.taxes, pricing.currency)}
          </span>
        </div>
      )}

      {/* Total */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <span className="text-lg font-semibold text-gray-900">Total</span>
        <span className="text-lg font-semibold text-gray-900">
          {formatPrice(pricing.total, pricing.currency)}
        </span>
      </div>
    </div>
  )
}

export default PriceBreakdown