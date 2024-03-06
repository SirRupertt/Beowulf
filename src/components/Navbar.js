import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import Buttons from "./Buttons";
import { clsx } from 'clsx';

const Navbar = (props) => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className="navbarContainer">
            <nav className="bg-green opacity-60 p-4 flex items-center justify-between relative">
                <span className="text-white text-xl font-semibold">Beowulf</span>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Buttons before={props.before} after={props.after} />
                </div>
                <button className={`absolute top-0 right-2 p-2 text-5xl rounded-lg text-white ml-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${showNav ? "opacity-0" : "opacity-100"}`} onClick={toggleNav}>
                    <CiSquarePlus />
                </button>
                <button className={`absolute top-0 right-2 p-2 text-5xl rounded-lg text-white ml-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${showNav ? "opacity-100" : "opacity-0"}`} onClick={toggleNav}>
                    <CiSquareMinus />
                </button>
                <ul className={`${
                    showNav ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 absolute top-full right-0 bg-green text-white p-4`} >
                    <div className="inline-block space-x-5 text-lg">
                        <Link to="/" className="hover:text-gray" onClick={toggleNav}>Intro </Link>
                        <Link to="/Body1" className="hover:text-gray" onClick={toggleNav}>Body1</Link>
                        <Link to="/Body2" className="hover:text-gray" onClick={toggleNav}>Body2 </Link>
                        <Link to="/Conclusion" className="hover:text-gray" onClick={toggleNav}>Conclusion</Link>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Navbar;
