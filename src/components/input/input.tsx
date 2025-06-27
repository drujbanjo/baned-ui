import { cn } from "@/lib/cn"
import { forwardRef } from "react"
import { InputProps } from "./input.types"
import { inputVariants } from "./inputVariants"

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ color, icon, valid, inValid, unPassed, type, className, ...props }, ref) => {
		if (!!color && (valid || inValid || unPassed)) {
			console.warn(
				"You can't use color with valid, inValid or unPassed. Please, use (valid, inValid, unPassed) or color"
			)
		}

		return (
			<div className={cn(inputVariants({ color, valid, inValid, unPassed }), className)}>
				<div className="pointer-events-none absolute top-0 left-0 flex h-9 w-8 items-center justify-center [&_svg]:size-4 [&_svg]:text-current">
					{icon}
				</div>
				<input
					type={type}
					className={cn(
						"h-full border-none pr-30 text-sm font-medium ring-0 outline-none placeholder:text-current",
						icon ? "pl-8" : "pl-3"
					)}
					ref={ref}
					{...props}
				/>
			</div>
		)
	}
)

Input.displayName = "Input"
