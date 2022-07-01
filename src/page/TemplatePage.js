import MainNavbar from "../components/MainNavbar"
import {Container} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import React from "react";


const TemplatePage = (props) => {
    
    // useEffect(()=> {
    //     console.log("Navigating to home")
    //     return navigate("/home")
    // }, [])

    return(
        <React.Fragment>
            <header>
                <MainNavbar/>
            </header>
                <Outlet></Outlet>
            <footer>
                <div className='py-5 bg-dark'>
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