import { forwardRef } from "react"
import { LabelProps } from "./label.types"
import { cn } from "@/lib/cn"
import * as LabelPrimitive from "@radix-ui/react-label"

export const Label = forwardRef<React.ComponentRef<typeof LabelPrimitive.Root>, LabelProps>(
	({ className, ...props }, ref) => {
		return (
			<LabelPrimitive.Root
				className={cn(
					"text-foreground text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)

Label.displayName = LabelPrimitive.Root.displayName
