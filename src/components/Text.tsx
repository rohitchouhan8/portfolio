import React from "react"

export const BoldSpan = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<span className="font-extrabold text-gray-800 dark:text-gray-200">
			{children}
		</span>
	)
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

export function AnimatedGradientSpan({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<span
			className={`font-extrabold text-2xl bg-gradient-to-r bg-clip-text text-transparent 
            from-pink-500 via-yellow-500 to-purple-500
            animate-text`}
		>
			{children}
		</span>
	)
}

export function Paragraphs({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed flex flex-col gap-3">
			{children}
		</div>
	)
}
