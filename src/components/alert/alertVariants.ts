import { cva } from "class-variance-authority"

export const alertVariants = cva(
	"relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4 border-border [&>p]:text-curent",
	{
		variants: {
			color: {
				primary: "text-primary [&>p]:text-accent-foreground",
				destructive: "text-destructive",
				red: "text-red",
				orange: "text-orange",
				yellow: "text-yellow",
				green: "text-green",
				emerald: "text-emerald",
				blue: "text-blue",
				violet: "text-violet",
				rose: "text-rose"
			}
		},
		defaultVariants: {
			color: "primary"
		}
	}
)
