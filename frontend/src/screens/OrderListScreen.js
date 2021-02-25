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
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch({ type: ORDER_DELETE_RESET });
      dispatch(listOrders());
    }, [dispatch, successDelete]);
    const deleteHandler = (order) => {
      if (window.confirm('Are you sure to delete?')) {
        dispatch(deleteOrder(order._id));
      }
    };


    const orderDeliver = useSelector((state) => state.orderDeliver);
    const {
      loading: loadingDeliver,
      error: errorDeliver,
      success: successDeliver,
    } = orderDeliver;
    useEffect(() => {
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(listOrders());
    }, [dispatch, successDeliver]);
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
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.userName}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice.toFixed(2)}</td>
                  <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                  <td>
                    {order.isDelivered
                      ? order.deliveredAt.substring(0, 10)
                      : 'No'}
                  </td>
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