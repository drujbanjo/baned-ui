import { cva } from "class-variance-authority"

export const toggleVariants = cva(
	"inline-flex items-center justify-center gap-1 rounded-md disabled:pointer-events-none disabled:opacity-50  focus-visible:outline-none focus-visible:ring focus-visible:ring-2 focus-visible:ring-border transition-all hover:opacity-90 text-foreground font-medium [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "",
				outline: "hover:bg-accent/50",
				secondary: "text-secondary-foreground"
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
			},
			size: {
				xs: "h-7 px-1 min-w-7 text-[0.625rem] [&_svg]:size-4",
				sm: "h-8 px-1.5 min-w-8 text-xs [&_svg]:size-4",
				md: "h-9 px-1.5 min-w-9 text-sm [&_svg]:size-5",
				lg: "h-10 px-2 min-w-10 text-md [&_svg]:size-6",
				xl: "h-11 px-2 min-w-11 text-lg [&_svg]:size-7"
			}
		},
		compoundVariants: [
			// default
			{
				variant: "default",
				color: "primary",
				className: "data-[state=on]:bg-foreground data-[state=on]:text-background hover:bg-secondary"
			},
			{
				variant: "default",
				color: "destructive",
				className: "data-[state=on]:bg-destructive data-[state=on]:text-white hover:bg-destructive/20"
			},
			{
				variant: "default",
				color: "red",
				className: "data-[state=on]:bg-red data-[state=on]:text-white hover:bg-red/20"
			},
			{
				variant: "default",
				color: "orange",
				className: "data-[state=on]:bg-orange data-[state=on]:text-white hover:bg-orange/20"
			},
			{
				variant: "default",
				color: "yellow",
				className: "data-[state=on]:bg-yellow data-[state=on]:text-white hover:bg-yellow/20"
			},
			{
				variant: "default",
				color: "green",
				className: "data-[state=on]:bg-green data-[state=on]:text-white hover:bg-green/20"
			},
			{
				variant: "default",
				color: "emerald",
				className: "data-[state=on]:bg-emerald data-[state=on]:text-white hover:bg-emerald/20"
			},
			{
				variant: "default",
				color: "blue",
				className: "data-[state=on]:bg-blue data-[state=on]:text-white hover:bg-blue/20"
			},
			{
				variant: "default",
				color: "violet",
				className: "data-[state=on]:bg-violet data-[state=on]:text-white hover:bg-violet/20"
			},
			{
				variant: "default",
				color: "rose",
				className: "data-[state=on]:bg-rose data-[state=on]:text-white hover:bg-rose/20"
			},

			// outline
			{
				variant: "outline",
				color: "primary",
				className: "border border-border data-[state=on]:bg-accent"
			},
			{
				variant: "outline",
				color: "destructive",
				className:
					"border border-border data-[state=on]:bg-destructive/10 data-[state=on]:border-destructive data-[state=on]:text-destructive"
			},
			{
				variant: "outline",
				color: "red",
				className: "border border-border data-[state=on]:bg-red/10 data-[state=on]:border-red data-[state=on]:text-red"
			},
			{
				variant: "outline",
				color: "orange",
				className:
					"border border-border data-[state=on]:bg-orange/10 data-[state=on]:border-orange data-[state=on]:text-orange"
			},
			{
				variant: "outline",
				color: "yellow",
				className:
					"border border-border data-[state=on]:bg-yellow/10 data-[state=on]:border-yellow data-[state=on]:text-yellow"
			},
			{
				variant: "outline",
				color: "green",
				className:
					"border border-border data-[state=on]:bg-green/10 data-[state=on]:border-green data-[state=on]:text-green"
			},
			{
				variant: "outline",
				color: "emerald",
				className:
					"border border-border data-[state=on]:bg-emerald/10 data-[state=on]:border-emerald data-[state=on]:text-emerald"
			},
			{
				variant: "outline",
				color: "blue",
				className:
					"border border-border data-[state=on]:bg-blue/10 data-[state=on]:border-blue data-[state=on]:text-blue"
			},
			{
				variant: "outline",
				color: "violet",
				className:
					"border border-border data-[state=on]:bg-violet/10 data-[state=on]:border-violet data-[state=on]:text-violet"
			},
			{
				variant: "outline",
				color: "rose",
				className:
					"border border-border data-[state=on]:bg-rose/10 data-[state=on]:border-rose data-[state=on]:text-rose"
			},

			// secondary
			{
				variant: "secondary",
				color: "primary",
				className: "data-[state=on]:bg-secondary data-[state=on]:text-foreground hover:bg-secondary/50"
			},
			{
				variant: "secondary",
				color: "destructive",
				className: "data-[state=on]:bg-destructive/80 data-[state=on]:text-white hover:bg-destructive/10"
			},
			{
				variant: "secondary",
				color: "red",
				className: "data-[state=on]:bg-red/80 data-[state=on]:text-white hover:bg-red/10"
			},
			{
				variant: "secondary",
				color: "orange",
				className: "data-[state=on]:bg-orange/80 data-[state=on]:text-white hover:bg-orange/10"
			},
			{
				variant: "secondary",
				color: "yellow",
				className: "data-[state=on]:bg-yellow/80 data-[state=on]:text-white hover:bg-yellow/10"
			},
			{
				variant: "secondary",
				color: "green",
				className: "data-[state=on]:bg-green/80 data-[state=on]:text-white hover:bg-green/10"
			},
			{
				variant: "secondary",
				color: "emerald",
				className: "data-[state=on]:bg-emerald/80 data-[state=on]:text-white hover:bg-emerald/10"
			},
			{
				variant: "secondary",
				color: "blue",
				className: "data-[state=on]:bg-blue/80 data-[state=on]:text-white hover:bg-blue/10"
			},
			{
				variant: "secondary",
				color: "violet",
				className: "data-[state=on]:bg-violet/80 data-[state=on]:text-white hover:bg-violet/10"
			},
			{
				variant: "secondary",
				color: "rose",
				className: "data-[state=on]:bg-rose/80 data-[state=on]:text-white hover:bg-rose/10"
			}
		],
		defaultVariants: {
			variant: "default",
			color: "primary",
			size: "md"
		}
	}
)
