import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
    const {user,signOutUser}=useContext(AuthContext)


    const handleSingOut=()=>{
        return signOutUser()
        .then(()=>{
            toast.success('SingOut Successful')
        })
        
    }
    const navbar=<>
        <li><Link to='' className='font-bold font-serif text-black'>Home</Link></li>    
        <li><Link to='/media' className='font-bold font-serif text-black'>Media</Link></li>    
        <li><Link to='' className='font-bold font-serif text-black'>Message</Link></li>    
        <li><Link to='/about' className='font-bold font-serif text-black'>About</Link></li>  

         {
            user?.uid ? <li><Link to='' onClick={handleSingOut} className='font-bold font-serif text-black'>SingOut</Link></li>  : <li><Link to='/login' className='font-bold font-serif text-black'>Login</Link></li>  
         }


               
               

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           
                          {
                            navbar
                          }


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-serif font-bold">SM Application</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        

                      {
                        navbar
                      }

                    </ul>
                </div>

                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Header;