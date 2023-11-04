'use client'

import { ListHideInfo } from '../utils/ListHideInfo'
import { ListShowInfo } from '../utils/ListShowInfo'
import { motion } from 'framer-motion'

import { useState } from 'react'
import ListaCard from './ListaCard'

export default function Lista() {
  const [showMore, setShowMore] = useState(false)
  const [CardHideInfo] = useState(ListHideInfo)
  const [CardShowInfo] = useState(ListShowInfo)

  const handleShowMore = () => {
    setShowMore(true)
  }

  const handleHideCards = () => {
    setShowMore(false)
  }

  return (
    <motion.section
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div></div>
      <section className="p-8 relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
        <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {showMore
            ? CardShowInfo.map((item) => (
                <ListaCard
                  key={item.id}
                  autor={item.autor}
                  like={item.like}
                  percentage={item.percentage}
                  description={item.description}
                />
              ))
            : CardHideInfo.map((item) => (
                <ListaCard
                  key={item.id}
                  autor={item.autor}
                  like={item.like}
                  percentage={item.percentage}
                  description={item.description}
                />
              ))}
        </div>

        <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pointer-events-none dark:from-slate-900 absolute">
          {!showMore ? (
            <button
              type="button"
              className="relative bg-slate-900 hover:bg-slate-700 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center pointer-events-auto"
              onClick={handleShowMore}
            >
              Show more...
            </button>
          ) : (
            <button
              type="button"
              className="relative bg-slate-900 hover:bg-slate-700 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center pointer-events-auto"
              onClick={handleHideCards}
            >
              Okay, show less
            </button>
          )}
        </div>
      </section>
    </motion.section>
  )
}
