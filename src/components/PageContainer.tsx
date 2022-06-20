import React, { useContext } from "react"

import { ThemeProvider } from "next-themes"
import Toolbar from "./Toolbar"

export default function PageContainer({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<ThemeProvider attribute="class">
			<Page>{children}</Page>
		</ThemeProvider>
	)
}

function Page({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className="w-full h-full min-h-screen bg-gray-50 dark:bg-gray-900 px-4 overflow-auto">
			<div className="w-full h-full min-h-screen">
				<div className="max-w-3xl h-full pb-64 pt-20 gap-4 mx-auto inset-x-0 flex flex-col">
					{children}
					<Toolbar />
				</div>
			</div>
		</div>
	)
}
