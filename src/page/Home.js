import React from "react";

const Home = () => {
    var textStyle = {
        position: 'absolute', 
        top: '10%', 
        left: '10%'
      };

    return(
    <React.Fragment>
        <h1 style={{
            position: 'absolute', 
            top: '20%', 
            left: '10%',
            color: 'white',
            fontSize: '5rem'
        }}>Home</h1>
        <p style={{
            position: 'absolute', 
            top: '32%', 
            left: '10%',
            color: 'white',
            fontSize: '1.8rem'
        }} >Welcome to One-Chan!</p>
        <div
            className="bg"
            style={{ position: 'absolute', backgroundColor: "rgba(0,0,0,0.5)", width:'100vw' ,height: "100vh", zIndex:-1}}
        ></div>
        <div
            className="bg-image"
            style={{ position: 'relative', backgroundImage: "url('https://picsum.photos/1920/1080')", height: "100vh", zIndex:-2}}
        ></div>
    </React.Fragment>
    )
}

export default Home;