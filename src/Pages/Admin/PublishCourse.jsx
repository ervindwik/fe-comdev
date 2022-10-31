import React, { Component } from 'react';
import NavbarAdmin from '../../Components/AdminComp/Navbar';
import SidebarAdmin from '../../Components/AdminComp/Sidebar';
const PublishCourse = () => {
    return (
        <>
            <NavbarAdmin />
            <div className='d-flex'>
                <SidebarAdmin />
                <h1>Ini halaman Publish</h1> ;
            </div>
        </>
    )
}

export default PublishCourse