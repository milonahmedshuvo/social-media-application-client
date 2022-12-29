import React, { useContext } from 'react';
import imageBg from '../../../image/login.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
   const {createUser}=useContext(AuthContext)


    const handleRegister = (event) => {
        event.preventDefault()
        const name=event.target.name.value;
        const university=event.target.university.value;
        const address=event.target.address.value;
        const email=event.target.email.value;
        const password=event.target.password.value;

        

        createUser(email, password)
        .then((res)=>{
            console.log(res)
            toast.success('Register Successful !!')
        })
        .catch((err)=>{
            toast.error('Sorry..Register Failed!')
            console.log(err)
        })



        const myDetails={
            name,
            email,
            university,
            address
        }
        fetch('https://social-media-application-server.vercel.app/myDetails',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(myDetails)
        })



    }


    return (

        <div>

            <h1 className='text-center font-serif font-bold text-4xl text-purple-500'>Register</h1>
            <div className="hero min-h-screen ">

                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-8 ">



                    <div className="">

                        <img src={imageBg} alt="" />

                    </div>

                    

                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-lg  bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif font-medium">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered " />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif font-medium">University</span>
                                </label>
                                <input type="text" name='university' placeholder="University" className="input input-bordered " />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif font-medium">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="Address" className="input input-bordered " />
                            </div>



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
                                <button className="btn  bg-violet-600 font-serif font-bold">Register</button>
                            </div>
                            <p className='font-serif'> Already have an Account?<Link to='/login' className='text-violet-600'>Login</Link> </p>
                        </div>
                    </form>







                </div>
            </div>
        </div>

    );
};

export default Register;