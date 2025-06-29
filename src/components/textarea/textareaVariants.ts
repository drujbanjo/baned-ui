import { cva } from "class-variance-authority"

export const textareaVariants = cva(
	"text-sm flex h-9 rounded-md border border-border transition-all outline-none focus-visible:ring-3 text-input-foreground dark:bg-input placeholder:text-input-foreground/50 disabled:pointer-events-none disabled:opacity-50 min-h-20 w-full px-3 py-2",
	{
		variants: {
			color: {
				primary: "ring-border focus-visible:border-input-foreground/40",
				red: "ring-red/50 focus-visible:border-red focus-visible:text-red focus-visible:placeholder:text-red/70",
				orange:
					"ring-orange/50 focus-visible:border-orange focus-visible:text-orange focus-visible:placeholder:text-orange/70",
				yellow:
					"ring-yellow/50 focus-visible:border-yellow focus-visible:text-yellow focus-visible:placeholder:text-yellow/70",
				green:
					"ring-green/50 focus-visible:border-green focus-visible:text-green focus-visible:placeholder:text-green/70",
				emerald:
					"ring-emerald/50 focus-visible:border-emerald focus-visible:text-emerald focus-visible:placeholder:text-emerald/70",
				blue: "ring-blue/50 focus-visible:border-blue focus-visible:text-blue focus-visible:placeholder:text-blue/70",
				violet:
					"ring-violet/50 focus-visible:border-violet focus-visible:text-violet focus-visible:placeholder:text-violet/70",
				rose: "ring-rose/50 focus-visible:border-rose focus-visible:text-rose focus-visible:placeholder:text-rose/70"
			},
			succes: {
				false: "",
				true: "focus-visible:text-emerald !bg-emerald/10 border-emerald/50 text-emerald/80 ring-emerald/50 focus-visible:border-emerald placeholder:text-emerald/60 focus-visible:placeholder:text-emerald/80"
			},
			error: {
				false: "",
				true: "focus-visible:text-destructive !bg-destructive/10 border-destructive/50 text-destructive/80 ring-destructive/50 focus-visible:border-destructive placeholder:text-destructive/60 focus-visible:placeholder:text-destructive/80"
			},
			warn: {
				false: "",
				true: "focus-visible:text-yellow !bg-yellow/10 border-yellow/50 text-yellow/80 ring-yellow/50 focus-visible:border-yellow placeholder:text-yellow/60 focus-visible:placeholder:text-yellow/80"
			}
		},
		defaultVariants: {
			color: "primary",
			succes: false,
			error: false,
			warn: false
		}
	}
)
