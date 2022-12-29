import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaBeer, FaRegHeart, FaRegHandPointRight } from 'react-icons/fa'


const SinglePost = () => {
    const singleData=useLoaderData()
    console.log(singleData)
    const[reaction, setReactions]=useState('')
    const [comment, setComment]=useState('')
    const [comments, setComments]=useState([])

    const onChangeHandler=(e)=>{
        setComment(e.target.value)
    }

    const onClickHandler=()=>{
        setComments( (comments)=>[...comments, comment] )
    }


    return (
        <div className='w-1/2 mx-auto mb-10'>
        
        <div className="card card-compact w-full md:w-4/6 bg-base-100 shadow-xl">
            <figure><img src={singleData?.img} alt="Shoes" className='w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif text-sky-400">{singleData?.text}  </h2>
               

                <div className=" flex justify-between my-6">

                    <div className='flex justify-center'>
                    <div  className='text-red-600 text-3xl'>
                         <FaRegHeart></FaRegHeart> 
                         </div>

                         <span>{singleData?.love}</span>

                    </div>
                   


                    <div className='flex justify-between'>
                    <input onChange={onChangeHandler} type="text" placeholder="Comment" className="input input-bordered h-6 w-1/2 ml-auto max-w-xs" />

                    <button onClick={onClickHandler} className="btn btn-xs">Submit</button>
                    </div>
                </div>


                  <div>

                  

                  <button className="btn btn-sm bg-purple-500 border-none hover:bg-sky-400 hover:text-violet-600 hover:font-serif hover:font-bold font-serif ">Details</button>

                  
                  
                  </div>
                 



                {
                    comments.map((text,i)=><p
                    key={i}
                    > <span className='text-violet-600 font-serif '>{text}</span> </p> )
                }


            </div>
        </div>
    </div>
    );
};

export default SinglePost;