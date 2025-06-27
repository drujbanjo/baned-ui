import { VariantProps } from "class-variance-authority"
import { toggleVariants } from "./toggleVariants"
import * as TogglePrimitive from "@radix-ui/react-toggle"

export type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
	VariantProps<typeof toggleVariants>
