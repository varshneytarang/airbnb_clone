'use client'

import { AvailabilityCalendar, DateRange } from '@/types'
import { format, isSameDay, isToday } from 'date-fns'
import { formatPrice } from '@/utils/formatters'

interface CalendarGridProps {
  calendar: AvailabilityCalendar
  selectedRange?: DateRange
  onDateSelect: (date: Date) => void
  showPrices?: boolean
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ 
  calendar, 
  selectedRange, 
  onDateSelect,
  showPrices = false 
}) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const handleDateClick = (date: Date, available: boolean) => {
    if (available) {
      onDateSelect(date)
    }
  }

  const getDayClass = (day: any) => {
    const baseClass = 'relative h-12 w-full flex flex-col items-center justify-center text-sm border border-transparent rounded-lg cursor-pointer transition-all duration-200'
    
    if (!day.available) {
      return `${baseClass} text-gray-300 cursor-not-allowed line-through`
    }
    
    if (day.isCheckIn || day.isCheckOut) {
      return `${baseClass} bg-gray-900 text-white hover:bg-gray-800`
    }
    
    if (day.isInRange) {
      return `${baseClass} bg-gray-100 text-gray-900 hover:bg-gray-200`
    }
    
    if (isToday(day.date)) {
      return `${baseClass} border-gray-900 text-gray-900 hover:bg-gray-50`
    }
    
    return `${baseClass} text-gray-700 hover:bg-gray-50 hover:border-gray-300`
  }

  return (
    <div className="bg-white">
      {/* Month header */}
      <div className="text-lg font-semibold text-gray-900 mb-4">
        {monthNames[calendar.month]} {calendar.year}
      </div>
      
      {/* Day names header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before month start */}
        {Array.from({ length: new Date(calendar.year, calendar.month, 1).getDay() }, (_, i) => (
          <div key={`empty-${i}`} className="h-12" />
        ))}
        
        {/* Calendar days */}
        {calendar.days.map((day) => (
          <button
            key={day.date.toISOString()}
            className={getDayClass(day)}
            onClick={() => handleDateClick(day.date, day.available)}
            disabled={!day.available}
          >
            <span className={`${day.isCheckIn || day.isCheckOut ? 'font-semibold' : ''}`}>
              {format(day.date, 'd')}
            </span>
            {showPrices && day.price && day.available && (
              <span className="text-xs text-gray-500 mt-0.5">
                ₹{day.price.toLocaleString()}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CalendarGrid