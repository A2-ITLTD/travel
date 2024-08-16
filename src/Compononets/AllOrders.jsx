import { useContext, useState } from 'react';
import bg7 from '../Images/bg7.jpg';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';

const AllOrders = () => {
    const loadedOrders = useLoaderData();
    const [Orders, setOrders] =  useState(loadedOrders);
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
                                <th>OrderId</th>
                                <th>From Name</th>
                                <th>From Company</th>
                                <th>From Country</th>
                                <th>From Address</th>
                                <th>From Postal Code</th>
                                <th>From City</th>
                                <th>To Name</th>
                                <th>To Company</th>
                                <th>To Country</th>
                                <th>To Address</th>
                                <th>To Postalcode</th>
                                <th>To City</th>
                                <th>Package Contains</th>
                                <th>Num Of Packages</th>
                                <th>Weight</th>
                                <th>Servicetype</th>
                                <th>Packagetype</th>
                                <th>Dimensions</th>
                                <th>Shipdate</th>
                                <th>Description</th>
                                <th>Camage</th>
                                <th>Custom </th>
                                <th>Bank Payments</th>
                                <th>Card</th>
                                <th>Online</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Orders.map(order => <tr className='text-white'>
                                     <td>{order.orderId}</td>
                                     <td>{order.from_name}</td>
                                     <td>{order.from_company}</td>
                                     <td>{order.from_country}</td>
                                     <td>{order.from_address}</td>
                                     <td>{order.from_postalcode}</td>
                                     <td>{order.from_city}</td>
                                     <td>{order.to_name}</td>
                                     <td>{order.to_company}</td>
                                     <td>{order.to_country}</td>
                                     <td>{order.to_address}</td>
                                     <td>{order.to_postalcode}</td>
                                     <td>{order.to_city}</td>

                                     <td>{order.package_contains}</td>
                                     <td>{order.num_of_packages}</td>
                                     <td>{order.weight}</td>
                                     <td>{order.servicetype}</td>
                                     <td>{order.packagetype}</td>
                                     <td>{order.dimensions}</td>
                                     <td>{order.shipdate}</td>
                                     <td>{order.description}</td>
                                     <td>{order.camage}</td>
                                     <td>{order.custom}</td>
                                     <td>{order.bankpayments}</td>
                                     <td>{order.card}</td>
                                     <td>{order.online}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>   
        </div>
    );
};

export default AllOrders;