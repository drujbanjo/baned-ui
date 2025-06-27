import { forwardRef } from "react"
import { cn } from "@/lib/cn"
import { ToggleProps } from "./toggle.types"
import { toggleVariants } from "./toggleVariants"
import * as TogglePrimitive from "@radix-ui/react-toggle"

export const Toggle = forwardRef<React.ComponentRef<typeof TogglePrimitive.Root>, ToggleProps>(
	({ variant, color, size, className, ...props }, ref) => {
		return (
			<TogglePrimitive.Root className={cn(toggleVariants({ variant, color, size }), className)} ref={ref} {...props} />
		)
	}
)

Toggle.displayName = TogglePrimitive.Root.displayName
