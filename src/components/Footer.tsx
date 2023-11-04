export default function Footer() {
  return (
    <div className="h-32 bg-slate-900 text-center flex items-center justify-center font-semibold text-sm text-slate-200">
      <div className="text-slate-200 gap-1 flex text-center items-center h-10">
        <div className="text-white text-xs md:text-sm lg:text-base font-normal">
          TaildwindCSS
        </div>
        <div className="inline-flex items-center justify-center gap-1px p-1 relative flex-shrink-0 bg-orange-500 rounded-sm">
          <span className="relative font-semibold text-white text-lg md:text-xl lg:text-2xl whitespace-no-wrap">
            UpVideos
          </span>
        </div>
      </div>
    </div>
  )
}
