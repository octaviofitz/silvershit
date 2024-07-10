import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import useSound from 'use-sound';

import ShitSVG from '../../IMG/shitSVG.svg';
import Audio from '../../IMG/audio.png';
import PedroPedro from '../../Assets/Audio/PedroPedro.mp3';

import './navBar.css';

function NavBar() {
  
  const [playSound] = useSound(PedroPedro);

  
  return (

    <>
      <Navbar className="navBar">
  <Container>
    <Navbar.Brand href="#home" className="d-flex justify-content-between w-100">
      <div>
        <img
          alt=""
          src={ShitSVG}
          width="30"
          height="30"
          className="d-inline-block align-top shitSvg"
        />{' '}
        <a className='Brand'>SILVER SHIT</a>
      </div>
      <img src={Audio} className='audio' onClick={playSound}/>
    </Navbar.Brand>
  </Container>
</Navbar>

    </>
  );
}

export default NavBar;