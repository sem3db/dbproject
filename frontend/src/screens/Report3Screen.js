// - Product category with most orders
import React, { useState } from 'react'
import axios from 'axios';

export default function Report3Screen(props,getState) {
    const [submitted, setSubmitted] = useState(false);
    const [productcategoryreport, setProductcategoryreport] = useState('');
    const { adminSignin:{adminInfo}} = getState();
  
    const submitHandler = (e) => {
      e.preventDefault();
      async function getProductCategoryReport(){
        const response = await axios.get(`/api/reports/report-3`,{
            headers:{ Authorization: `Bearer ${adminInfo.token}`}
          }
        );
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
            {submitted && productcategoryreport &&
            <div>
            <table className="table">
                <thead>
                <tr>
                    <th>CATEGORY NAME</th>
                    <th>ORDER COUNT</th>
                </tr>
                </thead>
                <tbody>
                {productcategoryreport.map(creport =>
                <tr key={creport.category_name}>
                    <td>{creport.category_name}</td>
                    <td>{creport.order_count}</td>
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
