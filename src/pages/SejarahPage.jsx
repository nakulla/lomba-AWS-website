import {Row, Col} from 'react-bootstrap';
import Faq from '../components/Faq';
import {Link} from 'react-router-dom';
import StrukturGambar from '../assets/img/struktur/struktur.png'
import TimeLine from '../components/TimeLine'
import VisiMisi from '../components/VisiMisi'

const StrukturPage = () => {
    return (
        <div className='struktur-page'>
            <div className="header-struktur"></div>
            <div className='struktur-loc'>
                <Link className='text-decoration-none beranda' to="/">Beranda</Link>
                <p className=''>{">"}</p>
                <Link className='text-decoration-none lokasi'>Sejarah Perkembangan SMK Negeri 1 Cimahi</Link>
            </div>
            <Row className='main-struktur'>
                <Col className='struktur mt-5 mb-5'>
                    <Col>
                        <h1 className='fw-bold text-center mt-5'>Sejarah Pengembangan</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eveniet.</p>
                    </Col>
                    <Col className='sejarah mt-5'>
                        <p className=''>SMK Negeri 1 Cimahi (STM Pembangunan Bandung) merupakan salah
                            satu Lembaga Pendidikan Menengah Kejuruan di Kota Cimahi, Jawa Barat yang
                            menyelenggarakan Program Pendidikan Kejuruan 4 Tahun, dan merupakan salah satu
                            SMK dari 8 (delapan) SMK Negeri di Indonesia yang memiliki program 4 (empat)
                            Tahun, yang pembangunan fisiknya dimulai sejak tahun 1969, di atas tanah seluas
                            3,4 Ha, dan telah menerima siswa sejak tahun 1974 dengan nama STM Negeri
                            Pembangunan Bandung, yang diresmikan pada tanggal 24 Maret 1977.<br/><br/>
                            Perkembangan SMK Negeri 1 Cimahi dari sejak berdiri sampai dengan tahun
                            1995/1996 bernama STM Pembangunan Bandung, sedangkan nama SMK Negeri 1 Cimahi –
                            Bandung berlaku sejak tahun pelajaran 1996/1997 dengan berdasarkan SK Mendikbud
                            No. 036/O/97.<br/><br/>
                            Sejalan dengan otonomi daerah, dengan berpisahnya Kota Cimahi dengan Kab.
                            Bandung, maka pada tahun pelajaran 2001/2002 STM Pembangunan Bandung yang
                            setelahnya bernama SMK Negeri 1 Cimahi – Bandung berubah nama menjadi SMK Negeri
                            1 Kota Cimahi.<br/><br/>
                            Secara geografis SMK Negeri 1 Cimahi terletak di kawasan Industri, yang dapat
                            dijangkau dari berbagai sudut kota Cimahi, baik dari atau ke Kota Bandung,
                            Kabupaten Bandung dan Jakarta dengan mudah, serta dapat dengan mudah diakses
                            oleh industri-industri yang berada di kawasan industri di Jalur Pantura Provinsi
                            Jawa Barat. Sehingga akses yang dapat dilakukan untuk kepentingan akademik baik
                            pembelajaran di sekolah maupun di luar sekolah (Dunia Usaha / Dunia Industri )
                            dapat dilakukan dengan baik.</p>
                    </Col>
                    <VisiMisi />
                    <Col className='mb-5 mt-5'>
                        <h1 className='fw-bold text-center'>Struktur Organisasi</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eveniet.</p>
                    </Col>
                    <Col className='gambar-struktur'>
                        <img src={StrukturGambar} alt="struktur-gambar"/>
                    </Col>
                    <TimeLine/>
                </Col>
            </Row>
            <Faq/>
        </div>
    )
}

export default StrukturPage