import React from "react"
import { gradientColor } from "./Text"

export function List(props: React.PropsWithChildren<{}>) {
	return <div className="grid gap-8 grid-cols-1">{props.children}</div>
}

export function ListItem({
	children,
	...props
}: React.HTMLProps<HTMLAnchorElement>) {
	return (
		<a
			className={`rounded-lg bg-gray-100 dark:bg-gray-900 
			p-0 hover:p-1
            bg-gradient-to-r ${gradientColor} transition-all duration-300  animate-text`}
			{...props}
		>
			<div
				className="flex flex-col gap-1 bg-gray-100 dark:bg-gray-900 p-5 rounded-md transition-all duration-200 ease-in-out
            "
			>
				{children}
			</div>
		</a>
	)
}
