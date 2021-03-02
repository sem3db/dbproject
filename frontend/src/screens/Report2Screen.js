// - Products with most number of sales in a given period
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Report2Screen(props) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [productreport, setProductreport] = useState('');
    // let l = []
  
    const submitHandler = (e) => {
      e.preventDefault();
      async function getProductReport(from,to){
        const response = await axios.get(`/api/reports/report-2`,{from,to});
        console.log(response)
        // const res = response.data;
        // for (var g in res){
        //   let k = []
        //   k.push(g)
        //   var n = res[g]
        //   for (var h in n){
        //     k.push(n[h])
        //   }
        //   l.push(k)
        // }
        // setProductreport(l)
        setSubmitted(true);
      }
      getProductReport(from,to);
    };

    return (
        <>
        <div className="admin">
            <h1>Report2 - Products with most number of sales</h1>
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
            {submitted &&
            <div>
                <p>
                    TABLE
                </p>
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