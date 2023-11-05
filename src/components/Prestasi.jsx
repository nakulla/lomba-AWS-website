import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {prestasiJuara} from '../data/index';

function Prestasi() {
    return (
        <div className='prestasi-session'>
            <Container className='prestasi'>
                <Row className='prestasi-desc'>
                    <Col>
                        <h2 className='fw-bold mb-3'>Alumni SMKN 1 CIMAHI</h2>
                        <p>Dari 79 siswa SMK Negeri 1 Cimahi yang berhasil lolos, POLBAN dengan 57 siswa diterima, dikenal karena kualitas pendidikannya. UPI dengan 5 siswa, terkenal dalam pendidikan. POLMAN dengan 9 siswa, fokus pada manufaktur dan teknik. Selanjutnya, Universitas Brawijaya dan ISBI menerima 2 dan 3 siswa, masing-masing. IPB dan UNPAD menerima 2 dan 1 siswa.</p>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <div className='image-container'>
                        <div className='gambar-container'>
                            {
                                prestasiJuara.map((data) => {
                                    return (<img key={data.id} src={data.image}/>)
                                })
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Prestasi