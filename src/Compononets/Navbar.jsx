import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
    // py-4  px-5 md:px-20
    // px-4 lg:px-20 py-3 md:py-5
    return (
        <div className="w-4/5 glass mx-auto px-10 py-10 flex flex-col gap-6 rounded-b-3xl rounded-bl-3xl">
            {/* 1st navbar */}
            <div className=" text-white font-normal text-xs md:text-base  flex justify-center md:justify-end gap-5 md:gap-10 ">
                {/* <button className="flex items-center gap-1 md:gap-2 hover:text-[#dae155]"><RiAccountCircleFill /> Create Account</button>
                <button className="flex items-center gap-1 md:gap-2 hover:text-[#dae155]"> <IoLogIn />Login</button> */}
                <p className="hover:text-[#2C2C2C]">Call or Text (+880 1846937397)</p>
            </div>
            {/* main navbar */}
            <div className=" text-sm lg:text-xl font-normal text-white flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
                <div>
                    {/* <img src={logo} alt="logo" className="h-10 md:h-24" /> */}
                    <h1 className="text-2xl font-semibold">Travel</h1>
                </div>
                <div>
                    <ul className="flex gap-2 lg:gap-10 pb-2 md:pb-0 ">
                        <Link to="/" className="hover:text-[#2C2C2C]">Home</Link>
                        <div className="dropdown">
                        <Link  tabIndex={0} role="button" className="hover:text-[#2C2C2C]">Hotels</Link>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-3 shadow flex flex-col gap- text-[#2C2C2C]">
                            <Link to={`/tire/1`} className="hover:text-[#2C2C2C]"><a>11R22.5</a></Link>
                            <Link to={`/tire/2`} className="hover:text-[#2C2C2C]"><a>295 60R22.5</a></Link>
                            <Link to={`/tire/3`} className="hover:text-[#2C2C2C]"><a>295 70R22.5</a></Link>
                            <Link to={`/tire/4`} className="hover:text-#2C2C2C]"><a>295 80R22.5</a></Link>
                            <Link to={`/tire/5`} className="hover:text-[#2C2C2C]"><a>315 60R22.5</a></Link>
                            <Link to={`/tire/6`} className="hover:text-[#2C2C2C]"><a>315 70R22.5</a></Link>
                            <Link to={`/tire/7`} className="hover:text-[#2C2C2C]"><a>315 80R22.5</a></Link>
                            <Link to={`/tire/8`} className="hover:text-[#2C2C2C]"><a>385 55R22.5</a></Link>
                        </ul>
                        </div>
                        <Link to="/Contact" className="hover:text-[#2C2C2C]">Flight</Link>
                        <Link to="/Contact" className="hover:text-[#2C2C2C]">Tour</Link>
                        <Link  to="/About" className="hover:text-[#2C2C2C]">About</Link>
                        <Link  to="/WheelProducts" className="hover:text-[#2C2C2C]">Contact</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
