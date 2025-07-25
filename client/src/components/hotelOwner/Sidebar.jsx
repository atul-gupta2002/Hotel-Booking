import React from 'react'
import {assets} from "../../assets/assets.js";
import {NavLink} from "react-router-dom";

const Sidebar = () => {

    const sidebarLinks = [
        {name:"Dashboard",path:"/owner",icon:assets.dashboardIcon},
        {name:"Add Room",path:"/owner/add-room",icon:assets.addIcon},
        {name:"List Room ",path:"/owner/list-room ",icon:assets.listIcon},
    ]
    return (
        <div className='md:w-64 w-16 border-r h-full text-base border-gray-300
        pt-4 flex flex-col transition-all duration-300'>
            {sidebarLinks.map((items,index)=>(
                <NavLink to={items.path} key={index} end='/owner' className={({isActive}) =>
                    `flex items-center gap-3 py-3 px-4 md:px-8 ${isActive ? "border-r-4 md:border-r-[6px]" +
                        " border-blue-600 text-blue-600 bg-blue-600/10" : "" +
                        " hover:bg-gray-100/90 border-white text-gray-700"}`}>

                    <img src={items.icon} alt={items.name} className='min-w-6 min-h-6' />
                    <p className='md:block hidden text-center'>{items.name}</p>

                </NavLink>

            ))}
        </div>
    )
}
export default Sidebar
