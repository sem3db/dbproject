// - Given a product, time period with most interest to it
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsAdmin } from '../action/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';

export default function Report4Screen(props) {
    const [product_name, setProduct_name] = useState('');
    const [timeperiod, setTimeperiod] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [producttimereport, setProducttimereport] = useState('');
        
    const productListAdmin = useSelector((state) => state.productListAdmin);
    const { loading, error, products } = productListAdmin;

    let productId = null;
    if(products){
        products.forEach(p => {
            if (product_name === p.product_name){
            productId = p.product_id;
            }
        })
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProductsAdmin());
    },[]);


    const submitHandler = (e) => {
        e.preventDefault();
        async function getProductTimeReport(productId){
            // const response = await axios.get(`/api/reports/report-4`,productId);
            // console.log(response);
            // const res = response.data;
            // setProducttimereport(res)
            setSubmitted(true);
        }
        getProductTimeReport();
    };
    
    return (
        <>
        <div className="admin">
            <h1>Report 4 - most interest time period to a product</h1>
            {loading ? (
                <Loader></Loader>
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="product_name">Product</label>
                    <select
                    id="product_name"
                    type="text"
                    placeholder="Enter product"
                    value={product_name}
                    onChange={(e) => setProduct_name(e.target.value)}
                    required
                    >
                    <option value="" disabled selected>select product</option>
                    {products.map(product => <option key={product.product_id}> {product.product_name} </option> )}
                    </select>
                </div>
                <div>
                    <label></label>
                    <button className="primary" type="submit">
                    Show
                    </button>
                </div>
            </form>
            // {timeperiod &&
            //     <div className="">
            //         <h1>Product {productId}</h1>
            //         <div className="">
            //             <p>timeperiod</p>
            //             <p>timeperiod</p>
            //         </div>
            //     </div>
            // }
            )}
            
        </div>
        </>
    );
}

//     return (
//         <>
//         <div className="admin">
//             <h1>Report3 - Product category with most orders</h1>
//             <form className="form" onSubmit={submitHandler}>
//             <div>
//                 <label></label>
//                 <button className="primary" type="submit">
//                 Show
//                 </button>
//             </div>
//             </form>
//             {submitted &&
//             <div>
//                 <h2>
//                 Product Category: {productcategoryreport}
//                 </h2>
//             </div>
//             }
//         </div>
//         </>
//     );
// };