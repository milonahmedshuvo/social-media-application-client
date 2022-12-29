import React from 'react';
import { Link } from 'react-router-dom';


const ModalPupop = ({myDetails, onClickHandlerUpdate}) => {
    
    const { name, email, university, address, _id } = myDetails;

     const handleEdit=(event)=>{
        event.preventDefault()
        const name=event.target.name.value;
        const university=event.target.university.value;
        const address=event.target.address.value;
        const email=event.target.email.value;
        console.log(name, university, address)


        fetch(`https://social-media-application-server.vercel.app/addEdit/${email}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({name, university, address})
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
        
     }





    //  const handleUpdate =(id)=>{
    //     console.log(id)
    //     const changeText = window.prompt('chage name')
    //     if(changeText){
    //         console.log(changeText)

            
    //     fetch(`https://social-media-application-server.vercel.app/addEdit/${id}`,{
    //         method:'PATCH',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify({name:changeText})
    //     })
    //    .then((res)=>res.json())
    //    .then((data)=>console.log(data))
    //    .catch((err)=>console.log(err))




    //     }
    //  }












     
    return (
        <div>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="edit-pupop" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-pupop" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    



{/* 
                    <div className='flex justify-between'>
                        <p>Name</p>
                        <button onClick={()=>handleUpdate(_id)} className='btn bg-purple-500 border-none hover:bg-green-500 btn-xs'>Edite</button>
                    </div> */}






                    <form onSubmit={handleEdit} className="card flex-shrink-0 w-full max-w-lg  bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif font-medium">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered " defaultValue={name} />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif font-medium">University</span>
                                </label>
                                <input type="text" name='university' placeholder="University" className="input input-bordered " defaultValue={university} />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif font-medium">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="Address" className="input input-bordered " defaultValue={address} />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif font-medium">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered "  disabled defaultValue={email}/>
                            </div>


                


                            <div className="form-control mt-6">
                                <button type='submit' className="btn  bg-violet-600 font-serif font-bold">Save</button>
                            </div>
                           
                        </div>
                    </form>










                </div>
            </div>
        </div>
    );
};

export default ModalPupop;