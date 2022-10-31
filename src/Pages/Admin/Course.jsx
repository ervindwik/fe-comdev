import React, { Component } from 'react';
import NavbarAdmin from '../../Components/AdminComp/Navbar';
import SidebarAdmin from '../../Components/AdminComp/Sidebar';
const Course = () => {
    return (
        <>
            <NavbarAdmin />
            <div className='d-flex'>
                <SidebarAdmin />
                <h1>Ini halaman Course</h1> ;
            </div>
        </>
    )

}

export default Course