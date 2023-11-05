import React, {useState, useRef, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Faq from '../components/Faq';
import {jurusan} from '../data';

const StrukturPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % jurusan.length;
        setCurrentIndex(newIndex);
        slideToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + jurusan.length) % jurusan.length;
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
        <div
            className="jurusan-page"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}>
            <div className="header-jurusan">
                <div className="slider" ref={sliderRef}>
                    {
                        jurusan.map((data, index) => (
                            <div className="slider-item" key={data.id}>
                                <div className="mt-3 jurusan-isi">
                                    <h3 className="judul fw-bold">{data.title}</h3>
                                    <p className="deskrip">{data.desc}</p>
                                    <button className='slider-item-btn'>Selengkapnya</button>
                                </div>
                                <div className="swiper-slide-img">
                                    <img src={data.image} alt=""/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="jurusan-loc">
                <Link className="text-decoration-none beranda" to="/">
                    Beranda
                </Link>
                <p className="mt-3">{">"}</p>
                <Link className="text-decoration-none lokasi">
                    Jurusan Jurusan pada SMK Negeri 1 Cimahi
                </Link>
            </div>
            <div className='jurusan-session'>
                <Row>
                    <Col>
                    <h2 className='text-center fw-bold' style={{color:'#231942'}}>Jurusan Jurusan SMKN <span style={{color:'#dc3545'}}>1 CIMAHI</span></h2>
                    </Col>
                </Row>
                {
                    jurusan.map((data, index) => (
                        <Row className='d-flex flex-column jurusan-smk'>
                            <Col className=''>
                                <Col className='d-flex flex-column align-items-center jurusan-desc'>
                                    <img src={data.logo} className='logo-img mt-3' alt=""/>
                                    <h3 className='fw-bold'>{data.title}</h3>
                                </Col>
                                <p className='text-center'>{data.desc2}</p>
                            </Col>
                            <Col className='d-flex jurusan-images'>
                                <img src={data.imageDua} alt=""/>
                                <img src={data.image} alt=""/>
                                <img src={data.imageTiga} alt=""/>
                            </Col>
                        </Row>
                    ))
                }
            </div>
            <Faq/>
        </div>
    );
};

export default StrukturPage;
