import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loding from '../../Sheared/Loding';
import { FaBeer, FaRegHeart, FaRegHandPointRight } from 'react-icons/fa'


const ReactionSingle = ({single}) => {


  const {data:singleeeee=[], isLoading, refetch }=useQuery({
    queryKey:['shorting'],
    queryFn:async ()=>{
        const res=await fetch('https://social-media-application-server-milonahmedshuvo.vercel.app/shoting')
        const result=await res.json()
        return result
    }
  })










    const[reaction, setReactions]=useState('')
    const [comment, setComment]=useState('')
    const [comments, setComments]=useState([])

    const onChangeHandler=(e)=>{
        setComment(e.target.value)
    }

    const onClickHandler=()=>{
        setComments( (comments)=>[...comments, comment] )
    }

    
    
   
  



   const handleLove=(id)=>{
      console.log(id)
      const reationsClick=parseFloat(single?.love) + 1;
      
      setReactions( reationsClick)

        console.log(reationsClick)
      
      if(reaction){

        
  
        fetch(`https://social-media-application-server.vercel.app/reactions/${id}`,{
          method:'PATCH',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({love:reaction})
        })
        .then((res)=>res.json())
        .then((data)=>{
            
            refetch()
            console.log(data)
        })
        .catch((err)=>console.log(err))

      }
      
   }



    return (
        <div>
            {
                isLoading && <Loding></Loding>
            }
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={single?.img} alt="Shoes" className='w-full h-56' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-serif text-sky-400">{single?.text}  </h2>
                   

                    <div className=" flex justify-between my-6">

                        <div className='flex justify-center'>
                        <div onClick={()=> handleLove(single?._id)} className='text-red-600 text-3xl'>
                             <FaRegHeart></FaRegHeart> 
                             </div>

                             <span>{single?.love}</span>

                        </div>
                       


                        <div className='flex justify-between'>
                        <input onChange={onChangeHandler} type="text" placeholder="Comment" className="input input-bordered h-6 w-1/2 ml-auto max-w-xs" />

                        <button onClick={onClickHandler} className="btn btn-xs">Submit</button>
                        </div>
                    </div>


                      <div>

                      <Link to={`/single/${single?._id}`}>

                      <button className="btn btn-sm bg-purple-500 border-none hover:bg-sky-400 hover:text-violet-600 hover:font-serif hover:font-bold font-serif ">Details</button>

                      </Link>
                      
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

export default ReactionSingle;