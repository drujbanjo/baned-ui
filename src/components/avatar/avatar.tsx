"use client"

import { cn } from "@/lib/cn"
import { forwardRef, useEffect, useState } from "react"
import { avatarVariants } from "./avatarVariants"
import { AvatarProps } from "./avatar.types"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
	({ size, src, alt = "Avatar", fallback, className, ...props }, ref) => {
		const [error, setError] = useState(false)
		const [loaded, setLoaded] = useState(false)

		useEffect(() => {
			if (!src) return

			const img = new Image()
			if (typeof src === "string") {
				img.src = src
			}

			img.onload = () => setLoaded(true)
			img.onerror = () => setError(true)
		}, [src])

		const showImage = src && loaded && !error

		return (
			<AvatarPrimitive.Root className={cn(avatarVariants({ size }), className)}>
				{showImage && (
					<AvatarPrimitive.Image
						src={src}
						alt={alt}
						className={`size-full object-cover transition-all ${loaded ? "opacity-100" : "opacity-0"}`}
						onLoad={() => setLoaded(true)}
						onError={() => setError(true)}
						ref={ref}
						{...props}
					/>
				)}

				{(!showImage || !loaded) && (
					<AvatarPrimitive.Fallback className="bg-secondary text-secondary-foreground z-10 flex size-full items-center justify-center text-center text-sm font-medium">
						{fallback}
					</AvatarPrimitive.Fallback>
				)}
			</AvatarPrimitive.Root>
		)
	}
)

Avatar.displayName = AvatarPrimitive.Root.displayName
