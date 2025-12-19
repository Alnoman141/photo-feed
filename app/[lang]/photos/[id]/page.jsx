import PhotoDetails from "@/app/components/PhotoDetails"


export default async function SinglePhotoPage({ params }) {
  const { id, lang } = await params

  return (
    <PhotoDetails id={id} lang={lang} />
  )
}
