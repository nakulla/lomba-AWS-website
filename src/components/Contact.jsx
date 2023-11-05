import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function Contact() {
    const [formData, setFormData] = useState(
        {name: '', email: '', phone: '', message: ''}
    );
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact">
            <div className="contact-desc">
                <h2 className='mb-3 fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p className='mb-3'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus,
                    repellat? Dolor at iste voluptatum soluta officiis quidem in velit nam.
                </p>
                <Button variant='success' className='button-contact mb-3'>
                    <i className='fw-bold fa-brands fa-whatsapp icon me-2'></i>
                    Hubungin Kami
                </Button>
                <div className='contact-person'>
                    <p>+62 123 3456 7891<br/>
                        smknegeri1cimahi@smkn1-cmi.sch.id</p>
                </div>
            </div>
            <div className="contact-form">
                {
                    submitted
                        ? (
                            <div>
                                <h2>Terima kasih telah mengirim pesan!</h2>
                                <p>Nama: {formData.name}</p>
                                <p>Email: {formData.email}</p>
                                <p>Nomor Telepon: {formData.phone}</p>
                                <p>Pesan: {formData.message}</p>
                            </div>
                        )
                        : (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Nama</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <div className='form-satu'>
                                        <div className='form-email'>
                                            <Form.Label className='fw-bold'>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}/>
                                        </div>
                                        <div className='form-nomor'>
                                            <Form.Label className='fw-bold'>Nomor Telepon</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Pesan</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        size="lg"/>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3">
                                    Kirim Pesan
                                </Button>
                            </Form>
                        )
                }
            </div>
        </div>
    );
}

export default Contact;
