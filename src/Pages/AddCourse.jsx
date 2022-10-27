import { React, useState, useRef } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";
import NavbarProfile from "../Components/NavbarProfile";
import "../Styles/AddCourse.css";
import imgCourse from "../assets/course-img.png";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";


const AddCourse = () => {
    // const [image, setImage] = useState(null);
    // const [srcImage, setSrcImage] = useState(null);
    const hiddenFileInput = useRef(null);
    // const [crop, setCrop] = useState({ aspect: 16 / 9 });
    // const [result, setResult] = useState(null)

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };

    // // const handleUploadChange = (e) => {
    // //     console.log(e.target.files[0]);
    // //     let uploaded = e.target.files[0];
    // //     setImage(URL.createObjectURL(uploaded));
    // // }

    // const handleUploadChange = (e) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         const reader = new FileReader()
    //         reader.readAsDataURL(e.target.files[0]);
    //         reader.addEventListener("load", () => {
    //             setSrcImage(reader.result);
    //         })
    //     }
    // }

    // const getCroppedImg = async () => {
    //     try {
    //         console.log("image")
    //         console.log(image)
    //         const canvas = document.createElement("canvas");
    //         const scaleX = image.naturalWidth / image.width;
    //         const scaleY = image.naturalHeight / image.height;
    //         canvas.width = crop.width;
    //         canvas.height = crop.height;
    //         const ctx = canvas.getContext("2d");
    //         ctx.drawImage(
    //             image,
    //             crop.x * scaleX,
    //             crop.y * scaleY,
    //             crop.width * scaleX,
    //             crop.height * scaleY,
    //             0,
    //             0,
    //             crop.width,
    //             crop.height
    //         );

    //         const base64Image = canvas.toDataURL("image/jpeg", 1);
    //         setResult(base64Image);
    //         console.log(result);
    //     } catch (e) {
    //         console.log(e)
    //         console.log("crop the image");
    //     }
    // };

    const [src, setSrc] = useState(null)
    const handleUploadChange = e => {
        console.log(e.target.files[0])
        setSrc(URL.createObjectURL(e.target.files[0]))
        console.log("src", src)
    }

    const [image, setImage] = useState(imgCourse)
    const [crop, setCrop] = useState({ aspect: 16 / 9 })
    const [result, setResult] = useState(null);

    const cropImageNow = () => {
        console.log("image.naturalWidth", image?.naturalWidth)
        const canvas = document.createElement('canvas');
        const scaleX = image?.naturalWidth / image?.width;
        const scaleY = image?.naturalHeight / image?.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        setResult(base64Image);
    };

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
                                    <div>
                                        {src && (
                                            <ReactCrop crop={crop} onImageLoaded={setImage} onChange={setCrop}>
                                                <img src={src} />
                                            </ReactCrop>

                                        )}
                                        {src && <button onClick={cropImageNow}>Crop</button>}
                                    </div>
                                    <div className="text-info-img">
                                        <p className="text mt-2 mb-0" >Resolusi Minimal 64 x 64</p>
                                        <p>Max File 1 MB</p>
                                    </div>
                                    <div>{result && <img src={result} />}</div>
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

export default AddCourse;