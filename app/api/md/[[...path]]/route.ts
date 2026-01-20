import { NextRequest, NextResponse } from 'next/server';
import { getMarkdownContent } from '@/lib/markdown-content';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  const { path } = await params;
  const pathname = path ? `/${path.join('/')}` : '/';

  const markdown = getMarkdownContent(pathname);

  if (!markdown) {
    return new NextResponse('# 404 - Page Not Found\n\nThe requested page does not exist.', {
      status: 404,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
      },
    });
  }

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
}
