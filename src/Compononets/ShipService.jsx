import { Link } from "react-router-dom";
import bg7 from '../Images/bg7.jpg';
import Navbar from "./Navbar";
import { FaArrowPointer } from "react-icons/fa6";
import { BsInfoSquareFill } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaBoxOpen } from "react-icons/fa";
import { BsAirplaneEngines } from "react-icons/bs";
import { LuLightbulb } from "react-icons/lu";
const ShipService = () => {
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
                    <h1 className="text-6xl font-bold text-white text-ceter pb-10">Shipping Services</h1>
                    <p className="text-2xl font-normal text-white text-justify text-wrap pb-10">Need to ship a package? Whether it's inbound, <br /> outbound, domestic or international, Swift Ship has a solution for you.</p>
                    <Link to="/shipquick" className="text-3xl w-fit font-bold px-8 py-3  rounded glass text-white flex items-center gap-3">Ship Now <FaArrowPointer /></Link>
                </div>
            </div>
            </div>
            <div className="mx-5 md:mx-28 my-16">
            <Tabs>
                <TabList className="flex flex-col md:flex-row gap-5">
                <Tab selectedClassName="bg-[#045364] text-white">International First</Tab>
                <Tab selectedClassName="bg-[#045364] text-white">International Priority Express</Tab>
                <Tab selectedClassName="bg-[#045364] text-white">International Priority</Tab>
                <Tab selectedClassName="bg-[#045364] text-white">International Economy</Tab>
                <Tab selectedClassName="bg-[#045364] text-white">10kg and 25kg Boxes</Tab>
                <Tab selectedClassName="bg-[#045364] text-white">Special Handling Options</Tab>
                </TabList>

                {/* 1 */}
                <TabPanel className="">
                    <div className="py-5 flex flex-col gap-5">
                        <h1 className="text-4xl font-bold text-[#045364] text-ceter pb-5">Global Trade Manager and Document Preparation Center</h1>
                        <p className="text-base font-normal text-gray-700 text-justify">Early morning delivery to key destinations in the USA and Canada.</p>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th>Your Destination</th>
                                    <th>Your Transit Time</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>USA</th>
                                    <td>2-3 business days by 08:30am to key destinations</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>Canada</th>
                                    <td>2-3 business days by 08:30am to key destinations</td>      
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <h1 className="text-4xl font-bold text-[#045364] text-ceter pb-5">Package size</h1>
                        <ul className="list-disc list-inside">
                            <li>Ship any package up to 68 kg (150lbs.)</li>
                            <li>Unlimited weight on multiple-piece shipments to the same destination.</li>
                            <li>Dimensions per package can be up to 274 cm (108") in length, or 330 cm (130") in length and girth combined.</li>
                            <li>If you use your own packaging, dimensional weight may apply.</li>
                        </ul>
                        <h1 className="text-4xl font-bold text-[#045364] text-ceter pb-5">Service features</h1>
                        <ul className="list-disc list-inside">
                            <li>Free packaging</li>
                            <li>Shipment tracking</li>
                            <li>Custom-cleared service</li>
                        </ul>
                    </div>
                </TabPanel>

                {/* 2 */}
                <TabPanel>
                    <div className="py-5 flex flex-col gap-5">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Description</th>
                                    <th>Times Available</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>International Priority Express</th>
                                    <td>Choose this priority express delivery service to get your shipment by 10:30 a.m. or noon with door-to-door to select markets in Asia, United States, Canada and Europe.</td>
                                    <td>Estimate Transit Time</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>

                {/* 3 */}
                <TabPanel>
                    <div  className="py-5 flex flex-col gap-5">
                        <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>Service</th>
                                <th>Description</th>
                                <th>Times Available</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>International Priority</th>
                                <td>Choose this end of the day delivery service to have your documents and boxes delivered to over 220 countries/territories worldwide, designed for shipments of any weight where individual pieces may weigh as much as 68kg.</td>
                                <td>Estimate Transit Time</td>
                            </tr>
                            </tbody>
                        </table>
                         </div>
                    </div>
                </TabPanel>

                {/* 4 */}
                <TabPanel>
                    <div className="py-5 flex flex-col gap-5">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Description</th>
                                    <th>Times Available</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>International Economy</th>
                                    <td>A cost-saving solution for your less time-sensitive deliveries. A reliable, door-to-door, Customs-cleared, service between Europe, the Middle East and the US.</td>
                                    <td>Estimate Transit Time</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>

                {/* 5 */}
                <TabPanel>
                    <div className="py-5 flex flex-col gap-5">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Description</th>
                                    <th>Times Available</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>10kg and 25kg Boxes</th>
                                    <td>The Swiftship 10kg and 25kg Boxes via FedEx International Priority Service</td>
                                    <td>Estimate Transit Time</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>

                 {/* 6 */}
                 <TabPanel>
                    <div className="py-5 flex flex-col gap-5">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Description</th>
                                    <th>Times Available</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>Special Handling Options</th>
                                    <td>Swiftship adds convenience to your shipping with a range of options you can request in addition to your basic Swiftship Express service. Use these options for special shipping circumstances, or to specify certain handling or billing for your shipments.</td>
                                    <td>Estimate Transit Time</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
            </div>
            <div className="mx-5 md:mx-28 my-16">
                <h1 className="text-4xl font-bold text-[#045364] text-ceter pb-5">More Shipping Services</h1>
                {/* cards */}
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3  justify-evenly items-center'>  
                        <div className='w-80 h-full bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] p-5'>
                            <FaBoxOpen className='text-6xl'/>
                            <h1 className="text-xl text-center">Special Shipping Requirements</h1>
                            <ul className="list-inside list-disc text-base">
                                <li>Dangerous Goods </li>
                                <li>Lithium Batteries </li>
                                <li>Ancillary Clearance Services </li>
                            </ul>
                            <Link to="/shipservice" className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</Link>
                        </div>

                        <div className='w-80 h-full bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] p-5'>
                            <BsAirplaneEngines className='text-6xl'/>
                            <h1 className="text-xl text-center">Value added services</h1>
                            <ul className="list-inside list-disc text-base">
                                <li>Global returns  </li>
                                <li>10kg and 25kg box  </li>     
                            </ul>
                            <Link to="/shipservice" className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</Link>
                        </div>

                        <div className='w-80 h-full bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] p-5'>
                            <LuLightbulb className='text-6xl'/>
                            <h1 className="text-xl text-center">Industry Specific Solutions</h1>
                            <ul className="list-inside list-disc text-base">
                                <li>Swift Ship supply chain services  </li>
                                <li>Swift Ship International Priority Direct Distribution  </li>
                            </ul>
                            <Link to="/shipservice" className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</Link>
                        </div>
                </div>
            </div>
            
        </div>
    );
};

export default ShipService;