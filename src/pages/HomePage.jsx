import { PiExam } from "react-icons/pi"

const HomePage = () => {


    return (
        <div className="flex flex-col items-center justify-around h-screen">
            <div className='flex flex-col items-center mb-24 pb-24'>
                <PiExam className="h-15 w-15 sm:h-40 sm:w-40" />
                <h3 className='text-3xl md:text-4xl font-semibold '>Welcome To</h3>
                <h1 className='mt-2 text-5xl font-bold md:text-7xl text-slate-400'>GPATracker</h1>
                <div className="flex flex-row justify-around items-center mt-12">
                </div>
            </div>

        </div>
    )
}

export default HomePage