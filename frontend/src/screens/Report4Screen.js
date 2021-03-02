// - Given a product, time period with most interest to it
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { listProductsAdmin } from '../action/productAction';

export default function Report4Screen(props) {
    // const [product_name, setProduct_name] = useState('');

    // const [timeperiod, setTimeperiod] = useState(null);

    // const productListAdmin = useSelector((state) => state.productListAdmin);
    // const { loading, error, products } = productListAdmin;
    // console.log("products")
    // console.log("products")
    // console.log("products")
    // console.log("products")
    // console.log("products")
    // console.log(products)


    // let productId = null;
    // products.forEach(p => {
    //     if (product_name === p.product_name){
    //     productId = p.product_id;
    //     }
    // })

    // const apiURL = `/api/report-4/${productId}`;
    // const fetchData = async () => {
    //     const response = await axios.get(apiURL)
    //     setTimeperiod(response.data) 
    // }

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (!loading && !error) {
    //         dispatch(listProductsAdmin());
    //     }
    //     if (productId !== null) {
    //         const apiURL = `/api/report-4/${productId}`;
    //         const fetchData = async () => {
    //             const response = await axios.get(apiURL)
    //         setTimeperiod(response.data) 
    //         }
    //     }
    // }, [dispatch, productId, props.history]);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProductsAdmin());
        // if (productId !== null) {
        //     const apiURL = `/api/report-4/${productId}`;
        //     const fetchData = async () => {
        //         const response = await axios.get(apiURL)
        //     setTimeperiod(response.data) 
        //     }
        // }
    },[]);


    return (
        <>
        <div className="">
            <h1>Report4 - most interest time period to a product</h1>
            <form className="form">
                {/* <div>
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
                    <button className="fetch-button" onClick={fetchData}>
                    Fetch Data
                    </button>
                </div> */}
            </form>
            {/* {timeperiod &&
                <div className="">
                    <h1>Product {productId}</h1>
                    <div className="">
                        <p>timeperiod</p>
                        <p>timeperiod</p>
                    </div>
                </div>
            } */}
            
        </div>
        </>
    );
}
