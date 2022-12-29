import React from 'react';
import { useQuery } from 'react-query'
import MediaDetails from './MediaDetails';

const MediaRoute = () => {

    const { data: getPost = [], isLoading, refetch } = useQuery({
        queryKey: ['getPost'],
        queryFn: async () => {
            const res = await fetch('https://social-media-application-server.vercel.app/getPost');
            const result = await res.json();
            return result;
        }
    })





    


    return (
        <div className='w-1/2 mx-auto mb-10'>
            <div className=''>

                {
                    getPost.map((post) => <MediaDetails
                        key={post._id}
                        post={post}
                    ></MediaDetails>)
                }


            </div>
        </div>
    );
};

export default MediaRoute;