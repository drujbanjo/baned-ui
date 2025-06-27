import { cva } from "class-variance-authority"

export const buttonVariants = cva(
	"inline-flex justify-center items-center gap-2 font-medium py-0 rounded-md border-0 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none [&_svg]:pointer-events-none  [&_svg]:shrink-0 hover:scale-95 active:scale-100",
	{
		variants: {
			size: {
				xl: "h-11 px-6 text-xl [&_svg]:size-7",
				lg: "h-10 px-5 text-lg [&_svg]:size-6",
				md: "h-9 px-4 text-md [&_svg]:size-5",
				sm: "h-8 px-3 text-sm [&_svg]:size-4",
				xs: "h-7 px-3 text-xs [&_svg]:size-4"
			},
			icon: {
				false: "",
				true: "px-0 aspect-square"
			},
			variant: {
				default: "hover:opacity-80",
				outline: "border",
				secondary: "opacity-80 hover:opacity-60",
				ghost: "bg-transparent",
				link: "bg-transparent hover:underline hover:scale-100"
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
				className: "bg-accent/50 hover:bg-accent text-accent-foreground hover:text-primary border-border"
			},
			{
				variant: "outline",
				color: "destructive",
				className: "bg-transparent hover:bg-destructive/5 text-destructive border-destructive"
			},
			{
				variant: "outline",
				color: "red",
				className: "bg-transparent hover:bg-red/5 text-red border-red"
			},
			{
				variant: "outline",
				color: "orange",
				className: "bg-transparent hover:bg-orange/5 border-orange"
			},
			{
				variant: "outline",
				color: "yellow",
				className: "bg-transparent hover:bg-yellow/5 border-yellow"
			},
			{
				variant: "outline",
				color: "green",
				className: "bg-transparent hover:bg-green/5 border-green"
			},
			{
				variant: "outline",
				color: "emerald",
				className: "bg-transparent hover:bg-emerald/5 border-emerald"
			},
			{
				variant: "outline",
				color: "blue",
				className: "bg-transparent hover:bg-blue/5 border-blue"
			},
			{
				variant: "outline",
				color: "violet",
				className: "bg-transparent hover:bg-violet/5 border-violet"
			},
			{
				variant: "outline",
				color: "rose",
				className: "bg-transparent hover:bg-rose/5 border-rose"
			},

			// ghost
			{
				variant: "ghost",
				color: "primary",
				className: "hover:bg-accent text-white"
			},
			{
				variant: "ghost",
				color: "red",
				className: "hover:bg-red/5 text-red"
			},
			{
				variant: "ghost",
				color: "orange",
				className: "hover:bg-orange/5 text-orange"
			},
			{
				variant: "ghost",
				color: "yellow",
				className: "hover:bg-yellow/5 text-yellow"
			},
			{
				variant: "ghost",
				color: "green",
				className: "hover:bg-green/5 text-green"
			},
			{
				variant: "ghost",
				color: "emerald",
				className: "hover:bg-emerald/5 text-emerald"
			},
			{
				variant: "ghost",
				color: "blue",
				className: "hover:bg-blue/5 text-blue"
			},
			{
				variant: "ghost",
				color: "violet",
				className: "hover:bg-violet/5 text-violet"
			},
			{
				variant: "ghost",
				color: "rose",
				className: "hover:bg-rose/5 text-rose"
			},

			// link
			{
				variant: "link",
				color: "primary",
				className: "text-primary"
			},
			{
				variant: "link",
				color: "red",
				className: "text-red"
			},
			{
				variant: "link",
				color: "orange",
				className: "text-orange"
			},
			{
				variant: "link",
				color: "yellow",
				className: "text-yellow"
			},
			{
				variant: "link",
				color: "green",
				className: "text-green"
			},
			{
				variant: "link",
				color: "emerald",
				className: "text-emerald"
			},
			{
				variant: "link",
				color: "blue",
				className: "text-blue"
			},
			{
				variant: "link",
				color: "violet",
				className: "text-violet"
			},
			{
				variant: "link",
				color: "rose",
				className: "text-rose"
			}
		],
		defaultVariants: {
			size: "md",
			icon: false,
			variant: "default",
			color: "primary"
		}
	}
)
