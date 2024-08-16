import Navbar from "./Navbar";
import bg7 from '../Images/bg7.jpg';
import bg8 from '../Images/bg8.jpg';
import bg9 from '../Images/bg9.jpg';
import bg10 from '../Images/bg10.jpg';
import { BsBoxSeam } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbCurrentLocation } from "react-icons/tb";
const ShippingTools = () => {
    return (
        <div>
            <div className="relative w-full h-svh shadow-2xl" 
            style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg7})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>
            <Navbar></Navbar>
            <div className="absolute top-1/2 left-5 md:left-20 p-5">
                <div>
                    <h1 className="text-2xl md:text-6xl font-bold text-white text-ceter pb-10">Discover our shipping tools</h1>
                    <p className="text-2xl font-normal text-white text-justify text-wrap"> Solutions built to support your business.</p>
                </div>
            </div>
            </div>
            {/* actual content */}
            <div className="my-5 md:my-20 lg:my-28 px-10 md:px-10 lg:px-72 flex flex-col gap-8">
                <h1 className="text-lg md:text-4xl font-bold text-[#045364] text-ceter pb-5">Easy, speedy online shipping tools</h1>
                <div className="flex flex-col md:flex-row items-center top gap-10">
                    <div className="w-full md:w-1/2 h-ull">
                        <div className='w-full h-ull rounded-md'>
                            <img src={bg8} className='w-full h-full object-cover object-left rounded-md' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-5 p-5">
                        <h1 className="text-lg md:text-4xl font-bold text-[#045364] text-ceter">New Swift Ship Manager™</h1>
                        <p className="text-base font-normal text-gray-700 text-justify">From creating super-quick shipments to printing labels with ease – everyone is turning to this latest tool to help them ship</p>
                        <button className="text-2xl px-8 py-3 w-fit rounded bg-[#045364] text-white">Ship Online</button>
                    </div>
                </div>
                {/* cards */}
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 justify-evenly items-center'>  
                        <div className='w-full md:w-80 h-96 bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] px-5'>
                            <BsBoxSeam className='text-6xl'/>
                            Calculate rates
                            <p className="text-base font-normal text-center">Get a quick quote or log into your account for personalized or discounted rates.</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Shipping Rates</button>
                        </div>

                        <div className='w-full md:w-80 h-96 bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] px-5'>
                            <CiDeliveryTruck  className='text-6xl'/>
                            Schedule pickups
                            <p className="text-base font-normal  text-center">Need to reschedule a pickup? It's easy – you can update or cancel a pickup even after booking a shipment.</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Pickup Planner</button>
                        </div>

                        <div className='w-full md:w-80 h-96 bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] px-5'>
                            <TbCurrentLocation   className='text-6xl'/>
                            Track shipments
                            <p className="text-base font-normal text-center">Keep an eye on all your shipments with custom overviews and detailed tracking updates</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Tracking</button>
                        </div>
                </div>

                <h1 className="text-4xl font-bold text-[#045364] text-ceter pb-2 mt-10">Integrate our services on your platform</h1>
                <p>Build Swift services into your website or app to give your customers a smoother shipping experience.</p>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10'>
                    {/* card 1 */}
                    <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
                        <figure>
                            <img
                            src={bg9}
                            alt="Shoes" />
                        </figure>
                            <div className="card-body">
                                <h2 className="card-title">Direct integration with Swiftship</h2>
                                <p>Application Programming Interfaces (APIs)
                                Want to integrate FedEx shipping directly into your web shop or application? Our APIs allow developers to weave customized features straight into the fabric of your platform.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[#045364] text-white">How it works ?</button>
                                </div>
                            </div>
                    </div>
                    {/* card 2 */}
                    <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
                        <figure>
                            <img
                            src={bg10}
                            alt="Shoes" />
                        </figure>
                            <div className="card-body">
                                <h2 className="card-title">Ready to save time on e-commerce shipping?</h2>
                                <p>Connect your store and manage your e-commerce shipments in Swift Ship Manager™. Your order, delivery and tracking details automatically get synced with your e-commerce platform, giving you more time and room to scale up.tomized features straight into the fabric of your platform.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-[#045364] text-white">Connect with store</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ShippingTools;