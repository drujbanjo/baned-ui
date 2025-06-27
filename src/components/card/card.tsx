import { forwardRef } from "react"
import {
	CardContentProps,
	CardDescriptionProps,
	CardFooterProps,
	CardHeaderProps,
	CardProps,
	CardSubTitleProps,
	CardTitleProps
} from "./card.types"
import { cn } from "@/lib/cn"

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
	return (
		<div
			className={cn(
				"bg-card text-card-foreground border-border flex flex-col space-y-5 rounded-lg border p-5 shadow-sm",
				className
			)}
			ref={ref}
			{...props}
		></div>
	)
})

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => {
	return <div className={cn("", className)} ref={ref} {...props}></div>
})

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => {
	return <div className={cn("", className)} ref={ref} {...props}></div>
})

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => {
	return <div className={cn("flex items-center", className)} ref={ref} {...props}></div>
})

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(({ className, ...props }, ref) => {
	return <h5 className={cn("text-md leading-none font-semibold tracking-tight", className)} ref={ref} {...props}></h5>
})

export const CardSubTitle = forwardRef<HTMLDivElement, CardSubTitleProps>(({ className, ...props }, ref) => {
	return (
		<h6
			className={cn("text-accent-foreground/80 text-sm leading-none font-normal tracking-tight", className)}
			ref={ref}
			{...props}
		></h6>
	)
})

export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(({ className, ...props }, ref) => {
	return <p className={cn("text-accent-foreground text-md font-normal", className)} ref={ref} {...props}></p>
})

Card.displayName = "Card"
CardHeader.displayName = "CardHeader"
CardContent.displayName = "CardContent"
CardFooter.displayName = "CardFooter"
CardTitle.displayName = "CardTitle"
CardSubTitle.displayName = "CardSubTitle"
CardDescription.displayName = "CardDescription"
