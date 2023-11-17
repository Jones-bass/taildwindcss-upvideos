import { BsFillCloudUploadFill } from 'react-icons/bs'

export default function Upvideos() {
  return (
    <form className="w-full h-[540px] lg:h-[440px] flex items-center text-slate-200 justify-center bg-slate-900">
      <div className="text-center">
        <label
          htmlFor="video"
          className="border rounded-md cursor-pointer hover:text-orange-500 border-dashed text-sm flex flex-col gap-2 items-center justify-center  p-4"
        >
          <div className="overflow-hidden rounded-md">
            <canvas className="h-2 inset-0" />
          </div>
          <BsFillCloudUploadFill className="w-64 h-64" />
          <p className="text-2xl"> Selecione um vídeo</p>
        </label>
      </div>
    </form>
  )
}
