import React from 'react';
import ContentDashboard from '../Components/ContentDashboard';
import Footer from '../Components/Footer';
import NavbarComp from '../Components/Navbar';

const Dashboard = () => {
    return (
        <div>
            <NavbarComp />
            <ContentDashboard />
            <Footer />
        </div>

    )
}

export default Dashboard