import { VariantProps } from "class-variance-authority"
import { inputVariants } from "./inputVariants"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
	VariantProps<typeof inputVariants> & {
		icon?: React.ReactNode
		type?:
			| "button"
			| "checkbox"
			| "color"
			| "date"
			| "datetime-local"
			| "email"
			| "hidden"
			| "month"
			| "number"
			| "password"
			| "radio"
			| "range"
			| "reset"
			| "search"
			| "submit"
			| "tel"
			| "text"
			| "time"
			| "url"
			| "week"
	}
