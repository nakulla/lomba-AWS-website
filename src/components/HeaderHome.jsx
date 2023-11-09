import {Container, Row, Col} from 'react-bootstrap';
import LogoSekolah from '../assets/img/logo-sekolah.png';
import {useNavigate} from 'react-router-dom';

const HeaderHome = () => {
    let navigate = useNavigate();
    return (
        <div>
            <header
                className="w-100 min-vh-100 d-flex align-items-center justify-content-center overflow-hidden">
                <Container>
                    <Row
                        className='header-box d-flex align-items-center column flex-column justify-content-center pt-lg-5'>
                        <Col className='logo-sekolah mb-3'>
                            <img src={LogoSekolah} alt="logo-sekolah img-fluid"/>
                        </Col>
                        <Col lg='6'>
                            <h1 className='mb-4 text-center'>
                                SMKN 1 CIMAHI
                            </h1>
                            <p className='mb-4 text-center'>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nobis necessitatibus perspiciatis ea vero delectus ipsa?</p>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <button
                                className='btn btn-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp'
                                onClick={() => navigate("/sejarah")}>lihat sejarah</button>
                            <button
                                className='btn btn-outline-primary btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp button-jurusan' onClick={() => navigate("/jurusan")}>lihat jurusan</button>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default HeaderHome