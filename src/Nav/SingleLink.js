import React from "react";
import {useLocation, NavLink} from "react-router-dom";

const SingleLink = ({path, name, closeMenu, id}) => {
    const {pathname} = useLocation();
    return (
        <li className="flex group relative list-none ">
            <NavLink
                to={path}
                className={`flex w-full sm:w-max sm:p-1 ${pathname === path && "text-green-100"
                    } rounded-lg  h-8 sm:h-12 items-center px-1 transition-all`}
                onClick={closeMenu}
            >
                {name}
            </NavLink>
            <div
                className={`hidden sm:block h-0 origin-left border-white border-2 w-5/6 relative bottom sm:bottom-3.5 left-1.5 ${pathname === path ? "scale-x-30" : "scale-x-0"
                    } group-hover:scale-x-100 transform transition-transform `}
            />
        </li>
    );
};

export default SingleLink;