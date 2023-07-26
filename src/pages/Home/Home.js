import React from 'react';
import Navbar from "./Navbar"; 
import ContentBox from './ContentBox';


const Home = () => {
    return (
        <div className= "home-container">

            <Navbar />
      
             <ContentBox />
            <div className = "main-content">
              
           
            </div>
            
        </div>
    );
};

export default Home; 