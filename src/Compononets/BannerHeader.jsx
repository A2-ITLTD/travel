import Navbar from "./Navbar";
import bg6 from '../Images/bg6.jpg';
const BannerHeader = () => {
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
                {/* <div>
                    <h1 className="text-6xl font-bold text-white text-center pb-5">Track Your Parcel</h1>
                </div> */}
                <form className="flex flex-col md:flex-row gap-3 md:gap-0 justify-center items-center glass p-14 rounded-md">
                    <input 
                        type="text" 
                        placeholder="Tracking ID"
                        className="py-4 rounded-l-md w-full md:w-4/5 pl-10 text-xl"  />
                    <button className="bg-[#1E90FF] w-full md:w-1/5 py-4  text-xl text-white font-semibold rounded-r-md">Track Parcel</button>
                </form>
            </div>
        </div>

    );
};

export default BannerHeader;