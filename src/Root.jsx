import { Outlet } from "react-router-dom";
// import BannerHeader from "./Compononets/BannerHeader";
import Footer from "./Compononets/Footer";
import whatsapp from './Images/whatsapp.png';
const Root = () => {
    return (
        <div className="w-full">
            {/* <div>
                <BannerHeader></BannerHeader>
            </div> */}
            <Outlet></Outlet>
            <Footer></Footer>
            <div className="fixed bottom-6 right-6">
                <a href="https://wa.me/+8801846937397?text=Hello how can I help you?" target="_blank">
                    <img src={whatsapp} className="w-20" title="Chat with Us" />
                </a>
            </div>
        </div>
    );
};

export default Root;