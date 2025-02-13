import { PiExam } from "react-icons/pi"
import { students } from "../data/mockStudentData"
import { teachers } from "../data/mockTeacherData"
import { semesters } from "../utils/gpaUtils"

const HomePage = () => {

    const numOfStudents = students.length
    const numOfTeachers = teachers.length
    const info = [
        { label: 'Students', value: numOfStudents },
        { label: 'Teachers', value: numOfTeachers },
        { label: 'Semesters', value: semesters }
    ]

    return (
        <div className="flex flex-col items-center justify-around h-screen">
            <div className='flex flex-col items-center mb-24 pb-24'>
                <PiExam className="h-20 w-20 sm:h-40 sm:w-40" />
                <h3 className='text-3xl md:text-4xl font-semibold '>Welcome To</h3>
                <h1 className='mt-2 text-5xl font-bold md:text-7xl text-slate-400'>GPATracker</h1>
                <div className="flex flex-row justify-around items-center mt-12">
                    {
                        info.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-5 m-5 gap-2 flex flex-row items-end justify-center">
                                <h2 className="text-2xl sm:text-5xl font-bold text-black">{item.value}</h2>
                                <h3 className="text-sm sm:text-lg font-semibold text-slate-400">{item.label}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default HomePage