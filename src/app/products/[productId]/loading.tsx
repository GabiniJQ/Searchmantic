import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className='relative min-h-20'>
      <Loader2 className='absolute left-1/2 top-1/2 size-10 -translate-x-1/2 animate-spin' />
    </div>
  )
}
