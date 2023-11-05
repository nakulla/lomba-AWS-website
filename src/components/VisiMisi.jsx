import React from 'react'
import {Row, Col} from 'react-bootstrap';

function VisiMisi() {
    return (
        <div className='visimisi-session'>
            <Row className='visimisi'>
                <Col className='text-center'>
                    <h2 className='fw-bold'>VISI MISI</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, adipisci?</p>
                </Col>
                <Col className='vis'>
                    <Col>
                    <h4 className='fw-bold'>Visi Program Studi</h4>
                    <p>Terwujudnya sekolah dengan lulusan yang unggul dan berakhlaq mulia, berbudaya kerja, berjiwa technopreuneurship serta berwawasan global sesuai tuntutan industri dan masyarakat.</p>
                    </Col>
                </Col>
                <Col className='misi'>
                    <h4 className='fw-bold'>Misi Program Studi</h4>
                    <Col>
                        1. Menghasilkan peserta didik yang unggul, beriman dan bertakwa kepada Tuhan
                        Yang Maha Esa, berakhlak mulia, berkebinekaan, mandiri, bergotong &nbsp;&nbsp;&nbsp;&nbsp;royong,
                        bernalar kritis, kreatif.<br/> 2. Mewujudkan lingkungan yang berbudaya kerja.<br/>  3.
                        Menghasilkan peserta didik yang terampil serta berjiwa wirausaha sesuai dengan
                        bidang ilmu yang dipelajarinya (Technopreuneurship).<br/>  4. Menumbuh kembangkan
                        literasi, penguasaan perkembangan teknologi, informasi, memahami keberagaman
                        sosial budaya dan kultur.<br/>  5. Menyiapkan peserta didik menjadi tenaga kerja yang
                        handal serta mampu bersaing di didunia kerja.<br/>  6. Meningkatkan pelayanan
                        pendidikan dan pengelolaan sekolah melalui optimalisasi penjaminan mutu
                        pendidikan.
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default VisiMisi