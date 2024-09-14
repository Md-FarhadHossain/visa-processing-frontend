"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React from 'react'

const SuccessPage = () => {
  const router = useRouter()

  return router.push('https://www.google.com/')
}

export default SuccessPage