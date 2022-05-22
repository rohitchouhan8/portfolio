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
import { hoverGradientStyle } from "./GradientHeader"

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
			className={`flex w-10 h-10 items-center justify-center p-2 text-gray-700 border border-gray-600 rounded-md hover:border-0 hover:text-white transition duration-200 ease-in-out hover:scale-110 hover:bg-gradient-to-r ${hoverGradientStyle}`}
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
	return <hr className="w-0.5 h-10 bg-gray-300 rounded-sm" />
}

const Toolbar = () => {
	return (
		<div className="fixed z-50 w-fit h-fit mx-auto inset-x-0 py-4 px-8 flex flex-row gap-6 border rounded-2xl bottom-40 shadow-lg">
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
