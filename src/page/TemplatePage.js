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
            <section style={{minHeight: '80vh'}}>
                <Outlet></Outlet>
            </section>
            <footer>
                <div className='py-5 bg-dark' 
                style={{marginTop: 'auto'}}>
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