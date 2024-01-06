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

  const regularStyle = `text-slate-11 hover:text-slate-12`;
  const activeStyle = `bg-gradient-to-r saturate-125 from-pink-400 via-amber-500 to-red-400`;

  const children = (
    <>
      {isCurrentPage && (
        <div
          className={`absolute text-sm w-10 h-2 -top-7 rounded-full group-hover:-top-16 left-0 right-0 m-auto ${activeStyle}`}
        />
      )}
      {icon}
    </>
  );
  const className = `group relative flex items-center justify-center p-2 md:p-4 md:w-14 md:h-14 bg-slate-3 hover:bg-slate-4 rounded-xl ${regularStyle}`;
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
    <Tooltip.Provider delayDuration={50}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: {
                type: 'spring',
                stiffness: 260,
                damping: 15,
              },
            }}
          >
            {trigger}
          </motion.div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.TooltipContent
            sideOffset={24}
            className="z-10 text-sm py-1 px-2 text-slate-11 whitespace-nowrap transition-all duration-100 ease-linear bg-slate-1 rounded-lg pointer-events-none shadow-md"
          >
            {toSentenceCase(tooltip)}
          </Tooltip.TooltipContent>
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

const Section = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="flex flex-row gap-4 w-fit py-2 px-3 md:py-3 md:px-6 transition-all duration-200 rounded-2xl shadow-lg bg-slate-2 border border-slate-6">
      {children}
    </div>
  );
};

const Toolbar = () => {
  const { theme, setTheme } = useTheme();
  const [tooltipText, setTooltipText] = React.useState<string | null>(null);
  const [tooltipIcon, setTooltipIcon] = React.useState<'sun' | 'moon' | null>(
    null
  );

  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    if (theme === 'dark') {
      setTooltipText('Too dark?');
      setTooltipIcon('sun');
    } else {
      setTooltipText('Too bright?');
      setTooltipIcon('moon');
    }
  }, [theme]);

  React.useEffect(() => {
    if (!tooltipText || !tooltipIcon) {
      return;
    }
    setOpacity(1);
  }, [tooltipIcon, tooltipText]);

  if (!tooltipText || !tooltipIcon) {
    return null;
  }

  return (
    <div
      className="flex flex-row flex-wrap px-4 place-content-start gap-2 md:gap-4 fixed z-9 w-fit h-fit mx-auto inset-x-0 bottom-10 md:bottom-20 transition-opacity duration-700 ease-in-out"
      style={{
        opacity,
      }}
    >
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
        <BookButton />
        <PencilButton />
      </Section>
      <Section>
        <TwitterButton />
        <MailButton />
        <GithubButton />
        <LinkedInButton />
      </Section>
    </div>
  );
};

export default Toolbar;
