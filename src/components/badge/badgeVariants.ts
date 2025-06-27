import { cva } from "class-variance-authority"

export const badgeVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-md border-0 py-0 px-2 h-5 text-xs font-medium transition-all [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3 gap-1",
	{
		variants: {
			icon: {
				false: "",
				true: "aspect-square px-0"
			},
			variant: {
				default: "",
				outline: "border",
				secondary: "opacity-80"
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
			// default\secondary
			{
				variant: "default",
				color: "primary",
				className: "bg-primary text-primary-foreground"
			},
			{
				variant: "secondary",
				color: "primary",
				className: "bg-secondary text-secondary-foreground"
			},
			{
				variant: ["default", "secondary"],
				color: "destructive",
				className: "bg-destructive text-white"
			},
			{
				variant: ["default", "secondary"],
				color: "red",
				className: "bg-red text-white"
			},
			{
				variant: ["default", "secondary"],
				color: "orange",
				className: "bg-orange text-white"
			},
			{
				variant: ["default", "secondary"],
				color: "yellow",
				className: "bg-yellow text-white"
			},
			{
				variant: ["default", "secondary"],
				color: "green",
				className: "bg-green text-white"
			},
			{
				variant: ["default", "secondary"],
				color: "emerald",
				className: "bg-emerald text-white"
			},
			{
				variant: ["default", "secondary"],
				color: "blue",
				className: "bg-blue text-white"
			},
			{
				variant: ["default", "secondary"],
				color: "violet",
				className: "bg-violet text-white"
			},
			{
				variant: ["default", "secondary"],
				color: "rose",
				className: "bg-rose text-white"
			},

			// outline
			{
				variant: "outline",
				color: "primary",
				className: "border-border bg-transparent text-primary"
			},
			{
				variant: "outline",
				color: "destructive",
				className: "border-destructive bg-transparent text-transparent text-destructive"
			},
			{
				variant: "outline",
				color: "red",
				className: "border-red bg-transparent text-transparent text-red"
			},
			{
				variant: "outline",
				color: "orange",
				className: "border-orange text-orange bg-transparent"
			},
			{
				variant: "outline",
				color: "yellow",
				className: "border-yellow text-yellow bg-transparent"
			},
			{
				variant: "outline",
				color: "green",
				className: "border-green text-green bg-transparent"
			},
			{
				variant: "outline",
				color: "emerald",
				className: "border-emerald text-emerald bg-transparent"
			},
			{
				variant: "outline",
				color: "blue",
				className: "border-blue text-blue bg-transparent"
			},
			{
				variant: "outline",
				color: "violet",
				className: "border-violet text-violet bg-transparent"
			},
			{
				variant: "outline",
				color: "rose",
				className: "border-rose text-rose bg-transparent"
			}
		],
		defaultVariants: {
			icon: false,
			variant: "default",
			color: "primary"
		}
	}
)
