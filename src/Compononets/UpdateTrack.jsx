import { useContext, useState } from 'react';
import bg7 from '../Images/bg7.jpg';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import { MdEditNote } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateTrack = () => {
    const loadedOrders = useLoaderData();
    const [tracks, setTracks] =  useState(loadedOrders);
    const [selectTrack, setSelectTrack] = useState();

    const handlegetId = async (id) => {
        const Id = parseInt(id);
        console.log(typeof Id);
    
        try {
            const response = await axios.get(`http://localhost:5000/track/${Id}`);
            setSelectTrack(response.data[0]); 
            document.getElementById('my_modal_3').showModal();
        } catch (error) {
            console.error('Error fetching tracking data:', error);
        }
    };
    
    const handleUpdate = event => {

        event.preventDefault();
        
        const form = event.target;

        const Id = form.orderId.value;
        const orderId = parseInt(Id);
        const orderPlaced = form.orderPlaced.value;
        const packageProcessingStarted = form.packageProcessingStarted.value;
        const redayToShip = form.redayToShip.value;
        const reachedLogistic = form.reachedLogistic.value;
        const shipped = form.shipped.value;
        const outForDelivery = form.outForDelivery.value;
        const delivered = form.delivered.value;
        const deliveryFailed = form.deliveryFailed.value;

        const updated = {orderPlaced, packageProcessingStarted, redayToShip, reachedLogistic,shipped,  outForDelivery, outForDelivery, delivered, deliveryFailed };

        axios.put( `http://localhost:5000/track/update/${orderId}`, updated)
        .then(data => {
            if(data.data.modifiedCount > 0){
                toast.success("Updated Successfully");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        
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
            <div className="mx-5 md:mx-28 py-16">
                <div class="overflow-x-auto glass  rounded-md">
                    <table class="table w-full">
                        <thead>
                            <tr className='text-white'>
                                <th>Update Status</th>
                                <th>Order Id</th>
                                <th>order Placed</th>
                                <th>package Processing Started</th>
                                <th>Reday To Ship</th>
                                <th>Reached Logistic</th>
                                <th>Shipped</th>
                                <th>Out For Delivery</th>
                                <th>Delivered</th>
                                <th>Delivery Failed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tracks.map(track => <tr className='text-white'>
                                    <td onClick={() => handlegetId(track.orderId)}>
                                        <MdEditNote className='text-4xl' />
                                    </td>
                                     <td>{track.orderId}</td>
                                     <td>{track.orderPlaced}</td>
                                     <td>{track.packageProcessingStarted}</td>
                                     <td>{track.redayToShip}</td>
                                     <td>{track.reachedLogistic}</td>
                                     <td>{track.shipped}</td>
                                     <td>{track.outForDelivery}</td>
                                     <td>{track.delivered}</td>
                                     <td>{track.deliveryFailed}</td> 
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>  
            {/* modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="glass p-8 rounded-md text-white mx-5 md:mx-28">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Update Track Status!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    <form onSubmit={handleUpdate}>
                        {/* input fields */}
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                            <input type="hidden" name='orderId' defaultValue={selectTrack?.orderId} />
                            <select name="orderPlaced" className="py-2 px-5 rounded text-base text-black" defaultValue={selectTrack?.orderPlaced}>
                                    <option value="true">order Placed</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                            </select>
                            <select name="packageProcessingStarted" className="py-2 px-5 rounded text-base text-black" defaultValue={selectTrack?.packageProcessingStarted}>
                                    <option value={selectTrack?.packageProcessingStarted}>package Processing Started</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                            </select>
                            <select name="redayToShip" className="py-2 px-5 rounded text-base text-black" defaultValue={selectTrack?.redayToShip}>
                                    <option value={selectTrack?.redayToShip}>Reday To Ship</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                            </select>
                            <select name="reachedLogistic" className="py-2 px-5 rounded text-base text-black" defaultValue={selectTrack?.reachedLogistic}>
                                    <option value={selectTrack?.reachedLogistic}>Reached Logistic</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                            </select>
                            <select name="shipped" className="py-2 px-5 rounded text-base text-black" defaultValue={selectTrack?.shipped}>
                                    <option value={selectTrack?.shipped}>Shipped</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                            </select>
                            <select name="outForDelivery" className="py-2 px-5 rounded text-base text-black" defaultValue={selectTrack?.outForDelivery}>
                                    <option value={selectTrack?.outForDelivery}>Out For Delivery</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                            </select>
                            <select name="delivered" className="py-2 px-5 rounded text-base text-black" defaultValue={selectTrack?.delivered}>
                                    <option value={selectTrack?.delivered}>Delivered</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                            </select>
                            <select name="deliveryFailed" className="py-2 px-5 rounded text-base text-black" defaultValue={selectTrack?.deliveryFailed}>
                                    <option value={selectTrack?.deliveryFailed}>Delivery Failed</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                            </select>
                            <button className='btn bg-transparent hover:bg-white border-2 border-white text-white hover:text-black' type='submit' value="Update" >Update</button>
                        </div>
                    </form>
                </div>
            </dialog>   
        </div>
    );
};

export default UpdateTrack;