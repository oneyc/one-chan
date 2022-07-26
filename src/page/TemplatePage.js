import MainNavbar from "../components/MainNavbar"
import {Container} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import React from "react";


const TemplatePage = (props) => {

    return(
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <header>
                <MainNavbar/>
            </header>
                <Outlet></Outlet>
            <footer style={{marginTop: 'auto'}}>
                <div className='py-5 bg-dark' >
                <Container>
                    <p className='text-center text-white'>
                    Copyright &copy; One 2022
                    </p>
                </Container>
                </div>
            </footer>
        </div>
    )
}

export default TemplatePage;