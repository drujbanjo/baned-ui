import { forwardRef } from "react"
import { AlertProps, AlertTitleProps, AlertDescriptionProps } from "./alert.types"
import { cn } from "@/lib/cn"
import { alertVariants } from "./alertVariants"

export const Alert = forwardRef<HTMLDivElement, AlertProps>(({ color, className, ...props }, ref) => {
	return <div className={cn(alertVariants({ color }), className)} ref={ref} {...props} />
})

export const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>(({ className, ...props }, ref) => {
	return <h5 className={cn("text-sm mb-1 font-semibold leading-none tracking-tight", className)} ref={ref} {...props} />
})
export const AlertDescription = forwardRef<HTMLDivElement, AlertDescriptionProps>(({ className, ...props }, ref) => {
	return <p className={cn("text-sm [&_p]:leading-relaxed", className)} ref={ref} {...props} />
})

Alert.displayName = "Alert"
AlertTitle.displayName = "AlertTitle"
AlertDescription.displayName = "AlertDescription"
