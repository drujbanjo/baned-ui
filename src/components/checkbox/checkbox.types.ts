import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { VariantProps } from "class-variance-authority"
import { checkboxVariants } from "./checkboxVariants"

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
	VariantProps<typeof checkboxVariants>
