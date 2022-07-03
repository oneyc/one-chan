import React from "react";

const Home = () => {
    var textStyle = {
        position: 'absolute', 
        top: '10%', 
        left: '10%'
      };

    return(
    <React.Fragment>
        <div
            className="bg-image"
            style={{ position: 'relative', backgroundImage: "url('https://picsum.photos/1920/1080')", height: "100vh", zIndex:-1}}
        ></div>
                <h1 style={{
                    position: 'absolute', 
                    top: '20%', 
                    left: '10%',
                    color: 'white',
                    fontSize: '5rem'
                }}>Home</h1>
                <p style={{
                    position: 'absolute', 
                    top: '30%', 
                    left: '10%',
                    color: 'white',
                    fontSize: '2rem'
                }} >Welcome to One-Chan!</p>
    </React.Fragment>
    )

}

export default Home;