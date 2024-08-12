import Navbar from "./Navbar";
import bg11 from '../Images/bg11.jpg';
import bg12 from '../Images/bg12.jpg';
import bg13 from '../Images/bg13.jpg';
import { BsDropbox } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
const Supplies= () => {
    return (
        <div>
            <div className="relative w-full h-svh shadow-2xl" 
            style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg11})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>
            <Navbar></Navbar>
            <div className="absolute top-1/2 left-5 md:left-20 p-5">
                <div>
                    <h1 className="text-6xl font-bold text-white text-ceter pb-10">Packaging and Shipping Supplies</h1>
                    <p className="text-2xl font-normal text-white text-justify text-wrap">Discover everything you need to know about packaging and shipping supplies. <br /> Benefit from our packaging tips to pack shipments yourself.</p>
                </div>
            </div>
            </div>
            <div className="my-28 px-10 md:px-72 mx-auto">
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 justify-between gap-14 items-center'>  
                    {/* card 1 */}
                    <div className='w-full  h-96 rounded-md flex flex-col gap-7 justify-center items-center text-2xl  font-semibold hover:bg-white text-[#045364] border-4 border-[#045364]'>
                        <BsDropbox className='text-[100px]'/>
                        Discover
                        <p className="text-base font-normal text-center">Find the perfect package
                        for the job.</p>
                        <button className="px-8 py-2 text-white border-2 border-white text-base font-normal bg-[#045364]">Standard Packaging</button>
                    </div>
                    {/* card 2 */}
                    <div className='w-full h-96  rounded-md flex flex-col gap-7 justify-center items-center text-2xl  font-semibold hover:bg-white text-[#045364] border-4 border-[#045364]'>
                        <IoCartOutline className='text-[100px]'/>
                        Order
                        <p className="text-base font-normal text-center">Choose from a range of Swift ship supplies to fit your business needs.</p>
                        <button className="px-8 py-2 text-white bg-[#045364] border-2 border-white text-base font-normal">Shipping Rates</button>
                    </div>
                </div>
                <div className="mt-20 flex items-center top gap-10">
                    <div className="w-full md:w-1/2 h-ull">
                        <div className='w-full h-ull rounded-md'>
                            <img src={bg12} className='w-full h-full object-cover object-left rounded-md' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-5 p-5">
                        <h1 className="text-4xl font-bold text-[#045364] text-ceter">Shipping Dry Ice</h1>
                        <p className="text-base font-normal text-gray-700 text-justify">View Swift ship packaging guidelines and best practices for shipping dry ice</p>
                        <button className="text-2xl px-8 py-3 w-fit rounded bg-[#045364] text-white">Exploring</button>
                    </div>
                </div>
                <div className="mt-20 flex flex-row-reverse items-center top gap-10">
                    <div className="w-full md:w-1/2 h-ull">
                        <div className='w-full h-ull rounded-md'>
                            <img src={bg13} className='w-full h-full object-cover object-left rounded-md' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-5 p-5">
                        <h1 className="text-4xl font-bold text-[#045364] text-ceter">Pack General Products Like a Pro</h1>
                        <p className="text-base font-normal text-gray-700 text-justify">Proper packing ensures that your shipments can arrive safely in the condition it was sent. We share with you some packing tips so you too can pack like a pro.</p>
                        <button className="text-2xl px-8 py-3 w-fit rounded bg-[#045364] text-white">Packaging Guide</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Supplies;