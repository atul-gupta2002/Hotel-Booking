import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {assets, facilityIcons, roomCommonData, roomsDummyData} from "../assets/assets.js";
import StarRating from '../components/StarRating.jsx';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const selectedRoom = roomsDummyData.find(room => room._id === id);
        if (selectedRoom) {
            setRoom(selectedRoom);
            setMainImage(selectedRoom.images[0]);
        }
    }, [id]);

    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* Room Details */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>
                    {room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span>
                </h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
            </div>

            {/* Room rating */}
            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>

            {/* Room address */}
            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
            </div>

            {/*Room images */}
            <div className='flex flex-col lg:flex-row gap-6 mt-6'>
                <div className='w-full lg:w-1/2'>
                    <img src={mainImage} alt="Room image"
                    className='w-full rounded-xl shadow-lg object-cover' />
                </div>

                <div className='grid grid-cols-2 gap-4 w-full lg:w-1/2'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={() => setMainImage(image)}
                            src={image} alt="Room image" key={index}
                        className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                    ))}
                </div>
            </div>

            {/*Room highlights */}
            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div>
                    <h1 className='text-3xl md:text-4xl font-playfair'
                    >Experience luxury like never before</h1>
                    <div className='flex flex-wrap items-center gap-4 mt-3 mb-6'>
                        {room.amenities.map((item,index) => (
                            <div key={index}>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>

                            </div>
                        ))}
                    </div>
                </div>

                {/*Room price */}
                <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>

            </div>

            {/* CheckIn CheckOut form*/}
            <form  className='flex flex-col md:flex-row items:start md:items-center justify-between mt-16
            bg-white rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 mx-auto max-w-6xl'>

                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

                    <div className='flex flex-col '>
                        <label htmlFor="checkInDate" className='font-medium'>Check in</label>
                        <input id="checkInDate" type="date" placeholder='Check-In'
                               className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" required />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col '>
                        <label htmlFor="checkOutDate" className='font-medium'>Check out</label>
                        <input id="checkOutDate" type="date" placeholder='Check-out'
                               className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" required />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col '>
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input id="guests" type="number" placeholder='0'
                               className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" required />
                    </div>

                </div>

                <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95
                transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 md:py-4 text-base
                cursor-pointer'>
                    Check availability
                </button>

            </form>

            {/* Common specifications*/}
            <div className='mt-25 space-y-4'>
                {roomCommonData.map((spec, index) => (
                    <div key={index} className='flex items-start gap-2'>
                        <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                        <div>
                            <p className='text-base '>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>

                ))}
            </div>

            <div className='max-w-6xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                <p>
                    Guests will be accommodated on the ground floor, subject to availability.
                    This beautifully designed two-bedroom apartment offers a warm and authentic
                    city-living experience, perfect for couples or small families. Thoughtfully
                    furnished, it features a private bathroom, a fully equipped kitchen for home-cooked
                    meals, two cozy bedrooms, a spacious living room for relaxation, a dining area for
                    shared meals, and a private balcony to enjoy the fresh air. The space is designed
                    to provide both comfort and functionality, making it ideal for short or extended stays.
                    Whether you're visiting for business or leisure, this apartment ensures a peaceful and
                    convenient retreat in the heart of the city.
                </p>

            </div>

            {/* Hosted by*/}
            <div className='flex flex-col items-start gap-4'>
                <div className='flex gap-4'>
                    <img src={room.hotel.owner.image} alt="Host" className='w-14 h-14 md:h-18 md:w-18 rounded-full' />
                    <div>
                        <p>Hosted by {room.hotel.name}</p>
                        <div className='flex items-center mt-1'>
                            <StarRating />
                            <p className='ml-2'>200+reviews</p>
                        </div>
                    </div>
                </div>

                <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull
                transition-all cursor-pointer'>
                    Contact now
                </button>

            </div>

        </div>
    );
}

export default RoomDetails;
