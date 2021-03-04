import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Report1Screen(props) {
  const [year, setYear] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [categoryreports, setCategoryreports] = useState('');
  let l = []
  const adminSignin = useSelector(state =>state.adminSignin);
  const {adminInfo} =adminSignin;

  const submitHandler = (e) => {
    e.preventDefault();
    async function getCategoryReports(year){
      const response = await axios.get(`/api/reports/report-1/${year}`,{
        headers:{ Authorization: `Bearer ${adminInfo.token}`}
      });
      const res = response.data;
      for (var g in res){
        let k = []
        k.push(g)
        var n = res[g]
        for (var h in n){
          k.push(n[h])
        }
        l.push(k)
      }
      setCategoryreports(l)
      setSubmitted(true);
    }
    getCategoryReports(year);
  };

  return (
    <>
    <div className="admin">
      <h1>Report 1 - Quarterly sales report</h1>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="year">Input Year</label>
          <input
            id="year"
            type="number"
            placeholder="Enter a year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label></label>
          <button className="primary" type="submit">
            Show Report
          </button>
        </div>
      </form>
      {submitted && categoryreports &&
      <div>
      <table className="table">
        <thead>
          <tr>
            <th>CATEGORY NAME</th>
            <th>Q1 SALES</th>
            <th>Q2 SALES</th>
            <th>Q3 SALES</th>
            <th>Q4 SALES</th>
          </tr>
        </thead>
        <tbody>
        {categoryreports.map(r =>
          <tr key={r}>
            <td>{r[0]}</td>
            <td>{r[1]}</td>
            <td>{r[2]}</td>
            <td>{r[3]}</td>
            <td>{r[4]}</td>
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
