import { PiChalkboardTeacher, PiHouse, PiStudent } from "react-icons/pi";

export const links = [
    {
        name: "home",
        link:"/",
        icon: PiHouse,
    },
    {
        name: "students",
        link:"/students",
        icon: PiStudent
    },
    {
        name: "teachers",
        link:"/teachers",
        icon: PiChalkboardTeacher,
    }
]

/**Link styling */
export const activeLink = 'flex items-center bg-gray-50 text-slate-400'
export const normalLink = 'flex items-center text-white hover:bg-gray-50 hover:text-slate-400 transition'