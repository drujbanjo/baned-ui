import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { VariantProps } from 'class-variance-authority'
import { radioVariants } from './radioVariants'

export type RadioGroupProps = React.ComponentPropsWithoutRef<
	typeof RadioGroupPrimitive.Root
>

export type RadioGroupItemProps = React.ComponentPropsWithoutRef<
	typeof RadioGroupPrimitive.Item
> &
	VariantProps<typeof radioVariants>
