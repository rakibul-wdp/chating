import { NextResponse } from "next/server";
import { getUserMeLoader } from "./app/data/services/get-user-me-loader";

export async function middleware(request) {
  const user = await getUserMeLoader();
  const currentPath = request.nextUrl.pathname;

  if (currentPath.startsWith("/dashboard") && user.ok === false) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
