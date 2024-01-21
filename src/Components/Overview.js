import React,{useState} from 'react';

const Overview = () => {

  const [selectedOption, setSelectedOption] = useState('Last Month');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="Overview">
      <div className="top-row">
          <div className="left-section">
            <h1 style={{paddingLeft :'10px'}}>Overview</h1>
          </div>
          <div className="right-section">
            <div className="dropdown">
             <select onChange={handleDropdownChange} value={selectedOption}>
                <option>Last Month</option>
                <option>Last Day</option>
                <option>Last Week</option>
                <option>Last Year</option>
              </select>
            </div>
          </div>
      </div>
      <div className="second-row">
        <div className="left-column">
          <h2>Online Orders</h2>
          <p>445</p>  
        </div>
        <div className="right-column">
          <h2>Amount Received</h2>
          <p> {'\u20B9'} 22,49,596.23</p> 
        </div>
      </div>
      <h3 style={{marginTop : "30px"}}>Transactions | {selectedOption}</h3>
    </div>
    
    
  );
};

export default Overview;
