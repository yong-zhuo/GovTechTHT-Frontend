import { PiExam } from "react-icons/pi"
import { Link, NavLink } from "react-router"
import { activeLink, links, normalLink } from "../constants/links"

const NavBar = () => {
    return (
        <div className="fixed z-20 flex items-center bg-slate-400 w-full h-[8vh]">
            <div className="flex flex-row justify-between items-center w-full">
                <Link to="/">
                    <PiExam className="h-10 w-10 ml-5 text-gray-50" />
                </Link>
                {/** Navbar Links */}
                <div className="flex flex-row items-end gap-2 mr-5">
                    {links.map((item) => (
                        <div key={item.name}>
                            <NavLink
                                to={item.link}
                                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            >
                                <span className="capitalize text-xl">{item.name}</span>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavBar