import { forwardRef } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@/lib/cn'
// import { Circle } from 'lucide-react'
import { radioVariants } from './radioVariants'
import { RadioGroupItemProps, RadioGroupProps } from './radio.types'

export const RadioGroup = forwardRef<
	React.ComponentRef<typeof RadioGroupPrimitive.Root>,
	RadioGroupProps
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cn('grid gap-2', className)}
			{...props}
			ref={ref}
		/>
	)
})

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export const RadioGroupItem = forwardRef<
	React.ComponentRef<typeof RadioGroupPrimitive.Item>,
	RadioGroupItemProps
>(({ color, className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cn(radioVariants({ color }), className)}
			{...props}
		/>
	)
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
