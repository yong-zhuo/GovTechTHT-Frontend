import { PiExam } from "react-icons/pi"
import { Link, NavLink } from "react-router"
import { activeLink, links, normalLink } from "../constants/links"

const SideBar = () => {



    return (
        <div className="h-screen md:overflow-hidden overflow-auto pb-10 bg-slate-400">
            <div className="flex flex-col justify-between items-center ">
                <Link to="/" className="flex flex-row text-white font-semibold items-center justify-center gap-1 text-2xl p-4 border-b border-gray-50" >
                    <PiExam /> <span>GPATracker</span>
                </Link>
                {/** Sidebar Links */}
                <div className="mt-5 w-full ">
                    {links.map((item) => (
                        <div key={item.name} className="mt-5">
                            <NavLink
                                to={item.link}
                                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            >
                                <item.icon className="text-2xl mr-2 ml-3" />
                                <span className="capitalize text-xl">{item.name}</span>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBar