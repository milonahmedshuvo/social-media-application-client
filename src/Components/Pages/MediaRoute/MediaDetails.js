import React, { useContext, useState } from 'react';
import { FaBeer, FaRegHeart, FaRegHandPointRight } from 'react-icons/fa'
import { useQuery } from 'react-query';
import Loding from '../../Sheared/Loding';


const MediaDetails = ({post}) => {
    const[reaction, setReactions]=useState('')
    const [comment, setComment]=useState('')
    const [comments, setComments]=useState([])

    const onChangeHandler=(e)=>{
        setComment(e.target.value)
    }

    const onClickHandler=()=>{
        setComments( (comments)=>[...comments, comment] )
    }

    
    const { data: getPost = [], isLoading, refetch } = useQuery({
        queryKey: ['getPost'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/getPost');
            const result = await res.json();
            return result;
        }
    })



   
  



   const handleLove=(id)=>{
      console.log(id)
      const reationsClick=parseFloat(post?.love) + 1;
      
      setReactions( reationsClick)

        console.log(reationsClick)
      
      if(reaction){

        
  
        fetch(`http://localhost:5000/reactions/${id}`,{
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
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={post?.img} alt="Shoes" className='w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-serif text-sky-400">{post?.text}  </h2>
                   

                    <div className=" flex justify-between my-6">

                        <div className='flex justify-center'>
                        <div onClick={()=> handleLove(post?._id)} className='text-red-600 text-3xl'>
                             <FaRegHeart></FaRegHeart> 
                             </div>

                             <span>{post?.love}</span>

                        </div>
                       


                        <div className='flex justify-between'>
                        <input onChange={onChangeHandler} type="text" placeholder="Comment" className="input input-bordered h-6 w-1/2 ml-auto max-w-xs" />

                        <button onClick={onClickHandler} className="btn btn-xs">Submit</button>
                        </div>
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

export default MediaDetails;