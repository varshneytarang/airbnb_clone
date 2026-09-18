'use client'

import { Host } from '@/types'
import { formatHostingDuration } from '@/utils/formatters'

interface HostInfoProps {
  host: Host
}

const HostInfo: React.FC<HostInfoProps> = ({ host }) => {
  return (
    <div className="flex items-center gap-4 py-6 border-b border-gray-200">
      <div className="flex-shrink-0">
        <img
          src={host.avatar}
          alt={host.name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      
      <div>
        <h3 className="font-semibold text-gray-900">
          Hosted by {host.name}
        </h3>
        <p className="text-sm text-gray-600">
          {formatHostingDuration(host.yearsHosting)}
        </p>
      </div>
    </div>
  )
}

export default HostInfo