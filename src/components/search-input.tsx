'use client'
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Input } from '~/components/ui/input'

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const timerRef = React.useRef<NodeJS.Timeout>()
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams)
      term ? params.set('search', term) : params.delete('search')
      replace(`${pathname}?${params.toString()}`, { scroll: false })
    }, 400)
  }

  return (
    <div className="relative sm:max-w-xs w-full">
      <Search className="absolute left-2 top-2/4 -translate-y-2/4 size-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8"
        defaultValue={searchParams.get('search')?.toString()}
        onChange={onChangeHandle}
      />
    </div>
  )
}

export default SearchInput
