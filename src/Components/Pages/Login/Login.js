import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import imageBg from '../../../image/login.png';




const Login = () => {
   const {user, singIn, googleSingIn}=useContext(AuthContext)

   

    const handleLogin = (event) => {
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
        
        singIn(email,password)
        .then((res)=>{
            console.log(res)
            
        })
        .catch((err)=>console.log(err))
    }

    const provider=new GoogleAuthProvider()
    const handleGoogleSingIn=()=>{
        googleSingIn(provider)
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>console.log(err))
    }


    return (
        <div>
            <h1 className='text-center font-serif font-bold text-4xl text-sky-400'>Login</h1>
            <div>
                <div className="hero min-h-screen ">

                    <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-8 ">




                       <div>
                       <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-lg  bg-base-100">
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-serif font-medium">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered " />
                                </div>


                                <div className="form-control">
                                    <label className="label font-serif font-medium">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered " />

                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn  bg-sky-400 border-none">Login</button>
                                </div>
                                <p className='font-serif'> If you new User?<Link to='/register' className='text-violet-600 ml-2'>Register</Link> </p>

                               
                            </div>
                        </form>
                        <button onClick={handleGoogleSingIn} className="btn w-10/12 ml-8  bg-slate-700 text-sky-400 font-serif font-bold border-none">GOOGLE</button>
                       </div>




                        <div className="">

                            <img src={imageBg} alt="" />

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;