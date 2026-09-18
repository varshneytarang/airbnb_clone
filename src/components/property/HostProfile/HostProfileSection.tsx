'use client'

import { Host } from '@/types'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface HostProfileSectionProps {
  host: Host
}

const HostProfileSection: React.FC<HostProfileSectionProps> = ({ host }) => {
  const coHosts = host.coHosts || []
  
  // Mock additional host data to match the HTML structure
  const hostStats = {
    totalReviews: 1463,
    overallRating: 4.68,
    yearsHosting: host.yearsHosting,
    responseRate: host.responseRate,
    responseTime: host.responseTime
  }

  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">Meet your host</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Host Profile Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <img
                src={host.avatar}
                alt={host.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-1">{host.name}</h3>
                <p className="text-gray-600 text-lg">Host</p>
              </div>
              
              {/* Host Stats */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-bold text-xl">{hostStats.totalReviews.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 font-medium">Reviews</div>
                </div>
                <div>
                  <div className="font-bold text-xl flex items-center justify-center gap-1">
                    {hostStats.overallRating}
                    <Icon name="star-solid" size={18} className="text-black" />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Rating</div>
                </div>
                <div>
                  <div className="font-bold text-xl">{hostStats.yearsHosting}</div>
                  <div className="text-sm text-gray-600 font-medium">Years hosting</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Host Personal Info */}
          <div className="space-y-3 mb-6">
            {host.birthDecade && (
              <div className="flex items-center gap-3">
                <Icon name="calendar" size={20} className="text-gray-600" />
                <span className="text-gray-700">Born in the {host.birthDecade}</span>
              </div>
            )}
            {host.school && (
              <div className="flex items-center gap-3">
                <Icon name="sparkles" size={20} className="text-gray-600" />
                <span className="text-gray-700">Where I went to school: {host.school}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Host Details */}
        <div>
          {/* Co-Hosts */}
          {coHosts.length > 0 && (
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">Co-Hosts</h4>
              <div className="grid grid-cols-2 gap-3">
                {coHosts.map((coHost, index) => (
                  <div key={coHost.id} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-gray-700">
                        {coHost.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-gray-700">{coHost.name}</span>
                  </div>
                ))}
                {/* Additional co-hosts to match the HTML */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-gray-700">S</span>
                  </div>
                  <span className="text-gray-700">Simran</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-gray-700">P</span>
                  </div>
                  <span className="text-gray-700">Pallavi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-gray-700">S</span>
                  </div>
                  <span className="text-gray-700">Sanyukta</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-gray-700">S</span>
                  </div>
                  <span className="text-gray-700">Shruti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-gray-700">A</span>
                  </div>
                  <span className="text-gray-700">Amisha</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Host Details */}
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-4">Host details</h4>
            <div className="space-y-2">
              <p className="text-gray-700">Response rate: {hostStats.responseRate}%</p>
              <p className="text-gray-700">Responds {hostStats.responseTime}</p>
            </div>
          </div>
          
          {/* Message Host Button */}
          <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3">
            Message host
          </Button>
          
          {/* Payment Protection Notice */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-3">
              <Icon name="sparkles" size={20} className="text-gray-600 mt-0.5" />
              <p className="text-sm text-gray-600 leading-relaxed">
                To help protect your payment, always use Airbnb to send money and communicate with hosts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostProfileSection