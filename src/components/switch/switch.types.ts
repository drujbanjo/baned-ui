import * as SwitchPrimitives from "@radix-ui/react-switch"
import { VariantProps } from "class-variance-authority"
import { switchVariants } from "./switchVariants"

export type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
	VariantProps<typeof switchVariants>
