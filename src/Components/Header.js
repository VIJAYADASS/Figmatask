import React from 'react';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

const Header = () => {
   
  return (
    <div className="header">
      <h1 style={{paddingLeft : '15px'}}>Payment</h1>
      <p><HelpOutlineIcon  style={{fontSize: "small", alignItems : "center"}}/>How It Works</p>
      <div className="search-bar">
        <Input
        type="text"
        placeholder="Search feature, tutorials, etc.."
        startAdornment={
          <InputAdornment position="start">
            <SearchTwoToneIcon />
          </InputAdornment>
        } style={{
          border: '1px solid lightgrey', backgroundColor :'white', fontSize : 'small'}}
      />
        
      </div>
      <div className="icons-1">
        <TextsmsOutlinedIcon />
      </div>
      <div className='icons-2'>
        <ArrowDropDownCircleOutlinedIcon />
      </div>
      
    </div>
  );
};

export default Header;
