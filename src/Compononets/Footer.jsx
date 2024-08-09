import alibab from '../Images/alibaba_logo.png';
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import instagram from '../Images/instagram.png';
import whatsapp from '../Images/whatsapp.png';
import youtube from '../Images/youtube.png';
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-[#1E90FF] p-10">
            <div className="px-5 md:px-28 pt-20 pb-10 flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 justify-evenly text-white">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold">About Company</h1>
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
                    <p>BKash on Delivery</p>
                    <p>Parcel Pick and Drop Service</p>
                    <p>Booster SMS</p>
                    <p>Mobile Top-Up</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 items-center justify-evenly text-white">
                <div>
                    <h1 className="text-4xl font-semibold">Logo</h1>
                    {/* <img src="" alt="" /> */}
                </div>
                <div>
                    <p className="text-xl font-semibold">Call Us <span>00000000</span>or Email Us <span>xxxxxx@gmail.com</span></p>
                </div>
                <div>
                    <div className='flex flex-wrap gap-3 justify-center items-center'>
                        <img src={alibab} className='w-12'/>
                        <img src={facebook} className='w-12'/>
                        <img src={twitter} className='w-12'/>
                        <img src={instagram} className='w-12'/>
                        <img src={whatsapp} className='w-12'/>
                        <img src={youtube} className='w-12'/>
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