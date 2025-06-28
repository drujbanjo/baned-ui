import { cva } from "class-variance-authority"

export const switchVariants = cva(
	"peer focus-visible:ring-border inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-all focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&_span]:pointer-events-none [&_span]:block [&_span]:rounded-full [&_span]:shadow-lg [&_span]:ring-0 [&_span]:transition-all [&_span]:data-[state=checked]:translate-x-4 [&_span]:data-[state=unchecked]:translate-x-0",
	{
		variants: {
			variant: {
				default: "[&_span]:bg-background h-6 w-10 [&_span]:size-5",
				outline: "border-accent bg-background h-6 w-10 border-2 [&_span]:size-4 ",
				m2: "[&_span]:bg-background [&_span]:border-accent bg-accent h-3 w-8 p-0 [&_span]:size-5 [&_span]:border-2 [&_span]:data-[state=checked]:translate-x-3"
			},
			color: {
				primary: "",
				destructive: "",
				red: "",
				orange: "",
				yellow: "",
				green: "",
				emerald: "",
				blue: "",
				violet: "",
				rose: ""
			}
		},
		compoundVariants: [
			// default
			{
				variant: "default",
				color: "primary",
				className: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-accent"
			},
			{
				variant: "default",
				color: "destructive",
				className: "data-[state=checked]:bg-destructive data-[state=unchecked]:bg-accent"
			},
			{
				variant: "default",
				color: "red",
				className: "data-[state=checked]:bg-red data-[state=unchecked]:bg-accent"
			},
			{
				variant: "default",
				color: "orange",
				className: "data-[state=checked]:bg-orange data-[state=unchecked]:bg-accent"
			},
			{
				variant: "default",
				color: "yellow",
				className: "data-[state=checked]:bg-yellow data-[state=unchecked]:bg-accent"
			},
			{
				variant: "default",
				color: "green",
				className: "data-[state=checked]:bg-green data-[state=unchecked]:bg-accent"
			},
			{
				variant: "default",
				color: "emerald",
				className: "data-[state=checked]:bg-emerald data-[state=unchecked]:bg-accent"
			},
			{
				variant: "default",
				color: "blue",
				className: "data-[state=checked]:bg-blue data-[state=unchecked]:bg-accent"
			},
			{
				variant: "default",
				color: "violet",
				className: "data-[state=checked]:bg-violet data-[state=unchecked]:bg-accent"
			},
			{
				variant: "default",
				color: "rose",
				className: "data-[state=checked]:bg-rose data-[state=unchecked]:bg-accent"
			},

			// outline
			{
				variant: "outline",
				color: "primary",
				className: "data-[state=checked]:border-primary [&_span]:bg-accent [&_span]:data-[state=checked]:bg-primary"
			},
			{
				variant: "outline",
				color: "destructive",
				className:
					"data-[state=checked]:border-destructive [&_span]:bg-accent [&_span]:data-[state=checked]:bg-destructive"
			},
			{
				variant: "outline",
				color: "red",
				className: "data-[state=checked]:border-red [&_span]:bg-accent [&_span]:data-[state=checked]:bg-red"
			},
			{
				variant: "outline",
				color: "orange",
				className: "data-[state=checked]:border-orange [&_span]:bg-accent [&_span]:data-[state=checked]:bg-orange"
			},
			{
				variant: "outline",
				color: "yellow",
				className: "data-[state=checked]:border-yellow [&_span]:bg-accent [&_span]:data-[state=checked]:bg-yellow"
			},
			{
				variant: "outline",
				color: "green",
				className: "data-[state=checked]:border-green [&_span]:bg-accent [&_span]:data-[state=checked]:bg-green"
			},
			{
				variant: "outline",
				color: "emerald",
				className: "data-[state=checked]:border-emerald [&_span]:bg-accent [&_span]:data-[state=checked]:bg-emerald"
			},
			{
				variant: "outline",
				color: "blue",
				className: "data-[state=checked]:border-blue [&_span]:bg-accent [&_span]:data-[state=checked]:bg-blue"
			},
			{
				variant: "outline",
				color: "violet",
				className: "data-[state=checked]:border-violet [&_span]:bg-accent [&_span]:data-[state=checked]:bg-violet"
			},
			{
				variant: "outline",
				color: "rose",
				className: "data-[state=checked]:border-rose [&_span]:bg-accent [&_span]:data-[state=checked]:bg-rose"
			},

			// m2
			{
				variant: "m2",
				color: "primary",
				className: "[&_span]:data-[state=checked]:border-primary data-[state=checked]:bg-primary"
			},
			{
				variant: "m2",
				color: "destructive",
				className: "[&_span]:data-[state=checked]:border-destructive data-[state=checked]:bg-destructive"
			},
			{
				variant: "m2",
				color: "red",
				className: "[&_span]:data-[state=checked]:border-red data-[state=checked]:bg-red"
			},
			{
				variant: "m2",
				color: "orange",
				className: "[&_span]:data-[state=checked]:border-orange data-[state=checked]:bg-orange"
			},
			{
				variant: "m2",
				color: "yellow",
				className: "[&_span]:data-[state=checked]:border-yellow data-[state=checked]:bg-yellow"
			},
			{
				variant: "m2",
				color: "green",
				className: "[&_span]:data-[state=checked]:border-green data-[state=checked]:bg-green"
			},
			{
				variant: "m2",
				color: "emerald",
				className: "[&_span]:data-[state=checked]:border-emerald data-[state=checked]:bg-emerald"
			},
			{
				variant: "m2",
				color: "blue",
				className: "[&_span]:data-[state=checked]:border-blue data-[state=checked]:bg-blue"
			},
			{
				variant: "m2",
				color: "violet",
				className: "[&_span]:data-[state=checked]:border-violet data-[state=checked]:bg-violet"
			},
			{
				variant: "m2",
				color: "rose",
				className: "[&_span]:data-[state=checked]:border-rose data-[state=checked]:bg-rose"
			}
		],
		defaultVariants: {
			variant: "default",
			color: "primary"
		}
	}
)
