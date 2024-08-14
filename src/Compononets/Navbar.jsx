import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import logo from '../Images/swiftship_logo-removebg.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoPersonSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
    const [arrow, setArrow] = useState(true);
    const { user, logOut, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.success("Logout successful");
          })
        .catch(error => {
            toast.error(error.message);
          });
    };

    return (
        <div className="w-4/5 z-[1] glass mx-auto px-5 py-5 flex flex-col rounded-b-3xl rounded-bl-3xl">
            {/* 1st navbar */}
            <div className=" text-white font-normal text-xs md:text-base  flex justify-center md:justify-end gap-5 md:gap-10 ">
                <p className="hover:text-[#53fff4]">Email: swiftship@asianclothify.com</p>
                <p className="hover:text-[#53fff4]">Call Us On +8801846937397</p>
                {
                    user ? <div className="text-white font-normal text-xs md:text-base  flex justify-center md:justify-end gap-5 md:gap-10 ">
                            <p className="hover:text-[#53fff4 flex gap-2 items-center"><IoPersonSharp />{user.displayName}</p>
                            <p onClick={handleLogout} className="hover:text-[#53fff4] flex gap-2 items-center"><IoIosLogOut />Logout</p>
                           </div>
                        :
                        <div className="text-white font-normal text-xs md:text-base  flex justify-center md:justify-end gap-5 md:gap-10 ">
                            <Link to="/Login" className="hover:text-[#53fff4]">Login</Link>
                            <Link to="/Registration" className="hover:text-[#53fff4]">Registration</Link>
                        </div>
                }
               
            </div>
            {/* main navbar */}
            <div className="relative text-sm lg:text-xl font-normal text-white flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
                <div className="">
                    <img src={logo} alt="logo" className="h-28 md:w-28 md:h-28" />
                    {/* <h1 className="text-2xl font-semibold">Travel</h1> */}
                </div>
                <div>
                    <ul className="flex gap-2 lg:gap-10 pb-2 md:pb-0 ">
                        <Link to="/" className="hover:text-[#53fff4]">Home</Link>
                        <Link  to="/About" className="hover:text-[#53fff4]">About</Link>
                        <Link to="/Support" className="hover:text-[#53fff4]">Support</Link>
                        <Link to="/Contact" className="hover:text-[#53fff4]">Account</Link>
                        
                        <details className="dropdown">
                            <summary  
                                onClick={() => setArrow(!arrow)}  
                                className="hover:text-[#53fff4] flex gap-2 items-center">
                            Services {
                                    arrow ? <BiSolidDownArrow /> : <BiSolidUpArrow />
                                    }
                            </summary>
                            <ul tabIndex={0} className="dropdown-content menu bg-[#ffffffa0] z-[1] w-40 p-3 shadow flex flex-col gap-2 text-[#2C2C2C] font-bold text-base">
                                {/* <Link to={`/tire/1`} className="hover:text-[#2C2C2C] "><a>Shipping</a></Link> */}
                                
                                <details className="dropdown">
                                    <summary  
                                        onClick={() => setArrow(!arrow)}  
                                        className="hover:text-[#2C2C2C] flex gap-2 items-center">
                                    Shipping {
                                            arrow ? <BiSolidDownArrow /> : <BiSolidUpArrow />
                                            }
                                    </summary>
                                    <ul tabIndex={0} className="dropdown-content menu glass bg-[#ffffffbe] z-[1] w-72 p-3 shadow flex flex-col gap-2 text-[#2C2C2C] font-bold text-base ml-24">
                                        <Link to={`/tire/1`} className="hover:text-[#2C2C2C] "><a>Ship All Feature</a></Link>
                                        <Link to={`/tire/2`} className="hover:text-[#2C2C2C] "><a>Ship Quick And Simple</a></Link>
                                        <Link to="/ShippingTools" className="hover:text-[#2C2C2C] "><a>Shipping Tools</a></Link>
                                        <Link to={`/tire/2`} className="hover:text-[#2C2C2C] "><a>Get Transit Times</a></Link>
                                        <Link to={`/tire/2`} className="hover:text-[#2C2C2C] "><a>Schedule and Manage Pickups</a></Link>
                                        <Link to="/Supplies" className="hover:text-[#2C2C2C] "><a>Packaging & Shipping Supplies</a></Link>
                                    </ul>
                                </details>
                               
                                <Link to={`/tire/2`} className="hover:text-[#2C2C2C] "><a>Tracking</a></Link>
                            </ul>
                        </details>

                        <Link  to="/Contact" className="hover:text-[#53fff4]">Contact</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
