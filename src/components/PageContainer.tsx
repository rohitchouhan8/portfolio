import React from "react"
import Toolbar from "./Toolbar"

export default function PageContainer({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<div
			style={{
				backgroundImage:
					"radial-gradient(at 90% 10%, rgb(253, 186, 116) 0, transparent 70%), radial-gradient(at 15% 0%, rgb(110, 231, 183) 0, transparent 49%), radial-gradient(at 15% 73%, rgb(14, 165, 233) 0, transparent 83%), radial-gradient(at 92% 94%, rgb(232, 121, 249) 0, transparent 52%)",
			}}
			className="w-full h-full min-h-screen saturate-150 dark:saturate-150"
		>
			<div className="w-full h-full bg-yellow-50 dark:bg-slate-800 min-h-screen bg-blend-overlay bg-opacity-40 dark:bg-opacity-30">
				<div className="max-w-3xl h-full py-20 gap-4 mx-auto inset-x-0 flex flex-col">
					{children}
					<Toolbar />
				</div>
			</div>
		</div>
	)
}
