import React, {useState} from 'react'
import {assets} from "../../assets/assets.js";
import Title from "../../components/Title.jsx";


const AddRoom = () => {

    const[images,setImages]=useState({
        1: null,
        2: null,
        3: null,
        4: null

    })

    const [inputs,setInputs]=useState({
        roomType: "",
        pricePerNight: 0,
        amenities: {
            'Free WiFi': false,
            'Free parking': false,
            'Free breakfast': false,
            'Room service': false,
            'Mountain view': false,
            'Pool access': false
        }
    })

    return (
       <form>
           <Title align='left' font='outfit' title='Add Room' subTitle='Fill in the details carefully
           and accurate room details,pricing,and amenities,to enhance the user booking experience.' />'

           {/*Upload area for images */}
           <p className='text-gray-800 mt-10'>Images</p>
           <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
               {Object.keys(images).map((key)=> (
                   <label htmlFor={`roomImage${key}`} key={key}>
                       <img className = 'max-h-13 cursor-pointer opacity-80' src={images[key] ?
                           URL.createObjectURL(images[key]) : assets.uploadArea} alt=""  />
                       <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={
                          e => setImages({...images,[key]:e.target.files[0] })} />
                   </label>
               ))}
           </div>

           <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
               <div className='flex-1 max-w-48'>
                   <p className='text-gray-800 mt-4'>Room type</p>
                   <select value={inputs.roomType} onChange={ e => setInputs({...inputs,roomType:
                   e.target.value})} className='border border-gray-300 rounded p-2 w-full '>
                       <option value=''>Select room type</option>
                       <option value='Single bed'>Single Bed</option>
                       <option value='Double bed'>Double Bed</option>
                       <option value='Luxury room'>Luxury Room</option>
                       <option value='Family suite'>Family Suite</option>
                   </select>
               </div>

               <div>
                   <p className='text-gray-800 mt-4'>
                       Price <span classname='text-xs'>/night</span>
                   </p>
                   <input type="number" placeholder='0' value={inputs.pricePerNight}
                          onChange={ e => setInputs({...inputs,pricePerNight:
                   e.target.value})} className='border border-gray-300 rounded p-2 w-24 mt-1' />
               </div>

           </div>

           <p className='text-gray-800 mt-4'>Amenities</p>
           <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
               {Object.keys(inputs.amenities).map((amenity,index)=> (
                   <div key={index}>
                       <input type="checkbox" id={`amenities${index+1}`} checked=
                           {inputs.amenities[amenity]} onChange={()=> setInputs({...inputs,
                       amenities:{...inputs.amenities,[amenity]:!inputs.amenities[amenity] }}) } />
                       <label htmlFor={`amenities${index+1}`} >  {amenity}</label>

                   </div>
               ))}
           </div>

           <button className='bg-primary rounded  py-2 px-8 mt-8 text-white cursor-pointer' >
               Add room
           </button>

       </form>
    )
}
export default AddRoom
