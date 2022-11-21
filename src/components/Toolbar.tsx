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
import { Page, useCurrentPathname } from "../hooks/navigation"

import { IconType } from "react-icons/lib"
import { gradientColor } from "./Text"
import { useTheme } from "next-themes"

const IconButton = ({
	icon,
	pointingPage,
	...props
}: {
	icon: IconType
	pointingPage?: Page
} & Omit<React.HTMLProps<HTMLAnchorElement>, "page">) => {
	const uiIcon = React.createElement(icon, {
		className: "h-4 w-4 md:h-6 md:w-6",
	})
	const { page: currentPage } = useCurrentPathname()
	const isCurrentPage = !!(
		currentPage &&
		pointingPage &&
		pointingPage === currentPage
	)
	const regularStyle = `text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white`
	const activeStyle = `text-white bg-gradient-to-br ${gradientColor}`
	console.log(pointingPage, currentPage, isCurrentPage)
	return (
		<a
			className={`flex items-center justify-center p-2 md:p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer ${
				isCurrentPage ? activeStyle : regularStyle
			}`}
			{...props}
		>
			{uiIcon}
		</a>
	)
}

const HomeButton = () => {
	return <IconButton icon={FiHome} href={"/"} pointingPage={Page.HOME} />
}

const ThemeButton = () => {
	const { theme, setTheme } = useTheme()
	return (
		<IconButton
			icon={FiSun}
			onClick={() => {
				setTheme(theme === "dark" ? "light" : "dark")
			}}
		/>
	)
}

const LightBulbButton = () => {
	return (
		<IconButton
			icon={FiCode}
			href={"/projects"}
			pointingPage={Page.PROJECTS}
		/>
	)
}

const BookButton = () => {
	return (
		<IconButton
			icon={FiBook}
			href={"/reading"}
			pointingPage={Page.READING}
		/>
	)
}

const PencilButton = () => {
	return (
		<IconButton
			icon={FiEdit2}
			href={"/writing"}
			pointingPage={Page.WRITING}
		/>
	)
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
	return (
		<div className="flex flex-row gap-4 w-fit py-2 px-3 md:py-3 md:px-6 transition-all duration-200 dark:border-gray-700 border-gray-200 rounded-2xl shadow-lg dark:shadow-black bg-white dark:bg-gray-900">
			{children}
		</div>
	)
}

const Toolbar = () => {
	return (
		<div className="flex flex-row flex-wrap px-4 place-content-start gap-2 md:gap-4 fixed z-50 w-fit h-fit  mx-auto inset-x-0 bottom-20 transition-all duration-200 ease-in-out">
			<Section>
				<HomeButton />
				<ThemeButton />
			</Section>
			{/* <VerticalDivider /> */}
			<Section>
				<LightBulbButton />
				<BookButton />
				<PencilButton />
			</Section>
			{/* <VerticalDivider /> */}
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
