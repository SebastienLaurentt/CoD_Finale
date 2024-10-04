import React, { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Link } from "react-router-dom";

const buttonVariants = cva(
  "w-[212px] rounded-[60px] px-2.5 py-[22px] text-center text-sm font-semibold",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-background text-foreground",
      },
      disabled: {
        true: "pointer-events-none cursor-not-allowed opacity-60",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
      disabled: false,
    },
  }
);

interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  to: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  ariaLabel: string; 
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({
  to,
  children,
  variant,
  className = "",
  disabled = false,
  ariaLabel,
}, ref) => {
  return (
    <Link
      ref={ref}
      to={to}
      role="button"
      className={buttonVariants({ variant, disabled, className })}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        }
      }}
      aria-label={ariaLabel} 
    >
      {children}
    </Link>
  );
});


export default LinkButton;
