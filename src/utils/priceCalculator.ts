import { BookingPricing } from '@/types'

interface PriceBreakdownItem {
  label: string
  amount: number
  isTotal?: boolean
}

export const calculateBookingPrice = (
  basePrice: number,
  nights: number,
  options: {
    cleaningFee?: number
    serviceFeeRate?: number
    taxRate?: number
  } = {}
): BookingPricing => {
  const {
    cleaningFee = 0,
    serviceFeeRate = 0.14, // 14% service fee
    taxRate = 0.12 // 12% tax
  } = options

  const subtotal = basePrice * nights
  const serviceFee = Math.round(subtotal * serviceFeeRate)
  const taxes = Math.round((subtotal + serviceFee + cleaningFee) * taxRate)
  const total = subtotal + serviceFee + cleaningFee + taxes

  return {
    basePrice,
    nights,
    subtotal,
    cleaningFee: cleaningFee > 0 ? cleaningFee : undefined,
    serviceFee,
    taxes,
    total,
    currency: '₹'
  }
}

export const formatPriceBreakdown = (pricing: BookingPricing): PriceBreakdownItem[] => {
  const breakdown: PriceBreakdownItem[] = [
    {
      label: `₹${pricing.basePrice.toLocaleString()} x ${pricing.nights} nights`,
      amount: pricing.subtotal
    },
    {
      label: 'Service fee',
      amount: pricing.serviceFee || 0
    }
  ]

  if (pricing.cleaningFee) {
    breakdown.push({
      label: 'Cleaning fee',
      amount: pricing.cleaningFee
    })
  }

  if (pricing.taxes) {
    breakdown.push({
      label: 'Taxes',
      amount: pricing.taxes
    })
  }

  breakdown.push({
    label: 'Total',
    amount: pricing.total,
    isTotal: true
  })

  return breakdown
}