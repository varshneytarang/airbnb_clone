'use client'

const Footer: React.FC = () => {
  const footerLinks = {
    support: [
      'Help Center',
      'AirCover',
      'Anti-discrimination',
      'Disability support',
      'Cancellation options',
      'Report neighborhood concern'
    ],
    hosting: [
      'Airbnb your home',
      'AirCover for Hosts',
      'Hosting resources',
      'Community forum',
      'Hosting responsibly',
      'Join a free Hosting class'
    ],
    airbnb: [
      'Newsroom',
      'New features',
      'Careers',
      'Investors',
      'Gift cards',
      'Airbnb.org emergency stays'
    ]
  }

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-3">
              {footerLinks.hosting.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Airbnb</h3>
            <ul className="space-y-3">
              {footerLinks.airbnb.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                © 2026 Airbnb, Inc.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Sitemap
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Your Privacy Choices
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">🌐</span>
                <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  English (IN)
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">₹</span>
                <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  INR
                </button>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.017 0C18.396 0 20.396 1.104 20.396 4.297v11.406C20.396 18.896 18.396 20 12.017 20H7.982C1.604 20-.396 18.896-.396 15.703V4.297C-.396 1.104 1.604 0 7.982 0h4.035zM10 15c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm6.5-11c.828 0 1.5-.672 1.5-1.5S17.328 1 16.5 1 15 1.672 15 2.5 15.672 4 16.5 4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer