import alibab from '../Images/alibaba_logo.png';
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import instagram from '../Images/instagram.png';
import whatsapp from '../Images/whatsapp.png';
import youtube from '../Images/youtube.png';
import pinterest from '../Images/pinterest.png';
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from '../Images/swiftship_logo-removebg.png';
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
import { ImPaypal } from "react-icons/im";
import { FaCcStripe } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
const Footer = () => {
    return (
        <div className="bg-[#045364] p-3 md:p-10">
            <div className="px-5 md:px-28 pt-20 pb-10 flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 justify-evenly text-white">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold">About Company</h1>
                    <Link to="/Policy">Privacy & Policy</Link>
                    <p>Tracking</p>
                    <p>Our Story</p>
                    <p>Blog</p>
                    <p>Career</p>
                    <p>Help Us</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold">Services</h1>
                    <p>Person to Person Delivery</p>
                    <p>Merchant Delivery Service</p>
                    <p>Air Parcel</p>
                    <p>Corporate and SME Delivery</p>
                    <p>Line Haul</p>
                    <p>Warehouse</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold">More Services</h1>
                    <p>Fullfillment</p>
                    <p>Call Center</p>
                    <p>Parcel Pick and Drop Service</p>
                    <p>International Payment Gateways</p>
                    <div className='flex items-center gap-4 flex-wrap text-white text-4xl pt-5'>
                        <FaCcVisa />
                        <FaCcMastercard />
                        <SiAmericanexpress />
                        <ImPaypal />
                        <FaCcStripe />
                        <BsBank2 />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 items-center justify-evenly text-white">
                <div>
                    <div className="">
                        <img src={logo} alt="logo" className="h-36 md:w-32 md:h-32" />
                    </div>
                </div>
                <div>
                    <p className="text-sm md:text-xl font-semibold">Call Us <span>+8801846937397</span> or Email Us <span>swiftship@asianclothify.com</span></p>
                </div>
                <div>
                    <div className='flex flex-wrap gap-3 justify-center items-center'>
                        <img src={alibab} className='w-12'/>
                        <img src={facebook} className='w-12'/>
                        <img src={twitter} className='w-12'/>
                        <img src={instagram} className='w-12'/>
                        <img src={whatsapp} className='w-12'/>
                        <img src={youtube} className='w-12'/>
                        <img src={pinterest} className='w-12'/>
                    </div>
                </div>
               
            </div>
            <hr className='w-full h-[2px] bg-white'/>
            <div>
                <p className='flex flex-wrap gap-2 items-center text-white'>Copyright <FaRegCopyright /> 2024. All Right Reserved. Privacy Policy Terms and Conditions. Return and Refund Policy</p>
            </div>
            </div> 
        </div>
    );
};

export default Footer;