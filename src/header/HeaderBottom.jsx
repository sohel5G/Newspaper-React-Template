import { Link, NavLink } from "react-router-dom";
import userimg from "../assets/img/user.png"


const HeaderBottom = () => {
    return (
        <div>
            <div className="flex items-center justify-between py-5 flex-col md:flex-row">
                <div className="flex-1 hidden lg:block"></div>
                <nav className="flex-1">
                    <ul className="flex gap-5">
                        <li> <NavLink className="text-lg" to={'/'}> Home </NavLink> </li>
                        <li> <NavLink className="text-lg" to={'/about'}> About </NavLink> </li>
                        <li> <NavLink className="text-lg" to={'/career'}> Career </NavLink> </li>
                    </ul>
                </nav>
                <div className="flex gap-3 items-center mt-8 md:mt-0">
                    <div>
                        <img className="w-10" src={userimg} alt="User Photo" />
                    </div>
                    <div>
                        <Link to={'/login'}><button className="bg-[#403F3F] text-white py-2 px-7 rounded-sm text-base font-semibold"> Login </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;