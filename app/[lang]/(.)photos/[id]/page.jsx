import PhotoDetails from "@/app/components/PhotoDetails"
import Modal from "@/app/components/Modal"

export default async function SinglePhotoPage({ params }) {
  const { id, lang } = await params

  return (
    <Modal>
        <PhotoDetails id={id} lang={lang} />
    </Modal>
  )
}