'use client'

import { useState } from 'react'
import { DateRange } from '@/types'
import { formatDate } from '@/utils/formatters'
import { AvailabilityCalendar } from '@/components/booking/Calendar'

interface DatePickerProps {
  dateRange: DateRange
  onDateChange: (dateRange: DateRange) => void
}

const DatePicker: React.FC<DatePickerProps> = ({ dateRange, onDateChange }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const handleCalendarClose = () => {
    setIsCalendarOpen(false)
  }

  const handleDateRangeChange = (range: DateRange) => {
    onDateChange(range)
    // Auto-close when both dates are selected
    if (range.startDate && range.endDate) {
      setIsCalendarOpen(false)
    }
  }

  return (
    <div className="relative">
      <div className="border border-gray-300 rounded-lg">
        <div className="grid grid-cols-2 divide-x divide-gray-300">
          <button
            className="p-3 text-left hover:bg-gray-50 rounded-tl-lg"
            onClick={() => setIsCalendarOpen(true)}
          >
            <div className="text-xs font-semibold text-gray-900 uppercase">Check-in</div>
            <div className="text-sm text-gray-600">
              {dateRange.startDate ? formatDate(dateRange.startDate, 'dd/MM/yyyy') : 'Add date'}
            </div>
          </button>
          
          <button
            className="p-3 text-left hover:bg-gray-50 rounded-tr-lg"
            onClick={() => setIsCalendarOpen(true)}
          >
            <div className="text-xs font-semibold text-gray-900 uppercase">Checkout</div>
            <div className="text-sm text-gray-600">
              {dateRange.endDate ? formatDate(dateRange.endDate, 'dd/MM/yyyy') : 'Add date'}
            </div>
          </button>
        </div>
      </div>
      
      {/* Calendar popup */}
      {isCalendarOpen && (
        <>
          <div className="absolute top-full left-0 right-0 mt-2 z-50">
            <AvailabilityCalendar
              selectedRange={dateRange}
              onDateRangeChange={handleDateRangeChange}
              onClose={handleCalendarClose}
              showPrices={true}
            />
          </div>
          
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={handleCalendarClose}
          />
        </>
      )}
    </div>
  )
}

export default DatePicker