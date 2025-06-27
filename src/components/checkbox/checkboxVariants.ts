import { cva } from "class-variance-authority"

export const checkboxVariants = cva(
	"peer shrink-0 cursor-pointer inline-flex items-center justify-center size-4 border-border rounded-xs transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			color: {
				primary:
					"data-[state=checked]:bg-primary data-[state=checked]:border-0 data-[state=checked]:text-primary-foreground",
				destructive:
					"data-[state=checked]:bg-destructive data-[state=checked]:border-0 data-[state=checked]:text-white",
				red: "data-[state=checked]:bg-red data-[state=checked]:border-0 data-[state=checked]:text-white",
				orange: "data-[state=checked]:bg-orange data-[state=checked]:border-0 data-[state=checked]:text-white",
				yellow: "data-[state=checked]:bg-yellow data-[state=checked]:border-0 data-[state=checked]:text-white",
				green: "data-[state=checked]:bg-green data-[state=checked]:border-0 data-[state=checked]:text-white",
				emerald: "data-[state=checked]:bg-emerald data-[state=checked]:border-0 data-[state=checked]:text-white",
				blue: "data-[state=checked]:bg-blue data-[state=checked]:border-0 data-[state=checked]:text-white",
				violet: "data-[state=checked]:bg-violet data-[state=checked]:border-0 data-[state=checked]:text-white",
				rose: "data-[state=checked]:bg-rose data-[state=checked]:border-0 data-[state=checked]:text-white"
			}
		},
		defaultVariants: {
			color: "primary"
		}
	}
)
