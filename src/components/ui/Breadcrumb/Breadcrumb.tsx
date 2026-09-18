'use client'

import { Icon } from '../Icon'

interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <Icon name="chevron-right" size={16} className="mx-2 text-gray-400" />
          )}
          
          {item.href ? (
            <a 
              href={item.href}
              className="hover:text-gray-900 hover:underline"
            >
              {item.label}
            </a>
          ) : item.onClick ? (
            <button 
              onClick={item.onClick}
              className="hover:text-gray-900 hover:underline"
            >
              {item.label}
            </button>
          ) : (
            <span className={index === items.length - 1 ? 'text-gray-900 font-medium' : ''}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb