import Nabar from './components/Navbar'
import Footer from './components/Footer'
import CopyRight from './components/CopyRight'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Sejarah from './pages/SejarahPage'
import Jurusan from './pages/JurusanPage'
import Ekstrakulikuler from './pages/Ekstrakulikuler'
import useScrollToTop from './components/useScrollToTop'

function App() {

    useScrollToTop()
    return <div>
        <Nabar/>

        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/sejarah' Component={Sejarah}/>
            <Route path='/eskul' Component={Ekstrakulikuler}/>
            <Route path='/jurusan' Component={Jurusan}/>
        </Routes>

        <Footer/>
        <CopyRight/>
    </div>
}

export default App