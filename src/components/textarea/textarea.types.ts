import { VariantProps } from "class-variance-authority"
import { textareaVariants } from "./textareaVariants"

export type TextareaProps = React.ComponentProps<"textarea"> &
	VariantProps<typeof textareaVariants> & {
		resize?: boolean
	}
