import React from "react"
import Toolbar from "./Toolbar"

export default function PageContainer({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<div className="w-full h-full bg-white dark:bg-gray-900 min-h-screen">
			<div className="max-w-3xl h-full py-20 gap-4 mx-auto inset-x-0 flex flex-col">
				{children}
				<Toolbar />
			</div>
		</div>
	)
}
