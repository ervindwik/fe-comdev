import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaBook,
    FaPassport,
    FaUserTie,
    FaUsers
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../../Styles/Admin.css'
import NavbarAdmin from './Navbar';

const SidebarAdmin = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/admin/home",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/admin/user",
            name:"User",
            icon:<FaUsers/>
        },
        {
            path:"/admin/pengajar",
            name:"Pengajar",
            icon:<FaUserTie/>
        },
        {
            path:"/admin/course",
            name:"Course",
            icon:<FaBook/>
        },
        {
            path:"/admin/publishcourse",
            name:"PublishCourse",
            icon:<FaPassport/>
        }
    ]
    return (
        <>
        <NavbarAdmin />
        <div className='d-flex'>
           <div style={{width: isOpen ? "270px" : "50px"}} className="sidebarAdmin">
               <div className="top_section">
                    <div className="d-flex ">
                     <div className='img-profileAdmin'
                     style={{display: isOpen ? "block" : "none"}}>
                     <img src="/rifkialamsyah.jpg" alt="" />
                     </div>   
                     <div style={{display: isOpen ? "block" : "none", paddingLeft : '5px'}} >
                     <h3 className="name">Rifki Alamsyah</h3>
                        <p>Admin</p>
                    </div> 
                     </div>
                    
               </div>
               
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <div style={{marginLeft: isOpen ? ".5%" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
           <main>{children}</main>
        </div>
        </>
    );
};

export default SidebarAdmin;