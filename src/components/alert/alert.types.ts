import { VariantProps } from "class-variance-authority"
import { alertVariants } from "./alertVariants"

export type AlertProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof alertVariants>

export type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>
export type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>
