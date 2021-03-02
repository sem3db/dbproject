import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, deliverOrder, listOrders } from '../action/orderActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { ORDER_DELETE_RESET, ORDER_DELIVER_RESET } from '../constants/orderConstants';

export default function OrderListScreen(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successDelete) {
      dispatch({ type: ORDER_DELETE_RESET });
    }
    if (successDeliver) {
      dispatch({ type: ORDER_DELIVER_RESET });
      // props.history.push(`/product/${createdProduct.product_id}/edit`);
    }
    dispatch(listOrders());
  }, [dispatch, successDelete, successDeliver, props.history]);
  // useEffect(() => {
  //   dispatch({ type: ORDER_DELIVER_RESET });
  //   dispatch(listOrders());
  // }, [dispatch, successDeliver]);

  
  const deleteHandler = (order) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(order._id));
    }
  };
  const deliverHandler = (order) => {
    if (window.confirm('Are you sure to deliver?')) {
      dispatch(deliverOrder(order._id));
    }
  };


  return (
    <div className="admin">
      <h1>Orders</h1>
      {loadingDelete && <Loader></Loader>}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingDeliver && <Loader></Loader>}
      {errorDeliver && <Message variant="danger">{errorDeliver}</Message>}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>USER TYPE</th>
              <th>DATE</th>
              <th>TOTAL PAID</th>
              <th>DELIVERY STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.user}</td>
                <td>{order.customer_type}</td>
                <td>{order.order_date ? order.order_date.substring(0, 10) : 'No'}</td>
                <td>{order.total_payment}</td>
                <td>{order.delivery_status}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                  {/* <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(order)}
                    >
                      Delete
                    </button> */}
                    <button
                      type="button"
                      className="small"
                      onClick={() => deliverHandler(order)}
                    >
                      Deliver
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
