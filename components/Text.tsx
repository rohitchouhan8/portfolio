import React from "react"

export const HighlightSpan = ({ children }: React.PropsWithChildren<{}>) => {
  function InnerHighlightSpan() {
    return (
      <span
        className={`py-0.5 px-1 bg-gradient-to-r saturate-125 from-pink-400 via-amber-500 to-red-400 text-white rounded-sm  animate-text`}>
        {children}
      </span>
    )
  }
  return <InnerHighlightSpan />
}

export function AnimatedTitle({ children }: React.PropsWithChildren<{}>) {
  function InnerTitle() {
    return (
      <h1
        className={`w-fit bg-clip-text font-bold text-4xl font-title text-transparent 
			 bg-gradient-to-r saturate-125 from-pink-400 via-amber-500 to-red-400  animate-text`}>
        {children}
      </h1>
    )
  }
  return <InnerTitle />
}

export function RegularTitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <h1
      className={`w-fit bg-clip-text font-bold text-7xl font-title  text-transparent 
			 text-gray-300 dark:text-gray-400`}>
      {children}
    </h1>
  )
}

export function H1({ children }: React.PropsWithChildren<{}>) {
  return (
    <h1
      className={`bg-clip-text font-bold text-4xl font-header text-gray-800 dark:text-gray-100 bg-blend-darken tracking-wider`}>
      {children}
    </h1>
  )
}

export function H2({ children }: React.PropsWithChildren<{}>) {
  return (
    <h2
      className={`w-fit font-medium text-xl font-header text-gray-800 dark:text-gray-100 bg-blend-darken tracking-wider text-ellipsis`}>
      {children}
    </h2>
  )
}

export function H3({ children }: React.PropsWithChildren<{}>) {
  return (
    <h3
      className={`w-fit font-medium text-lg font-header text-gray-800 dark:text-gray-100 bg-blend-darken tracking-wider`}>
      {children}
    </h3>
  )
}

export function AnimatedGradientSpan({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <span
      className={`font-extrabold text-xl bg-clip-text text-transparent 
            bg-gradient-to-r saturate-125 from-pink-400 via-amber-500 to-red-400`}>
      {children}
    </span>
  )
}

export function Paragraphs({ children }: React.PropsWithChildren<{}>) {
  return <div className='leading-relaxed flex flex-col gap-3'>{children}</div>
}

export function Paragraph({ children }: React.PropsWithChildren<{}>) {
  return (
    <p
      className={`text-gray-700 dark:text-gray-300 text-md leading-loose font-sans`}>
      {children}
    </p>
  )
}

export function UnorderedList({ children }: React.PropsWithChildren<{}>) {
  return <ul className='ml-10'>{children}</ul>
}

export function LI({ children }: React.PropsWithChildren<{}>) {
  return (
    <li
      className={`list-disc text-gray-600 dark:text-gray-400 text-md leading-relaxed`}>
      {children}
    </li>
  )
}

export function StrongSpan({ children }: React.PropsWithChildren<{}>) {
  return (
    <span className='text-gray-800 dark:text-gray-200 font-medium'>
      {children}
    </span>
  )
}

export function ListMonoSubtitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='text-gray-500 dark:text-gray-400 font-normal whitespace-nowrap truncate text-ellipsis flex-shrink-0 font-mono'>
      {children}
    </div>
  )
}

export function ImageMonoSubtitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='text-white font-normal whitespace-nowrap truncate text-ellipsis flex-shrink-0 font-mono'>
      {children}
    </div>
  )
}
