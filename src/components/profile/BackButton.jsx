import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router"

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="group mb-2 inline-flex items-center font-semibold leading-tight 
        text-slate-400 cursor-pointer hover:text-slate-500 transition">
        <FaArrowLeft size={12} className='group-hover:-translate-x-2 mr-2 transition' /> Back to previous page
      </button>
    </>
  )
}

export default BackButton