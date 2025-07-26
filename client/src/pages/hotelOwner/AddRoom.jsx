import React, {useState} from 'react'

const AddRoom = () => {

    const[images,setImages]=useState({
        1: null,
        2: null,
        3: null,
        4: null

    })

    const [inputs,setInputs]=useState({
        roomType: "",
        pricePerNight: "",
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
                   <label htmlFor=""></label>
               ))}
           </div>
       </form>
    )
}
export default AddRoom
