import { auth } from "@/auth";

// Export config to limit middleware to specific paths
export const config = {
  matcher: [
    // Match auth-related paths
    "/api/auth/:path*",
    "/login",
    // Add other protected routes you need
    "/dashboard/:path*",
    "/profile/:path*"
  ]
};

export { auth as middleware };