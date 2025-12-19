import { NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const supportedLocales = ["en", "bn"]
const defaultLocale = "en"

function getLocale(request) {

  const acceptedLanguage = request.headers.get('accept-language') ?? undefined
  let headers = { 'accept-language': acceptedLanguage }
  let languages = new Negotiator({ headers }).languages()

  return match(languages, supportedLocales, defaultLocale)
}

export function proxy(request) {
    const pathname = request.nextUrl.pathname

    // check locale is present in pathname
    const pathnameIsMissingLocale = supportedLocales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|assets|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
