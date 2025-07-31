'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef, useState, useTransition } from 'react'

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isSearching, startTransition] = useTransition()
  const router = useRouter()
  const [query, setQuery] = useState<string>('')

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`)
    })
  }

  return (
    <div className='relative w-full h-14 flex flex-col bg-white'>
      <div className='relative h-14 z-10 rounded-md'>
        <Input
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              search()
            }

            if (e.key === 'Escape') {
              inputRef.current?.blur()
            }
          }}
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          disabled={isSearching}
        />

        <Button
          size='sm'
          className='absolute right-0 inset-y-0 rounded-l-none'
          onClick={() => search()}
          disabled={isSearching}
        >
          {isSearching ? (
            <Loader2 className='h-6 w-6 animate-spin' />
          ) : (
            <Search className='h-6 w-6' />
          )}
        </Button>
      </div>
    </div>
  )
}

export default SearchBar
