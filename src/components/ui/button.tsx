import { cn } from '@/utils/cn'
import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  disabled,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        `
        w-auto 
        rounded-sm 
        bg-black
        border
        border-transparent
        px-5 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-semibold
        transition
      `,
        disabled && 'opacity-75 cursor-not-allowed',
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
