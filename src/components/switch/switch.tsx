"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/cn"
import { SwitchProps } from "./switch.types"
import { switchVariants } from "./switchVariants"

const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitives.Root>, SwitchProps>(
	({ color, variant, className, ...props }, ref) => (
		<SwitchPrimitives.Root className={cn(switchVariants({ variant, color }), className)} {...props} ref={ref}>
			<SwitchPrimitives.Thumb />
		</SwitchPrimitives.Root>
	)
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
