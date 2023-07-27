import React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import { Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import homeim from './somestagehome.png';
import img2 from './img2.png'; 
import "./ContentBox.css"; 

const Container = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    borderRadius:  '30px',
    paddingTop: '10px',
    margin: '25px'

}));
 /*
const Rectangle5 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path opacity="0.16" d="M1.11287 22.4109C0.0992716 21.7979 -0.225521 20.4793 0.387427 19.4657L11.4858 1.11288C12.0988 0.0992796 13.4174 -0.225514 14.431 0.387435L32.7838 11.4858C33.7974 12.0988 34.1222 13.4174 33.5093 14.431L22.4109 32.7838C21.7979 33.7974 20.4793 34.1222 19.4657 33.5093L1.11287 22.4109Z" fill="white"/>
  </svg>
);

const Star3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="74" height="119" viewBox="0 0 74 119" fill="none">
  <path d="M37.6435 1.56802C39.4346 -0.242118 42.5137 1.11922 42.3802 3.6622L41.2503 25.186C40.4214 40.9741 46.3752 56.3644 57.6133 67.4843L72.9344 82.6441C74.7445 84.4352 73.3832 87.5143 70.8402 87.3808L49.3163 86.2508C33.5283 85.4219 18.138 91.3757 7.01808 102.614L-8.1417 117.935C-9.93278 119.745 -13.0119 118.384 -12.8784 115.841L-11.7484 94.3169C-10.9196 78.5289 -16.8733 63.1385 -28.1115 52.0186L-43.4325 36.8588C-45.2427 35.0678 -43.8813 31.9886 -41.3383 32.1221L-19.8145 33.2521C-4.02648 34.081 11.3639 28.1272 22.4838 16.8891L37.6435 1.56802Z" fill="#FFC14A"/>
</svg>
); 
*/



const ContentBox = () => {
  return (
    <Container elevation={3}>


      <h1 className="title">Artists & Audiences </h1>
      <h1 className= "title1">Above All</h1>
      <img src={homeim} alt="main image" className="homeimg" style={{
        margin: 'auto',
      }} />
      
      
      <div className="buttonholder"> 
      <h1 className="buttonlabel">ABOUT US</h1>
      </div>

    
      <h1 className= "title3">Get more from</h1><h1 className
      ="title3">your streams</h1>
      


      <img src={img2} alt="image2" className="img2" style={{
       
        
      }} />
      

    
    </Container>

  );
};

export default ContentBox;

