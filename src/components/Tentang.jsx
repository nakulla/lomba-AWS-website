import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import sekolah from '../assets/img/sekolah.jpg'


function Tentang() {
  return (
    <div className='tentang-session'>
        <Container className='tentang'>
        <Row className='tentang-desc'>
            <Col>
            <h1 className='fw-bold mb-4'>Sejarah Perkembangan <br/> SMK Negeri <span>1 Cimahi</span></h1>
            <p>SMK Negeri 1 Cimahi (STM Pembangunan Bandung) adalah salah satu SMK di Cimahi, Jawa Barat, yang menyediakan Program Pendidikan Kejuruan 4 Tahun. Dibangun sejak 1969 di lahan 3,4 Ha, mulai menerima siswa pada 1974 dengan nama STM Negeri Pembangunan Bandung, dan resmi pada 24 Maret 1977.</p>
            <Button className='btn-tentang'>
                selengkapnya
            </Button>
            </Col>            
        </Row>
        <Row className='tentang-image'>
            <img src={sekolah} alt="sekolah-image" className='img-tentang' />
        </Row>
        </Container>
    </div>
  )
}

export default Tentang