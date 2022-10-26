import React, { Component, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import {BsTrash , BsFillPencilFill} from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai";

import '../../Styles/CourseDetailPreview.css'


const CourseDetail = () => {
    const { collapseSidebar } = useProSidebar();
    const [modul, setModul] = useState({
    pengenalan : {
      title : 'Introduction of Course',
      body : '     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dicta rerum? Autem saepe asperiores, perferendis hic eos omnis aliquam voluptatibus, dolore placeat corporis commodi? Dolorum repudiandae quae cumque alias tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed minima earum dolor doloremque alias aperiam vitae repellendus quos iste! Officia error dolores aliquam aspernatur accusantium beatae culpa deleniti! Eveniet. ',
      img :'dashboard-sec22.png'
    },
    
    }
    )

    return (
    <Container className="course-modul">
        <Sidebar width ="300px">
          <Menu>
          <MenuItem style={{'pointerEvents' : 'none'}}> <h2>Daftar Modul</h2></MenuItem>
          <ol className='list-modul'>
            <li> <a href='#'>introduction</a> <span className='float-end'><BsFillPencilFill/> <BsTrash  color='red'/></span></li>
            <li> <a href="#">HTML CSS</a> <span className='float-end'><BsFillPencilFill/> <BsTrash  color='red'/></span> </li>
            <li> <a href="#"> Bootstrap</a> <span className='float-end'><BsFillPencilFill/> <BsTrash  color='red'/></span></li>
            <li> <a href="#">Javascript</a> <span className='float-end'><BsFillPencilFill/> <BsTrash  color='red'/></span> </li>
            <li> <a href="#"> ES6 Modern Javascript</a> <span className='float-end'><BsFillPencilFill/> <BsTrash  color='red'/></span></li>
            <li> <a href="#">React Js</a> <span className='float-end'><BsFillPencilFill/> <BsTrash  color='red'/></span></li>
            <li> <a href="#">React Js Hooks</a> <span className='float-end'><BsFillPencilFill/> <BsTrash  color='red'/></span> </li>
            <li> <a href="#">React Native</a> <span className='float-end'><BsFillPencilFill/> <BsTrash  color='red'/></span></li>
          </ol>
          </Menu>
        </Sidebar>
        <section className='the-modul'>
            <h1 className='text-center'>{modul.pengenalan.title}</h1>
            <p>{modul.pengenalan.body}</p>
            <center><img src='/logo192.png' alt="" className='mt-3 mb-3'/></center>
            <p>{modul.pengenalan.body}</p>
            <button className='float-end mb-4 btn btn-warning fw-bolder'>Selanjutnya <AiOutlineArrowRight /> </button>
        </section>

       
    </Container>
 
    );
}

export default CourseDetail