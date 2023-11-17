'use client'
import Image from 'next/image'
import imgLogo from '../assets/images.png'
import { AiFillCheckCircle, AiFillEye, AiFillLike } from 'react-icons/ai'
import { ListProps } from '@/context/FetchContext.tsx'

export default function ListaCard({
  autor,
  like,
  percentage,
  description,
}: ListProps) {
  return (
    <li className="text-sm leading-6">
      <figure className="relative flex flex-col-reverse rounded-lg p-6">
        <blockquote className="mt-2 text-slate-300">
          <div className="justify-between flex">
            <div className="mt-0.5 flex gap-1 items-center">
              <p>{autor}</p> <AiFillCheckCircle />
            </div>
            <div className="mt-0.5 flex gap-1 items-center">
              <AiFillEye /> {like}
            </div>
            <div className="mt-0.5 flex gap-1 items-center">
              <AiFillLike /> {percentage}
            </div>
            <div></div>
          </div>
          <div className="text-base text-slate-200 font-semibold">
            <span className="absolute inset-0 "></span>
            {description}
          </div>
        </blockquote>

        <figcaption className="flex items-center space-x-4">
          <Image
            src={imgLogo}
            alt="Dois celulares exibindo uma prévia da aplicação do NLW Copa"
            quality={100}
          />
        </figcaption>
      </figure>
    </li>
  )
}
