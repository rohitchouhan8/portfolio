import React from "react"

export const BoldSpan = ({ children }: React.PropsWithChildren<{}>) => {
	return <span className="font-extrabold">{children}</span>
}

export function Header({ children }: React.PropsWithChildren<{}>) {
	return (
		<h1
			className={`w-fit bg-clip-text text-transparent font-bold text-4xl font-header text-gray-800 dark:text-gray-50 bg-blend-darken`}
		>
			{children}
		</h1>
	)
}
