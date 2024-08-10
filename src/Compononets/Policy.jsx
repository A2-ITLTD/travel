import Navbar from "./Navbar";
import bg7 from '../Images/bg7.jpg';
const Policy = () => {
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
                    <h1 className="text-6xl font-bold text-white text-ceter pb-10">Privacy and Policy</h1>
                    <p className="text-base font-normal text-white text-justify text-wrap">SwiftShip is committed to delivering a safe and secure online experience <br className="hidden md:inline" /> for our customers. The Customer Protection Center offers information on <br className="hidden md:inline"  /> how SwiftShip helps safeguard you and how you can take steps to protect <br className="hidden md:inline"  /> yourself.</p>
                </div>
            </div>
            </div>
            {/* details of policy */}
            <div className="my-28 px-10 md:px-28 flex flex-col gap-8">
                <h1 className="text-6xl font-bold text-[#045364] text-ceter pb-5">Privacy Policy for Swift Ship</h1>
                <p className="text-base font-normal text-gray-700 text-justify">SwiftShip Corporation recognizes the significance of protecting the privacy of swiftship.com users. The information collected is used to enhance and market the services we and our subsidiaries offer, to improve the content of the swiftship.com website, and to keep you informed with updates or other marketing purposes.</p>
                <p className="text-base font-normal text-gray-700 text-justify">Certain areas of swiftship.com, including but not limited to SwiftShip Manager®, SwiftShip Manager™ Lite, SwiftShip InSight®, SwiftShip® Billing Online, SwiftShip® Global Trade Manager, and My SwiftShip®, require registration or a password for access. Information obtained from registered users of these areas may also be used for SwiftShip marketing purposes, and cookies may be utilized in these and other areas, as described in this policy. Information obtained in these areas may also be used in accordance with agreements governing access to and use of specific areas, including, but not limited to, SwiftShip Manager at swiftship.com, etc. Additionally, visitors to swiftship.com may choose to register for a swiftship.com Login user ID and password to streamline access to certain interactive features on swiftship.com. Log file data and other information gathered from registered users are used to enhance the swiftship.com customer experience.</p>
                <p className="text-base font-normal text-gray-700 text-justify">Swiftship.com Login currently provides users with access to SwiftShip Manager at swiftship.com, SwiftShip Manager Lite, SwiftShip Global Trade Manager, and My SwiftShip. Other applications currently require separate registrations. In the future, SwiftShip may add additional features to those accessed through swiftship.com Login (in such cases, previously registered users will not need to re-register).</p>
                <p className="text-base font-normal text-gray-700 text-justify">Please also review the SwiftShip Service Guide for terms of carriage, limitations of liability, disclaimers of warranty, and general terms applicable to all delivery services and various information used and provided with SwiftShip services.</p>
                {/* 1 */}
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">1. What information does Swiftship capture about visitors to its web site?</div>
                <div className="collapse-content">
                    <p>The swiftship.com web server utilizes an extended log file format that records the date and time of visits, the referring address (the location from which a visitor arrives at swiftship.com), the type of Internet browser used, and the visitor's IP address (a unique number assigned to each computer connecting to the Internet for identification purposes). The log file does not capture the visitor's email address.</p>
                </div>                
                </div>
                {/* 2 */}
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">2. Does Swiftship ask for personal information?</div>
                <div className="collapse-content">
                    <p>Several sections of swiftship.com request personal information. These include Online Account Registration, features of Manage My Account, and registration pages for SwiftShip Manager at swiftship.com, SwiftShip Manager Lite, SwiftShip Global Trade Manager, SwiftShip InSight, and My SwiftShip. This list may be expanded without notice, and additional information may be required if it is. In these sections, your name, address, email address, billing information, and business profile may be requested. This information is gathered to help us enhance our services, provide you with access to valuable SwiftShip Internet-based tools and services, and to bill you for those services if you choose to use them.</p>
                </div>                
                </div>
                {/* 3 */}
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">3. How does Swiftship use the information?</div>
                <div className="collapse-content">
                    <p>The information gathered through this site helps us identify the types of website content our customers value most. We use this data to enhance our website and services, as well as to market them more effectively. Additionally, we use this information to send you email notifications about website updates and to contact you through other channels for marketing and other purposes. Our policy is not to give, sell, or otherwise share the information collected through this site with third parties outside of SwiftShip Corporation and its subsidiaries, unless required by law. However, in some instances, we may work with suppliers who assist us in collecting, using, or processing the information gathered through this site for our benefit. We require these suppliers to perform such activities in line with this policy and our standards.</p>
                </div>                
                </div>
                {/* 4 */}
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">4. Does Swiftship use cookies?</div>
                <div className="collapse-content">
                    <p>Cookies serve two primary purposes. First, they enable SwiftShip to personalize information for specific segments of its customer base. Second, in some cases, cookies allow SwiftShip to link individual customers with their information profiles. For instance, cookies allow swiftship.com Login to "remember" your user ID when you log in to SwiftShip Manager at swiftship.com on your computer.</p>
                </div>                
                </div>
                {/* 5 */}
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">5. Additional resources on information privacy</div>
                <div className="collapse-content">
                    <p>The Electronic Privacy Information Center (EPIC) directs public attention to emerging civil liberties issues related to the National Information Infrastructure. EPIC Alert, the bi-weekly online newsletter of the Electronic Privacy Information Center in Washington, DC, covers topics on privacy and civil liberties in the digital age.
                    SwiftShip reserves the right to modify the Privacy Policy at any time, with or without notice. Please check back regularly for any updates.
                    By using swiftship.com, you agree to this Privacy Policy.</p>
                </div>                
                </div>
            </div>
        </div>
    );
};

export default Policy;