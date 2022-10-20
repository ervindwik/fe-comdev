import React, { Component } from 'react';
import Header from '../Components/CourseDetailPreview/header';
import Line from '../Components/CourseDetailPreview/Line';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CourseDetail from '../Components/CourseDetailPreview/CourseDetail';


const CourseDetailPreview= () => {
    return ( 
        <>
        <Navbar />
        <Header />
        <Line />
        <CourseDetail/>
        <Footer />
        </>
        
     );
}

export default CourseDetailPreview;