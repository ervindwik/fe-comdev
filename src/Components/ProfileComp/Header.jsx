import React from 'react';
import { Container } from 'react-bootstrap';
import "../../Styles/Profile.css"
import Coba from "../../assets/img_profile/coba.jpeg"
import Course from "../../assets/course.png"
import Start from "../../assets/start.png"
const Header = () => {
    return(
        <Container className="header-profile">
          <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-2 box-profile ">
            <div className='css-borderImg d-flex'>
            <img className="css-img" src={Coba} />
            </div>
            <div className='css-borderDesc'>
               <h2>MISS SIRAMET</h2>
               <h3>PENUNGGU KOLONG KASUR DAN KAMAR MANDI</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum nesciunt quod aut impedit eveniet alias sapiente numquam iusto praesentium eos vitae, totam ratione facilis voluptatibus! Voluptatum cumque vero fuga?</p>
            </div>
          </div>
            </div>
            {/* <div className="d-flex flex-row-reverse bd-highlight">
            <div className="p-2 bd-highlight box-course">
              <img src={Course} alt="courseIcon" className='courseIcon'/>
              <img src={Start} alt="startIcon" className="startIcon" />
              <span className='item-course'>5</span>
              <h1>COURSES</h1>
            </div>
            </div> */}
        </Container>
    )
}

export default Header