'use client'

import { Layout } from '@/components/layout'
import { PropertyHeader } from '@/components/property/PropertyHeader'
import { PropertyGallery } from '@/components/property/PropertyGallery'
import { PropertyDetails } from '@/components/property/PropertyDetails'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ScrollToTop } from '@/components/common'
import { mockProperty } from '@/data/mockData'

const PropertyPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'India', href: '/india' },
    { label: 'Goa', href: '/goa' },
    { label: 'Candolim', href: '/candolim' },
    { label: mockProperty.title }
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      
      <PropertyHeader property={mockProperty} />
      
      <div className="py-6">
        <PropertyGallery property={mockProperty} />
      </div>
      
      <PropertyDetails property={mockProperty} />
      
      <ScrollToTop />
    </Layout>
  )
}

export default PropertyPage