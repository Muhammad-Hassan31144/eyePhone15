import {appleImg, searchImg, bagImg} from "../utils"
import { navLists } from "../constants"
const Nav = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
    <nav className="flex w-full screen-max-width">
            <a href="#home">
            <img src={appleImg} alt="logo" height={18} width={14}/>
            </a>
            <ul className="flex justify-center flex-1 items-center max-sm:hidden">
                {navLists.map((nav) => (
                    <li key={nav} className="text-gray text-sm px-5 hover:text-white transition-all cursor-pointer">
                        {nav}
                    </li>
                ))}
            </ul>
            <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1 cursor-pointer">
                <img src={searchImg} alt="search Image" height={18} width={18}/>
                <img src={bagImg} alt="bag Image" height={18} width={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav