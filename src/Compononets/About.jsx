import Navbar from "./Navbar";
import bg7 from '../Images/bg7.jpg';
import bg14 from '../Images/bg14.png';
import bg15 from '../Images/bg15.jpg';
import { BsInfoSquareFill } from "react-icons/bs";
const About = () => {
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
                    <h1 className="text-6xl font-bold text-white text-ceter pb-10">About Swift Ship</h1>
                    {/* <p className="text-2xl font-normal text-white text-justify text-wrap"> Solutions built to support your business.</p> */}
                </div>
            </div>
            </div>
            {/* actual content */}
            <div className="my-28 px-10 md:px-72 flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-[#045364] text-ceter pb-5">Our solutions connect people and possibilities.</h1>
                <p className="text-base font-normal text-gray-700 text-justify">Connecting people with goods, services and ideas creates opportunities and improves lives. At FedEx, we believe that a connected world is a better world, and that belief guides everything we do.</p>
                <div className="flex flex-col md:flex-row items-center top gap-10">
                    <div className="w-full md:w-1/2 h-ull">
                        <div className='w-full h-ull rounded-md'>
                            <img src={bg14} className='w-full h-full object-cover object-left rounded-md' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-5 p-5">
                        <h1 className="text-4xl font-bold text-[#045364] text-ceter">Swift Ship history in MEISA</h1>
                        <p className="text-base font-normal text-gray-700 text-justify">Find out more about the Swift ship Middle East, Indian Subcontinent & Africa Division.</p>
                        <button className="text-2xl px-8 py-3 w-fit rounded bg-[#045364] text-white">Learn More</button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center top gap-10">
                    <div className="w-full md:w-1/2 h-ull">
                        <div className='w-full h-ull rounded-md'>
                            <img src={bg15} className='w-full h-full object-cover object-left rounded-md' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-5 p-5">
                        <h1 className="text-4xl font-bold text-[#045364] text-ceter">Swift Ship Facts</h1>
                        <p className="text-base font-normal text-gray-700 text-justify">Everything you always wanted to know about Swift Ship from its aircraft and vehicle fleet to package volume and number of employees.</p>
                        <button className="text-2xl px-8 py-3 w-fit rounded bg-[#045364] text-white">Learn More</button>
                    </div>
                </div>
                {/* cards */}
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0  justify-evenly items-center'>  
                        <div className='w-80 h-96 bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] px-5'>
                            <BsInfoSquareFill className='text-4xl'/>
                            Global Newsroom
                            <p className="text-base font-normal text-center">The latest local market and corporate press releases are available for viewing.</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</button>
                        </div>

                        <div className='w-80 h-96 bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] px-5'>
                            <BsInfoSquareFill  className='text-4xl'/>
                            <h1 className="text-xl text-center">Environmental, Social & Governance Report</h1>
                            <p className="text-base font-normal  text-center">The report discusses our Environmental, Social & Governance strategies, goals, and programs for each of our operating companies</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</button>
                        </div>

                        <div className='w-80 h-96 bg-[#045364] rounded-md flex flex-col gap-7 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#045364] hover:border-4 hover:border-[#045364] px-5'>
                            <BsInfoSquareFill   className='text-4xl'/>
                            Sustainability
                            <p className="text-base font-normal text-center">We are committed to providing global connections while minimizing our environmental impact.</p>
                            <button className="px-8 py-2 border-2 border-white text-base font-normal">Learn More</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default About;