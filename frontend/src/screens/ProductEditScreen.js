import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories, listSubcategories } from '../action/categoryActions';
import { detailsProductAdmin, updateProduct } from '../action/productAction';
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
  const [subcat_name, setSubcat_name] = useState('');
  const [supplier_name, setSupplier_name] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  // Todo
  const categoryList = useSelector((state) => state.categoryList);
  const { loading: catloading, error: caterror, categories:categories } = categoryList;
  // Todo
  // Todo
  const subcategoryList = useSelector((state) => state.subcategoryList);
  const { loading: scatloading, error: scaterror, subcategories:subcategories } = subcategoryList;
  // Todo
  // Todo
  const supplierlist = [{supplier_id:1,supplier_name:'xxx'},{supplier_id:2,supplier_name:'yyy'}]
  // const supplierList = useSelector((state) => state.supplierList);
  // Todo


  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!catloading && !caterror) {
      dispatch(listCategories());
    }
    if (!scatloading && !scaterror) {
      dispatch(listSubcategories());
    }
    if (!product || product.product_id!=productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProductAdmin(productId));
    } else {
      setProduct_name(product.product_name);
      setDescription(product.description);
      setWeight(product.weight);
      setDimension(product.dimension);
      setBrand(product.brand);
      setCategory_name(product.category_name);
      setSubcat_name(product.subcat_name);
      setSupplier_name(product.supplier_name);
    }
  }, [product, dispatch, productId, successUpdate, catloading, caterror, scatloading, scaterror, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        product_id: productId,
        product_name,
        description,
        weight,
        dimension,
        brand,
        category_name,
        subcat_name,
        supplier_name,
      })
    );
  };

  return (
    <div className="admin">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        {loadingUpdate && <Loader></Loader>}
        {catloading && <Loader></Loader>}
        {caterror && <Message variant="danger">{caterror}</Message>}
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
                placeholder="Enter Product name"
                value={product_name}
                onChange={(e) => setProduct_name(e.target.value)}
                required
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
              <label htmlFor="category_name">Category</label>
              <select
                id="category_name"
                type="text"
                placeholder="Enter Category"
                value={category_name}
                onChange={(e) => setCategory_name(e.target.value)}
                required
              >
                <option value="" disabled selected>select the category</option>
                {categories.map(category => <option key={category.category_id}> {category.category_name} </option> )}
              </select>
            </div>
            {/* <div>
              <label htmlFor="category_description">Category_description</label>
              <input
                id="category_description"
                type="text"
                placeholder="Enter Category_description"
                value={category_description}
                onChange={(e) => setCategory_description(e.target.value)}
              ></input>
            </div> */}
            <div>
              <label htmlFor="subcat_name">Subcategory</label>
              <select
                id="subcat_name"
                type="text"
                placeholder="Enter Subcategory_name"
                value={subcat_name}
                onChange={(e) => setSubcat_name(e.target.value)}
                required
              >
                <option value="" disabled selected>select the subcategory</option>
                {subcategories.map(subcategory => <option key={subcategory.subcat_id}> {subcategory.subcat_name} </option> )}
              </select>
            </div>
            <div>
              <label htmlFor="supplier_name">Supplier</label>
              <select
                id="supplier_name"
                type="text"
                placeholder="Enter Supplier_name"
                value={supplier_name}
                onChange={(e) => setSupplier_name(e.target.value)}
                required
              >
                <option value="" disabled selected>select the supplier</option>
                {supplierlist.map(supplier => <option key={supplier.supplier_id}> {supplier.supplier_name} </option> )}
              </select>
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
