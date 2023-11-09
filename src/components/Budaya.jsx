import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import {budaya} from '../data/index';
import Swal from 'sweetalert2';

function Budaya() {
    const handleImageClick = (data) => {
        Swal.fire({
            title: data.title,
            imageUrl: data.image,
            imageWidth: 550,
            imageHeight: 350,
            text: data.desc,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'close',
            showCloseButton: true,
            showClass: {
                popup: 'animate__animated animate__bounceIn'
            },
            hideClass: {
                popup: 'animate__animated animate__bounceOut'
            },
            customClass: {
                container: 'my-custom-swal-container',
                image: 'my-custom-swal-image'
            }
        });

    };

    return (
        <div className='budaya-session'>
            <Row>
                <Col className='budaya-desc mb-5'>
                    <h2 className='text-center fw-bold'>Budaya SMKN <span style={{color:'#dc3545'}}>1 CIMAHI</span></h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla.</p>
                </Col>
            </Row>
            <Row className='budaya-list'>
                {
                    budaya.map((data) => (
                        <Card
                            className='budaya-list-items'
                            key={data.id}
                            onClick={() => handleImageClick(data)}
                            style={{
                                cursor: 'pointer'
                            }}>
                            <Card.Img variant="top" src={data.image} alt={data.title}/>
                            <Card.Body className='text-center budaya-body mt-2 mb-1'>
                                <Card.Title className='fw-bold'>{data.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))
                }
            </Row>
        </div>
    );
}

export default Budaya;
