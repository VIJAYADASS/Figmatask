import React, { useState, useEffect} from "react";

const Table = () => {
    const [transactions, setTransactions] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/src/list.json');
          const data = await response.json();
  
          setTransactions(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return(
        <div className='Transaction-list'>
            <table className='Transaction-table'>
                <thead>
                    <tr>
                    <th className="Cell" style={{textAlign : 'left', backgroundColor : 'lightgray'}}>Order ID</th>
                    <th className="cell">Order Date</th>
                    <th className="cell" style={{paddingLeft : ' 160px'}}>Order Amount</th>
                    <th className="Cell" style={{textAlign : 'right', backgroundColor : 'lightgray'}}>Transaction Fees</th>
                    </tr>
                    <tr>
                        <th className="row1" style={{color : 'blue'}}>#ORD0001</th>
                        <th className="row">2 June,2021</th>
                        <th className="row" style={{paddingLeft : ' 160px'}}>{'\u20B9'} 1,196.45</th>
                        <th className="row2">{'\u20B9'} 45</th>
                    </tr>
                    <tr>
                        <th className="row1" style={{color : 'blue'}}>#ORD0002</th>
                        <th className="row">3 June,2021</th>
                        <th className="row" style={{paddingLeft : ' 160px'}}>{'\u20B9'} 1,196.45</th>
                        <th className="row2">{'\u20B9'} 45</th>
                    </tr>
                    <tr>
                        <th className="row1" style={{color : 'blue'}}>#ORD0003</th>
                        <th className="row">4 June,2021</th>
                        <th className="row" style={{paddingLeft : ' 160px'}}>{'\u20B9'} 1,196.45</th>
                        <th className="row2">{'\u20B9'} 45</th>
                    </tr>
                    <tr>
                        <th className="row1" style={{color : 'blue'}}>#ORD0004</th>
                        <th className="row">5 June,2021</th>
                        <th className="row" style={{paddingLeft : ' 160px'}}>{'\u20B9'} 1,196.45</th>
                        <th className="row2">{'\u20B9'} 45</th>
                    </tr>
                    <tr>
                        <th className="row1" style={{color : 'blue'}}>#ORD0005</th>
                        <th className="row">7 June,2021</th>
                        <th className="row" style={{paddingLeft : ' 160px'}}>{'\u20B9'} 1,196.45</th>
                        <th className="row2">{'\u20B9'} 45</th>
                    </tr>
                    <tr>
                        <th className="row1" style={{color : 'blue'}}>#ORD0006</th>
                        <th className="row">10 June,2021</th>
                        <th className="row" style={{paddingLeft : ' 160px'}}>{'\u20B9'} 1,196.45</th>
                        <th className="row2">{'\u20B9'} 45</th>
                    </tr>
                    <tr>
                        <th className="row1" style={{color : 'blue'}}>#ORD0007</th>
                        <th className="row">12 June,2021</th>
                        <th className="row" style={{paddingLeft : ' 160px'}}>{'\u20B9'} 1,196.45</th>
                        <th className="row2">{'\u20B9'} 45</th>
                    </tr>

                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.orderId}>
                            <td>{transaction.orderId}</td>
                            <td>{transaction.orderDate}</td>
                            <td>{transaction.orderAmount}</td>
                            <td>{transaction.transactionFees}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
    )
}

export default Table;