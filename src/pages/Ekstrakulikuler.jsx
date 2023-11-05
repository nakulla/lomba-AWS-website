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

function Ekstrakulikuler() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const slideContent = [
        {
            title: 'English Club',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${ec})`
        }, {
            title: 'Basket Ball',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${basket})`
        }, {
            title: 'Futsal',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${futsal})`
        }, {
            title: 'American Football',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${american})`
        }, {
            title: 'Pramuka',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${pramuka})`
        }, {
            title: 'Seni Gitar Pembangunan',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${sgp})`
        }, {
            title: 'Voli',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${voli})`
        }, {
            title: 'Nihon Kyosanto ',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${nk})`
        }, {
            title: 'PMR',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${pmr})`
        }, {
            title: 'PKS',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dicta cumque t' +
                    'otam commodi illum similique eveniet fugit! Similique, perferendis nesciunt.',
            background: `url(${pks})`
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
                            <h1 className='fw-bold'>
                                {/* Basket
                                <span
                                    style={{
                                        color: '#ffa500'
                                    }}>Ball</span> */
                                }
                                {slideContent[currentIndex].title}
                            </h1>
                            <p>{slideContent[currentIndex].desc}</p>
                            <Button variant='primary' className='btn-eskul'>
                                Daftar Sekarang!
                            </Button>
                        </Col>
                    </Col>
                    <Col className='eskul-lain'>
                        <Col className='eskul-desc d-flex flex-column'>
                            <Col className='d-flex eskul-judul'>
                                <Col className='d-flex keterangan'>
                                    <p className='text-center mt-3'>{slideContent[currentIndex].title}</p>
                                </Col>
                                <Col>
                                    <p className='text-center mt-3'>SMK NEGERI 1 CIMAHI</p>
                                </Col>
                            </Col>
                            <Col className='d-flex text-center align-items-center kumpulan-desc'>
                                <Col className='desc-satu'>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Col>
                                <Col className='desc-dua'>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Col>
                                <Col className='d-flex desc-tiga'>
                                    <Col className='desc-tiga-ket'>
                                        <p className='mt-3'>Lorem ipsum.</p>
                                    </Col>
                                    <Col className='desc-tiga-logo'>
                                        <i className='fw-bold fa-solid fa-search icon'></i>
                                    </Col>
                                </Col>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default Ekstrakulikuler