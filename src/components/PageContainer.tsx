import React, { useContext } from "react"
import { ThemeContext, ThemeProvider } from "../theme"

import Toolbar from "./Toolbar"

export default function PageContainer({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<ThemeProvider>
			<Page>{children}</Page>
		</ThemeProvider>
	)
}

function Page({ children }: React.PropsWithChildren<{}>) {
	const { state } = useContext(ThemeContext)
	return (
		<div className="w-full h-full min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="w-full h-full min-h-screen">
				<div className="max-w-3xl h-full py-20 gap-4 mx-auto inset-x-0 flex flex-col">
					{children}
					<Toolbar />
				</div>
			</div>
		</div>
	)
}
