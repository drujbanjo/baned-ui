import { cn } from "@/lib/cn"
import { textareaVariants } from "./textareaVariants"
import { TextareaProps } from "./textarea.types"
import { forwardRef } from "react"

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ color, succes, error, warn, resize = true, className, ...props }, ref) => {
		return (
			<textarea
				className={cn(textareaVariants({ color, succes, error, warn }), resize ? "resize-y" : "resize-none", className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Textarea.displayName = "Textarea"
