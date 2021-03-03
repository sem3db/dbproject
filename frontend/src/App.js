import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import AdminRoute from "./components/AdminRoute";
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import ProfileScreen from './screens/ProfileScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductCreateScreen from './screens/ProductCreateScreen';
import OrderListScreen from './screens/OrderListScreen';
import VariantListScreen from './screens/VariantListScreen';
import VariantEditScreen from './screens/VariantEditScreen';
import VariantCreateScreen from './screens/VariantCreateScreen';
import ReportScreen from './screens/ReportScreen';
import Report1Screen from "./screens/Report1Screen";
import Report2Screen from "./screens/Report2Screen";
import Report3Screen from "./screens/Report3Screen";
import Report4Screen from "./screens/Report4Screen";
import Report5Screen from "./screens/Report5Screen";
import SigninAdminScreen from "./screens/SigninAdminScreen";

const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          {/* <HomeScreen/> */}
        <Route path='/' component={HomeScreen} exact />
        <Route path='/products' component={HomeScreen} exact />
        <Route path='/search/:keyword' component={HomeScreen} exact />
        <Route path='/products/:cat' component={HomeScreen} exact />
        <Route path='/profile' component={ProfileScreen} exact />
        <Route path='/product/:id' component={ProductScreen} exact />
        <Route path='/cart/:id?' component={CartScreen}/>
        <Route path='/login' component={LoginScreen}/>
        <Route path='/signin' component={SigninAdminScreen}/>
        <Route path='/register' component={RegisterScreen}/>
        <Route path='/shipping' component={ShippingScreen}/>
        <Route path='/payment' component={PaymentScreen}/>
        <Route path='/placeorder' component={PlaceOrderScreen}/>
        <Route path='/order/:id' component={OrderScreen}/>

        <AdminRoute path='/productlist' component={ProductListScreen} exact></AdminRoute>
        <AdminRoute path='/newproduct/create' component={ProductCreateScreen} exact ></AdminRoute>
        <AdminRoute path='/product/:id/edit' component={ProductEditScreen} exact ></AdminRoute>
        <AdminRoute path='/product/:id/variantlist' component={VariantListScreen} exact></AdminRoute>
        <AdminRoute path='/product/:id/newvariant/create' component={VariantCreateScreen} exact ></AdminRoute>
        <AdminRoute path='/product/:id/variant/:vid/edit' component={VariantEditScreen} exact ></AdminRoute>
        <AdminRoute path='/orderlist' component={OrderListScreen} exact ></AdminRoute>
        <AdminRoute path='/reports' component={ReportScreen} exact></AdminRoute>
        <AdminRoute path='/reports/report1' component={Report1Screen} exact></AdminRoute>
        <AdminRoute path='/reports/report2' component={Report2Screen} exact></AdminRoute>
        <AdminRoute path='/reports/report3' component={Report3Screen} exact></AdminRoute>
        <AdminRoute path='/reports/report4/:id' component={Report4Screen} exact></AdminRoute>
        <AdminRoute path='/reports/report5' component={Report5Screen} exact></AdminRoute>
        {/* <AdminRoute path='/product/:id/view' component={ProductViewScreen} exact ></AdminRoute> */}
        {/* <AdminRoute path='/product/:id/variant/:vid/view' component={VariantViewScreen} exact ></AdminRoute> */}

        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
