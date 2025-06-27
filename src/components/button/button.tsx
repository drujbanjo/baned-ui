import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/cn"
import { ButtonProps } from "./button.types"
import { buttonVariants } from "./buttonVariants"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ size, icon, variant, color, className, asChild, ...props }, ref) => {
		const Comp = asChild ? Slot : "button"
		return <Comp className={cn(buttonVariants({ size, icon, variant, color }), className)} ref={ref} {...props} />
	}
)

Button.displayName = "Buton"
