'use client'

import Link from 'next/link'
import { FaRegUserCircle } from 'react-icons/fa'

import { MdOndemandVideo } from 'react-icons/md'
import Input from './Input'

export default function Header() {
  return (
    <div className="h-24 px-4 sm:px-6 md:px-8 text-center pt-6 lg:pt-8 flex items-center justify-between font-semibold text-sm text-slate-200 bg-slate-900">
      <div className="text-slate-200 gap-1 flex text-center items-center h-10">
        <a href="/">
          <div className="text-white text-xs md:text-sm lg:text-base font-normal">
            Taildwind
          </div>
        </a>
        <div className="inline-flex items-center justify-center gap-1px p-1 relative flex-shrink-0 bg-orange-500 rounded-sm">
          <span className="relative font-semibold text-white text-lg md:text-xl lg:text-2xl whitespace-no-wrap">
            UpVideos
          </span>
        </div>

        <Input />
      </div>

      <ul className="flex items-center gap-2 md:gap-4">
        <li>
          <Link href="/upvideos" rel="noreferrer">
            <MdOndemandVideo
              size={20}
              className="cursor-pointer text-xl sm:text-2xl hover:text-orange-500"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Jones-bass"
            target="_blank"
            aria-label="Jones Souza Github"
            rel="noreferrer"
          >
            <FaRegUserCircle
              size={20}
              className="cursor-pointer text-xl sm:text-2xl hover:text-orange-500"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}
