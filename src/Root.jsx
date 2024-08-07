import { Outlet } from "react-router-dom";
import BannerHeader from "./Compononets/BannerHeader";
// import Navbar from "./Compononets/Navbar";
const Root = () => {
    return (
        <div className="w-full">
            <div>
                <BannerHeader></BannerHeader>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;