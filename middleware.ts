import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const isAuth = !!token;
        const isAuthPage = req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signup";

        if (isAuthPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL("/dashboard", req.url));
            }
            return null;
        }

        if (!isAuth) {
            let from = req.nextUrl.pathname;
            if (req.nextUrl.search) {
                from += req.nextUrl.search;
            }

            return NextResponse.redirect(
                new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
            );
        }

        // Redirect unapproved users trying to access admin sub-routes
        if (req.nextUrl.pathname.startsWith("/dashboard/admin") && token?.role !== "admin") {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token || true,
        },
    }
);

export const config = {
    matcher: ["/dashboard/:path*", "/login", "/signup"],
};
