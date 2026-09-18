import { addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isWithinInterval } from 'date-fns'
import { CalendarDay, AvailabilityCalendar } from '@/types'

export const generateCalendarMonth = (
  month: number, 
  year: number,
  selectedRange?: { start: Date | null; end: Date | null },
  unavailableDates: Date[] = []
): AvailabilityCalendar => {
  const firstDay = startOfMonth(new Date(year, month))
  const lastDay = endOfMonth(new Date(year, month))
  
  const days: CalendarDay[] = eachDayOfInterval({
    start: firstDay,
    end: lastDay
  }).map(date => {
    const isUnavailable = unavailableDates.some(unavailableDate => 
      isSameDay(date, unavailableDate)
    )
    
    let isSelected = false
    let isInRange = false
    let isCheckIn = false
    let isCheckOut = false
    
    if (selectedRange?.start && selectedRange?.end) {
      isCheckIn = isSameDay(date, selectedRange.start)
      isCheckOut = isSameDay(date, selectedRange.end)
      isInRange = isWithinInterval(date, {
        start: selectedRange.start,
        end: selectedRange.end
      })
      isSelected = isCheckIn || isCheckOut
    } else if (selectedRange?.start) {
      isSelected = isSameDay(date, selectedRange.start)
      isCheckIn = isSelected
    }
    
    return {
      date,
      available: !isUnavailable && date >= new Date(),
      price: Math.floor(Math.random() * 2000) + 3000, // Random price for demo
      isSelected,
      isInRange,
      isCheckIn,
      isCheckOut
    }
  })
  
  return {
    month,
    year,
    days
  }
}

export const isDateInRange = (
  date: Date,
  startDate: Date | null,
  endDate: Date | null
): boolean => {
  if (!startDate || !endDate) return false
  return isWithinInterval(date, { start: startDate, end: endDate })
}

export const getDatesBetween = (startDate: Date, endDate: Date): Date[] => {
  return eachDayOfInterval({ start: startDate, end: endDate })
}