import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    listVariants,
} from "../action/productAction";
import Message from "../components/Message";
import Loader from "../components/Loader";

export default function VariantListScreen(props) {
    const productId = props.match.params.id;

    const variantList = useSelector((state) => state.variantList);
    const { loading, error, variants } = variantList;

//   const variantCreate = useSelector((state) => state.variantCreate);
//   const {
//     loading: loadingCreate,
//     error: errorCreate,
//     success: successCreate,
//     variant: createdVariant,
//   } = variantCreate;

// todo
//   const productDelete = useSelector((state) => state.productDelete);
//   const {
//     loading: loadingDelete,
//     error: errorDelete,
//     success: successDelete,
//   } = productDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    // if (successCreate) {
    //   dispatch({ type: VARIANT_CREATE_RESET });
    //   props.history.push(`/product/${productId}/variant/${createdVariant.variant_id}/edit`);
    // }
    // if (successDelete) {
    //   dispatch({ type: VARIANT_DELETE_RESET });
    // }
    dispatch(listVariants(productId));
  }, [dispatch, props.history]);

  const deleteHandler = (variant) => {
    // if (window.confirm("Are you sure to delete?")) {
    //   dispatch(deleteVariant(variant.variant_id));
    // }
  };
  const createHandler = () => {
    // dispatch(createVariant());
  };
  return (
    <div className="admin">
      <div className="row">
        <h1>Variants List - Product {productId}</h1>
        {/* <button type="button" className="primary" onClick={createHandler}>
          Create Variant
        </button> */}
      </div>

      {/* {loadingDelete && <Loader></Loader>} */}
      {/* {errorDelete && <Message variant="danger">{errorDelete}</Message>} */}
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
              <th>SKU</th>
              <th>COLOR</th>
              <th>SIZE</th>
              <th>PRICE</th>
              <th>OFFER</th>
              <th>IMAGE_URL</th>
              <th>NO_STOCK</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant) => (
              <tr key={variant.variant_id}>
                <td>{variant.variant_id}</td>
                <td>{variant.SKU}</td>
                <td>{variant.color}</td>
                <td>{variant.size}</td>
                <td>{variant.price}</td>
                <td>{variant.offer}</td>
                <td>{variant.image_url}</td>
                <td>{variant.no_stock}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/product/${productId}/variant/${variant.variant_id}/edit`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(variant)}
                  >
                    Delete
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