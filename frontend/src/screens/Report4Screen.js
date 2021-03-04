// - Given a product, time period with most interest to it
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Report4Screen(props,getState) {
    const productId = props.match.params.id;
    const [submitted, setSubmitted] = useState(false);
    const [producttimereport, setProducttimereport] = useState('');
    const { adminSignin:{adminInfo}} = getState();

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     async function getProductTimeReport(productId){
    //         const response = await axios.get(`/api/reports/report-4/${productId}`);
    //         const res = response.data;
    //         console.log(res);
    //         setProducttimereport(res)
    //         setSubmitted(true);
    //     }
    //     getProductTimeReport(productId);
    // };
    useEffect(() => {
        async function getProductTimeReport(productId){
            const response = await axios.get(`/api/reports/report-4/${productId}`,{
                headers:{ Authorization: `Bearer ${adminInfo.token}`}
              }
            );
            const res = response.data;
            console.log(res);
            setProducttimereport(res)
            setSubmitted(true);
        }
        getProductTimeReport(productId);
    },[productId]);
    
    return (
        <>
        <div className="admin">
            <h1>Report 4 - most interest time period to a product</h1>
            {/* <form className="form" onSubmit={submitHandler}>
                <div>
                    <label></label>
                    <button className="primary" type="submit">
                    Show
                    </button>
                </div>
            </form> */}
            {submitted && producttimereport &&
                <div className="">
                    <h1>Product {productId} Most Interest Period : <b>{producttimereport.interested_period}</b></h1>
                </div>
            }
        </div>
        </>
    );
}
