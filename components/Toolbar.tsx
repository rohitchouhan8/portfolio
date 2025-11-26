'use client';
import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import {
  FiBook,
  FiCode,
  FiEdit2,
  FiGithub,
  FiHome,
  FiImage,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSun,
  FiTwitter,
} from 'react-icons/fi';

import { Page, useCurrentPathname } from '../hooks/navigation';

import { IconType } from 'react-icons/lib';
import { toSentenceCase } from '../utils/text';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/tailwind';

type IconButtonProps = {
  icon: 'moon' | 'sun' | IconType;
  pointingPage?: Page;
  tooltip: string;
  href?: string;
  onClick?: () => void;
  target?: string;
};

function IconButton({
  icon,
  pointingPage,
  tooltip,
  ...props
}: IconButtonProps) {
  let iconEl = icon === 'sun' ? FiSun : icon === 'moon' ? FiMoon : icon;
  const uiIcon = React.createElement(iconEl, {
    className: 'h-4 w-4 md:w-6 md:h-6',
  });
  return (
    <ToolbarButton
      icon={uiIcon}
      tooltip={tooltip}
      pointingPage={pointingPage}
      {...props}
    />
  );
}

type ToolbarButtonProps = {
  icon: React.ReactNode;
  pointingPage?: Page;
  tooltip: string;
  href?: string;
};

function ToolbarButton({
  icon,
  pointingPage,
  tooltip,
  href,
  ...props
}: ToolbarButtonProps) {
  const { page: currentPage } = useCurrentPathname();
  const isCurrentPage = !!(
    currentPage &&
    pointingPage &&
    pointingPage === currentPage
  );

  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  const regularStyle = `text-grey-11 hover:text-grey-12`;
  const activeStyle = `bg-linear-to-r saturate-125 from-pink-400 via-amber-500 to-red-400`;

  const children = (
    <>
      {isCurrentPage && (
        <motion.div
          className={cn(
            `absolute text-sm w-10 h-2 -top-7 rounded-full left-0 right-0 m-auto`,
            activeStyle,
            isTooltipOpen ? '-top-16' : ''
          )}
          layout
          transition={{ duration: 0.3, bounce: 0, type: 'spring' }}
        />
      )}
      {icon}
    </>
  );
  const className = cn(
    `group relative flex items-center justify-center p-2 md:p-4 md:w-14 md:h-14 bg-grey-3 hover:bg-grey-4 rounded-xl transition-all`,
    regularStyle
  );
  const trigger = href ? (
    <Link className={className} href={href} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root onOpenChange={setIsTooltipOpen}>
        <Tooltip.Trigger asChild>{trigger}</Tooltip.Trigger>
        <Tooltip.Portal forceMount>
          <AnimatePresence>
            {isTooltipOpen && (
              <Tooltip.Content
                asChild
                forceMount
                sideOffset={24}
                className="z-10 text-sm py-1 px-2 text-grey-11 whitespace-nowrap transition-all duration-100 ease-linear bg-grey-2 rounded-lg pointer-events-none shadow-md"
              >
                <motion.div
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 5, opacity: 0 }}
                  transition={{ duration: 0.1, bounce: 0, type: 'spring' }}
                >
                  {toSentenceCase(tooltip)}
                </motion.div>
              </Tooltip.Content>
            )}
          </AnimatePresence>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

const HomeButton = () => {
  return (
    <IconButton
      icon={FiHome}
      href={'/'}
      pointingPage={Page.HOME}
      tooltip="Who I am"
    />
  );
};

const ThemeModeButton = ({
  tooltipIcon,
  tooltipText,
  theme,
  setTheme,
}: {
  tooltipIcon: 'moon' | 'sun';
  tooltipText: string;
  theme: string | undefined;
  setTheme: (theme: string) => void;
}) => {
  return (
    <IconButton
      icon={tooltipIcon}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      tooltip={tooltipText}
    />
  );
};

const LightBulbButton = () => {
  return (
    <IconButton
      icon={FiCode}
      href={'/projects'}
      pointingPage={Page.PROJECTS}
      tooltip="projects"
    />
  );
};

const BookButton = () => {
  return (
    <IconButton
      icon={FiBook}
      href={'/reading'}
      pointingPage={Page.READING}
      tooltip="Reading"
    />
  );
};

const PencilButton = () => {
  return (
    <IconButton
      icon={FiEdit2}
      href={'/writing'}
      pointingPage={Page.WRITING}
      tooltip="Writing"
    />
  );
};

const ArtsyButton = () => {
  return (
    <IconButton
      icon={FiImage}
      href={'/artsy'}
      pointingPage={Page.ARTSY}
      tooltip="Artsy"
    />
  );
};

const TwitterButton = () => {
  return (
    <IconButton
      icon={FiTwitter}
      href={'https://twitter.com/@ro_chouhan'}
      target="_blank"
      tooltip="Twitter"
    />
  );
};

const GithubButton = () => {
  return (
    <IconButton
      icon={FiGithub}
      href={'https://github.com/rochouhan'}
      target="_blank"
      tooltip="GitHub"
    />
  );
};

const MailButton = () => {
  return (
    <IconButton
      icon={FiMail}
      href={'mailto:ro.chouhan@gmail.com'}
      target="_blank"
      tooltip="email"
    />
  );
};

const LinkedInButton = () => {
  return (
    <IconButton
      icon={FiLinkedin}
      href={'https://www.linkedin.com/in/rohit-chouhan/'}
      target="_blank"
      tooltip="LinkedIn"
    />
  );
};

const StackButton = () => {
  return (
    <IconButton
      icon={FiLayers}
      href={'/stack'}
      pointingPage={Page.STACK}
      tooltip="Stack"
    />
  );
};

const Section = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <motion.div className="flex flex-row gap-4 w-fit py-2 px-3 md:py-3 md:px-6 transition-all duration-200 rounded-2xl shadow-lg bg-grey-2 border border-grey-6">
      {children}
    </motion.div>
  );
};

const Toolbar = () => {
  const { theme, setTheme } = useTheme();
  const [tooltipText, setTooltipText] = React.useState<string | null>(null);
  const [tooltipIcon, setTooltipIcon] = React.useState<'sun' | 'moon' | null>(
    null
  );

  React.useEffect(() => {
    if (theme === 'dark') {
      setTooltipText('Too dark?');
      setTooltipIcon('sun');
    } else {
      setTooltipText('Too bright?');
      setTooltipIcon('moon');
    }
  }, [theme]);

  if (!tooltipText || !tooltipIcon) {
    return null;
  }

  return (
    <motion.div
      className="flex flex-row flex-wrap px-4 place-content-start gap-2 md:gap-4 fixed z-9 w-fit h-fit mx-auto inset-x-0 bottom-10 md:bottom-20 transition-opacity duration-700 ease-in-out"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ opacity: { duration: 0.5 }, y: { duration: 0.3 } }}
    >
      <AnimatePresence>
        <Section>
          <HomeButton />
          <ThemeModeButton
            theme={theme}
            setTheme={setTheme}
            tooltipIcon={tooltipIcon}
            tooltipText={tooltipText}
          />
        </Section>
        <Section>
          <LightBulbButton />
          <PencilButton />
          <BookButton />
          <StackButton />
        </Section>
        <Section>
          <TwitterButton />
          <MailButton />
          <GithubButton />
          <LinkedInButton />
        </Section>
      </AnimatePresence>
    </motion.div>
  );
};

export default Toolbar;
