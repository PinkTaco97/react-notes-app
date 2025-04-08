// Boootstrap.
import { Container, Navbar } from 'react-bootstrap';

// Icons.
import { FaRegCopyright  } from "react-icons/fa";

function Footer() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="flex items-center justify-center">
        <Navbar.Brand href="#home">React-Notes-App</Navbar.Brand>
        <div className="flex items-center justify-center gap-2">
            <FaRegCopyright size={14}/>
            <i>2025 Nathan Robertson</i>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;