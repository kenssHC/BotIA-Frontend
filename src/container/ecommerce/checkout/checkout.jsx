import React, { useState } from 'react';
import { Button, Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Country, State } from './checkoutdata';
import jpg14 from '../../../assets/images/ecommerce/jpg/14.jpg';
import jpg2 from '../../../assets/images/ecommerce/jpg/2.jpg'

const Checkout = () => {
  //Next and Previous
  const [activeTab, setActiveTab] = useState('signIn');

  const handleNextClick = () => {
    switch (activeTab) {
      case 'signIn':
        setActiveTab('billing');
        break;
      case 'billing':
        setActiveTab('order');
        break;
      case 'order':
        setActiveTab('payments');
        break;
      case 'payments':
        setActiveTab('finished');
        break;
      default:
        break;
    }
  };

  const handlePreviousClick = () => {
    switch (activeTab) {
      case 'billing':
        setActiveTab('signIn');
        break;
      case 'order':
        setActiveTab('billing');
        break;
      case 'payments':
        setActiveTab('order');
        break;
      case 'finished':
        setActiveTab('payments');
        break;
      default:
        break;
    }
  };

  //Orders tab
  const [quantities, setQuantities] = useState({
    flywayBag: 1,
    rongueHeadphones: 1
  });

  // Handler to increment the quantity
  const handleQuantityChange = (product, change) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [product]: Math.max(prevQuantities[product] + change, 1) // Ensure quantity is at least 1
    }));
  };

  // Calculate subtotal
  const getSubtotal = () => {
    const prices = {
      flywayBag: 290,
      rongueHeadphones: 124
    };
    return Object.keys(quantities).reduce((total, product) => {
      return total + prices[product] * quantities[product];
    }, 0);
  };

  return (
    <Row>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <div className="card-title">CHECKOUT</div>
            <span className="d-block fs-12 mb-0 text-muted">The Project Budget is a tool used by project managers to estimate the total cost of a project</span>
          </Card.Header>
          <Card.Body className="my-4">
            <Row className="justify-content-center">
              <Col xl={9}>
                <div className="border rounded-3">
                  <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                    <Card.Body className="p-0 product-checkout">
                      <Nav className="nav-tabs tab-style-2 d-sm-flex d-block border-bottom border-block-end-dashed" id="myTab1" role="tablist">
                        <Nav.Item role="presentation">
                          <Nav.Link className="d-inline-block" eventKey='signIn'>
                            <i className="ri-number-1 me-2 align-middle"></i>Sign In
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                          <Nav.Link className="d-inline-block" eventKey='billing'>
                            <i className="ri-number-2 me-2 align-middle"></i>Billing
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                          <Nav.Link className="d-inline-block" eventKey='order'>
                            <i className="ri-number-3 me-2 align-middle"></i>Order
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                          <Nav.Link className="d-inline-block" eventKey='payments'>
                            <i className="ri-number-4 me-2 align-middle"></i>Payments
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                          <Nav.Link className="d-inline-block" eventKey='finished'>
                            <i className="ri-number-5 me-2 align-middle"></i>Finished
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Row>
                        <Col xl={8} className="mx-auto">
                          <Tab.Content className="border m-4" id="myTabContent">
                            <Tab.Pane eventKey='signIn' className="fade border-0 p-0">
                              <div className="">
                                <div className="fs-15 fw-semibold align-items-center justify-content-between z">
                                  <div className='p-4'>
                                    <form className=' mb-3'>
                                      <h5 className="text-start mb-2">Signin to Your Account</h5>
                                      <p className="mb-4 text-muted tx-13 ms-0 text-start">Signin to create, discover and connect with the global community</p>
                                      <div className="form-group text-start">
                                        <label>Email</label>
                                        <input className="form-control" placeholder="Enter your email" type="text" />
                                      </div>
                                      <div className="form-group text-start">
                                        <label>Password</label>
                                        <input className="form-control" placeholder="Enter your password" type="password" />
                                      </div>
                                      <Button variant='primary' className="btn ripple  btn-block mb-2" type="button" >Sign In</Button>
                                    </form>
                                  </div>
                                  <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                    <Button type="button" variant='success' id="personal-details-trigger" onClick={handleNextClick}>Next</Button>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='billing' className="fade border-0 p-0">
                              <form className="p-4">
                                <h5 className="text-start mb-2">Billing Information</h5>
                                <p className="mb-4 text-muted tx-13 ms-0 text-start">Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                <Row className="row">
                                  <Col md={6} className="mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required="" />
                                    <div className="invalid-feedback">Valid first name is required.</div>
                                  </Col>
                                  <Col md={6} className="mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" required="" />
                                    <div className="invalid-feedback">Valid last name is required.</div>
                                  </Col>
                                </Row>
                                <div className="mb-3">
                                  <label htmlFor="address">Address</label>
                                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                  <div className="invalid-feedback">Please enter your shipping address.</div>
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span>
                                  </label>
                                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="mobile">Mobile Number</label>
                                  <input type="number" className="form-control" id="mobile" />
                                </div>
                                <Row className="row">
                                  <Col xxl={5} md={12} className="mb-3">
                                    <label>Country</label>
                                    <Select name="state" options={Country} className="basic-multi-select " isSearchable
                                      menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Country[0]]}
                                    />
                                  </Col>
                                  <Col xxl={4} md={12} className=" mb-3">
                                    <label>State</label>
                                    <Select name="state" options={State} className="basic-multi-select " isSearchable
                                      menuPlacement='auto' classNamePrefix="Select2" defaultValue={[State[0]]}
                                    />
                                  </Col>
                                  <Col xxl={3} md={12} className=" mb-3">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">Zip code required.</div>
                                  </Col>
                                </Row>
                                <hr className="mb-4" />
                                <Button variant='primary' className="btn  btn-lg btn-block" >Continue to checkout</Button>
                              </form>
                              <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                <Button type="button" variant='light' className="btn m-1" onClick={handlePreviousClick}>Previous</Button>
                                <Button type="button" variant='success' className="btn  m-1" onClick={handleNextClick}>Next</Button>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='order' className="fade border-0 p-0" id="shipped-tab-pane">
                              <div id="shipped-tab-pane">
                                <div className="px-4 pt-4">
                                  <h5 className="text-start mb-2">Your Order</h5>
                                  <p className="mb-4 text-muted tx-13 ms-0 text-start">
                                    Lorem Ipsum has been the industry's standard dummy text ever since
                                  </p>
                                </div>
                                <div className="product">
                                  <div className="item flex-wrap px-4 py-3">
                                    <div className="left flex-wrap gap-2">
                                      <Link to="#" className="thumb rounded-3 mb-2">
                                        <img src={jpg14} alt="" className="rounded-3 w-100" />
                                      </Link>
                                      <div className="purchase mb-2">
                                        <h6>
                                          <Link to="#">Flyway Bag</Link>
                                        </h6>
                                        <div className="d-flex flex-wrap mt-2">
                                          <div className="mt-2 product-title tx-12 me-2">Quantity:</div>
                                          <div className="handle-counter input-group border rounded flex-nowrap">
                                            <button className="btn btn-icon btn-light input-group-text product-quantity-minus" onClick={() => handleQuantityChange('flywayBag', -1)} >
                                              <i className="ri-subtract-line"></i>
                                            </button>
                                            <input type="text" className="form-control form-control-sm border-0 text-center" aria-label="quantity" value={quantities.flywayBag} readOnly />
                                            <button className="btn btn-icon btn-light input-group-text product-quantity-plus" onClick={() => handleQuantityChange('flywayBag', 1)} >
                                              <i className="ri-add-line"></i>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="price fs-20">${290}</span>
                                  </div>
                                  <div className="item flex-wrap px-4 py-3">
                                    <div className="left flex-wrap gap-2">
                                      <Link to="#" className="thumb rounded-3 mb-2">
                                        <img src={jpg2} alt="" className="rounded-3 w-100" />
                                      </Link>
                                      <div className="purchase mb-2">
                                        <h6>
                                          <Link to="#" >Rongue Headphones</Link>
                                        </h6>
                                        <div className="d-flex flex-wrap mt-2">
                                          <div className="mt-2 product-title tx-12 me-2">Quantity:</div>
                                          <div className="handle-counter input-group border rounded flex-nowrap">
                                            <Button variant='' className="btn btn-icon btn-light input-group-text product-quantity-minus" onClick={() => handleQuantityChange('rongueHeadphones', -1)} >
                                              <i className="ri-subtract-line"></i>
                                            </Button>
                                            <input type="text" className="form-control form-control-sm border-0 text-center" aria-label="quantity" value={quantities.rongueHeadphones} readOnly />
                                            <Button variant='' className="btn btn-icon btn-light input-group-text product-quantity-plus" onClick={() => handleQuantityChange('rongueHeadphones', 1)}>
                                              <i className="ri-add-line"></i>
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="price fs-20">${124}</span>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between px-4 py-3">
                                  <span>Subtotal</span>
                                  <span className="fs-20 fw-bold text-primary">${getSubtotal()}</span>
                                </div>
                              </div>
                              <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                <Button variant='light' type="button" className="btn  m-1" onClick={handlePreviousClick}>Previous</Button>
                                <Button variant='success' type="button" className="btn m-1" onClick={handleNextClick}>Next</Button>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='payments' className="fade border-0 p-0">
                              <div className="p-4">
                                <div className="">
                                  <h5 className="text-start mb-2">Payments</h5>
                                  <p className="mb-4 text-muted tx-13 ms-0 text-start">Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                </div>
                                <div className="card-pay">
                                  <Tab.Container defaultActiveKey='creditCard'>
                                    <Nav className="tabs-menu">
                                      <Nav.Item as="li" className="m-0">
                                        <Nav.Link className="rounded-0" eventKey='creditCard' data-bs-toggle="tab">
                                          <i className="fa fa-credit-card"></i> Credit Card
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li" className="m-0">
                                        <Nav.Link className="rounded-0" eventKey='paypal' data-bs-toggle="tab">
                                          <i className="fab fa-paypal"></i>  Paypal
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li" className="m-0">
                                        <Nav.Link className="rounded-0" eventKey='bankTransfer' data-bs-toggle="tab">
                                          <i className="fa fa-university"></i>  Bank Transfer
                                        </Nav.Link>
                                      </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                      <Tab.Pane eventKey='creditCard' className="border-0" id="tab20">
                                        <div className="form-group">
                                          <label className="form-label">CardHolder Name</label>
                                          <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                        <div className="form-group">
                                          <label className="form-label">Card number</label>
                                          <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." />
                                            <Button variant='primary' type="button" id="button-addon22">
                                              <i className="fab fa-cc-visa text-fixed-white"></i> &nbsp;
                                              <i className="fab fa-cc-amex text-fixed-white"></i> &nbsp;
                                              <i className="fab fa-cc-mastercard text-fixed-white"></i>
                                            </Button>
                                          </div>
                                        </div>
                                        <Row className="row">
                                          <div className="col-sm-8">
                                            <div className="form-group">
                                              <label className="form-label">Expiration</label>
                                              <div className="input-group">
                                                <input type="number" className="form-control" placeholder="MM" name="Month" />
                                                <input type="number" className="form-control" placeholder="YY" name="Year" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-sm-4">
                                            <div className="form-group">
                                              <label className="form-label">CVV <i className="fa fa-question-circle"></i></label>
                                              <input type="number" className="form-control" required="" />
                                            </div>
                                          </div>
                                        </Row>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey='paypal' className="border-0" id="tab21">
                                        <p className="mt-4">Paypal is easiest way to pay online</p>
                                        <p><Link to="#" className="btn btn-primary"><i className="fab fa-paypal"></i> Log in my Paypal</Link></p>
                                        <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey='bankTransfer' className="border-0" id="tab22">
                                        <p className="mt-4">Bank account details</p>
                                        <dl className="card-text">
                                          <dt>BANK: </dt>
                                          <dd> THE UNION BANK 0456</dd>
                                        </dl>
                                        <dl className="card-text">
                                          <dt>Account number: </dt>
                                          <dd> 67542897653214</dd>
                                        </dl>
                                        <dl className="card-text">
                                          <dt>IBAN: </dt>
                                          <dd>543218769</dd>
                                        </dl>
                                        <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                      </Tab.Pane>
                                    </Tab.Content>
                                  </Tab.Container>
                                </div>
                              </div>
                              <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                <Button variant='light' type="button" className="m-1" onClick={handlePreviousClick}>Previous</Button>
                                <Button variant='success' type="button" className="btn btn-success m-1" onClick={handleNextClick}>Next</Button>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='finished' className="fade border-0 p-0">
                              <div className="text-center p-4">
                                <div className="">
                                  <h5 className="text-center mb-4">Your order Confirmed!</h5>
                                </div>
                                <svg className="wd-100 ht-100 mx-auto justify-content-center mb-3 text-center" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                  <circle className="path circle" fill="none" stroke="#22c03c" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                  <polyline className="path check" fill="none" stroke="#22c03c" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                                </svg>
                                <p className="success pl-5 pr-5">Order placed successfully. Your order will be dispatched soon. Meanwhile, you can track your order in the "My Orders" section.</p>
                              </div>
                              <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                <Button variant='light' type="button" className="btn m-1" onClick={handlePreviousClick}>Previous</Button>
                                <Button variant='secondary' type="button" className="btn btn-secondary m-1" onClick={() => setActiveTab('signIn')}>Order Again</Button>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Tab.Container>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default Checkout;