import React from 'react';
import Footer from '../Components/Footer';
import NavbarComp from '../Components/Navbar';
import CoursesList from '../Components/ProfileComp/CoursesList';
import Header from '../Components/ProfileComp/Header';
import Line from '../Components/ProfileComp/Line';
const Profile = () => {
    return (
        <div>
            <NavbarComp />
            <Header />
            <Line />
            <CoursesList />
            <Footer />
        </div>

    )
}

export default Profile