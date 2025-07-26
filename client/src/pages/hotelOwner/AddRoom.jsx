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
        <div>

        </div>
    )
}
export default AddRoom
