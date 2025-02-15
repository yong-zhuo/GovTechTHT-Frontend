import { LuLoaderCircle } from 'react-icons/lu'

const Loading = () => {
  return (
    <div className="flex flex-row items-center text-slate-600 gap-1 h-screen justify-center text-3xl">
      Loading
      <LuLoaderCircle className="animate-spin" />
    </div>
  )
}

export default Loading
