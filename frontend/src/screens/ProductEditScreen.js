import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { listProductDetails, updateProduct } from '../action/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [product_name, setProduct_name] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [weight, setWeight] = useState('');
  const [dimension, setDimension] = useState('');
  const [category_name, setCategory_name] = useState('');
  const [category_description, setCategory_description] = useState('');
  const [subcat_name, setSubcat_name] = useState('');
  const [supplier_name, setSupplier_name] = useState('');
  const [contact_number, setContact_number] = useState('');
  const [email, setEmail] = useState('');
  const [SKU, setSKU] = useState('');
  const [price, setPrice] = useState('');
  const [offer, setOffer] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [no_stock, setNo_stock] = useState('');
  const [image_url, setImage_url] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(listProductDetails(productId));
    } else {
      setProduct_name(product.product_name);
      setDescription(product.description);
      setWeight(product.weight);
      setDimension(product.dimension);
      setBrand(product.brand);
      setCategory_name(product.category_name);
      setCategory_description(product.category_description);
      setSubcat_name(product.subcat_name);
      setSupplier_name(product.supplier_name);
      setContact_number(product.contact_number);
      setEmail(product.email);
      setSKU(product.SKU);
      setPrice(product.price);
      setOffer(product.offer);
      setColor(product.color);
      setSize(product.size);
      setNo_stock(product.no_stock);
      setImage_url(product.image_url);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        product_name,
        description,
        weight,
        dimension,
        brand,
        category_name,
        category_description,
        subcat_name,
        supplier_name,
        contact_number,
        email,
        SKU,
        price,
        offer,
        color,
        size,
        no_stock,
        image_url,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image_url', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData);
      setImage_url(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div className="admin">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        {loadingUpdate && <Loader></Loader>}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <div>
              <label htmlFor="product_name">Product_name</label>
              <input
                id="product_name"
                type="text"
                placeholder="Enter Product_name"
                value={product_name}
                onChange={(e) => setProduct_name(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <input
                id="weight"
                type="text"
                placeholder="Enter Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="dimension">Dimension</label>
              <input
                id="dimension"
                type="text"
                placeholder="Enter Dimension"
                value={dimension}
                onChange={(e) => setDimension(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="category_name">Category_name</label>
              <input
                id="category_name"
                type="text"
                placeholder="Enter Category_name"
                value={category_name}
                onChange={(e) => setCategory_name(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="category_description">Category_description</label>
              <input
                id="category_description"
                type="text"
                placeholder="Enter Category_description"
                value={category_description}
                onChange={(e) => setCategory_description(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="subcat_name">Subcategory_name</label>
              <input
                id="subcat_name"
                type="text"
                placeholder="Enter Subcategory_name"
                value={subcat_name}
                onChange={(e) => setSubcat_name(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="supplier_name">Supplier_name</label>
              <input
                id="supplier_name"
                type="text"
                placeholder="Enter Supplier_name"
                value={supplier_name}
                onChange={(e) => setSupplier_name(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="contact_number">Contact_number</label>
              <input
                id="contact_number"
                type="text"
                placeholder="Enter Contact_number"
                value={contact_number}
                onChange={(e) => setContact_number(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
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
            <div>
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
            </div>
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
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
