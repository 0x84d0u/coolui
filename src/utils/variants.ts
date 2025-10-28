import { cn } from "./cn"

const themeColors = [
    "body",
    "surface",
    "accent",
    "success",
    "warning",
    "destructive",
    "info",
] as const
type ColorName = typeof themeColors[number];


export const createColorVariants = ({
    bg = false,
    text = false,
    bgHover = false
}: {
    bg?: boolean,
    text?: boolean
    bgHover?: boolean
}) => {
    const variants: Record<string, string> = {
        unset: cn(),
        inherit: cn(bg && "bg-[inherit]", text && "text-[inherit]"),
    };

    for (const color of themeColors) {
        variants[color] = cn(
            bg && `bg-${color}`,
            text && `text-${color}-fg`,
            bgHover && `hover:bg-${color}-hvr` // Assuming 'accent-hover', 'surface-hover', etc.
        );
    }
    return variants as Record<"unset" | "inherit" | ColorName, string>;
}