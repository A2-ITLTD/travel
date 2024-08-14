import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg7 from '../Images/bg7.jpg';
import Navbar from "./Navbar";

const Registration = () => {

    const { createUser, updateUserProfile, loading, setUser } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const [showpassword, setShowPassword] = useState(false);
    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6){
            toast.error("Password must be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)){
            toast.error("Password should contain Uppercase characters");
            return;
        }
        else if (!/[a-z]/.test(password)){
            toast.error("Password should contain Lowercase characters");
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateUserProfile(name)
            .then( () => {
                const updatedUser = {
                    ...user,
                    displayName: name,
                    
                };
                setUser(updatedUser);
                toast.success("Registration successful");
                console.log(user);
            })
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
    };
    useEffect(() => {
        document.title = "Registration";
    }, []);

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
                        <h1 className="text-6xl font-bold text-white text-ceter pb-10">Register Here!</h1>
                        <h1 className="text-2xl font-bold text-white text-ceter pb-10">
                            Already Have and Account ? 
                            <Link to="/Login" className="text-[#53fff4]"> Login </Link>
                            Here</h1>
                    </div>
                </div>
                {/* <input type="text" name="user_name" placeholder='Name' className='py-2 px-5 rounded text-base text-black' /> */}
                {/* form */}
                <div className="w-1/2 glass p-10 rounded-md">
                <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <div className="relative flex">
                        <input 
                            type={showpassword ? "text" : "password"} 
                            name="password" 
                            placeholder="password" 
                            className="input input-bordered md:grow" required />
                        <span onClick={ () => setShowPassword(!showpassword)} className="absolute right-0 md:right-4 text-2xl top-3">
                            {
                                showpassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                        </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#045364] text-white text-base md:text-lg lg:text-lg">Complete Registration</button>
                        </div>
                        <br />
                        <div className="flex justify-center text-center gap-2 px-9">
                            <p className="text-white">Already have and account ?
                            <Link to="/Login"className="text-[#02413c]  font-bold pacifico"> Login </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Registration;