import Link from 'next/link'
import { FaRegUserCircle, FaSearch } from 'react-icons/fa'
import { AiOutlineCamera } from 'react-icons/ai'

import { MdOndemandVideo } from 'react-icons/md'

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <div className="h-24 text-center pt-6 lg:pt-8 flex items-center justify-between font-semibold text-sm text-slate-200">
      <div className="text-slate-200 gap-1 flex text-center items-center h-10">
        <a href="/">
          <div className="text-white text-xs md:text-sm lg:text-base font-normal">
            TaildwindCSS
          </div>
        </a>
        <div className="inline-flex items-center justify-center gap-1px p-1 relative flex-shrink-0 bg-orange-500 rounded-sm">
          <span className="relative font-semibold text-white text-lg md:text-xl lg:text-2xl whitespace-no-wrap">
            UpVideos
          </span>
        </div>

        <div className="bg-slate-200  flex p-8 min-w-min items-center gap-2 m-2 rounded-lg border border-zinc-300 px-3 py-3 shadow-sm focus-within:ring-4 focus-within:ring-orange-500">
          <FaSearch className="h-5 w-5 text-zinc-600" />

          <input
            className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none w-full" // Alteração na classe para expandir o input
            placeholder="Search"
          />
        </div>
      </div>

      <ul className="flex items-center gap-1 md:gap-4">
        <li>
          <Link
            href="https://github.com/Jones-bass"
            target="_blank"
            aria-label="Jones Souza Github"
            rel="noreferrer"
          >
            <MdOndemandVideo
              size={20}
              className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
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
            <AiOutlineCamera className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500" />
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
              className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}
