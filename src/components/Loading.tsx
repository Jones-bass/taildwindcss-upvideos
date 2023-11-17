'use client'

import { BounceLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className="w-full h-[540px] lg:h-[440px] flex items-center justify-center">
      <BounceLoader color="#ff6f00" />
    </div>
  )
}
