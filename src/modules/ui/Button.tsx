import cn from "clsx"
import React, { forwardRef, ButtonHTMLAttributes } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: "slim" | "smoke" | "outline"
  active?: boolean
  type?: "submit" | "reset" | "button"
  loading?: boolean
  disabled?: boolean
  onClick?: any
  direction?: string
  rounded?: boolean
  icon?: any
  size?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = "slim",
    children,
    active,
    loading = false,
    disabled = false,
    onClick,
    direction = "right",
    rounded = false,
    icon,
    size = "normal",
    ...rest
  } = props

  const rootClassName = cn(
    `text-[10px]  md:text-xs font-medium flex items-center cursor-pointer transition ease-in-out duration-300  justify-center focus-visible:outline-none focus:outline-none  whitespace-nowrap gap-2`,
    {
      "h-10 px-4 md:px-5 py-2 min-w-[100px]": size === "normal",
      "px-2 py-1 rounded": size === "sm",
      "px-3 py-2 rounded-md": size === "md",
      "bg-primary text-white  transform normal-case hover:bg-primary/90 border-0 border-transparent":
        variant === "slim",
      "text-primary transform normal-case  border border-primary":
        variant === "outline",
      " bg-neutral-30 text-gray-500 transform-none normal-case border-0 border-transparent":
        variant === "smoke",
      "rounded-full": rounded,
      "rounded-md": rounded == false && size === "normal",
      "flex-row-reverse": direction == "left",
      "cursor-not-allowed": loading,
      "cursor-not-allowed hover:cursor-not-allowed": disabled,
    },
    className
  )

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
      {icon}
    </button>
  )
})

Button.displayName = "Button"

export default Button
