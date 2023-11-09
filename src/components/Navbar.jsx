import {useState, useEffect} from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {navLinks, dropDown} from '../data/index'
import {NavLink} from 'react-router-dom'
import LogoImage from '../assets/img/logo.png';

const NavbarComponent = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 50) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener('scroll', changeBackgroundColor);
    }, []);

    return (
            <Navbar
                expand="lg"
                className={changeColor
                    ? "color-active"
                    : ""}>
                <Container className='nav-space'>
                    <Navbar.Brand href="#home">
                        <img src={LogoImage} alt="logo-image"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className='navnav'>
                        <Nav className="">
                            {
                                navLinks.map((link) => {
                                    return (
                                        <div className='nav-link' key={link.id}>
                                            <NavLink
                                                to={link.path}
                                                className={(
                                                    {isActive, isPending}) => isPending
                                                    ? "pending"
                                                    : isActive
                                                        ? "active"
                                                        : ""}
                                                end="end">{link.text}</NavLink>
                                        </div>
                                    )
                                })
                            }
                        </Nav>
                        <div className='text-center'>
                            <a href="https://www.smkn1-cmi.sch.id/"><button className='btn btn-outline-danger rounded-1' >Jelajahi</button></a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default NavbarComponent