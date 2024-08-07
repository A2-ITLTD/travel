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
            {/* popular destinations */}
           <section className='mt-16'>
           <div className="px-5 md:px-10 lg:px-20 mb-6 items-left">
                    <div className="md:text-3xl lg:text-3xl font-extrabold text-[#1E90FF] w-full lg:w-2/3 text-left" >Popular Destinations</div>
            </div>
           <div className='px-20'>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={3000}>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 items-center'>
                {imageDetails.map((image, index) => (
                    <div key={index} className='relative w-80 h-full rounded-xl overflow-hidden hover:scale-110 transform transition-transform duration-300'>
                        <img src={image.src} className='w-full h-full object-cover object-center rounded-xl'/>
                        <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl flex items-end justify-center'>
                            <span className='text-white font-bold mb-2'>{image.name}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 items-center'>
                {imageDetails2.map((image, index) => (
                    <div key={index} className='relative w-80 h-full rounded-xl overflow-hidden hover:scale-110 transform transition-transform duration-300'>
                        <img src={image.src} className='w-full h-full object-cover object-center rounded-xl'/>
                        <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl flex items-end justify-center'>
                            <span className='text-white font-bold mb-2'>{image.name}</span>
                        </div>
                    </div>
                ))}
            </div>
                </Carousel>
           </div>
           </section>
            
        </div>
    );
};

export default Banner;