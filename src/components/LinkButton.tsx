import { VariantProps, cva } from "class-variance-authority";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const buttonVariants = cva(
  "w-[212px] rounded-[60px] px-2.5 py-[22px] text-center text-sm font-semibold transition-transform",
  { 
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground ",
        secondary: "bg-background text-foreground",
      },
      disabled: {
        true: "pointer-events-none cursor-not-allowed opacity-60",
        false: "cursor-pointer hover:scale-[0.98] active:scale-[0.96]",
      },
    },
    defaultVariants: {
      variant: "default",
      disabled: false,
    },
  }
);

interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  id?: string;
  to: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  ariaLabel: string;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    { id, to, children, variant, className = "", disabled = false, ariaLabel },
    ref
  ) => {
    return (
      <Link
        ref={ref}
        to={to}
        id={id}
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
  }
);

export default LinkButton;
