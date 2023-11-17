'use client'

import { FetchContext } from '@/context/FetchContext.tsx'

import { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const searchFromSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFromSchema>

export default function Input() {
  const { fetchSession } = useContext(FetchContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFromSchema),
  })

  async function handleSearchSession(data: SearchFormInputs) {
    await fetchSession(data.query)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchSession)}
      className="bg-slate-200  flex p-8 min-w-min items-center gap-2 m-2 rounded-lg border border-zinc-300 px-3 py-3 shadow-sm focus-within:ring-2 focus-within:ring-orange-500"
    >
      <input
        className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none w-full"
        placeholder="Search"
        type="text"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <FaSearch className="h-5 w-5 text-zinc-600" />
      </button>
    </form>
  )
}
