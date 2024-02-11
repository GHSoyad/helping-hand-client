import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET });

  if (token?.role === "user") {
    return NextResponse.next();
  }

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/user/:path*',
}