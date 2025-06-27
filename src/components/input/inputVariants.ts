import { cva } from "class-variance-authority"

export const inputVariants = cva(
	"relative h-9 rounded-md border border-border transition-all outline-none focus-within:ring-3 text-input-foreground dark:bg-input [&_input]:placeholder:text-input-foreground/50 [&_input]:disabled:pointer-events-none [&_input]:disabled:opacity-50",
	{
		variants: {
			color: {
				primary: "ring-border focus-within:border-input-foreground/40 [&_input]:placeholder:text-input-foreground/50",
				red: "ring-red/50 focus-within:border-red focus-within:text-red focus-within:[&_input]:placeholder:text-red/70",
				orange:
					"ring-orange/50 focus-within:border-orange focus-within:text-orange focus-within:[&_input]:placeholder:text-orange/70",
				yellow:
					"ring-yellow/50 focus-within:border-yellow focus-within:text-yellow focus-within:[&_input]:placeholder:text-yellow/70",
				green:
					"ring-green/50 focus-within:border-green focus-within:text-green focus-within:[&_input]:placeholder:text-green/70",
				emerald:
					"ring-emerald/50 focus-within:border-emerald focus-within:text-emerald focus-within:[&_input]:placeholder:text-emerald/70",
				blue: "ring-blue/50 focus-within:border-blue focus-within:text-blue focus-within:[&_input]:placeholder:text-blue/70",
				violet:
					"ring-violet/50 focus-within:border-violet focus-within:text-violet focus-within:[&_input]:placeholder:text-violet/70",
				rose: "ring-rose/50 focus-within:border-rose focus-within:text-rose focus-within:[&_input]:placeholder:text-rose/70"
			},
			valid: {
				false: "",
				true: "focus-within:text-emerald !bg-emerald/10 border-emerald/50 text-emerald/80 ring-emerald/50 focus-within:border-emerald [&_input]:placeholder:text-emerald/60 focus-within:[&_input]:placeholder:text-emerald/80"
			},
			inValid: {
				false: "",
				true: "focus-within:text-destructive !bg-destructive/10 border-destructive/50 text-destructive/80 ring-destructive/50 focus-within:border-destructive [&_input]:placeholder:text-destructive/60 focus-within:[&_input]:placeholder:text-destructive/80"
			},
			unPassed: {
				false: "",
				true: "focus-within:text-yellow !bg-yellow/10 border-yellow/50 text-yellow/80 ring-yellow/50 focus-within:border-yellow [&_input]:placeholder:text-yellow/60 focus-within:[&_input]:placeholder:text-yellow/80"
			}
		},
		defaultVariants: {
			color: "primary",
			valid: false,
			inValid: false,
			unPassed: false
		}
	}
)
