import React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import { Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import "./ContentBox.css"; 

const Container = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    borderRadius:  '30px',
    paddingTop: '10px',

}));

const CircleShape = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '150px',
    right: '-45px',
    width: '70px',
    height: '35px',
    borderRadius: '100px 100px 0 0',
    backgroundColor: 'yellow',
    transform: 'translateX(-50%) rotate(270deg)', 
  }));
  

const ContentBox = () => {
  return (
    <Container elevation={3}>
        <CircleShape />

      <h1 className="title">Artists & Audiences </h1>
      <h1 className= "title1">Above All</h1>
      <AutoAwesomeIcon
          sx={{
            fontSize: '64px', 
            color: 'pink', 
            left: '100px',
            top: '200px',
            position: 'absolute', 
          }}
        />
        <GradeTwoToneIcon
            sx= {{
                fontSize: '50px',
                position: 'absolute',
                color: 'green',
                stroke: 'green',
                top: '80px',
                right: '300px', 
                strokeWidth: '.5px', 

            }}
        />
    </Container>

  );
};

export default ContentBox;

