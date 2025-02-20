// - Customer - order report
import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Report5Screen(props) {
  const [submitted, setSubmitted] = useState(false);
  const [orderreports, setOrderreports] = useState('');
  const adminSignin = useSelector(state =>state.adminSignin);
  const {adminInfo} =adminSignin;

  const submitHandler = (e) => {
    e.preventDefault();
    async function getOrderReports(){
      const response = await axios.get(`/api/reports/report-5`,{
        headers:{ Authorization: `Bearer ${adminInfo.token}`}
      }
      );
      const res = response.data;
      setOrderreports(res)
      setSubmitted(true);
    }
    getOrderReports();
  };

  return (
    <>
    <div className="admin">
      <h1>Report 5 - Order report</h1>
      <form className="form" onSubmit={submitHandler}>
        <div>
            <label></label>
            <button className="primary" type="submit">
            Show
            </button>
        </div>
      </form>
      {submitted && orderreports &&
      <div>
      <table className="table">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>CUSTOMER ID</th>
            <th>CUSTOMER NAME</th>
            <th>CUSTOMER TYPE</th>
            <th>ORDER DATE</th>
            <th>TOTAL PAYMENT</th>
            <th>PAYMENT METHOD</th>
          </tr>
        </thead>
        <tbody>
        {orderreports.map(oreport =>
          <tr key={oreport.ordred_id}>
            <td>{oreport.order_id}</td>
            <td>{oreport.customer_id}</td>
            <td>{oreport.customer_name}</td>
            <td>{oreport.customer_type}</td>
            <td>{oreport.order_date.substring(0, 10)}</td>
            <td>{oreport.total_payment}</td>
            <td>{oreport.payment_method}</td>
          </tr>
        )}
        </tbody>
      </table>
      </div>
      }
    </div>
    </>
  );
};
