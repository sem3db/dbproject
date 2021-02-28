import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, NavDropdown , Dropdown, Nav, Card, ListGroup, SplitButton, ButtonGroup, Button, Form} from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message"
import Loader from "../components/Loader"
import {LinkContainer} from 'react-router-bootstrap'
import { listProductsCat, listProducts } from "../action/productAction";

const HomeScreen = ({match}) => {
  const dispatch = useDispatch();
  const cat = match.params.cat ? match.params.cat:""
  const productList=useSelector(state=>state.productList)
  const {loading, error, products} =productList
  const cats={consumer_electronics:['laptop','smart phone','dongal'],  kitchen_appliances:["rice cooker","oven", "electric kettle", "heater"],
   camera:["DSLR","Mirrorless"], phone:["samsung","apple","nokia"], laptop:['asus','dell','toshiba','hp','lenovo'], USB:['kingston','imation'],furniture:['chair,table'],
  books:[],headphone:[],tablets:[]}
  useEffect(() => {
    if(cat){
      dispatch(listProductsCat(cat))
    }
    else{
      dispatch(listProducts())
    }
  }, [dispatch,cat])

  return (
    <>
      <Row>
        <Col md={2}>
        <Card>
          <Card.Body className="pt-3 pb-1 px-1">
          <Card.Title><h6><strong>Product Catagaries</strong></h6></Card.Title>
          {Object.keys(cats).map((cat) => (
            <Dropdown as={ButtonGroup} className="btn btn-sm p-0" style={{width:"100%"}} block>
              <LinkContainer to={`/products/${cat}`} className="p-1" style={{width:"85%"}}>
              <Button className="btn btn-sm" style={{width:"100%"}} variant="outline-dark"><p className='p-0, m-0' style={{whiteSpace: 'nowrap', overflow: 'hidden', textTransform: 'capitalize'}}>{cat.replace('_'," ")}</p></Button>
            </LinkContainer>
              <Dropdown.Toggle split className="btn btn-sm" id="dropdown-split-basic" variant="outline-dark"/>
              <Dropdown.Menu>
            {cats[cat].map((c)=>(
              <LinkContainer to={`/products/${cat}-${c}`} className="p-1" style={{width:"100%"}}>
                <Dropdown.Item className="btn btn-outline-dark btn-sm"><p className='p-0, m-0' style={{whiteSpace: 'nowrap', overflow: 'hidden', textTransform: 'capitalize'}}>{c.replace('_'," ")}</p></Dropdown.Item>
              </LinkContainer>
            ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="pt-3 pb-1 px-1">
          <Form.Group controlId="formBasicRange">
            <Form.Label>Price Range</Form.Label><Form.Control type="range" min={0} max={100}/>
          </Form.Group>
          <Row>
            <Col md={6} className='pr-1'>
            <Form.Label>Min</Form.Label>
              <Form.Control size="sm" type="number" placeholder="0"></Form.Control>
            </Col>
            <Col md={6} className='pl-1'>
            <Form.Label>Max</Form.Label>
              <Form.Control size="sm" type="number" placeholder="1,0000"></Form.Control>
            </Col>
          </Row>
          <Button className="btn btn-block btn-sm mt-3" variant='outline-dark'>Apply</Button>
          </Card.Body>
        </Card>
       
        </Col>
        <Col md={10}>
        {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" Children={error} />
      ) : (
        <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        </>
      )}
        </Col>
      </Row>
      
      
    </>
  );
};

export default HomeScreen;
