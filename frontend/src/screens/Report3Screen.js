// - Product category with most orders
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Report3Screen(props) {
    const [submitted, setSubmitted] = useState(false);
    // const [from, setFrom] = useState('');
    // const [to, setTo] = useState('');
    const [productcategoryreport, setProductcategoryreport] = useState('');
    // let l = []
  
    const submitHandler = (e) => {
      e.preventDefault();
      async function getProductCategoryReport(){
        const response = await axios.get(`/api/reports/report-3`);
        const res = response.data;
        setProductcategoryreport(res)
        setSubmitted(true);
      }
      getProductCategoryReport();
    };

    return (
        <>
        <div className="admin">
            <h1>Report 3 - Product category with most orders</h1>
            <form className="form" onSubmit={submitHandler}>
            <div>
                <label></label>
                <button className="primary" type="submit">
                Show
                </button>
            </div>
            </form>
            {submitted &&
            <div>
                <h2>
                Product Category: {productcategoryreport}
                </h2>
            </div>
            }
        </div>
        </>
    );
};
