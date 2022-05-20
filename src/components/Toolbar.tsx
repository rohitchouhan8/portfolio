import * as React from "react"

import {
	FiBook,
	FiCode,
	FiCodesandbox,
	FiEdit,
	FiEdit2,
	FiGithub,
	FiHome,
	FiLinkedin,
	FiMail,
	FiPenTool,
	FiSun,
	FiTwitter,
} from "react-icons/fi"
import { IconBaseProps, IconType } from "react-icons/lib"

import { FaMedium } from "react-icons/fa"

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
			className="flex w-10 h-10 items-center justify-center p-2 text-gray-700 border border-gray-600 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white"
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
				window.location.href = "/"
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

const MediumButton = () => {
	return <IconButton icon={FaMedium} onClick={() => {}} />
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
	return <hr className="w-0.5 h-full bg-gray-300 rounded-sm" />
}

const Toolbar = () => {
	return (
		<div className="fixed z-50 w-fit h-fit mx-auto inset-x-0 p-4 flex flex-row gap-8 border rounded-2xl bottom-40 shadow-lg">
			<Section>
				<HomeButton />
				<ThemeButton />
				<VerticalDivider />
			</Section>
			<Section>
				<LightBulbButton />
				<BookButton />
				<PencilButton />
				<VerticalDivider />
			</Section>

			<Section>
				<TwitterButton />
				<MailButton />
				<GithubButton />
				<LinkedInButton />
				<VerticalDivider />
			</Section>
		</div>
	)
}

export default Toolbar
