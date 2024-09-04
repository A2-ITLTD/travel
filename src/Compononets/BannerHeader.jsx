import Navbar from "./Navbar";
import bg6 from '../Images/bg6.jpg';
import { GiConfirmed } from "react-icons/gi";
import { FcProcess } from "react-icons/fc";
import { GiCargoShip } from "react-icons/gi";
import { BiSolidFactory } from "react-icons/bi";
import { PiShippingContainerFill } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { FcShipped } from "react-icons/fc";
import { MdSmsFailed } from "react-icons/md";
import { IoReloadOutline } from "react-icons/io5";
import { MdFileDownloadDone } from "react-icons/md";
import axios from 'axios';
import { useState } from 'react';

const BannerHeader = () => {

    const [trackingId, setTrackingId] = useState('');
    const [trackingData, setTrackingData] = useState(null);
    
    const handleTrackParcel = async (e) => {
        e.preventDefault();
        const id = e.target.elements.trackid.value;
        const trackId = parseInt(id);
        console.log("Tracking ID:", trackId);
    
        try {
            const response = await axios.get(`https://swiftship-server-kohl.vercel.app/track/${trackId}`);
            setTrackingData(response.data[0]);
            document.getElementById('my_modal_3').showModal();
        } catch (error) {
            console.error('Error fetching tracking data:', error);
        }
    };
    

    return (
        <div className="relative w-full h-svh shadow-2xl" 
            style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg6})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>
            <Navbar></Navbar>
            {/* form */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2">
                <form onSubmit={handleTrackParcel} className="flex -z-0 flex-col md:flex-row gap-3 md:gap-0 justify-center items-center glass p-14 rounded-md">
                    <input 
                        type="number" 
                        name="trackid"
                        placeholder="Tracking ID"
                        className="py-4 rounded-l-md w-full md:w-4/5 pl-10 text-xl"  />
                    <button 
                        type="submit"
                        value="submit"
                        name="submit"
                        className="bg-[#1E90FF] w-full md:w-1/5 py-4 text-xl text-white font-semibold rounded-r-md" 
                    >
                        Track Parcel
                    </button>
                </form>
            </div>
            {/* modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="glass p-8 rounded-md text-white mx-5 md:mx-28">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-2xl">#Tracking Order {trackingData?.orderId}</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    { trackingData ? <>
                    <ul className="steps steps-vertical lg:steps-horizontal py-16">
                        <li className={`step ${trackingData.orderPlaced === "true" ? 'step-primary' : ''}`}>
                            Order Placed <GiConfirmed className="text-6xl mt-7 hidden md:inline" />
                        </li>
                        <li className={`step ${trackingData.packageProcessingStarted === "true" ? 'step-primary' : ''}`}>
                            Package Processing Started <IoReloadOutline className="text-6xl mt-7 text-white hidden md:inline" />
                        </li>
                        <li className={`step ${trackingData.redayToShip === "true" ? 'step-primary' : ''}`}>
                            Ready To Ship <GiCargoShip className="text-6xl mt-7 hidden md:inline" />
                        </li>
                        <li className={`step ${trackingData.reachedLogistic === "true" ? 'step-primary' : ''}`}>
                            Reached Logistic <BiSolidFactory className="text-6xl mt-7 hidden md:inline" />
                        </li>
                        <li className={`step ${trackingData.shipped === "true" ? 'step-primary' : ''}`}>
                            Shipped <PiShippingContainerFill className="text-6xl mt-7 hidden md:inline" />
                        </li>
                        <li className={`step ${trackingData.outForDelivery === "true" ? 'step-primary' : ''}`}>
                            Out For Delivery <TbTruckDelivery className="text-6xl mt-7 hidden md:inline" />
                        </li>
                        <li className={`step ${trackingData.delivered === "true" ? 'step-primary' : ''}`}>
                            Delivered <MdFileDownloadDone className="text-6xl mt-7 hidden md:inline" />
                        </li>
                        <li className={`step ${trackingData.deliveryFailed === "true" ? 'step-primary' : ''}`}>
                            Delivery Failed <MdSmsFailed className="text-6xl mt-7 hidden md:inline" />
                        </li>
                    </ul>
                    </>
                    :
                        <div>
                            <h1>No data found</h1>
                        </div>
                    }
                </div>
            </dialog>
        </div>
    );
};

export default BannerHeader;
