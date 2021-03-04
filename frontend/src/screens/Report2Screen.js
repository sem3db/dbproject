// - Products with most number of sales in a given period
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Report2Screen(props) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [productreport, setProductreport] = useState('');
    const adminSignin = useSelector(state =>state.adminSignin);
    const {adminInfo} =adminSignin;

    const submitHandler = (e) => {
        e.preventDefault();
        async function getProductReport(from,to){
            const response = await axios.post(`/api/reports/report-2`,{"from":from,"to":to},{
                headers:{ Authorization: `Bearer ${adminInfo.token}`}
              }
            );
            const res = response.data;
            setProductreport(res)
            setSubmitted(true);
        }
        getProductReport(from,to);
    };

    return (
        <>
        <div className="admin">
            <h1>Report 2 - Products with most number of sales in given period</h1>
            <form className="form" onSubmit={submitHandler}>
            <div>
                <label htmlFor="from">From</label>
                <input
                id="from"
                type="date"
                placeholder="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
                ></input>
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input
                id="to"
                type="date"
                placeholder="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
                ></input>
            </div>
            <div>
                <label></label>
                <button className="primary" type="submit">
                Show
                </button>
            </div>
            </form>
            {submitted && productreport &&
            <div>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>PRODUCT</th>
                    <th>BRAND</th>
                    <th>DESCRIPTION</th>
                    <th>WEIGHT</th>
                    <th>DIMENSION</th>
                    <th>SALES QUANTITY</th>
                </tr>
                </thead>
                <tbody>
                {productreport.map(preport =>
                <tr key={preport.product_id}>
                    <td>{preport.product_id}</td>
                    <td>{preport.product_name}</td>
                    <td>{preport.brand}</td>
                    <td>{preport.description}</td>
                    <td>{preport.weight}</td>
                    <td>{preport.dimension}</td>
                    <td>{preport.sale_quantity}</td>
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


// {submitted &&
// <div>
// <table className="table">
//     <thead>
//     <tr>
//         <th>CATEGORY</th>
//         <th>Q1 SALES</th>
//         <th>Q2 SALES</th>
//         <th>Q3 SALES</th>
//         <th>Q4 SALES</th>
//     </tr>
//     </thead>
//     <tbody>
//     {categoryreports.map(r =>
//     <tr key={r}>
//         <td>{r[0]}</td>
//         <td>{r[1]}</td>
//         <td>{r[2]}</td>
//         <td>{r[3]}</td>
//         <td>{r[4]}</td>
//     </tr>
//     )}
//     </tbody>
// </table>
// </div>
// }