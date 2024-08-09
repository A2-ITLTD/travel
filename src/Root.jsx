import { Outlet } from "react-router-dom";
import BannerHeader from "./Compononets/BannerHeader";
import Footer from "./Compononets/Footer";
const Root = () => {
    return (
        <div className="w-full">
            <div>
                <BannerHeader></BannerHeader>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;