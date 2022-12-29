import React, { useContext, useState } from 'react';
import imageBg from '../../../image/socialBg.png'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Context/Context';
import { Link } from 'react-router-dom';


const AddPost = () => {
    const {user}=useContext(AuthContext)

    const [img, setimg] = useState(null)
    const imageHostingKey = process.env.REACT_APP_IMGBB_API_KEY


       
    const handlepic=(e)=>{
        const imgfile = e.target.files[0]
        setimg(imgfile)
    }


    const handleAddPost =(e)=>{
        e.preventDefault()
        const text=e.target.text.value;
        
        
   
        const formData = new FormData()
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageData =>{
            console.log(imageData)

            if(imageData.success){
                const addPost = {
                    text,
                    img: imageData.data.url,
                    love:parseFloat(1) 
                }
        
                fetch('https://social-media-application-server.vercel.app/addPost', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(addPost)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    e.target.reset()
                    toast.success("Post add successfuly")
                    
                })
                .catch(e=> console.error(e))
            }
        
        })
    

        

    }



















    // const handleAddPost=(event)=>{
    //     event.preventDefault()
    //     const text=event.target.text.value;
    //     const file=event.target.file.value;
    //     console.log(text, file)

    //     const addpostData={
    //         text,
    //         file
    //     }

    //     fetch('https://social-media-application-server.vercel.app/addPost', {
    //         method:'POST',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify(addpostData)
    //     })
    //     .then((res)=>res.json())
    //     .then((data)=>console.log(data))
    //     .catch((err)=>console.log(err))
    // }

    return (
        <div>
            <div className="hero min-h-screen ">

                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-8 ">

                    <div className="">
                
                        <img src={imageBg} alt=""  />
                       
                    </div>






                    <form onSubmit={handleAddPost} className="card flex-shrink-0 w-full max-w-lg  bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif font-medium">Text</span>
                                </label>
                                <input type="text" name='text' placeholder="Text hare" className="input input-bordered " />
                            </div>


                            <div className="form-control">
                                <label className="label font-serif font-medium">
                                    <span className="label-text">Photo File</span>
                                </label>
                                <input type="file" onChange={handlepic}  name='files' className="file-input file-input-bordered file-input-primary w-full" />

                            </div>


                            <div className="form-control mt-6">
                               

                                {
                                    user?.uid ? <button type='submit' className="btn btn-primary">Submit</button> : 
                                    <Link to='/login'  className="btn btn-primary">Submit</Link>
                                }

                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddPost;