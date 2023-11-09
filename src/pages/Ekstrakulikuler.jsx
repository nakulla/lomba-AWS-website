import React, {useState, useRef, useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ec from '../assets/img/eskul/ec.png'
import basket from '../assets/img/eskul/basket.jpeg'
import futsal from '../assets/img/eskul/futsal.jpg'
import american from '../assets/img/eskul/american.jpg'
import pramuka from '../assets/img/eskul/pramuka.jpg'
import sgp from '../assets/img/eskul/gitar.jpeg'
import voli from '../assets/img/eskul/voli.jpg'
import nk from '../assets/img/eskul/japan.jpeg'
import pmr from '../assets/img/eskul/pmr.jpg'
import pks from '../assets/img/eskul/pks.jpg'
import silat from '../assets/img/eskul/silat.jpg'
import taekwondo from '../assets/img/eskul/taekwondo.jpg'

function Ekstrakulikuler() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const slideContent = [
        {
            title: 'English Club',
            desc: 'Klub Bahasa Inggris',
            background: `url(${ec})`
        }, {
            title: 'Basket Ball',
            desc: 'Ekstrakulikuler Permainan Bola Basket',
            background: `url(${basket})`
        }, {
            title: 'Futsal',
            desc: 'Ekstrakulikuler Permainan Bola Futsal',
            background: `url(${futsal})`
        }, {
            title: 'American Football',
            desc: 'Ekstrakulikuler Permainan Sepak Bola Amerika',
            background: `url(${american})`
        }, {
            title: 'Pramuka',
            desc: 'Ekstrakulikuler Pramuka',
            background: `url(${pramuka})`
        }, {
            title: 'Seni Gitar Pembangunan',
            desc: 'Klub Seni Gitar Pembangunan',
            background: `url(${sgp})`
        }, {
            title: 'Voli',
            desc: 'Ekstrakulikuler Permainan Bola Voli',
            background: `url(${voli})`
        }, {
            title: 'Nihon Kyosanto ',
            desc: 'Klub Bahasa Inggris',
            background: `url(${nk})`
        }, {
            title: 'PMR',
            desc: 'Organisasi Palang Merah Remaja SMKN 1 Cimahi',
            background: `url(${pmr})`
        }, {
            title: 'PKS',
            desc: 'Organisasi Patroli Keamanan Sekolah SMKN 1 Cimahi',
            background: `url(${pks})`
        }, {
            title: 'Pencak Silat',
            desc: 'Ekstrakulikuler Seni Bela Diri Pencak Silat',
            background: `url(${silat})`
        }, {
            title: 'Taekwondo',
            desc: 'Ekstrakulikuler Seni Bela Diri Taekwondo',
            background: `url(${taekwondo})`
        }
    ];

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slideContent.length;
        setCurrentIndex(newIndex);
        slideToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slideContent.length) % slideContent.length;
        setCurrentIndex(newIndex);
        slideToIndex(newIndex);
    };

    const slideToIndex = (index) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            sliderRef.current.scrollLeft = index * slideWidth;
        }
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoSlide();

        return() => {
            stopAutoSlide();
        };
    }, [currentIndex]);

    return (
        <div className='eskul-page'>
            <Row
                className='eskul-session d-flex flex-column'
                onMouseEnter={stopAutoSlide}
                onMouseLeave={startAutoSlide}
                style={{
                    background: `${slideContent[currentIndex].background}, rgba(0, 0, 0, 0.4)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'darken'
                }}>
                <Col className='d-flex flex-column'>
                    <Col className='eskuls'>
                        <Col className='desc-eskul'>
                            <h1 className='eskul-h1 fw-bold'>
                                {/* Basket
                                <span
                                    style={{
                                        color: '#ffa500'
                                    }}>Ball</span> */
                                }
                                {slideContent[currentIndex].title}
                            </h1>
                            <p className='eskul-p'>{slideContent[currentIndex].desc}</p>
                        </Col>
                    </Col>
                    <div className='eskul-lain'>
                        <Col className='eskul-desc d-flex flex-column'>
                            <div className='d-flex eskul-judul'>
                                <Col className='d-flex keterangan mt-2'>
                                    <p className='text-center fw-bold judul-eskul'>{slideContent[currentIndex].title}</p>
                                </Col>
                                <Col className='d-flex eskul-sekolah mt-2'>
                                    <p className='text-center'>SMK NEGERI 1 CIMAHI</p>
                                </Col>
                            </div>
                            <Col className='d-flex text-center align-items-center kumpulan-desc'>
                                <Col className='desc-satu'>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Col>
                                <Col className='desc-dua'>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Col>
                                <div className='d-flex desc-tiga'>
                                    <Col className='desc-tiga-ket'>
                                        <p className='mt-3'>Lorem ipsum.</p>
                                    </Col>
                                    <div className='desc-tiga-logo'>
                                        <i className='fw-bold fa-solid fa-search icon'></i>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Ekstrakulikuler