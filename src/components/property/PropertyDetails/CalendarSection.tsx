'use client'

import { useState } from 'react'
import { DateRange } from '@/types'
import { AvailabilityCalendar } from '@/components/booking/Calendar'
import { Button } from '@/components/ui/Button'
import { formatDateRange } from '@/utils/formatters'

interface CalendarSectionProps {
  nights?: number
  checkIn?: Date
  checkOut?: Date
}

const CalendarSection: React.FC<CalendarSectionProps> = ({
  nights = 5,
  checkIn,
  checkOut
}) => {
  const [selectedRange, setSelectedRange] = useState<DateRange>({
    startDate: checkIn || null,
    endDate: checkOut || null
  })

  const [showFullCalendar, setShowFullCalendar] = useState(false)

  const handleDateRangeChange = (range: DateRange) => {
    setSelectedRange(range)
  }

  const clearDates = () => {
    setSelectedRange({ startDate: null, endDate: null })
  }

  return (
    <div className="py-6 border-b border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          {nights} nights in Candolim
        </h3>
        {selectedRange.startDate && selectedRange.endDate && (
          <Button
            variant="ghost"
            onClick={clearDates}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Clear dates
          </Button>
        )}
      </div>

      {selectedRange.startDate && selectedRange.endDate && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-900">
            {formatDateRange(selectedRange.startDate, selectedRange.endDate)}
          </p>
        </div>
      )}

      {!showFullCalendar ? (
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          {/* Mini calendar preview */}
          <AvailabilityCalendar
            selectedRange={selectedRange}
            onDateRangeChange={handleDateRangeChange}
            showPrices={true}
          />
        </div>
      ) : (
        <div>
          <AvailabilityCalendar
            selectedRange={selectedRange}
            onDateRangeChange={handleDateRangeChange}
            onClose={() => setShowFullCalendar(false)}
            showPrices={true}
          />
        </div>
      )}
    </div>
  )
}

export default CalendarSection