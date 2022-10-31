import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaBook,
    FaPassport,
    FaUserTie,
    FaUsers
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../../Styles/Admin.css'


const SidebarAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
                <div style={{ width: isOpen ? "270px" : "50px" }} className="sidebarAdmin">
                    <div className="top_section">
                        <div className="d-flex ">
                            <div className='img-profileAdmin'
                                style={{ display: isOpen ? "block" : "none" }}>
                                <img src="/rifkialamsyah.jpg" alt="" />
                            </div>
                            <div style={{ display: isOpen ? "block" : "none", paddingLeft: '5px' }} >
                                <h3 className="name">Rifki Alamsyah</h3>
                                <p>Admin</p>
                            </div>
                        </div>
                    </div>
                    <NavLink to='/admin/home' className="link" activeclassName="active">
                        <div className="icon"><FaTh /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Home</div>
                    </NavLink>
                    <NavLink to='/admin/user' className="link" activeclassName="active">
                        <div className="icon"><FaUsers /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">User</div>
                    </NavLink>
                    <NavLink to='/admin/pengajar' className="link" activeclassName="active">
                        <div className="icon"><FaUserTie /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Pengajar</div>
                    </NavLink>
                    <NavLink to='/admin/course' className="link" activeclassName="active">
                        <div className="icon"><FaBook /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Courses</div>
                    </NavLink>
                    <NavLink to='/admin/publishcourse' className="link" activeclassName="active">
                        <div className="icon"><FaPassport /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Publish</div>
                    </NavLink>
                </div>
                <div style={{ marginLeft: isOpen ? ".5%" : "0px" }} className="bars">
                    <FaBars onClick={toggle} />
                </div>
        </>
    );
};

export default SidebarAdmin;