import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Transactions = () => {
  return (
    <div className='Transactions'>
      <div className="search-Transaction-id">
        <div className="left-search-bar">
          <Input
            type="text"
            placeholder="Search feature, tutorials, etc.."
            startAdornment={
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            } style={{
            border: '1px solid lightgrey', backgroundColor: 'white', fontSize: 'small'
          }}
          />
        </div>
        <div className="right-Filter">
          <div className="dropdown">
            <select>
              <option>Sort </option>
              <option>Order ID </option>
              <option>Order Date </option>
            </select>
          </div>
          <div className='download'>
            < FileDownloadOutlinedIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
