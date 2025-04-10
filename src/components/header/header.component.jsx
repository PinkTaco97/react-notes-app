// Boootstrap.
import { Container, Navbar, Button } from 'react-bootstrap';

// Store.
import { useModalStore } from '../../store/modal.store'; 

function Header() {
  const { setShowNewNoteModal } = useModalStore();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>React-Notes-App</Navbar.Brand>
        <Button variant="outline-secondary" className="btn-sm float-end" onClick={() => setShowNewNoteModal(true)}>New Note</Button>
      </Container>
    </Navbar>
  );
}

export default Header;