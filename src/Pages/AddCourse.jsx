import { React, useState, useRef } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";
import NavbarProfile from "../Components/NavbarProfile";
import "../Styles/AddCourse.css";
import imgCourse from "../assets/img-course.png";
import ReactCrop from "react-image-crop";

const AddCourse = () => {
    const [image, setImage] = useState(imgCourse);
    const hiddenFileInput = useRef(null);

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };

    const handleUploadChange = (e) => {
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setImage(URL.createObjectURL(uploaded));
    }
    return (
        <>
            <NavbarProfile />
            <div className="header-add">
                <Container>
                    <h3>Add Course</h3>
                </Container>
            </div>
            <hr className="line-style-2" />
            <div className="form-add-course">
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Thumbnail Course</Form.Label>
                            <Row>
                                <Col className="col-md-2 me-5">
                                    <img className="css-img-course" src={image} />
                                </Col>
                                <Col className="col-md-6 ms-3 mt-1">
                                    <Button className="btn-upload-img" onClick={handleClick}>
                                        Pilih Foto
                                    </Button>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleUploadChange}
                                        style={{ display: 'none' }}
                                        accept="image/*"
                                    />
                                    <div className="text-info-img">
                                        <p className="text mt-2 mb-0" >Resolusi Minimal 64 x 64</p>
                                        <p>Max File 1 MB</p>
                                    </div>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Nama Course</Form.Label>
                            <Form.Control type="text" placeholder="Nama Lengkap...." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Kategori Course</Form.Label>
                            <Form.Select>
                                <option>Kategori Course..</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Jenis Course</Form.Label>
                            <Form.Select>
                                <option>Jenis Course..</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInput">
                            <Form.Label className="label">Deskripsi Course</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Deskripsi Course...." />
                        </Form.Group>
                        <Button className="btn-batal" type="submit">
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

export default AddCourse;