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
		<a className={``} {...props}>
			<div className="flex flex-col gap-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 p-5 rounded-md transition-all duration-300 ease-in-out">
				{children}
			</div>
		</a>
	)
}
