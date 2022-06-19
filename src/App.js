import {Image, Button, Container, Col, Row, Navbar, Nav, NavDropdown, Card} from 'react-bootstrap';
import MainNavbar from "./components/MainNavbar"
import Intro from "./components/Intro"
import ListOfThreads from './components/ListOfThreads';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header>
        <MainNavbar/>
      </header>
      <body>
          <Intro/>
          <ListOfThreads/>
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
