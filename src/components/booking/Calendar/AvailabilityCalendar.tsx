'use client'

import { useState, useEffect } from 'react'
import { DateRange } from '@/types'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { generateCalendarMonth } from '@/utils/dateHelpers'
import CalendarGrid from './CalendarGrid'
import { addMonths, subMonths } from 'date-fns'

interface AvailabilityCalendarProps {
  selectedRange: DateRange
  onDateRangeChange: (range: DateRange) => void
  onClose?: () => void
  showPrices?: boolean
  unavailableDates?: Date[]
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  selectedRange,
  onDateRangeChange,
  onClose,
  showPrices = false,
  unavailableDates = []
}) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectingCheckout, setSelectingCheckout] = useState(false)

  // Generate current and next month calendars
  const currentMonth = generateCalendarMonth(
    currentDate.getMonth(),
    currentDate.getFullYear(),
    {
      start: selectedRange.startDate,
      end: selectedRange.endDate
    },
    unavailableDates
  )
  
  const nextMonthDate = addMonths(currentDate, 1)
  const nextMonth = generateCalendarMonth(
    nextMonthDate.getMonth(),
    nextMonthDate.getFullYear(),
    {
      start: selectedRange.startDate,
      end: selectedRange.endDate
    },
    unavailableDates
  )

  const handleDateSelect = (date: Date) => {
    if (!selectedRange.startDate || selectingCheckout) {
      // Select check-in date or we're selecting checkout
      if (!selectedRange.startDate) {
        onDateRangeChange({
          startDate: date,
          endDate: null
        })
        setSelectingCheckout(true)
      } else {
        // Select checkout date
        if (date > selectedRange.startDate) {
          onDateRangeChange({
            startDate: selectedRange.startDate,
            endDate: date
          })
        } else {
          // If selected date is before check-in, make it new check-in
          onDateRangeChange({
            startDate: date,
            endDate: null
          })
        }
        setSelectingCheckout(false)
      }
    } else {
      // We have check-in but no checkout, select checkout
      if (date > selectedRange.startDate) {
        onDateRangeChange({
          startDate: selectedRange.startDate,
          endDate: date
        })
        setSelectingCheckout(false)
      } else {
        // New check-in date
        onDateRangeChange({
          startDate: date,
          endDate: null
        })
        setSelectingCheckout(true)
      }
    }
  }

  const goToPreviousMonth = () => {
    setCurrentDate(prev => subMonths(prev, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1))
  }

  const clearDates = () => {
    onDateRangeChange({ startDate: null, endDate: null })
    setSelectingCheckout(false)
  }

  const canGoBack = currentDate > new Date()

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={goToPreviousMonth}
            disabled={!canGoBack}
            className="p-2 rounded-full border border-gray-300 disabled:opacity-50"
          >
            <Icon name="chevron-left" size={16} />
          </Button>
          <Button
            variant="ghost"
            onClick={goToNextMonth}
            className="p-2 rounded-full border border-gray-300"
          >
            <Icon name="chevron-right" size={16} />
          </Button>
        </div>
        
        <div className="text-sm text-gray-600">
          {selectedRange.startDate && !selectedRange.endDate && (
            <span>Select checkout date</span>
          )}
          {!selectedRange.startDate && (
            <span>Select checkin date</span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {(selectedRange.startDate || selectedRange.endDate) && (
            <Button variant="ghost" onClick={clearDates} className="text-sm">
              Clear dates
            </Button>
          )}
          {onClose && (
            <Button variant="ghost" onClick={onClose} className="p-2">
              <Icon name="close" size={16} />
            </Button>
          )}
        </div>
      </div>

      {/* Calendar grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CalendarGrid
          calendar={currentMonth}
          selectedRange={selectedRange}
          onDateSelect={handleDateSelect}
          showPrices={showPrices}
        />
        <CalendarGrid
          calendar={nextMonth}
          selectedRange={selectedRange}
          onDateSelect={handleDateSelect}
          showPrices={showPrices}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
            <span>In range</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-gray-900 rounded-full"></div>
            <span>Today</span>
          </div>
        </div>
        
        {selectedRange.startDate && selectedRange.endDate && onClose && (
          <Button onClick={onClose}>
            Apply dates
          </Button>
        )}
      </div>
    </div>
  )
}

export default AvailabilityCalendar