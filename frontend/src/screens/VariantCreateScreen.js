import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createVariant } from '../action/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { VARIANT_CREATE_RESET } from '../constants/variantConstants';

export default function VariantCreateScreen(props) {
    const productId = props.match.params.id;
    const [SKU, setSKU] = useState('');
    const [image_url, setImage_url] = useState('');
    const [price, setPrice] = useState('');
    const [offer, setOffer] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [no_stock, setNo_stock] = useState('');

    const variantCreate = useSelector((state) => state.variantCreate);
    const {
        loading,
        error,
        success: successCreate,
    } = variantCreate;

    const dispatch = useDispatch();
    useEffect(() => {
    if (successCreate) {
        dispatch({ type: VARIANT_CREATE_RESET });
        props.history.push(`/product/${productId}/variantlist`);
    }
    },[dispatch, productId,successCreate, props.history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createVariant(productId,{
                product_id: productId,
                SKU,
                price,
                offer,
                color,
                size,
                no_stock,
                image_url,
                }
            )
        );
    };

    // const [loadingUpload, setLoadingUpload] = useState(false);
    // const [errorUpload, setErrorUpload] = useState('');
    // const userSignin = useSelector((state) => state.userSignin);
    // const { userInfo } = userSignin;
    // const uploadFileHandler = async (e) => {
    // const file = e.target.files[0];
    // const bodyFormData = new FormData();
    // bodyFormData.append('image_url', file);
    // setLoadingUpload(true);
    // try {
    //     const { data } = await Axios.post('/api/uploads', bodyFormData);
    //     setImage_url(data);
    //     setLoadingUpload(false);
    // } catch (error) {
    //     setErrorUpload(error.message);
    //     setLoadingUpload(false);
    // }
    // };

  return (
    <div className="admin">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Product {productId} New Variant</h1>
        </div>
        {/* {loadingUpdate && <Loader></Loader>}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>} */}
        {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div>
            <label htmlFor="SKU">SKU</label>
            <input
              id="SKU"
              type="text"
              placeholder="Enter SKU"
              value={SKU}
              onChange={(e) => setSKU(e.target.value)}
            ></input>
          </div>

          <div>
            <label htmlFor="image_url">image_url</label>
            <input
              id="image_url"
              type="text"
              placeholder="Enter image_url"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            ></input>
          </div>
          {/* <div>
            <label htmlFor="product_imageFile">product_image File</label>
            <input
              type="file"
              id="product_imageFile"
              label="Choose product_image"
              onChange={uploadFileHandler}
            ></input>
            {loadingUpload && <Loader></Loader>}
            {errorUpload && (
              <Message variant="danger">{errorUpload}</Message>
            )}
          </div> */}
          <div>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="text"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="offer">Offer</label>
            <input
              id="offer"
              type="text"
              placeholder="Enter Offer"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input
              id="color"
              type="text"
              placeholder="Enter Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="size">Size</label>
            <input
              id="size"
              type="text"
              placeholder="Enter Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="no_stock">Count In Stock</label>
            <input
              id="no_stock"
              type="text"
              placeholder="Enter no_stock"
              value={no_stock}
              onChange={(e) => setNo_stock(e.target.value)}
            ></input>
          </div>

          <div>
            <label></label>
            <button className="primary" type="submit">
              Create
            </button>
          </div>
        </>
      )}
      </form>
    </div>
  )
}
