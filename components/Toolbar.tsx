'use client';
import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import {
  FiBook,
  FiCode,
  FiEdit2,
  FiGithub,
  FiHome,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSun,
  FiTwitter,
} from 'react-icons/fi';

import { Page, useCurrentPathname } from '../hooks/navigation';
import { useTheme } from 'next-themes';
import { IconType } from 'react-icons/lib';
import { toSentenceCase } from '../utils/text';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/utils/tailwind';

type IconButtonProps = {
  icon: IconType | 'sun' | 'moon';
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
  const iconEl = icon === 'sun' ? FiSun : icon === 'moon' ? FiMoon : icon;
  const uiIcon = React.createElement(iconEl, {
    className: 'h-4 w-4',
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
  onClick?: () => void;
  target?: string;
};

function ToolbarButton({
  icon,
  pointingPage,
  tooltip,
  href,
  onClick,
  target,
}: ToolbarButtonProps) {
  const { page: currentPage } = useCurrentPathname();
  const isCurrentPage = !!(
    currentPage &&
    pointingPage &&
    pointingPage === currentPage
  );

  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  const children = (
    <>
      {isCurrentPage && (
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
          layoutId="toolbar-indicator"
          transition={{ duration: 0.25, type: 'spring', bounce: 0.15 }}
        />
      )}
      {icon}
    </>
  );

  const className = cn(
    'group relative flex items-center justify-center p-2.5 rounded-lg transition-colors duration-200',
    'text-text-tertiary hover:text-text-primary hover:bg-surface-hover',
    isCurrentPage && 'text-accent'
  );

  const trigger = href ? (
    <Link className={className} href={href} target={target}>
      {children}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );

  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root onOpenChange={setIsTooltipOpen}>
        <Tooltip.Trigger asChild>{trigger}</Tooltip.Trigger>
        <Tooltip.Portal forceMount>
          <AnimatePresence>
            {isTooltipOpen && (
              <Tooltip.Content
                asChild
                forceMount
                sideOffset={12}
                className="z-50"
              >
                <motion.div
                  initial={{ y: 4, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 4, opacity: 0 }}
                  transition={{ duration: 0.15, ease: [0.19, 1, 0.22, 1] }}
                  className="text-xs py-1 px-2 text-text-secondary whitespace-nowrap bg-surface-2 rounded-md pointer-events-none border border-border shadow-sm"
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

const HomeButton = () => (
  <IconButton icon={FiHome} href="/" pointingPage={Page.HOME} tooltip="Home" />
);

const ProjectsButton = () => (
  <IconButton
    icon={FiCode}
    href="/projects"
    pointingPage={Page.PROJECTS}
    tooltip="Projects"
  />
);

const WritingButton = () => (
  <IconButton
    icon={FiEdit2}
    href="/writing"
    pointingPage={Page.WRITING}
    tooltip="Writing"
  />
);

const ReadingButton = () => (
  <IconButton
    icon={FiBook}
    href="/reading"
    pointingPage={Page.READING}
    tooltip="Reading"
  />
);

const StackButton = () => (
  <IconButton
    icon={FiLayers}
    href="/stack"
    pointingPage={Page.STACK}
    tooltip="Stack"
  />
);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <IconButton
      icon={isDark ? 'sun' : 'moon'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      tooltip={isDark ? 'Light mode' : 'Dark mode'}
    />
  );
};

const TwitterButton = () => (
  <IconButton
    icon={FiTwitter}
    href="https://twitter.com/@ro_chouhan"
    target="_blank"
    tooltip="Twitter"
  />
);

const GithubButton = () => (
  <IconButton
    icon={FiGithub}
    href="https://github.com/rochouhan"
    target="_blank"
    tooltip="GitHub"
  />
);

const MailButton = () => (
  <IconButton
    icon={FiMail}
    href="mailto:ro.chouhan@gmail.com"
    target="_blank"
    tooltip="Email"
  />
);

const LinkedInButton = () => (
  <IconButton
    icon={FiLinkedin}
    href="https://www.linkedin.com/in/rohit-chouhan/"
    target="_blank"
    tooltip="LinkedIn"
  />
);

const Divider = () => <div className="w-px h-4 bg-border mx-1" />;

const Toolbar = () => {
  return (
    <motion.nav
      className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="flex items-center gap-0.5 px-2 py-1.5 bg-surface-1 rounded-xl border border-border shadow-lg">
        <HomeButton />
        <ProjectsButton />
        <WritingButton />
        <ReadingButton />
        <StackButton />

        <Divider />

        <ThemeToggle />

        <Divider />

        <TwitterButton />
        <MailButton />
        <GithubButton />
        <LinkedInButton />
      </div>
    </motion.nav>
  );
};

export default Toolbar;
