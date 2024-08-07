import Navbar from "./Navbar";
import bg1 from '../Images/bg2.jpg';
const BannerHeader = () => {
    return (
        <div className="relative w-full h-svh shadow-2xl" 
        style={{ 
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg1})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
            }}>
           <Navbar></Navbar>
            
        </div>
    );
};

export default BannerHeader;