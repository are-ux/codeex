import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-white/60 bg-white/80 p-6 shadow-card backdrop-blur",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";
