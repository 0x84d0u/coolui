import { cn, Icon, IconName } from "@core";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        ghost: "text-foreground hover:bg-muted/50",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  }
);

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  iconName: IconName;
}

export const IconButton = ({
  iconName,
  variant,
  size,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...props}
    >
        <Icon name={iconName}/>
    </button>
  );
};
