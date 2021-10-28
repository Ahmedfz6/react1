import './App.css';
import {Form,Container,Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Profil</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
 
</>
     <Form>
   <Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group> 
</Form>
    </div>
  );
}

export default App;
