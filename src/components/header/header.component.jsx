// Boootstrap.
import { Container, Navbar, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Notes-App</Navbar.Brand>
        <Button variant="outline-secondary" className="btn-sm float-end">New Note</Button>
      </Container>
    </Navbar>
  );
}

export default Header;