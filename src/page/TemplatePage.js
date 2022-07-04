import MainNavbar from "../components/MainNavbar"
import {Container} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import React from "react";


const TemplatePage = (props) => {

    return(
        <React.Fragment>
            <header>
                <MainNavbar/>
            </header>
                <Outlet></Outlet>
            <footer style={{position:"absolute", bottom: "0", left: "0", width: "100vw"}}>
                <div className='py-5 bg-dark' >
                <Container>
                    <p className='text-center text-white'>
                    Copyright &copy; One 2022
                    </p>
                </Container>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default TemplatePage;