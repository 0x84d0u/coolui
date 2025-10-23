import React from "react";
import { cn } from "@core";
import { Text, Heading } from "./primitives";

/* === Display (for hero or major headings) === */
export const Display = ({
  className,
  ...props
}: React.ComponentProps<typeof Heading>) => (
  <Heading
    level={1}
    className={cn(
      "font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl",
      "text-heading",
      className
    )}
    {...props}
  />
);

/* === Subtitle (secondary hero text) === */
export const Subtitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Text>) => (
  <Text
    as="p"
    size="lg"
    className={cn("text-muted-foreground max-w-2xl", className)}
    {...props}
  />
);

/* === SectionTitle (like a page or card title) === */
export const SectionTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Heading>) => (
  <Heading
    level={2}
    className={cn("text-2xl font-semibold tracking-tight text-heading", className)}
    {...props}
  />
);

/* === SectionDescription (below section title) === */
export const SectionDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Text>) => (
  <Text
    as="p"
    size="sm"
    muted
    className={cn("text-muted-foreground", className)}
    {...props}
  />
);

/* === Paragraph === */
export const Paragraph = ({
  className,
  ...props
}: React.ComponentProps<typeof Text>) => (
  <Text
    as="p"
    size="md"
    className={cn("leading-relaxed text-foreground/90", className)}
    {...props}
  />
);

/* === Label === */
export const Label = ({
  className,
  ...props
}: React.ComponentProps<typeof Text>) => (
  <Text
    as="label"
    size="sm"
    weight="medium"
    className={cn(
      "uppercase tracking-wide text-muted-foreground font-medium",
      className
    )}
    {...props}
  />
);

/* === StatLabel / StatValue === */
export const StatLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof Text>) => (
  <Text
    size="sm"
    muted
    className={cn("uppercase tracking-wide text-muted-foreground", className)}
    {...props}
  />
);

export const StatValue = ({
  className,
  ...props
}: React.ComponentProps<typeof Heading>) => (
  <Heading
    level={3}
    className={cn("text-3xl font-semibold tracking-tight text-heading", className)}
    {...props}
  />
);

/* === Quote === */
export const Quote = ({
  className,
  author,
  ...props
}: React.ComponentProps<typeof Text> & { author?: string }) => (
  <figure
    className={cn(
      "border-l-4 border-muted pl-4 italic text-muted-foreground space-y-1",
      className
    )}
  >
    <Text as="blockquote" {...props} />
    {author && (
      <figcaption className="text-xs font-medium text-muted-foreground/80">
        — {author}
      </figcaption>
    )}
  </figure>
);

/* === Lead (introductory text) === */
export const Lead = ({
  className,
  ...props
}: React.ComponentProps<typeof Text>) => (
  <Text
    as="p"
    size="lg"
    className={cn(
      "text-foreground/80 leading-relaxed font-normal max-w-prose",
      className
    )}
    {...props}
  />
);

/* === Small (fine print) === */
export const Small = ({
  className,
  ...props
}: React.ComponentProps<typeof Text>) => (
  <Text
    as="small"
    size="xs"
    muted
    className={cn("text-muted-foreground", className)}
    {...props}
  />
);
