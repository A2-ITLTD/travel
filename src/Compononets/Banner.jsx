import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import im1 from '../Images/destination/im1.jpg';
import im2 from '../Images/destination/im2.jpg';
import im3 from '../Images/destination/im3.jpg';
import im4 from '../Images/destination/im4.jpg';
import im5 from '../Images/destination/im5.png';
import im6 from '../Images/destination/im6.jpg';
import im7 from '../Images/destination/im7.jpg';
import im8 from '../Images/destination/im8.jpeg';
import bg3 from '../Images/bg3.jpg';
import bg4 from '../Images/bg4.jpg';
import bg5 from '../Images/bg5.png';
import { BsBoxSeam } from "react-icons/bs";
import { TbCurrentLocation } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { PiTruck } from "react-icons/pi";
import { FaBullseye } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Banner = () => {

    const imageDetails = [
        { src: im1, name: 'CoxS Bazar' },
        { src: im2, name: 'Paris' },
        { src: im3, name: 'London' },
        { src: im4, name: 'Switzerland' },
    ];
    const imageDetails2 = [
        { src: im5, name: 'Iceland' },
        { src: im6, name: 'Aurora Borealis' },
        { src: im7, name: 'Nigra Falls' },
        { src: im8, name: 'Singapore' }
    ];

    return (
        <div>
            {/* card */}
            <section className='mt-28 mx-5 md:mx-28'>
                <div className='w-full flex flex-wrap justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-20 justify-center items-center'>
                        <div className='w-64 h-64 bg-[#1E90FF] rounded-md flex flex-col gap-8 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#1E90FF] hover:border-4 hover:border-[#1E90FF]'>
                            <BsBoxSeam className='text-6xl'/>
                            Get Transit Time
                        </div>
                        <div className='w-64 h-64  bg-[#1E90FF] rounded-md flex flex-col gap-8 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#1E90FF] hover:border-4 hover:border-[#1E90FF]'>
                            <TbCurrentLocation className='text-6xl' />
                            Track Parcel
                        </div>
                        <div className='w-64 h-64 bg-[#1E90FF] rounded-md flex flex-col gap-8 justify-center items-center text-2xl text-white font-semibold hover:bg-white hover:text-[#1E90FF] hover:border-4 hover:border-[#1E90FF]'>
                            <PiTruck className='text-6xl' />
                            Ship Oversea
                        </div>
                    </div>
                </div>
            </section>
            {/* popular destinations */}
            <section className='mt-28'>
           <div className="px-5 md:px-10 lg:px-28 mb-12 items-left">
                    <div className="text-3xl lg:text-4xl font-bold text-[#1E90FF] w-full lg:w-2/3 text-left" >Location We Deliver To</div>
            </div>
           <div className='px-5 md:px-28'>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={3000}>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 items-center'>
                {imageDetails.map((image, index) => (
                    <div key={index} className='relative w-full md:w-80 h-full rounded-md overflow-hidden hover:scale-110 transform transition-transform duration-300'>
                        <img src={image.src} className='w-full h-full object-cover object-center rounded-md'/>
                        <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl flex items-end justify-center'>
                            <span className='text-white font-bold mb-2'>{image.name}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 items-center'>
                {imageDetails2.map((image, index) => (
                    <div key={index} className='relative w-full md:w-80 h-full rounded-md overflow-hidden hover:scale-110 transform transition-transform duration-300'>
                        <img src={image.src} className='w-full h-full object-cover object-center rounded-md'/>
                        <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl flex items-end justify-center'>
                            <span className='text-white font-bold mb-2'>{image.name}</span>
                        </div>
                    </div>
                ))}
            </div>
                </Carousel>
           </div>
            </section>
            {/* port and ship agents */}
            <section className='mt-28  px-5 md:px-28'>
                <div className='flex flex-col md:flex-row justify-center items-top gap-14 p-10'>
                    <div className='w-full md:w-1/2'>
                        <div className='flex flex-col gap-20 text-left'>
                            <h1 className='text-5xl font-bold text-[#1E90FF] text-wrap'>Port and shipping agents you can rely on.</h1>
                            <p className='text-lg font-normal text-gray-700 text-wrap'>As port agents, we provide comprehensive services for managing operations across all types of cargo.</p>
                        </div>
                        <div className='flex flex-col gap-5 text-left pl-10 pt-10'>
                            <h1 className='text-4xl font-bold text-[#1E90FF] text-wrap flex gap-4 items-center'>
                                <FaBullseye />
                                How we works
                            </h1>
                            <p className='text-lg font-normal text-gray-700 text-justify text-wrap pl-12'>
                            We provide our services as either charterer's or owner's protecting agents, depending on the appointing party. In both roles, we diligently oversee all port operations and safeguard our clients' interests. Our primary objective is to optimize the Port Disbursement Account (PDA) and secure cost savings for our clients at all Italian ports. By utilizing our expertise and resources, we assist our clients in achieving their goals while reducing costs and maximizing profits.
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='w-full h-full rounded-md'>
                            <img src={bg3} className='w-full h-full object-cover object-left rounded-md' />
                        </div>
                    </div>
                </div>
            </section>
            {/* To achieve our objective, */}
            <section className='mt-28 px-5 md:px-28'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center'>
                <div>
                    <div className='w-full h-ull rounded-md'>
                        <img src={bg4} className='w-full h-full object-cover object-left rounded-md' />
                    </div>
                </div>
                <div className='flex flex-col gap-6 justify-start items-center'>
                    <h1 className='text-4xl font-bold text-[#1E90FF] text-wrap pb-5'>To accomplish our goal, we offer:</h1>
                    <div className="collapse collapse-arrow bg-base-200 text-gray-700">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Effective oversight</div>
                    <div className="collapse-content">
                        <p>We manage all operations on behalf of our customers, providing detailed reports on relevant information, including port traffic, operational activities, and weather conditions.</p>
                    </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200 text-gray-700">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Oversee Loading Operations
                    </div>
                    <div className="collapse-content">
                        <p>We meticulously verify the status of the cargo and review all related documents to ensure accuracy and compliance. Our attention to detail guarantees that all aspects of the loading process are thoroughly inspected, safeguarding against any discrepancies or issues.</p>
                    </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200 text-gray-700">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Manage Cargo Loading
                    </div>
                    <div className="collapse-content">
                        <p>We diligently oversee the entire cargo loading process, conducting thorough inspections of both the cargo and accompanying documentation. Our careful attention ensures that everything is in order, preventing potential delays or complications and ensuring a smooth operation.</p>
                    </div>
                    </div>
                </div>
                <div className='bg-[#1E90FF] rounded-md p-12 flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold text-white text-wrap pb-5'>Our primary project</h1>
                    <p className='text-base font-normal text-white text-justify text-wrap'>
                    Streamline communication to reduce delays  
                    We actively minimize time wastage by ensuring a swift and efficient exchange of information among the charterer or owner, local authorities, and all other involved parties. By facilitating clear and timely communication, we help prevent misunderstandings, accelerate decision-making, and maintain the smooth flow of operations. This proactive approach significantly reduces potential delays and optimizes the overall efficiency of the process.
                    </p>
                </div>
            </div>
            </section>
            {/* statics */}
            <section className='mt-28'>
                <div className='bg-[#1E90FF] p-10'>
                    <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-evenly items-center text-3xl text-white'>
                        <div className='flex gap-5 flex-col justify-center items-center'>Shipments <span>150</span></div>
                        <hr className="w-[2px] h-28 bg-white" />
                        <div className='flex  gap-5 flex-col justify-center items-center'>Clients Served <span>19</span></div>
                        <hr className="w-[2px] h-28 bg-white" />
                        <div className='flex gap-5 flex-col justify-center items-center'>Countries <span>121</span></div>
                        <hr className="w-[2px] h-28 bg-white" />
                        <div className='flex gap-5 flex-col justify-center items-center'>Employee <span>6</span></div>
                    </div>
                </div>
            </section>
            {/* map */}
            <section className=''>
                <div className="relative w-full h-[600px] shadow-2xl"
                 style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg5})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
                }}>
                    <div className='absolute glass rounded-md p-16 left-10 md:left-16 bottom-24 flex flex-col gap-3'>
                        <h1 className='text-4xl font-semibold text-[#1E90FF] pb-5'>Dhaka, Bangladesh</h1>
                        <p className='text-lg font-semibold text-[#1E90FF] flex gap-2 items-center'><MdOutlineSupportAgent /> support care 24/7</p>
                        <p className='text-lg font-semibold text-[#1E90FF] flex gap-2 items-center '><FaPhoneSquareAlt />Phone: +39 080 2450044</p>
                        <p className='text-lg font-semibold text-[#1E90FF] flex gap-2 items-center'><MdOutlineEmail /> Get in touch with us:</p>
                        <p className='text-lg font-semibold text-[#1E90FF]'>info@seawayagency.com</p>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Banner;