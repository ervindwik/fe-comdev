import React from "react";
import { Container, Button, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import NavbarProfile from "../Components/NavbarProfile";
import btnPlus from "../assets/btn-plus.png";
import add from "../assets/plus.png";
import "../Styles/AddCourse.css";

const AddModul = () => {
    return (
        <>
            <NavbarProfile />
            <div className="header-add">
                <Container>
                    <h3>Add Modul</h3>
                </Container>
            </div>
            <hr className="line-style-2" />
            <div className="form-add-modul">
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Nama Modul</Form.Label>
                            <Form.Control type="text" placeholder="Nama Modul..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Materi Modul</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Materi Modul..." />
                        </Form.Group>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-Plus" id="dropdown-menu">
                                <img src={btnPlus} width={35} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="show-menu">
                                <Dropdown.Item className="dropdown-item">
                                    <Link to="#" style={{ textDecoration: 'none', color: 'black' }}> <img src={add} alt="" width={16} style={{ marginRight: '10px', marginTop: '-3px' }} /> Tambah Teks </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item">
                                    <Link to="#" style={{ textDecoration: 'none', color: 'black' }}> <img src={add} alt="" width={16} style={{ marginRight: '10px', marginTop: '-3px' }} /> Tambah File </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className="btn-batal" type="reset">
                            Batalkan
                        </Button>
                        <Button className="btn-submit" type="submit">
                            Simpan
                        </Button>
                    </Form>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default AddModul;