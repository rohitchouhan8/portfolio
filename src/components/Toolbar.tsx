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
	...props
}: {
	icon: IconType
} & React.HTMLProps<HTMLAnchorElement>) => {
	const uiIcon = React.createElement(icon, {
		className: "h-6 w-6",
	})
	return (
		<a
			className={`flex w-10 h-10 items-center justify-center p-2 text-gray-700 border border-gray-300 dark:border-gray-600 dark:text-gray-200 rounded-md hover:border-gray-800 hover:text-gray-800 dark:hover:border-white dark:hover:text-white transition duration-200 ease-in-out hover:scale-125`}
			{...props}
		>
			{uiIcon}
		</a>
	)
}

const HomeButton = () => {
	return <IconButton icon={FiHome} href={"/"} />
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
	return <IconButton icon={FiCode} href={"/projects"} />
}

const BookButton = () => {
	return <IconButton icon={FiBook} href={"/reading"} />
}

const PencilButton = () => {
	return <IconButton icon={FiEdit2} href={"/writing"} />
}

const TwitterButton = () => {
	return (
		<IconButton
			icon={FiTwitter}
			href={"https://twitter.com/@ro_chouhan"}
			target="_blank"
		/>
	)
}

const GithubButton = () => {
	return (
		<IconButton
			icon={FiGithub}
			href={"https://github.com/rochouhan"}
			target="_blank"
		/>
	)
}

const MailButton = () => {
	return (
		<IconButton
			icon={FiMail}
			href={"mailto:ro.chouhan@gmail.com"}
			target="_blank"
		/>
	)
}

const LinkedInButton = () => {
	return (
		<IconButton
			icon={FiLinkedin}
			href={"https://www.linkedin.com/in/rohit-chouhan/"}
			target="_blank"
		/>
	)
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
		<div className="fixed z-50 bottom-20 w-fit h-fit mx-auto inset-x-0 py-4 px-8 flex flex-row gap-6 border dark:border-gray-700 border-gray-200 rounded-2xl shadow-lg dark:shadow-black bg-white dark:bg-gray-800 ">
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
