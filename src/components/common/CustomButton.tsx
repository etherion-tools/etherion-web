import React, { ReactNode } from 'react'
import { Button } from '../ui/button'
import clsx from 'clsx'

interface CustomButtonProps {
  type?: 'default' | 'transparent'
  onClick?: () => void
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  children: ReactNode
  className?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = 'default',
  onClick,
  rightIcon,
  leftIcon,
  children,
  className,
}) => {
  const buttonClasses = clsx(
    'flex items-center justify-center',
    {
      'bg-transparent border border-primary text-primary hover:bg-primary/10': type === 'transparent',
    },
    className
  )

  return (
    <Button onClick={onClick} className={buttonClasses}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Button>
  )
}

export default CustomButton
