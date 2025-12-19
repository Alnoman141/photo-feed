import Image from "next/image"
import Link from "next/link"
import Logo from "./Logo"
import LanguageSwitcher from "./LanguageSwitcher"

export default function NavBar() {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />
        <LanguageSwitcher />
      </div>
    </nav>
  )
}
