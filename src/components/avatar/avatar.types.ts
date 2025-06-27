import { VariantProps } from "class-variance-authority"
import { avatarVariants } from "./avatarVariants"

export type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> &
	VariantProps<typeof avatarVariants> & {
		fallback?: React.ReactNode
	}
