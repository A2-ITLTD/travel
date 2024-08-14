import Navbar from "./Navbar";
import bg7 from '../Images/bg7.jpg';
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Contactus = () => {

    const [verified, setVerified] = useState(false);

    const handleOrder = e => {
        e.preventDefault();
        const username = e.target.elements.user_name.value;
        const number = e.target.elements.user_phone.value;
        const email = e.target.elements.user_email.value;
        const address = e.target.elements.address.value;
        const message = e.target.elements.message.value;
        
        // send message to whatsapp
        const whatsappNumber = "+8801846937397" 


        var url = "https://wa.me/" + whatsappNumber + "?text="
        + "*Name :* " + username + "%0a"
        + "*Number :* " + number + "%0a"
        + "*Email :* " + email + "%0a"
        + "*Address :* " + address + "%0a"
        + "*Note :* " + message + "%0a%0a";

        window.open(url, '_blank').focus();
        
    
    };

    // recapcha 
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
      }

    return (
        <div>
            <div className="relative w-full h-full shadow-2xl" 
            style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg7})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>
            <Navbar></Navbar>
            <div className="flex justify-between gap-20 items-center w-4/5 mx-auto py-10">
                <div className="p-5 ">
                    <div>
                        <h1 className="text-6xl font-bold text-white text-ceter pb-10">Reach Us Now !</h1>
                    </div>
                </div>
                {/* form */}
                <div className="w-1/2 glass p-10 rounded-md">
                <form onSubmit={handleOrder} className='flex flex-col w-full gap-5 border-none'>
                    <input type="text" name="user_name" placeholder='Name' className='py-2 px-5 rounded text-base text-black' />
                    <input 
                    type="tel" 
                    required 
                    name="user_phone"  
                    placeholder="WhatsApp Number" 
                    className="py-2 px-5 rounded text-base text-black" 
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                        }
                    }}
                    />
                    <input type="email" name="user_email" placeholder='Email' className='py-2 px-5  rounded text-base text-black' />

                    <textarea type="text" name="address" placeholder='Write Your Address' className='py-2 px-5  rounded text-base text-black textarea textarea-bordered textarea-2xl w-full'></textarea>
                    
                    <textarea type="text" name="message" placeholder='Any Message or change about product ?' className='py-2 px-5  rounded text-base text-black textarea textarea-bordered textarea-2xl w-full'></textarea>
                    <ReCAPTCHA
                        sitekey="6LeJCxIqAAAAAHDpkzr3Rk8HFfig7jMmXxjepUaU"
                        onChange={onChange}
                    />
                    <button type="submit" value="Send" className='bg-[#045364] text-white font-semibold p-5 rounded-md hover:bg-slate-700' disabled={!verified} >Send</button>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contactus;