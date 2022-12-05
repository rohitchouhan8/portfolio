import * as React from 'react'

import {
  FiBook,
  FiCode,
  FiEdit2,
  FiGithub,
  FiHome,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSun,
  FiTwitter,
  FiImage,
} from 'react-icons/fi'
import { Page, useCurrentPathname } from '../hooks/navigation'

import { IconType } from 'react-icons/lib'
import { toSentenceCase } from '../utils/text'
import { useTheme } from 'next-themes'
import { useAtom } from 'jotai'
import { gradientAtom, GRADIENTS, useGradientCSS } from '../atoms/gradientAtom'
import ClientOnly from './ClientOnly'

type IconButtonProps = {
  icon: IconType
  pointingPage?: Page
  tooltip: string
} & Omit<React.HTMLProps<HTMLAnchorElement>, 'page'>

function IconButton({
  icon,
  pointingPage,
  tooltip,
  ...props
}: IconButtonProps) {
  const uiIcon = React.createElement(icon, {
    className: 'h-4 w-4 md:w-6 md:h-6',
  })
  return (
    <ToolbarButton
      icon={uiIcon}
      tooltip={tooltip}
      pointingPage={pointingPage}
      {...props}
    />
  )
}

type ToolbarButtonProps = {
  icon: React.ReactNode
  pointingPage?: Page
  tooltip: string
} & Omit<React.HTMLProps<HTMLAnchorElement>, 'page'>

function ToolbarButton({
  icon,
  pointingPage,
  tooltip,
  ...props
}: ToolbarButtonProps) {
  const gradientColor = useGradientCSS()
  const { page: currentPage } = useCurrentPathname()
  const isCurrentPage = !!(
    currentPage &&
    pointingPage &&
    pointingPage === currentPage
  )

  const regularStyle = `text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white`
  const activeStyle = `bg-gradient-to-r ${gradientColor}`

  return (
    <a
      className={`group relative flex items-center justify-center p-2 md:p-4 md:w-14 md:h-14 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors duration-300 ease-in-out hover:cursor-pointer ${regularStyle}`}
      {...props}
    >
      {isCurrentPage && (
        <ClientOnly>
          <div
            className={`absolute text-sm w-8 h-2 -top-7 rounded-full group-hover:-top-16 transition-all duration-500 ease-in-out ${activeStyle}`}
          />
        </ClientOnly>
      )}
      <span className='absolute opacity-0 group-hover:opacity-100 text-sm -top-12 py-1 px-2 text-gray-800 dark:text-gray-200  whitespace-nowrap transition-all duration-100 ease-linear bg-white dark:bg-gray-800 rounded-lg pointer-events-none shadow-md dark:shadow-2xl'>
        {toSentenceCase(tooltip)}
      </span>

      {icon}
    </a>
  )
}

const HomeButton = () => {
  return (
    <IconButton
      icon={FiHome}
      href={'/'}
      pointingPage={Page.HOME}
      tooltip='home'
    />
  )
}

const ThemeModeButton = () => {
  const { theme, setTheme } = useTheme()
  return (
    <IconButton
      icon={theme === 'dark' ? FiSun : FiMoon}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
      tooltip={theme === 'dark' ? 'Dark in here?' : 'Too bright?'}
    />
  )
}

const LightBulbButton = () => {
  return (
    <IconButton
      icon={FiCode}
      href={'/projects'}
      pointingPage={Page.PROJECTS}
      tooltip='projects'
    />
  )
}

const BookButton = () => {
  return (
    <IconButton
      icon={FiBook}
      href={'/reading'}
      pointingPage={Page.READING}
      tooltip='Reading'
    />
  )
}

const PencilButton = () => {
  return (
    <IconButton
      icon={FiEdit2}
      href={'/writing'}
      pointingPage={Page.WRITING}
      tooltip='Writing'
    />
  )
}

const ArtsyButton = () => {
  return (
    <IconButton
      icon={FiImage}
      href={'/artsy'}
      pointingPage={Page.ARTSY}
      tooltip='Artsy'
    />
  )
}

const TwitterButton = () => {
  return (
    <IconButton
      icon={FiTwitter}
      href={'https://twitter.com/@ro_chouhan'}
      target='_blank'
      tooltip='Twitter'
    />
  )
}

const GithubButton = () => {
  return (
    <IconButton
      icon={FiGithub}
      href={'https://github.com/rochouhan'}
      target='_blank'
      tooltip='GitHub'
    />
  )
}

const MailButton = () => {
  return (
    <IconButton
      icon={FiMail}
      href={'mailto:ro.chouhan@gmail.com'}
      target='_blank'
      tooltip='email'
    />
  )
}

const LinkedInButton = () => {
  return (
    <IconButton
      icon={FiLinkedin}
      href={'https://www.linkedin.com/in/rohit-chouhan/'}
      target='_blank'
      tooltip='LinkedIn'
    />
  )
}

const Section = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className='flex flex-row gap-4 w-fit py-2 px-3 md:py-3 md:px-6 transition-all duration-200 dark:border-gray-700 border-gray-200 rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black bg-white dark:bg-gray-900'>
      {children}
    </div>
  )
}

function ThemeGradientButton() {
  const gradientColor = useGradientCSS()
  const [, setGradient] = useAtom(gradientAtom)
  function nextGradient() {
    return setGradient((prev) => {
      const index = GRADIENTS.indexOf(prev)
      const nextIndex = index >= 0 ? (index + 1) % GRADIENTS.length : 1
      return GRADIENTS[nextIndex]
    })
  }

  return (
    <ClientOnly>
      <ToolbarButton
        onClick={() => {
          nextGradient()
        }}
        icon={
          <div
            className={`w-4 h-4 md:h-6 md:w-6 rounded-full bg-gradient-to-br ${gradientColor}  md:border-2 border-white dark:border-gray-900`}
          />
        }
        tooltip={'Shuffle gradient'}
      />
    </ClientOnly>
  )
}

const Toolbar = () => {
  return (
    <div className='flex flex-row flex-wrap px-4 place-content-start gap-2 md:gap-4 fixed z-50 w-fit h-fit  mx-auto inset-x-0 bottom-20 transition-all duration-200 ease-in-out'>
      <Section>
        <HomeButton />
        <ThemeModeButton />
        <ThemeGradientButton />
      </Section>
      <Section>
        <LightBulbButton />
        <BookButton />
        <PencilButton />
        <ArtsyButton />
      </Section>
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
