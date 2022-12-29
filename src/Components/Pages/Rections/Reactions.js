import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ReactionSingle from './ReactionSingle';


const Reactions = () => {

    const {data:shoting=[], isLoading, refetch}=useQuery({
        queryKey:['shoting'],
        queryFn: async ()=>{
            const res=await fetch('https://social-media-application-server-milonahmedshuvo.vercel.app/shoting')
            const result= await res.json()
            return result;
        }
    })
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-40'>
          {
            shoting.map((single)=><ReactionSingle
            key={single._id}
            single={single}
            ></ReactionSingle> )
          }

        </div>
    );
};

export default Reactions;