import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Define admin paths that require authentication
  const isAdminPath = path.startsWith("/admin")

  // Check if user is authenticated for admin paths
  if (isAdminPath) {
    // In a real app, you would check for a valid session/token
    // For this example, we'll use a simple cookie check
    const authCookie = request.cookies.get("auth")

    if (!authCookie) {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Add security headers to all responses
  const response = NextResponse.next()

  // Security headers
  response.headers.set("X-DNS-Prefetch-Control", "on")
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

// Only run middleware on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|images/|fonts/).*)",
  ],
}
