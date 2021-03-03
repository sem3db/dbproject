import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  listProductsAdmin,
} from "../action/productAction";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  PRODUCT_DELETE_RESET,
} from "../constants/productConstants";

export default function ProductListScreen(props) {
  const productListAdmin = useSelector((state) => state.productListAdmin);
  const { loading, error, products } = productListAdmin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProductsAdmin());
  }, [ dispatch, successDelete, props.history]);

  const deleteHandler = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(product.product_id));
    }
  };

  const createHandler = () => {
    props.history.push(`/newproduct/create`)
  };

  return (
    <div className="admin">
      <div className="row">
        <h1>Products</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Product
        </button>
      </div>

      {loadingDelete && <Loader></Loader>}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {/* {loadingCreate && <Loader></Loader>} */}
      {/* {errorCreate && <Message variant="danger">{errorCreate}</Message>} */}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>SUB-CATEGORY</th>
              <th>BRAND</th>
              <th>SUPPLIER</th>
              <th>WEIGHT</th>
              <th>DIMENSION</th>
              {/* <th>DESCRIPTION</th> */}
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.product_name}</td>
                <td>{product.category_name}</td>
                <td>{product.subcat_name}</td>
                <td>{product.brand}</td>
                <td>{product.supplier_name}</td>
                <td>{product.weight}</td>
                <td>{product.dimension}</td>
                {/* <td>{product.description}</td> */}
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/product/${product.product_id}/edit`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/product/${product.product_id}/variantlist`)
                    }
                  >
                    Variants
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/reports/report4/${product.product_id}`)
                    }
                  >
                    Interest
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}