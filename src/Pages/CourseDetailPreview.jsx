import React, { Component } from 'react';
import Header from '../Components/CourseDetailPreview/header';
import Line from '../Components/CourseDetailPreview/Line';
import Navbar from '../Components/Navbar'

const CourseDetailPreview= () => {
    return ( 
        <>
        <Navbar />
        <Header />
        <Line />
        </>
        
     );
}

export default CourseDetailPreview;