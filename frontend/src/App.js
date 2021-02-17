import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import ProductListScreen from './screens/ProductListScreen';
import OrderListScreen from './screens/OrderListScreen';

const App=()=> {
  return (
    <Router>
    <Header/>
    <main className='py-3'>
      <Container>
        {/* <HomeScreen/> */}
        <Route path='/' component={HomeScreen} exact ></Route>
        <Route path='/product/:id' component={ProductScreen} exact></Route>
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path='/productlist' component={ProductListScreen}></Route>
        <Route path='/orderlist' component={OrderListScreen}></Route>
        </Container>
        </main>
    <Footer/>
    </Router>
  );
}

export default App;
