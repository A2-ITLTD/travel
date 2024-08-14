import bg7 from '../Images/bg7.jpg';
import bg14 from '../Images/bg14.png';
import bg15 from '../Images/bg15.jpg';
import { BsInfoSquareFill } from "react-icons/bs";
import Navbar from './Navbar';
import { TbMessages } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
const Support = () => {
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
                    <h1 className="text-6xl font-bold text-white text-ceter pb-10">Customs Support</h1>
                    <p className="text-2xl font-normal text-white text-justify text-wrap">Every commodity is different and so is every market. <br />Learn how Swift Ship can help move your shipments <br /> across borders and into your customer’s hands.</p>
                </div>
            </div>
            </div>
            {/* actual content */}
            <div className="my-28 px-10 md:px-72 flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-[#045364] text-ceter pb-5">Global Trade Manager and Document Preparation Center</h1>
                <p className="text-base font-normal text-gray-700 text-justify">Swift Ship Global Trade Manager and the Document Preparation Center provide you with a one-stop resource for international shipping information.</p>
                {/* cards */}
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3  justify-evenly items-center'>  
                        <div className='w-80 h-full bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] p-5'>
                            <BsInfoSquareFill className='text-4xl'/>
                            Duties & Taxes
                            <p className="text-base font-normal text-center">Calculate the estimated duties and taxes that will be applied to your international shipment.</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</button>
                        </div>

                        <div className='w-80 h-full bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] p-5'>
                            <BsInfoSquareFill  className='text-4xl'/>
                            <h1 className="text-xl text-center">Document Preparation</h1>
                            <p className="text-base font-normal  text-center">Get assistance in locating the required documents for your international shipment.
                            You can save your frequently used documents, making them readily accessible whenever you need them.</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</button>
                        </div>

                        <div className='w-80 h-full bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] p-5'>
                            <BsInfoSquareFill   className='text-4xl'/>
                            Destination Information
                            <p className="text-base font-normal text-center">Access a snapshot of country/territory profiles, shipping advisories, and harmonized code searches. Obtain critical regulatory information specific to your shipment.Locate the World Customs Organization (WCO) tariff classification for your product.</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</button>
                        </div>
                </div>
                <h1 className="text-4xl font-bold text-[#045364] text-ceter pt-10">Additional Resources</h1>
                <p className="text-base font-normal text-gray-700 text-justify">Need to ship through customs? Check out all of the resources available to you with just a click of a button.</p>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Estimate Duties and Taxes</div>
                    <div className="collapse-content">
                        <p>Estimate the duties and taxes that will be levied against your international shipment.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Customs clearance for those special shipments</div>
                    <div className="collapse-content">
                        <p>We offers standard customs clearance, however, we also offer a comprehensive range of value added solutions when your shipment has special clearance need</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Country Profiles</div>
                    <div className="collapse-content">
                        <p>Get a snapshot of country information including demographics, business information and statistics.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Document Preparation Centre</div>
                    <div className="collapse-content">
                        <p>Work the way you want with our new full featured document preparation center. You can save the documents you use most so you have them available anytime. You can even take a break then pick up where you left off.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Harmonized Code Search</div>
                    <div className="collapse-content">
                        <p>Find the World Customs Organization (WCO) tariff classification for your product.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">De minimis Check</div>
                    <div className="collapse-content">
                        <p>Check the de minimis by markets which is the valuation ceiling of no duty or tax is charged and import clearance procedures, including data requirements, are minimal. </p>
                    </div>
                </div>
                <h1 className="text-4xl font-bold text-[#045364] text-ceter pt-10">Let Us Help You</h1>
                <p className="text-base font-normal text-gray-700 text-justify">Swift Ship is represented internationally by a nominated Service Contractor. For more information about the Swift ship services available please contact to below contacts:</p>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2  justify-around items-center'>  
                        <div className='w-80 h-full bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] p-5'>
                            <RiCustomerService2Line className='text-4xl'/>
                            Call Us
                            <p className="text-base font-normal text-center">Tel: +8801846937397</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</button>
                        </div>

                        <div className='w-80 h-full bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] p-5'>
                            <TbMessages className='text-4xl'/>
                            <h1 className="text-xl text-center">Write to Us</h1>
                            <p className="text-base font-normal  text-center">Reach the right person the first time.
                            Our contact forms will help you.</p>
                            <button to="/Contact" className="px-8 py-2 border-2 border-white text-base font-normal">Contact Here</button>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Support;