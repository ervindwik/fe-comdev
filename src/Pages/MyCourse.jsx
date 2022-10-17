import React from 'react';
import NavbarComp from '../Components/NavbarProfile';
import Header from '../Components/MyCourseComp/Header'
import Line from '../Components/MyCourseComp/Line'
import CoursesList from '../Components/MyCourseComp/CoursesList';
import Footer from'../Components/Footer';
const MyCourse = () => {
return(
    <>
    <NavbarComp />
    <Header />
    <Line />
    <CoursesList />
    <Footer />
    </>
)
}


export default MyCourse