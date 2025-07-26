import React, {useState} from 'react'
import {assets, dashboardDummyData} from "../../assets/assets.js";
import Title from "../../components/Title.jsx";

const Dashboard = () => {

    const [dashboardData,setDashboardData] = useState(dashboardDummyData);

    return (
        <div>
            <Title align='left' title="Dashboard" subTitle="Monitor ypur room listings ,track
            bookings and analyze revenue-all in one place. Stay updated with the rael-time insights
            to ensure smooth and efficient operations." />

            <div className='flex gap-4 my-8'>
                {/*---------Total Bookings-------- */}
                <div className='bg-primary/3 border border-primary/10 rounded p-4 pr-8'>
                    <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10' />
                    <div>
                        <p className='text-blue-500 text-lg'>Total Bookings</p>
                        <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Dashboard
