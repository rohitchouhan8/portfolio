import * as React from "react"

import { FiHome } from "react-icons/fi"
import { IconType } from "react-icons/lib"

const IconButton = ({
	icon,
	onClick,
}: {
	icon: IconType
	onClick: () => void
}) => {
	const uiIcon = React.createElement(icon, {})
	return (
		<button
			className="flex items-center px-3 py-2 text-gray-700 border border-gray-600 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white"
			onClick={onClick}
		>
			{uiIcon}
		</button>
	)
}

const HomeButton = () => {
	return (
		<IconButton
			icon={FiHome}
			onClick={() => {
				window.location.href = "/"
			}}
		/>
	)
}

const Section = ({ children }: React.PropsWithChildren<{}>) => {
	return <div className="flex flex-row gap-4">{children}</div>
}

const VerticalDivider = () => {
	return <div className="w-1 h-full bg-gray-300"></div>
}

const Toolbar = () => {
	return (
		<div className="absolute left-1/2 right-1/2 p-4 bg-slate-500 flex flex-row gap-8">
			<HomeButton />
		</div>
	)
}

export default Toolbar
