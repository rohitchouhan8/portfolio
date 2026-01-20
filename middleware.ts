import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// AI bot user agents to detect
const AI_BOT_PATTERNS = [
  'GPTBot',
  'ChatGPT-User',
  'Claude-Web',
  'Anthropic',
  'CCBot',
  'Google-Extended',
  'PerplexityBot',
  'Bytespider',
  'Amazonbot',
  'Meta-ExternalAgent',
  'FacebookBot',
  'Applebot-Extended',
  'cohere-ai',
  'Diffbot',
  'ImagesiftBot',
  'Omgilibot',
  'YouBot',
];

function isAIBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return AI_BOT_PATTERNS.some((pattern) =>
    userAgent.toLowerCase().includes(pattern.toLowerCase())
  );
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent');

  // Check if this is an AI bot
  if (isAIBot(userAgent)) {
    const pathname = request.nextUrl.pathname;

    // Skip if already requesting markdown API or static files
    if (
      pathname.startsWith('/api/md') ||
      pathname.startsWith('/_next') ||
      pathname.includes('.')
    ) {
      return NextResponse.next();
    }

    // Rewrite to markdown API
    const url = request.nextUrl.clone();
    url.pathname = `/api/md${pathname === '/' ? '' : pathname}`;

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
