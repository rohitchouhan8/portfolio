import React from "react"

export const gradientStyle = "bg-gradient-to-br from-pink-500 to-yellow-500"

export const hoverGradientStyle =
	"hover:bg-gradient-to-br hover:from-pink-500 hover:to-yellow-500"

console.log(hoverGradientStyle)

export default function GradientHeader({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<h1
			className={`w-fit bg-clip-text text-transparent font-bold text-4xl font-header ${gradientStyle}`}
		>
			{children}
		</h1>
	)
}
