'use client'

import { useContext } from 'react'
import ListaCard from './ListaCard'
import { FetchContext } from '@/context/FetchContext.tsx'
import Loading from './Loading'

export default function Lista() {
  const { sessionShow, loading } = useContext(FetchContext)

  if (loading) {
    return <Loading />
  }

  return (
    <section className="p-8 relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
      <ul className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sessionShow.map((item) => (
          <ListaCard
            key={item.autor}
            autor={item.autor}
            like={item.like}
            percentage={item.percentage}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  )
}
