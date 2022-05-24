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

import { FaMedium } from "react-icons/fa"
import { IconType } from "react-icons/lib"

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
			className={`flex w-10 h-10 items-center justify-center p-2 text-gray-700 border border-gray-600 rounded-md hover:border-white hover:text-white transition duration-200 ease-in-out hover:scale-110 hover:bg-gradient-to-r text-clip`}
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
	return (
		<IconButton
			icon={FiSun}
			onClick={() => {
				if (document.documentElement.classList.contains("dark")) {
					document.documentElement.classList.add("light")
					document.documentElement.classList.remove("dark")
				} else {
					document.documentElement.classList.remove("light")
					document.documentElement.classList.add("dark")
				}
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
	return <hr className="w-0.5 h-10 bg-white dark:bg-black rounded-sm" />
}

const Toolbar = () => {
	return (
		<div className="fixed z-50 w-fit h-fit mx-auto inset-x-0 py-4 px-8 flex flex-row gap-6 border rounded-2xl bottom-40 shadow-lg backdrop-blur-sm bg-white bg-opacity-25 dark:bg-black dark:bg-opacity-25">
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
