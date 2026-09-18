export interface MenuItem {
  id: string
  label: string
  href?: string
  onClick?: () => void
  icon?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  active?: boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface IconProps {
  name: string
  size?: number
  className?: string
  color?: string
}

export interface BadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export interface RatingProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  showNumber?: boolean
  readOnly?: boolean
  onChange?: (rating: number) => void
}