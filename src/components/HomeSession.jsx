import React from 'react'
import HeaderHome from './HeaderHome'
import Faq from './Faq'
import Contact from './Contact'
import Tentang from './Tentang'
import Video from './/Video'
import Budaya from './Budaya'
import Slogan from './Slogan'
// import Prestasi from './Prestasi'

function HomeSession() {
    return (
        <div className='home-session'>
            <HeaderHome/>
            <Tentang/>
            <Video/>
            <Budaya />
            {/* <Prestasi /> */}
            <Slogan/>
            <Faq/>
            <Contact/>
        </div>
    )
}

export default HomeSession