import {Image, Button, Container, Col, Row, Navbar, Nav, NavDropdown, Card} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">One-channel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <body>
          <Container className="mb-5">
            <Row className="my-5">
              <Col sm={7} className="">
                <Image src="https://picsum.photos/700/300" fluid></Image>
              </Col>
              <Col className="">
                <h1 className="my-2">Current Board</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <Button variant="outline-dark">Start A New Thread</Button>{' '}
              </Col>
            </Row>
            <hr/>
          </Container>
          <Container className=' threadsList'>
          <Row xs={2} sm={3} md={4} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://picsum.photos/200" />
                  <Card.Body>
                    <Card.Title>Thread title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          </Container>
      </body>
      <footer>
        <div className='mt-5 py-5 bg-dark'>
          <Container>
            <p className='text-center text-white'>
              Copyright &copy; One 2022
            </p>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default App;
