import { Container, Row, Col } from 'react-bootstrap'; 

const CopyRight = () => {
    return(
        <div className='copyright text-center'>
            <Container>
                <Row>
                    <Col className='p-1'>
                    <p className='mt-3'>Copyright 2023 © SMKN 1 CIMAHI</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CopyRight