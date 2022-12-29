import { async } from '@firebase/util';
import { info } from 'daisyui/src/colors';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/Context';
import Details from './Details';
import ModalPupop from './ModalPupop';

const About = () => {
      const {user}=useContext(AuthContext)

    const {data:myDetails=[], isLoading, refetch}=useQuery({
        queryKey:['myDetails', user?.email],
        queryFn: async ()=>{
         const data = await fetch(`http://localhost:5000/myDetails?email=${user?.email}`);
         const result= await data.json();
         return result;
        }
    })

   
    
    const { name, email, university, address } = myDetails;

    
    // const onClickHandlerUpdate=(event)=>{
    //     event.preventDefault()
        
    // }



    return (
        <div>
            <h1 className='text-center font-serif font-bold text-4xl text-sky-400'>My Details</h1>
            
            
            <div className='flex justify-center items-center '>

            <div className="card w-96 bg-base-100 shadow-lg ">

                <div className="card-body">
                    
                    <div className='flex justify-between'>
                    <h2 className="card-title text-purple-500 font-serif hover:text-green-400 font-bold"> Name: {name}</h2>

                    <label  htmlFor="edit-pupop" className="btn bg-purple-500 border-none hover:bg-green-500 btn-xs">Edit</label>
                    </div>
                    <p className='text-purple-500 font-serif hover:text-green-400'>Email:  {email}</p>
                    <p className='text-purple-500 font-serif hover:text-green-400'>University: {university}</p>
                    <p className='text-purple-500 font-serif hover:text-green-400'>Address: {address}</p>
                    
                </div>
            </div>
        </div>

            

            
            <ModalPupop
             myDetails={myDetails}
            //  onClickHandlerUpdate={onClickHandlerUpdate}
            ></ModalPupop>
        </div>
    );
};

export default About;