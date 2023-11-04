import { BsFillCloudUploadFill } from 'react-icons/bs'

export default function Upvideos() {
  return (
    <form className="flex items-center text-slate-200  justify-center p-14 bg-slate-900">
      <div className="text-center">
        <label
          htmlFor="video"
          className="relative border rounded-md cursor-pointer hover:text-orange-500 border-dashed text-sm flex flex-col gap-2 items-center justify-center text-muted-foreground  p-4"
        >
          <div className="relative overflow-hidden rounded-md">
            <video className="absolute inset-0 w-full h-full" />
          </div>
          <BsFillCloudUploadFill className="w-64 h-64" />
          <p className="text-2xl"> Selecione um vídeo</p>
        </label>
      </div>
    </form>
  )
}
