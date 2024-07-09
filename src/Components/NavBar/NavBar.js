import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import ShitSVG from '../../IMG/shitSVG.svg';

import './navBar.css';

function NavBar() {
  return (
    <>
      <Navbar className="navBar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={ShitSVG}
              width="30"
              height="30"
              className="d-inline-block align-top shitSvg"
            />{' '}
            <a className='Brand'>SILVER SHEET</a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;