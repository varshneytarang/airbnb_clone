'use client'

import { useState, useMemo } from 'react'
import { DateRange, AvailabilityCalendar } from '@/types'
import { generateCalendarMonth } from '@/utils/dateHelpers'
import { addMonths } from 'date-fns'

interface UseCalendarProps {
  initialRange?: DateRange
  unavailableDates?: Date[]
  minStay?: number
  maxStay?: number
}

interface UseCalendarReturn {
  selectedRange: DateRange
  currentMonth: Date
  calendars: AvailabilityCalendar[]
  setSelectedRange: (range: DateRange) => void
  setCurrentMonth: (date: Date) => void
  selectDate: (date: Date) => void
  clearSelection: () => void
  goToNextMonth: () => void
  goToPreviousMonth: () => void
  isValidRange: (startDate: Date, endDate: Date) => boolean
}

const useCalendar = ({
  initialRange = { startDate: null, endDate: null },
  unavailableDates = [],
  minStay = 1,
  maxStay = 365
}: UseCalendarProps = {}): UseCalendarReturn => {
  const [selectedRange, setSelectedRange] = useState<DateRange>(initialRange)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Generate multiple months for display
  const calendars = useMemo(() => {
    const months: AvailabilityCalendar[] = []
    
    for (let i = 0; i < 12; i++) {
      const monthDate = addMonths(currentMonth, i)
      const calendar = generateCalendarMonth(
        monthDate.getMonth(),
        monthDate.getFullYear(),
        {
          start: selectedRange.startDate,
          end: selectedRange.endDate
        },
        unavailableDates
      )
      months.push(calendar)
    }
    
    return months
  }, [currentMonth, selectedRange, unavailableDates])

  const isValidRange = (startDate: Date, endDate: Date): boolean => {
    const daysDiff = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    return daysDiff >= minStay && daysDiff <= maxStay
  }

  const selectDate = (date: Date) => {
    if (!selectedRange.startDate || (selectedRange.startDate && selectedRange.endDate)) {
      // Start new selection
      setSelectedRange({ startDate: date, endDate: null })
    } else if (selectedRange.startDate && !selectedRange.endDate) {
      // Complete the range
      if (date > selectedRange.startDate) {
        if (isValidRange(selectedRange.startDate, date)) {
          setSelectedRange({ startDate: selectedRange.startDate, endDate: date })
        }
      } else {
        // If selected date is before start date, make it the new start date
        setSelectedRange({ startDate: date, endDate: null })
      }
    }
  }

  const clearSelection = () => {
    setSelectedRange({ startDate: null, endDate: null })
  }

  const goToNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1))
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(prev => addMonths(prev, -1))
  }

  return {
    selectedRange,
    currentMonth,
    calendars,
    setSelectedRange,
    setCurrentMonth,
    selectDate,
    clearSelection,
    goToNextMonth,
    goToPreviousMonth,
    isValidRange
  }
}

export default useCalendar