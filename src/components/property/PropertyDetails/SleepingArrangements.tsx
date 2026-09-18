'use client'

import { SleepingArrangement } from '@/types'

interface SleepingArrangementsProps {
  arrangements: SleepingArrangement[]
}

const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({ arrangements }) => {
  const getBedIcon = (bedType: string) => {
    if (bedType.toLowerCase().includes('sofa')) {
      return (
        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l18 0" />
        </svg>
      )
    }
    
    return (
      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8" />
        <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
      </svg>
    )
  }

  return (
    <div className="py-6 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Where you'll sleep
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {arrangements.map((arrangement) => (
          <div 
            key={arrangement.id}
            className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              {getBedIcon(arrangement.bedType)}
              <div>
                <h4 className="font-medium text-gray-900">{arrangement.room}</h4>
                <p className="text-sm text-gray-600">{arrangement.bedType}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SleepingArrangements