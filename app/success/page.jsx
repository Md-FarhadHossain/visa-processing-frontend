"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const SuccessPage = () => {
  const router = useRouter()

  return (
    <>
      <div>
        Success Page ✅
      </div>
    </>
  )
}

export default SuccessPage