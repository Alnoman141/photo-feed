"use client"

import { createPortal } from "react-dom"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Modal({ children }) {
  const modalRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal()
    }
  }, [])

  const hideModal = () => {
    router.back()
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={hideModal}
      className="shadow-teal-700 mt-20 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
        <span onClick={hideModal}
          className="flex justify-end cursor-pointer">
            <Image
              src="/assets/icons/xmark.svg"
              alt="close"
              width={30}
              height={30} />
          </span>
      {children}
    </dialog>,
    document.getElementById("root-modal-container")
  )
}
