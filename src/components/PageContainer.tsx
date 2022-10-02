import React, { useContext } from "react"

import { ThemeProvider } from "next-themes"
import Toolbar from "./Toolbar"

function Background() {
	return (
		<svg
			width="975"
			height="680"
			viewBox="0 0 975 680"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="absolute top-0 left-0 w-full h-full"
		>
			<path
				d="M211.428 130L370.777 406C373.856 411.333 370.007 418 363.849 418H45.1513C38.9929 418 35.1439 411.333 38.2231 406L197.572 130C200.651 124.667 208.349 124.667 211.428 130Z"
				className="stroke-2 stroke-gray-200"
			/>
			<path
				d="M211.428 209L370.777 485C373.856 490.333 370.007 497 363.849 497H45.1513C38.9929 497 35.1439 490.333 38.2231 485L197.572 209C200.651 203.667 208.349 203.667 211.428 209Z"
				className="stroke-2 stroke-gray-200"
			/>
			<path
				d="M211.428 288L370.777 564C373.856 569.333 370.007 576 363.849 576H45.1513C38.9929 576 35.1439 569.333 38.2231 564L197.572 288C200.651 282.667 208.349 282.667 211.428 288Z"
				className="stroke-2 stroke-gray-200"
			/>
			<path
				d="M619.428 16L778.777 292C781.856 297.333 778.007 304 771.849 304H453.151C446.993 304 443.144 297.333 446.223 292L605.572 16C608.651 10.6667 616.349 10.6667 619.428 16Z"
				className="stroke-2 stroke-gray-200"
			/>
			<path
				d="M698.428 16L857.777 292C860.856 297.333 857.007 304 850.849 304H532.151C525.993 304 522.144 297.333 525.223 292L684.572 16C687.651 10.6667 695.349 10.6667 698.428 16Z"
				className="stroke-2 stroke-gray-200"
			/>
			<path
				d="M777.428 16L936.777 292C939.856 297.333 936.007 304 929.849 304H611.151C604.993 304 601.144 297.333 604.223 292L763.572 16C766.651 10.6667 774.349 10.6667 777.428 16Z"
				className="stroke-2 stroke-gray-200"
			/>
		</svg>
	)
}

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
		<div className="w-full h-full min-h-screen bg-gray-50 dark:bg-black px-4 overflow-auto">
			<div className="w-full h-full min-h-screen">
				<div className="max-w-3xl h-full pb-80 md:pb-64 pt-20 gap-4 mx-auto inset-x-0 flex flex-col">
					{children}
					<Toolbar />
				</div>
			</div>
		</div>
	)
}
