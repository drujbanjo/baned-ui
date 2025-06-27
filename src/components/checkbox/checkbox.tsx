"use client"

import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/cn"
import { checkboxVariants } from "./checkboxVariants"
import { forwardRef } from "react"
import { CheckboxProps } from "./checkbox.types"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

export const Checkbox = forwardRef<React.ComponentRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
	({ className, color, ...props }, ref) => {
		return (
			<>
				<CheckboxPrimitive.Root ref={ref} className={cn(checkboxVariants({ color }), className)} {...props}>
					<CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
						<CheckIcon className="pointer-events-none size-3 stroke-3" />
					</CheckboxPrimitive.Indicator>
				</CheckboxPrimitive.Root>
			</>
		)
	}
)

Checkbox.displayName = CheckboxPrimitive.Root.displayName
