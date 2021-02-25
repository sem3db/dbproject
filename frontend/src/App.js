import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

<<<<<<< HEAD
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import ProductListScreen from './screens/ProductListScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProfileScreen from './screens/ProfileScreen';
=======
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductListScreen from "./screens/ProductListScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
>>>>>>> 38e5cbdade65eefaa77bf4bcd3a6c4acaa7819a2

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
    <Header/>
    <main className='py-3'>
      <Container>
        {/* <HomeScreen/> */}
        <Route path='/' component={HomeScreen} exact />
        <Route path='/products/:cat' component={HomeScreen} exact />
        <Route path='/profile' component={ProfileScreen} exact />
        <Route path='/product/:id' component={ProductScreen} exact />
        <Route path='/product/:id/edit' component={ProductEditScreen} exact ></Route>
        <Route path='/cart/:id?' component={CartScreen}/>
        <Route path='/login' component={LoginScreen}/>
        <Route path='/register' component={RegisterScreen}/>
        <Route path='/shipping' component={ShippingScreen}/>
        <Route path='/payment' component={PaymentScreen}/>
        <Route path='/placeorder' component={PlaceOrderScreen}/>
        <Route path='/order/:id' component={OrderScreen}/>
        <Route path='/productlist' component={ProductListScreen}></Route>
        <Route path='/orderlist' component={OrderListScreen}></Route>
=======
      <Header />
      <main className="py-3">
        <Container>
          {/* <HomeScreen/> */}
          <Route path="/" component={HomeScreen} exact />
          <Route path="/products/:cat" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/productlist" component={ProductListScreen}></Route>
          <Route path="/orderlist" component={OrderListScreen}></Route>
>>>>>>> 38e5cbdade65eefaa77bf4bcd3a6c4acaa7819a2
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
