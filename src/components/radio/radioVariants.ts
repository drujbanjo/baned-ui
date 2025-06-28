import { cva } from 'class-variance-authority'

export const radioVariants = cva(
	'aspect-square size-4 rounded-full border border-border bg-accent data-[state=checked]:border-5 transition-all [state=checked]:bg-primary-foreground ',
	{
		variants: {
			color: {
				primary: 'data-[state=checked]:border-primary',
				destructive: 'data-[state=checked]:border-destructive',
				red: 'data-[state=checked]:border-red',
				orange: 'data-[state=checked]:border-orange',
				yellow: 'data-[state=checked]:border-yellow',
				green: 'data-[state=checked]:border-green',
				emerald: 'data-[state=checked]:border-emerald',
				blue: 'data-[state=checked]:border-blue',
				violet: 'data-[state=checked]:border-violet',
				rose: 'data-[state=checked]:border-rose',
			},
		},
		defaultVariants: {
			color: 'primary',
		},
	}
)
