import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './buttonVariants'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}
