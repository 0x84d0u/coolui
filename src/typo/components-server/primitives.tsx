import React  from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@core";

/* === Text Primitive === */

const textVariants = cva("font-sans text-foreground", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    muted: {
      true: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof textVariants> {
  as?: React.ElementType;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as: Comp = "span", className, size, weight, muted, ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(textVariants({ size, weight, muted }), className)}
      {...props}
    />
  )
);
Text.displayName = "Text";

/* === Heading Primitive === */

const headingVariants = cva("font-heading text-heading", {
  variants: {
    level: {
      1: "text-4xl sm:text-5xl font-bold",
      2: "text-3xl sm:text-4xl font-semibold",
      3: "text-2xl sm:text-3xl font-semibold",
      4: "text-xl sm:text-2xl font-medium",
      5: "text-lg font-medium",
      6: "text-base uppercase tracking-wide font-semibold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    level: 2,
    align: "left",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({
  as,
  className,
  level,
  align,
  ...props
}: HeadingProps) => {

  const setTagName = (
    v: VariantProps<typeof headingVariants>["level"]
  ): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" => {
    switch (v) {
      case 1:
        return "h1";
      case 2:
        return "h2";
      case 3:
        return "h3";
      case 4:
        return "h4";
      case 5:
        return "h5";
      case 6:
        return "h6";
      default:
        return "h2";
    }
  };

  const Comp = as ?? setTagName(level);

  return (
    <Comp className={cn(headingVariants({ level, align }), className)} {...props} />
  );
}