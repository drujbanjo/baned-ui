import { VariantProps } from "class-variance-authority"
import { badgeVariants } from "./badgeVariants"

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
	VariantProps<typeof badgeVariants> & {
		asChild?: boolean
		icon?: boolean
	}
