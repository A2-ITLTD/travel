import bg7 from '../Images/bg7.jpg';
import Navbar from './Navbar';
const TimeTable = () => {
    return (
        <div>
            <div className="relative w-full h-full shadow-2xl" 
            style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg7})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>
            <Navbar></Navbar>
            <div className="mx-5 md:mx-28 py-16">
                <div class="overflow-x-auto glass  rounded-md">
                    <table class="table w-full">
                        <thead>
                            <tr className='text-white'>
                                <th>Service</th>
                                <th>Transit Time</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td colspan="3" class="bg-gray-100 font-bold text-center">Domestic Services (Within the U.S.)</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx SameDay®</td>
                                <td>Within hours</td>
                                <td>Delivery within hours on the same day, available 24/7/365.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx First Overnight®</td>
                                <td>Next business day by 8 or 8:30 a.m.</td>
                                <td>Next-business-day delivery by 8 or 8:30 a.m. to most U.S. addresses.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx Priority Overnight®</td>
                                <td>Next business day by 10:30 a.m.</td>
                                <td>Next-business-day delivery by 10:30 a.m. to most U.S. locations.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx Standard Overnight®</td>
                                <td>Next business day by 3 p.m.</td>
                                <td>Next-business-day delivery by 3 p.m. to most U.S. addresses.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx 2Day®</td>
                                <td>2 business days by 4:30 p.m.</td>
                                <td>Delivery in 2 business days by 4:30 p.m. to most U.S. addresses.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx Express Saver®</td>
                                <td>3 business days by 4:30 p.m.</td>
                                <td>Delivery in 3 business days by 4:30 p.m. to most U.S. locations.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx Ground®</td>
                                <td>1-5 business days</td>
                                <td>Delivery within 1-5 business days, depending on the distance to the destination.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx Home Delivery®</td>
                                <td>1-5 business days</td>
                                <td>Delivery within 1-5 business days, including weekends.</td>
                            </tr>

                            
                            <tr>
                                <td colspan="3" class="bg-gray-100 font-bold text-center">International Services</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx International First®</td>
                                <td>1-2 business days by 8 or 8:30 a.m.</td>
                                <td>Delivery in 1-2 business days by 8 or 8:30 a.m. to select locations worldwide.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx International Priority®</td>
                                <td>1-3 business days</td>
                                <td>Delivery in 1-3 business days to more than 220 countries and territories.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx International Economy®</td>
                                <td>2-5 business days</td>
                                <td>Cost-effective delivery in 2-5 business days to more than 215 countries and territories.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx International Ground®</td>
                                <td>2-7 business days</td>
                                <td>Economical ground delivery to Canada and Mexico, usually within 2-7 business days.</td>
                            </tr>

                        
                            <tr>
                                <td colspan="3" class="bg-gray-100 font-bold text-center">Freight Services</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx Freight® Priority</td>
                                <td>Varies</td>
                                <td>Typically faster transit times for less-than-truckload (LTL) shipments, varying by distance.</td>
                            </tr>
                            <tr className='text-white'>
                                <td>FedEx Freight® Economy</td>
                                <td>Varies</td>
                                <td>More cost-effective LTL shipping with longer transit times than Priority.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>    
        </div>
    );
};

export default TimeTable;