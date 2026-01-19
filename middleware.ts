import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // TEMP: Coming Soon mode — remove after MVP launch
  // Allowlist of routes accessible during coming soon
  const allowedRoutes = [
    "/",
    "/join-venue",
    "/join-industry",
    "/thank-you",
    "/contact",
  ];

  // Check if current path is allowed or is an API/internal route
  const isAllowed =
    allowedRoutes.includes(pathname) ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") || // Static assets
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml";

  // If not allowed and not dashboard check, redirect to home
  if (!isAllowed && !pathname.startsWith("/dashboard")) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Preserve existing dashboard role check
  if (!pathname.startsWith("/dashboard")) return NextResponse.next();

  const role = req.cookies.get("qcmix_role")?.value;
  if (!role) {
    const url = req.nextUrl.clone();
    url.pathname = "/industry-join";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
