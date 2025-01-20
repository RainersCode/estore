import React from 'react'
import Image from 'next/image'
import loader from '@/assets/loader.gif'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen" role="status" aria-label="Loading">
      <Image 
        src={loader}
        alt="Loading indicator"
        width={64}
        height={64}
        priority
      />
    </div>
  )
} 