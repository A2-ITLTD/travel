import Navbar from "./Navbar";
import bg7 from '../Images/bg7.jpg';
import { useState } from "react";
import { Form } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShipQuick = () => {

    const [verified, setVerified] = useState(false);

    const handleOrder = e => {
        e.preventDefault();
    
        // Generate a random order ID
        const orderId = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    
        // Extract form values
        const from_name = e.target.elements.from_name.value;
        const from_company = e.target.elements.from_company.value;
        const from_country = e.target.elements.from_country.value;
        const from_address = e.target.elements.from_address.value;
        const from_postalcode = e.target.elements.from_postalcode.value;
        const from_city = e.target.elements.from_city.value;
    
        const to_name = e.target.elements.to_name.value;
        const to_company = e.target.elements.to_company.value;
        const to_country= e.target.elements.to_country.value;
        const to_address = e.target.elements.to_address.value;
        const to_postalcode = e.target.elements.to_postalcode.value;
        const to_city = e.target.elements.to_city.value;
    
        const package_contains = e.target.elements.package_contains.value;
        const num_of_packages = e.target.elements.num_of_packages.value;
        const weight = e.target.elements.weight.value;
        const servicetype = e.target.elements.servicetype.value;
        const packagetype = e.target.elements.packagetype.value;
        const dimensions = e.target.elements.dimensions.value;
        const shipdate = e.target.elements.shipdate.value;
        const description = e.target.elements.description.value;
        const camage = e.target.elements.camage.value;
        const custom = e.target.elements.custom.value;
    
        const bankpayments = e.target.elements.bankpayments.value;
        const card = e.target.elements.card.value;
        const online = e.target.elements.online.value;
        
        const newOrders = {orderId, from_name, from_company, from_country, from_address, from_postalcode, from_city, to_name, to_company, to_country, to_address, to_postalcode, to_city, package_contains, num_of_packages, weight, servicetype, packagetype,  dimensions , shipdate, description, camage,custom, bankpayments, card , online}

        const orderPlaced = "true";
        const packageProcessingStarted = "false";
        const redayToShip = "false";
        const reachedLogistic = "false";
        const shipped = "false";
        const outForDelivery = "false";
        const delivered = "false";
        const deliveryFailed = "false";

        const newTrack = {orderId, orderPlaced, packageProcessingStarted, redayToShip, reachedLogistic, shipped, outForDelivery, delivered, deliveryFailed}


        // fetch data using axios 
        axios.post('https://swiftship-server-kohl.vercel.app/orders', newOrders)
          .then(data => {
            if(data.data.insertedId){
                //   post to track list
                axios.post('https://swiftship-server-kohl.vercel.app/track', newTrack )
                .then(data => {
                if(data.data.insertedId){
                    toast.success(`Order Placed successfully. Your Order ID: ${orderId}. Please note that to track your order`);

                    // sending orders to whatsapp aswell 
                        // WhatsApp number
                        const whatsappNumber = "+8801846937397"; 
                    
                        // Build WhatsApp URL
                        const url = "https://wa.me/" + whatsappNumber + "?text="
                        + "*Order ID:* " + orderId + "%0a%0a"  // Include order ID
                        + "*From Name:* " + from_name + "%0a"
                        + "*From Company:* " + from_company + "%0a"
                        + "*From Country:* " + from_country + "%0a"
                        + "*From Address:* " + from_address + "%0a"
                        + "*From Postal Code:* " + from_postalcode + "%0a"
                        + "*From City:* " + from_city + "%0a%0a"
                        + "*To Name:* " + to_name + "%0a"
                        + "*To Company:* " + to_company + "%0a"
                        + "*To Country:* " + to_country + "%0a"
                        + "*To Address:* " + to_address + "%0a"
                        + "*To Postal Code:* " + to_postalcode + "%0a"
                        + "*To City:* " + to_city + "%0a%0a"
                        + "*Package Contains:* " + package_contains + "%0a"
                        + "*Number of Packages:* " + num_of_packages + "%0a"
                        + "*Weight:* " + weight + "%0a"
                        + "*Service Type:* " + servicetype + "%0a"
                        + "*Package Type:* " + packagetype + "%0a"
                        + "*Dimensions:* " + dimensions + "%0a"
                        + "*Ship Date:* " + shipdate + "%0a%0a"
                        + "*Description:* " + description + "%0a"
                        + "*Camage:* " + camage + "%0a%0a"
                        + "*Custom:* " + custom + "%0a"
                        + "*Bank Payments:* " + bankpayments + "%0a"
                        + "*Card:* " + card + "%0a"
                        + "*Online:* " + online + "%0a";
                    
                        // Open WhatsApp with the generated URL
                        window.open(url, '_blank').focus();

                    }
                })
                
            }
          })
          .catch(function (error) {
            console.log(error);
          });
          
    };
    

    return (
        <div>
            <div className="relative w-full h-full shadow-2xl" 
            style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg7})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>
            <Navbar></Navbar>
            <form onSubmit={handleOrder} className="py-16 px-5 md:px-32">
                <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-between items-center">
                    {/* form 1 */}
                    <div className="w-full h-full glass p-10 rounded-md">
                        <h1 className="text-white pb-5">From Address</h1>
                        <div className='flex flex-col w-full gap-5 border-none'>

                            {/* input fields */}
                            <input type="text" name="from_name" placeholder='Your Name' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="text" name="from_company" placeholder='Your Company (Optional)' className='py-2 px-5 rounded text-base text-black' />

                            <input type="text" name="from_country" placeholder='Cuntry/Location' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="text" name="from_address" placeholder='street address/apt/floor/suite etc' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="number" name="from_postalcode" placeholder='Postal Code' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="text" name="from_city" placeholder='City' className='py-2 px-5 rounded text-base text-black' required/>


                            <input 
                            type="tel" 
                            required 
                            name="from_phone"  
                            placeholder="Phone Number (Whatsapp)" 
                            className="py-2 px-5 rounded text-base text-black" 
                            onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                                }
                            }}
                            />

                            <input type="email" name="from_email" placeholder='Email' className='py-2 px-5  rounded text-base text-black' required/>

                            <input type="number" name="from_taxid" placeholder='Tax ID no' className='py-2 px-5  rounded text-base text-black' required/>
                            
                        </div>
                    </div>
                    {/* form 2 */}
                    <div className="w-full h-full glass p-10 rounded-md">
                        <h1 className="text-white pb-5">To Address</h1>
                        <div className='flex flex-col w-full gap-5 border-none'>

                            {/* input fields */}
                            <input type="text" name="to_name" placeholder='Your Name' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="text" name="to_company" placeholder='Your Company (Optional)' className='py-2 px-5 rounded text-base text-black' />

                            <input type="text" name="to_country" placeholder='Cuntry/Location' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="text" name="to_address" placeholder='street address/apt/floor/suite etc' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="number" name="to_postalcode" placeholder='Postal Code' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="text" name="to_city" placeholder='City' className='py-2 px-5 rounded text-base text-black' required/>


                            <input 
                            type="tel" 
                            required 
                            name="to_phone"  
                            placeholder="Phone Number (Whatsapp)" 
                            className="py-2 px-5 rounded text-base text-black" 
                            onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                                }
                            }}
                            />

                            <input type="email" name="to_email" placeholder='Email' className='py-2 px-5  rounded text-base text-black' required/>

                            <input type="number" name="to_taxid" placeholder='Tax ID no' className='py-2 px-5  rounded text-base text-black'  required/>
                            
                        </div>
                    </div>
                </div>




                {/* second row of form */}
                <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-between items-top pt-16">
                    {/* form 3 */}
                    <div className="w-full h-full glass p-10 rounded-md">
                        <h1 className="text-white pb-5">Shipment Details</h1>
                        <div className='flex flex-col w-full gap-5 border-none'>

                            {/* input fields */}
                            <select name="package_contains" className="py-2 px-5 rounded text-base text-black">
                                <option value=" ">Package Contains</option>
                                <option value="document">Documents</option>
                                <option value="merchandise">Merchandise</option>
                            </select>

                            <input type="number" name="num_of_packages" placeholder='Number of Packages' className='py-2 px-5 rounded text-base text-black' />

                            <input type="number" name="weight" placeholder='Weight (lb/pounds)' className='py-2 px-5 rounded text-base text-black' required/>

                            <select name="servicetype" className="py-2 px-5 rounded text-base text-black">
                                <option value=" ">Service Type</option>
                                <option value="Express: SameDay">Express: SameDay</option>
                                <option value="Express: First Overnight">Express: First Overnight</option>
                                <option value="Express: Priority Overnight">Express: Priority Overnight</option>
                                <option value="Express: Standard Overnight">Express: Standard Overnight</option>
                                <option value="Express: 2Day">Express: 2Day</option>
                                <option value="Express: Express Saver">Express: Express Saver</option>
                                <option value="International First">International First</option>
                                <option value="International Priority">International Priority</option>
                                <option value="International Economy">International Economy</option>
                                <option value="International Ground">International Ground</option>
                                <option value="Freight">Freight</option>
                                <option value="Freight Economy">Freight Economy</option>
                            </select>

                            <select name="packagetype" className="py-2 px-5 rounded text-base text-black">
                                <option value="">Package Type</option>
                                <option value="Envelope">Envelope</option>
                                <option value="Pak">Pak</option>
                                <option value="Small Box">Small Box</option>
                                <option value="Medium Box">Medium Box</option>
                                <option value="Large Box">Large Box</option>
                                <option value="Extra Large Box">Extra Large Box</option>
                                <option value="Tube">Tube</option>
                                <option value="10kg Box">10kg Box</option>
                                <option value="25kg Box">25kg Box</option>
                            </select>

                            <select name="dimensions" className="py-2 px-5 rounded text-base text-black">
                                <option value="">Package Dimensions</option>
                                <option value="10.88 x 1.5 x 12.38 inch">10.88" x 1.5" x 12.38".</option>
                                <option value="11.5 x 2.38 x 13.25 inch">11.5" x 2.38" x 13.25</option>
                                <option value="8.75 x 4.38 x 11.25 inch">8.75" x 4.38" x 11.25</option>
                                <option value="8.75 x 7.75 x 11.25 inch">8.75" x 7.75" x 11.25"</option>
                                <option value="11.88 x 10.75 inch">11.88" x 10.75"</option>
                                <option value="15.75 x 14.13 x 6 inch">15.75" x 14.13" x 6"</option>
                                <option value="38 x 6 x 6 inch">38" x 6" x 6"</option>                    
                            </select>

                            <input type="date" name="shipdate" placeholder='Ship Date' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="text" name="description" placeholder='Document Description' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="number" name="camage" placeholder='Total Camage Value ($0.00)' className='py-2 px-5 rounded text-base text-black' required/>

                            <input type="number" name="custom" placeholder='Total Custom Value ($0.00)' className='py-2 px-5 rounded text-base text-black' required/>
                            
                        </div>
                    </div>
                    {/* form 4 */}
                    <div className="w-full h-full glass p-10 rounded-md">
                        <h1 className="text-white pb-5">Payment Details</h1>
                        <div className='flex flex-col w-full gap-5 border-none'>

                            <input type="bank" name="bankpayments" placeholder='Bank Payments' className='py-2 px-5  rounded text-base text-black'/>

                            {/* input fields */}
                            <select name="card" className="py-2 px-5 rounded text-base text-black">
                                <option value="">Card Payment</option>
                                <option value="Visa Card">Visa Card</option>
                                <option value="Master Card">Master Card</option>
                                <option value="Americal Express">Americal Express</option>                   
                            </select>

                            <select name="online" className="py-2 px-5 rounded text-base text-black">
                                <option value="">International Gateway (Online)</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Stripe">Stripe</option>                   
                            </select>
                            
                            <button type="submit" value="Send" className='bg-[#25a543] text-white font-semibold p-5 rounded-md hover:bg-slate-700' >Confirm Order</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            
        </div>
    );
};

export default ShipQuick;