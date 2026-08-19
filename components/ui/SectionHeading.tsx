import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "block text-sm font-semibold tracking-widest uppercase mb-3",
            light ? "text-accent-soft" : "text-accent"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-heading",
          light ? "text-neutral-white" : "text-primary-deep"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
