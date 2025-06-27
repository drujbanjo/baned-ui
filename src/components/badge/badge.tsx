import { cn } from "@/lib/cn"
import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import { BadgeProps } from "./badge.types"
import { badgeVariants } from "./badgeVariants"

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	({ icon, variant, color, className, asChild, ...props }, ref) => {
		const Comp = asChild ? Slot : "span"
		return <Comp className={cn(badgeVariants({ icon, variant, color, className }))} ref={ref} {...props} />
	}
)

Badge.displayName = "Badge"
