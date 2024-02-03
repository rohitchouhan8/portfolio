'use client';
import { TStackItem, StackItemId } from '@/app/models/stack/types';
import { AnimatedDiv, LinkItem } from '../List';
import { Bold } from '../Typography';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { assertNever } from '@/utils/assert';

const ICON_SIZE = 32;

export function StackItem({
  item,
  index,
}: {
  item: TStackItem;
  index: number;
}) {
  return (
    <AnimatedDiv key={item.id} index={index}>
      <LinkItem
        href={item.url}
        index={index}
        className="flex flex-row items-center gap-2"
        target="_blank"
      >
        <StackIcon id={item.id} />
        <Bold>{item.title}</Bold>
        <span className="text-mauve-11 font-light">{item.label}</span>
      </LinkItem>
    </AnimatedDiv>
  );
}

function StackIcon({ id }: { id: StackItemId }) {
  const { theme } = useTheme();
  let content: React.ReactNode;
  switch (id) {
    case StackItemId.RAYCAST:
      return <RaycastIcon />;
    case StackItemId.GRAPHITE:
      return <GraphiteIcon />;
    case StackItemId.ARC_BROWSER:
      return <ArcBrowserIcon />;
    case StackItemId.ARC_SEARCH:
      return <ArcSearchIcon />;
    case StackItemId.MONARCH:
      return <MonarchIcon />;
    default:
      assertNever(id);
  }
}

function RaycastIcon() {
  const { theme } = useTheme();
  if (theme === 'dark') {
    return (
      <svg
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox="0 0 228 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1218_17)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57 147.207V171L-0.0518799 113.948L11.9031 102.084L57 147.207ZM80.7932 171H57L114.052 228.052L125.955 216.149L80.7932 171ZM216.11 125.89L228 114L114 0L102.11 11.8901L147.155 57H119.926L88.4822 25.5826L76.5792 37.4727L96.1583 57.0519H82.5307V145.521H171V131.907L190.579 151.486L202.469 139.583L171 108.048V80.8192L216.11 125.89ZM62.9515 51.0485L51.0614 62.9516L63.8203 75.7104L75.7104 63.8073L62.9515 51.0485ZM164.193 152.29L152.341 164.18L165.1 176.939L177.003 165.048L164.193 152.29ZM37.4208 76.5792L25.5307 88.4693L57 119.952V96.1454L37.4208 76.5792ZM131.842 171H108.048L139.531 202.469L151.421 190.579L131.842 171Z"
            fill="#FF6363"
          />
        </g>
        <defs>
          <clipPath id="clip0_1218_17">
            <rect width="228" height="228" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 228 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1218_28)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M227.987 113.987L216.097 125.89L170.987 80.7803V56.987L227.987 113.987ZM114.039 0L102.149 11.8901L147.246 56.987H171.039L114.039 0ZM88.5212 25.5177L76.6181 37.4208L96.1972 56.987H119.99L88.5212 25.5177ZM171.039 108.048V131.842L190.54 151.408L202.443 139.518L171.039 108.048ZM164.18 152.238L170.987 145.43H82.5177V56.987L75.7104 63.8073L62.9386 51.1003L51.0484 62.9905L63.8073 75.7623L56.987 82.5177V96.1454L37.4208 76.5662L25.5177 88.4693L56.987 119.939V147.168L11.8901 102.097L0 113.987L114.039 227.987L125.942 216.097L80.8321 170.987H108.061L139.531 202.469L151.434 190.566L131.855 170.987H145.482L152.29 164.18L165.061 176.939L176.952 165.048L164.18 152.238Z"
          fill="#FF6363"
        />
      </g>
      <defs>
        <clipPath id="clip0_1218_28">
          <rect width="228" height="228" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GraphiteIcon() {
  return (
    <div className="rounded overflow-hidden">
      <Image
        src="/graphite-logo.png"
        alt="Graphite"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </div>
  );
}

function ArcBrowserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 82 68"
    >
      <g>
        <g transform="translate(143 148)">
          <g fillRule="evenodd" clipRule="evenodd">
            <path d="M-103.92-141.91c2.81 0 5.37 1.62 6.58 4.16l9.64 20.28s0 .01-.01.01c0 0 0-.01.01-.01 2.26-2.77 3.9-6.03 4.6-9.53.79-3.95 4.63-6.5 8.58-5.72a7.29 7.29 0 0 1 5.72 8.58c-1.62 8.09-6.14 15.32-12.26 20.63l3.5 7.36c1.94 4.08-.09 9.07-4.39 10.35l-.13.04c-.64.18-1.3.27-1.94.27-2.73 0-5.34-1.54-6.59-4.16l-3.11-6.54-6.33-13.32h.02-.02l-3.11-6.54a.831.831 0 0 0-1.5 0l-3.18 6.68c-4.85-1.03-9.73-4.03-12.49-7.68l9.83-20.68a7.254 7.254 0 0 1 6.58-4.18zm-27.55 17.98c3.73-1.51 7.98.29 9.49 4.03.39.97.95 1.92 1.64 2.83l.01.01.33.42c.03.04.06.07.09.11l.09.11c.05.05.09.11.14.16.01.01.02.02.02.03l-.02-.03c.19.23.4.45.61.67.01.01.01.02.02.02.69.72 1.46 1.4 2.29 2.03.39.3.79.58 1.2.86.04.02.07.05.11.07 2.31 1.52 4.96 2.66 7.6 3.22 1.12.24 2.24.37 3.33.38h.14c1.45 0 2.9-.18 4.32-.52l6.33 13.32c-3.42 1.15-7.01 1.78-10.65 1.78-3.28 0-6.6-.57-9.82-1.6l-3.03 6.37a7.287 7.287 0 0 1-10.01 3.3c-3.48-1.85-4.75-6.21-3.06-9.77l3.32-6.98c-3.75-3.17-6.74-7.02-8.47-11.2l-.05-.13c-1.5-3.73.3-7.98 4.03-9.49z"></path>
            <path
              fill="#fff"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth="6.87"
              d="M-103.92-141.91c2.81 0 5.37 1.62 6.58 4.16l9.64 20.28s0 .01-.01.01c0 0 0-.01.01-.01 2.26-2.77 3.9-6.03 4.6-9.53.79-3.95 4.63-6.5 8.58-5.72a7.29 7.29 0 0 1 5.72 8.58c-1.62 8.09-6.14 15.32-12.26 20.63l3.5 7.36c1.94 4.08-.09 9.07-4.39 10.35l-.13.04c-.64.18-1.3.27-1.94.27-2.73 0-5.34-1.54-6.59-4.16l-3.11-6.54-6.33-13.32h.02-.02l-3.11-6.54a.831.831 0 0 0-1.5 0l-3.18 6.68c-4.85-1.03-9.73-4.03-12.49-7.68l9.83-20.68a7.254 7.254 0 0 1 6.58-4.18zm-27.55 17.98c3.73-1.51 7.98.29 9.49 4.03.39.97.95 1.92 1.64 2.83l.01.01.33.42c.03.04.06.07.09.11l.09.11c.05.05.09.11.14.16.01.01.02.02.02.03l-.02-.03c.19.23.4.45.61.67.01.01.01.02.02.02.69.72 1.46 1.4 2.29 2.03.39.3.79.58 1.2.86.04.02.07.05.11.07 2.31 1.52 4.96 2.66 7.6 3.22 1.12.24 2.24.37 3.33.38h.14c1.45 0 2.9-.18 4.32-.52l6.33 13.32c-3.42 1.15-7.01 1.78-10.65 1.78-3.28 0-6.6-.57-9.82-1.6l-3.03 6.37a7.287 7.287 0 0 1-10.01 3.3c-3.48-1.85-4.75-6.21-3.06-9.77l3.32-6.98c-3.75-3.17-6.74-7.02-8.47-11.2l-.05-.13c-1.5-3.73.3-7.98 4.03-9.49z"
            ></path>
          </g>
        </g>
        <g transform="translate(143 148)">
          <path
            d="m-114.2-96.03 6.35-13.36c-4.85-1.03-9.73-4.03-12.49-7.68l-6.64 13.96c3.69 3.13 8.12 5.59 12.78 7.08"
            fill="#1a007f"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
          <path
            d="M-87.7-117.47c-3.19 3.91-7.62 6.81-12.36 7.94l6.33 13.32c4.62-1.56 8.94-4.08 12.67-7.31l-6.64-13.95z"
            fill="#4e000a"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
          <path
            d="m-126.98-103.11-3.32 6.98c-1.69 3.55-.42 7.92 3.06 9.77 3.69 1.96 8.23.43 10.01-3.3l3.03-6.37a37.885 37.885 0 0 1-12.78-7.08"
            fill="#1a007f"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
          <path
            d="M-74.52-132.71a7.29 7.29 0 0 0-8.58 5.72c-.7 3.5-2.34 6.76-4.6 9.53l6.63 13.96c6.12-5.31 10.64-12.54 12.26-20.63.79-3.96-1.77-7.8-5.71-8.58"
            fill="#ff9396"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
          <path
            d="M-100.06-109.53c-1.42.34-2.87.52-4.32.52-1.13 0-2.3-.13-3.47-.38-4.85-1.03-9.73-4.03-12.49-7.68-.69-.91-1.25-1.86-1.64-2.83-1.51-3.73-5.76-5.53-9.49-4.03-3.73 1.51-5.53 5.76-4.03 9.49 1.71 4.24 4.73 8.13 8.52 11.33a37.84 37.84 0 0 0 12.77 7.08c3.21 1.03 6.54 1.6 9.82 1.6 3.64 0 7.23-.63 10.65-1.78l-6.32-13.32z"
            fill="#002dc8"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
          <path
            d="m-77.57-96.16-3.5-7.36-6.63-13.95-.01.01s0-.01.01-.01l-9.64-20.28a7.292 7.292 0 0 0-6.58-4.16c-2.81 0-5.37 1.62-6.58 4.16l-9.83 20.68c2.76 3.65 7.64 6.65 12.49 7.68l3.18-6.68c.3-.63 1.2-.63 1.5 0l3.11 6.54h.02-.02l6.33 13.32 3.11 6.54a7.28 7.28 0 0 0 6.59 4.16c.65 0 1.3-.09 1.94-.27 4.39-1.21 6.47-6.26 4.51-10.38"
            fill="#ff536a"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </g>
        <path
          d="m28.8 51.97 6.35-13.36c-4.85-1.03-9.73-4.03-12.49-7.68l-6.64 13.96c3.69 3.13 8.12 5.59 12.78 7.08"
          fill="#1a007f"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
        <path
          d="M55.3 30.53c-3.19 3.91-7.62 6.81-12.36 7.94l6.33 13.32c4.62-1.56 8.94-4.08 12.67-7.31L55.3 30.53z"
          fill="#4e000a"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
        <path
          d="m16.02 44.89-3.32 6.98c-1.69 3.55-.42 7.92 3.06 9.77 3.69 1.96 8.23.43 10.01-3.3l3.03-6.37a37.885 37.885 0 0 1-12.78-7.08"
          fill="#1a007f"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
        <path
          d="M68.48 15.29a7.29 7.29 0 0 0-8.58 5.72c-.7 3.5-2.34 6.76-4.6 9.53l6.63 13.96c6.12-5.31 10.64-12.54 12.26-20.63.79-3.96-1.77-7.8-5.71-8.58"
          fill="#ff9396"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
        <path
          d="M42.94 38.47c-1.42.34-2.87.52-4.32.52-1.13 0-2.3-.13-3.47-.38-4.85-1.03-9.73-4.03-12.49-7.68-.69-.91-1.25-1.86-1.64-2.83-1.51-3.73-5.76-5.53-9.49-4.03C7.8 25.58 6 29.83 7.5 33.56c1.71 4.24 4.73 8.13 8.52 11.33a37.84 37.84 0 0 0 12.77 7.08c3.21 1.03 6.54 1.6 9.82 1.6 3.64 0 7.23-.63 10.65-1.78l-6.32-13.32z"
          fill="#002dc8"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
        <path
          d="m65.43 51.84-3.5-7.36-6.63-13.95-.01.01s0-.01.01-.01l-9.64-20.28a7.292 7.292 0 0 0-6.58-4.16c-2.81 0-5.37 1.62-6.58 4.16l-9.83 20.68c2.76 3.65 7.64 6.65 12.49 7.68l3.18-6.68c.3-.63 1.2-.63 1.5 0l3.11 6.54h.02-.02l6.33 13.32 3.11 6.54a7.28 7.28 0 0 0 6.59 4.16c.65 0 1.3-.09 1.94-.27 4.39-1.21 6.47-6.26 4.51-10.38"
          fill="#ff536a"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

function ArcSearchIcon() {
  return (
    <div className="rounded overflow-hidden">
      <Image
        src="/arc-search.png"
        alt="Arc Search"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </div>
  );
}

function MonarchIcon() {
  return (
    <div className="rounded overflow-hidden">
      <Image
        src="/monarch-logo.png"
        alt="Monarch"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    </div>
  );
}
