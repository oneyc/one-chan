import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Home = () => {
    let navigate = useNavigate();

    const selectThread = (event) => {
        console.log("Check");
        navigate(`../catalog`, { replace: true });
      }

    return(
    <React.Fragment>
        <div
            className="bg-image"
            style={{ position: 'relative', backgroundImage: "url('/pexels-cátia-matos-1072179.jpg')", objectFit: "contain", width:'100%', height: "85vh", zIndex:1}}
        >
            <div className="container" 
            style={{display: 'flex', flexDirection: 'column', textAlign: 'center', height: '100%',alignContent: 'center', justifyContent: 'center'}}
            >
                <h1 style={{ fontSize:"5rem", color: "whitesmoke"}}>Home</h1>
                <p style={{ fontSize:"1.5rem", color: "lightgray"}}>Welcome to One-Channel!</p>
                <Button size="lg" variant="outline-light" onClick={selectThread} style={{width: 'fit-content', margin: '0px auto', cursor:"pointer", zIndex:100}}>
                    Enter Site
                </Button>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Home;