import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';
import bg7 from '../Images/bg7.jpg';
import Navbar from "./Navbar";

const Login = () => {
    const { loginUser, loginGoogle, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            navigate(location?.state ? location.state : './')
            toast.success("Login successful");
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error("Invalid email or password");
          });
    };

    const handleSigninGoogle = () => {
        loginGoogle(provider)
        .then(result => {
            const user = result.user;
            navigate(location?.state ? location.state : './')
            toast.success("Signed in with Google");
            
        })
        .catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
    };

    
    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div className="">
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
                        <h1 className="text-6xl font-bold text-white text-ceter pb-10">Login Now!</h1>
                        <h1 className="text-2xl font-bold text-white text-ceter pb-10">
                            Or  
                            <Link to="/Registration" className="text-[#53fff4]"> Sign Up Here </Link>
                            if you don't have an ID.</h1>
                    </div>
                </div>
                {/* <input type="text" name="user_name" placeholder='Name' className='py-2 px-5 rounded text-base text-black' /> */}
                {/* form */}
                <div className="w-1/2 glass p-10 rounded-md">
                    <form onSubmit={handleLogin} className="card-body">
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
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#045364] text-white">Login</button>
                        </div>
                        <br />
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <p className="text-white">or signin with</p>
                            <div className="flex gap-3 text-4xl">
                                <button onClick={handleSigninGoogle}><FcGoogle /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
    
};

export default Login;
