import React from "react"

export default function GradientHeader({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<h1 className="w-fit bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-500 to-amber-400 font-bold text-4xl font-header">
			{children}
		</h1>
	)
}
