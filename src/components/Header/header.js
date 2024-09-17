import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const handleRegister = () => {
        navigate("/register");
    }

    return (
        <Navbar expand="lg">
            <Container>
                <NavLink className='navbar-brand' to="/">Hỏi Dân IT</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="user">User</NavLink>
                        <NavLink className='nav-link' to="admin">Admin</NavLink>
                    </Nav>
                    <Nav>
                        <Link className='nav-link' onClick={() => handleLogin()}>Log In</Link>
                        <button className='btn btn-dark ms-3' onClick={() => handleRegister()}>Sign Up</button>
                    </Nav>
                    {/* <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>Log in</NavDropdown.Item>
                            <NavDropdown.Item>Log out</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;