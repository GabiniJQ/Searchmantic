'use client'

import { Loader2 } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Loading() {
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loaderRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className='relative min-h-[600px] bg-white' ref={loaderRef}>
      <Loader2 className='absolute left-1/2 top-1/2 size-10 -translate-x-1/2 animate-spin' />
    </div>
  )
}
