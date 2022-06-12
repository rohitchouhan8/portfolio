import * as React from "react"

import {
	FiBook,
	FiCode,
	FiEdit2,
	FiGithub,
	FiHome,
	FiLinkedin,
	FiMail,
	FiSun,
	FiTwitter,
} from "react-icons/fi"

import { IconType } from "react-icons/lib"
import { ThemeContext } from "../theme"

const IconButton = ({
	icon,
	onClick,
}: {
	icon: IconType
	onClick: () => void
}) => {
	const uiIcon = React.createElement(icon, {
		className: "h-6 w-6",
	})
	return (
		<button
			className={`flex w-10 h-10 items-center justify-center p-2 text-gray-500 border border-gray-500 dark:border-gray-400 dark:text-gray-400 rounded-md hover:border-gray-800 hover:text-gray-800 dark:hover:border-white dark:hover:text-white transition duration-200 ease-in-out hover:scale-125`}
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

const ThemeButton = () => {
	const { state, dispatch } = React.useContext(ThemeContext)
	return (
		<IconButton
			icon={FiSun}
			onClick={() => {
				dispatch({ type: "TOGGLE" })
			}}
		/>
	)
}

const LightBulbButton = () => {
	return <IconButton icon={FiCode} onClick={() => {}} />
}

const BookButton = () => {
	return <IconButton icon={FiBook} onClick={() => {}} />
}

const PencilButton = () => {
	return <IconButton icon={FiEdit2} onClick={() => {}} />
}

const TwitterButton = () => {
	return <IconButton icon={FiTwitter} onClick={() => {}} />
}

const GithubButton = () => {
	return <IconButton icon={FiGithub} onClick={() => {}} />
}

const MailButton = () => {
	return <IconButton icon={FiMail} onClick={() => {}} />
}

const LinkedInButton = () => {
	return <IconButton icon={FiLinkedin} onClick={() => {}} />
}

const Section = ({ children }: React.PropsWithChildren<{}>) => {
	return <div className="flex flex-row gap-4">{children}</div>
}

const VerticalDivider = () => {
	return (
		<hr className="w-0.5 h-10 bg-gray-200 dark:bg-gray-600 rounded-sm border-0" />
	)
}

const Toolbar = () => {
	return (
		<div className="fixed z-50 w-fit h-fit mx-auto inset-x-0 py-4 px-8 flex flex-row gap-6 border dark:border-gray-600 border-gray-400 rounded-2xl bottom-40 shadow-lg dark:shadow-black bg-white dark:bg-gray-800">
			<Section>
				<HomeButton />
				<ThemeButton />
			</Section>
			<VerticalDivider />
			<Section>
				<LightBulbButton />
				<BookButton />
				<PencilButton />
			</Section>
			<VerticalDivider />
			<Section>
				<TwitterButton />
				<MailButton />
				<GithubButton />
				<LinkedInButton />
			</Section>
		</div>
	)
}

export default Toolbar
