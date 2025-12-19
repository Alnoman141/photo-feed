import Image from "next/image"
import { getDictionary } from "./disctionaries"
import PhotoList from "../components/PhotoList"

export default async function Home({ params }) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photos`)
  const photos = await response.json()

  return (
    <PhotoList photos={photos} />
  )
}
