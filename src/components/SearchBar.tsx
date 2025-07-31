'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef, useState, useTransition } from 'react'

const SearchBar = () => {
  const searchParams = useSearchParams()
  const defaultQuery = searchParams.get('query') || ''
  const inputRef = useRef<HTMLInputElement>(null)
  const [isSearching, startTransition] = useTransition()
  const [hasSearched, setHasSearched] = useState(false)
  const router = useRouter()
  const [query, setQuery] = useState<string>(defaultQuery)

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`)
    })

    setHasSearched(true)

  }

  return (
    <div className={`relative w-full h-12 flex flex-col bg-white 
      ${hasSearched ? 'rounded-t-md' : 'rounded-md'}
      ${query !== '' ? 'rounded-t-md' : 'rounded-md'}
    `}
    >
      <div className='relative h-12 z-10 rounded-md'>
        <Input
          className='h-full pr-20'
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
          placeholder='Ex: Great jacket, dark jacket, etc.'
        />

        <Button
          size='sm'
          className='absolute right-0 inset-y-0 h-full rounded-l-none'
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
