"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const languages = [
    { code: "en", name: "English", flag: "/assets/images/usa.png" },
    { code: "bn", name: "Bangla", flag: "/assets/images/bd.png" },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const found = languages.find((lang) => pathname.includes(lang.code))
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  )

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(languages.find((l) => l.code === lang))
    setIsOpen(false)
    router.push(`/${lang}`)
  }

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
        >
          <Image
            className="max-w-8"
            src={selectedLanguage.flag}
            width={50}
            height={50}
            alt={selectedLanguage.name}
          />
          {selectedLanguage.name}
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            {languages.map((lang) => (
              <li key={lang.code} className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                <Image
                  className="max-w-8"
                  src={lang.flag}
                  alt={lang.name}
                  width={50}
                  height={50}
                />
                <span onClick={() => handleLanguageChange(lang.code)}>{lang.name}</span>
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
