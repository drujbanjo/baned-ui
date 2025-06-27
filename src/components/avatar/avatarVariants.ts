import { cva } from "class-variance-authority"

export const avatarVariants = cva("relative flex items-center justify-center rounded-full overflow-hidden", {
	variants: {
		size: { xs: "size-6", sm: "size-7", md: "size-8", lg: "size-9", xl: "size-10" }
	},
	defaultVariants: { size: "md" }
})
