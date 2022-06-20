import React from "react"

export const BoldSpan = ({ children }: React.PropsWithChildren<{}>) => {
	return <span className="font-extrabold">{children}</span>
}

export function H1({ children }: React.PropsWithChildren<{}>) {
	return (
		<h1
			className={`w-fit bg-clip-text font-bold text-4xl font-header text-gray-800 dark:text-gray-200 bg-blend-darken tracking-wider`}
		>
			{children}
		</h1>
	)
}

export function H2({ children }: React.PropsWithChildren<{}>) {
	return (
		<h2
			className={`w-fit font-medium text-xl font-header text-gray-800 dark:text-gray-200 bg-blend-darken tracking-wider`}
		>
			{children}
		</h2>
	)
}

export function H3({ children }: React.PropsWithChildren<{}>) {
	return (
		<h3
			className={`w-fit font-medium text-lg font-header text-gray-800 dark:text-gray-200 bg-blend-darken tracking-wider`}
		>
			{children}
		</h3>
	)
}

export function AnimatedGradientSpan({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<span
			className={`font-extrabold text-xl bg-gradient-to-r bg-clip-text text-transparent 
            from-pink-500 via-yellow-500 to-purple-500
            animate-text`}
		>
			{children}
		</span>
	)
}

export function Paragraphs({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed flex flex-col gap-3 font-sans">
			{children}
		</div>
	)
}

export function Paragraph({ children }: React.PropsWithChildren<{}>) {
	return (
		<p
			className={`text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-sans`}
		>
			{children}
		</p>
	)
}

export function UnorderedList({ children }: React.PropsWithChildren<{}>) {
	return <ul className="ml-10">{children}</ul>
}

export function LI({ children }: React.PropsWithChildren<{}>) {
	return (
		<li
			className={`list-disc text-gray-600 dark:text-gray-400 text-lg leading-relaxed`}
		>
			{children}
		</li>
	)
}

export function StrongSpan({ children }: React.PropsWithChildren<{}>) {
	return (
		<span className="text-gray-800 dark:text-gray-200 font-medium">
			{children}
		</span>
	)
}

export function ListSubtitle({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className="text-gray-500 dark:text-gray-400 font-normal">
			{children}
		</div>
	)
}
