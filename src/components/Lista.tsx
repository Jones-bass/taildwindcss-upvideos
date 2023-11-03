'use client'
import { ListHideInfo } from '../utils/ListHideInfo'
import { ListShowInfo } from '../utils/ListShowInfo'

import { useState } from 'react'
import ListaCard from './ListaCard'

export default function Lista() {
  const [showMore, setShowMore] = useState(false)
  const [CardHideInfo] = useState(ListHideInfo)
  const [CardShowInfo] = useState(ListShowInfo)

  // Função para alternar entre a exibição de mais cards
  const handleShowMore = () => {
    setShowMore(true)
  }

  // Função para ocultar os cards adicionais
  const handleHideCards = () => {
    setShowMore(false)
  }

  return (
    <section className="p-8 relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
      <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Se showMore for verdadeiro, mostre todos os cartões, senão, mostre apenas os primeiros 4. */}
        {showMore ? (
          <>
            <ul className="space-y-8">
              {CardShowInfo.map((item) => {
                return (
                  <ListaCard
                    key={item.id}
                    autor={item.autor}
                    like={item.like}
                    percentage={item.percentage}
                  />
                )
              })}
            </ul>
            <ul className="space-y-8 sm:block">
              {CardShowInfo.map((item) => {
                return (
                  <ListaCard
                    key={item.id}
                    autor={item.autor}
                    like={item.like}
                    percentage={item.percentage}
                  />
                )
              })}
            </ul>
            <ul className="space-y-8 lg:block">
              {CardShowInfo.map((item) => {
                return (
                  <ListaCard
                    key={item.id}
                    autor={item.autor}
                    like={item.like}
                    percentage={item.percentage}
                  />
                )
              })}
            </ul>
          </>
        ) : (
          <>
            {' '}
            <ul className="space-y-8">
              {CardHideInfo.map((item) => {
                return (
                  <ListaCard
                    key={item.id}
                    autor={item.autor}
                    like={item.like}
                    percentage={item.percentage}
                  />
                )
              })}
            </ul>
            <ul className="space-y-8 sm:block">
              {CardHideInfo.map((item) => {
                return (
                  <ListaCard
                    key={item.id}
                    autor={item.autor}
                    like={item.like}
                    percentage={item.percentage}
                  />
                )
              })}
            </ul>
            <ul className="space-y-8 lg:block">
              {CardHideInfo.map((item) => {
                return (
                  <ListaCard
                    key={item.id}
                    autor={item.autor}
                    like={item.like}
                    percentage={item.percentage}
                  />
                )
              })}
            </ul>
          </>
        )}
      </div>

      <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pointer-events-none dark:from-slate-900 absolute">
        {!showMore ? (
          <button
            type="button"
            className=" relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center pointer-events-auto"
            onClick={handleShowMore}
          >
            Show more...
          </button>
        ) : (
          <button
            className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center pointer-events-auto"
            onClick={handleHideCards}
          >
            Okay, show less
          </button>
        )}
      </div>
    </section>
  )
}
