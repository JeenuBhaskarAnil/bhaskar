// import axios from "axios";
// import React, { useState, useEffect} from "react";
// import { Link } from "react-router-dom";

// const OrdersData = () => {
//     let [data, setData] = useState()
//     let api = 'http://localhost:4222/getorderdata';
//     useEffect(() => {
//         axios.get(api).then((res) => {
//             console.log(res.data)

//         });
//     }, []);




// }

// export default OrdersData;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Getdata.module.css'  // Import your CSS file for styling

const MainComponent = () => {
  const [ordersData, setOrdersData] = useState([]);
  
  let api = 'http://localhost:4222/getorderdata';

  useEffect(() => {
    axios.get(api).then((res) => {
        console.log(res.data.ordersData)
        setOrdersData(res.data.ordersData)
    })
  }, []);

  return (
    <div className={classes.mainComponent}>
      <h1><center>Orders Data</center></h1>
      {/* <div className={classes.orderList}>
        {ordersData.map((order, index) => (
          <div key={order._id} >
            <h3>Order #{index + 1}</h3>
            <ul>
              {order.items.map((item) => (
                <li key={item._id}>{item.name} - {item.amount} x Rs. {item.price}</li>
              ))}
            </ul>
            <p>Total Price: Rs. {order.totalPrice}</p>
          </div>
        ))}
      </div> */}

{/* <table align='center' border={1} width={800} style={{ marginBottom: '100px' }}>
  <thead>
    <tr>
      <th rowSpan={2}>Order ID</th>
      <th colSpan={3}>Item Details</th>
      <th rowSpan={2}>Total Price</th>
    </tr>
    <tr>
      <th>Item name</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {ordersData.map((order, index) => (
      <React.Fragment key={order._id}>
        <tr align='center'>
          <td rowSpan={order.items.length + 1}>{index + 1}</td>
        </tr>
        {order.items.map((item, itemIndex) => (
          
          <tr key={item._id} align='center'>
            <td>{item.name}</td>
            <td>Rs. {item.price}</td>
            <td>{item.amount}</td>
            
            <td rowSpan={order.items.length}>Rs. {order.totalPrice}</td>
          </tr>
        ))}
        
      </React.Fragment>
    ))}
  </tbody>
</table> */}

<table align='center' border={1}>
  <thead>
    <tr>
      <th rowSpan={2}>Serial No</th>
      <th colSpan={2}>User Details</th>
      <th colSpan={3}>Item Details</th>
    </tr>
    <tr>
      <th>Username</th>
      <th>Table No</th>
      <th>Item name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {ordersData.map((order, index) => {
      const firstRow = (
        <tr key={`first-${order._id}`} align='center'>
          <td rowSpan={order.items.length + 1}>{index + 1}</td>
          <td rowSpan={order.items.length + 1}>{order.billDetails[0].username}</td>
          <td rowSpan={order.items.length + 1}>{order.billDetails[0].tableno}</td>
        </tr>
      );

      const totalPriceRow = (
        <tr key={`totalPrice-${order._id}`} align='right'>
          <td colSpan={6} className={classes.forTotalPrice}>Total Price:
          {order.billDetails[0].totalPrice}</td>
        </tr>
      );

      return (
        <React.Fragment key={order._id}>
          {firstRow}
          {order.items.map((item, itemIndex) => (
            <tr key={item._id} align='center' >
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>Rs. {item.price}</td>
            </tr>
          ))}
          {totalPriceRow}
        </React.Fragment>
      );
    })}
  </tbody>
</table>



    </div>
  );
};

export default MainComponent;