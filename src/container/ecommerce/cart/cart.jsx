import React, { Fragment } from 'react';
import { Row, Col, Card, Table, Image, Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import image1 from '../../../assets/images/ecommerce/jpg/7.jpg';
import image2 from '../../../assets/images/ecommerce/jpg/9.jpg';
import image3 from '../../../assets/images/ecommerce/jpg/13.jpg';
import image4 from '../../../assets/images/ecommerce/jpg/8.jpg';
import { Country, Expirationdata, Quantity } from './cartdata';
import Select from 'react-select';

const Cart = () => {
	return (
		<Fragment>
			{/* <!-- row opened --> */}
			<Row className="">
				<Col md={12} xl={8} className="">
					<Card className="">
						<Card.Body className="">
							<div className="product-details table-responsive text-nowrap">
								<Table className="table-bordered table-hover mb-0 text-nowrap">
									<thead>
										<tr>
											<th>Product</th>
											<th className="w-150">Quantity</th>
											<th >Price</th>
											<th >Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="media">
													<div className="card-aside-img">
														<Image src={image1} alt="img" className="h-60 w-60" />
													</div>
													<div className="media-body">
														<div className="card-item-desc mt-0">
															<h6 className="fw-semibold mt-0 text-uppercase">Green Plant</h6>
															<dl className="card-item-desc-1">
																<dt>Size: </dt>
																<dd>XXL</dd>
															</dl>
															<dl className="card-item-desc-1">
																<dt>Color: </dt>
																<dd>Green and Black color</dd>
															</dl>
														</div>
													</div>
												</div>
											</td>
											<td>
												<Form.Group className="">
													<Select name="state" options={Quantity} className="basic-multi-select " isSearchable
														menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Quantity[0]]}
													/>
												</Form.Group>
											</td>
											<td>USD 45</td>
											<td>
												<OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
													<Button variant="danger" size='sm' className=" text-fixed-white me-1" ><i className="fe fe-trash"></i></Button>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip >Save to Wishlist</Tooltip>}>
													<Button variant="info" size='sm' className=" text-fixed-white me-1" ><i className="fe fe-heart"></i></Button>
												</OverlayTrigger>
											</td>
										</tr>
										<tr>
											<td>
												<div className="media">
													<div className="card-aside-img">
														<Image src={image2} alt="img" className="h-60 w-60" />
													</div>
													<div className="media-body">
														<div className="card-item-desc mt-0">
															<h6 className="fw-semibold mt-0 text-uppercase">Wooden Stand</h6>
															<dl className="card-item-desc-1">
																<dt>Size: </dt>
																<dd>XL</dd>
															</dl>
															<dl className="card-item-desc-1">
																<dt>Color: </dt>
																<dd>Black color</dd>
															</dl>
														</div>
													</div>
												</div>
											</td>
											<td>
												<Form.Group className="">
													<Select name="state" options={Quantity} className="basic-multi-select " isSearchable
														menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Quantity[0]]}
													/>
												</Form.Group>
											</td>
											<td>USD 15</td>
											<td>
												<OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
													<Button variant="danger me-1" size='sm' className=" text-fixed-white" ><i className="fe fe-trash"></i></Button>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip >Save to Wishlist</Tooltip>}>
													<Button variant="info" size='sm' className=" text-fixed-white" ><i className="fe fe-heart"></i></Button>
												</OverlayTrigger>
											</td>
										</tr>
										<tr>
											<td>
												<div className="media">
													<div className="card-aside-img">
														<Image src={image3} alt="img" className="h-60 w-60" />
													</div>
													<div className="media-body">
														<div className="card-item-desc mt-0">
															<h6 className="fw-semibold mt-0 text-uppercase">Cactus Plant</h6>
															<dl className="card-item-desc-1">
																<dt>Size: </dt>
																<dd>XL</dd>
															</dl>
															<dl className="card-item-desc-1">
																<dt>Color: </dt>
																<dd>LightPink color</dd>
															</dl>
														</div>
													</div>
												</div>
											</td>
											<td>
												<Form.Group className="">
													<Select name="state" options={Quantity} className="basic-multi-select " isSearchable
														menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Quantity[0]]}
													/>
												</Form.Group>
											</td>
											<td>USD 136</td>
											<td>
												<OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
													<Button variant="danger me-1" size='sm' className=" text-fixed-white" ><i className="fe fe-trash"></i></Button>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip >Save to Wishlist</Tooltip>}>
													<Button variant="info" size='sm' className=" text-fixed-white" ><i className="fe fe-heart"></i></Button>
												</OverlayTrigger>
											</td>
										</tr>
										<tr>
											<td>
												<div className="media">
													<div className="card-aside-img">
														<Image src={image4} alt="img" className="h-60 w-60" />
													</div>
													<div className="media-body">
														<div className="card-item-desc mt-0">
															<h6 className="fw-semibold mt-0 text-uppercase">Sofa Chair</h6>
															<dl className="card-item-desc-1">
																<dt>Size: </dt>
																<dd>11-12 inches</dd>
															</dl>
															<dl className="card-item-desc-1">
																<dt>Color: </dt>
																<dd>LightGray color</dd>
															</dl>
														</div>
													</div>
												</div>
											</td>
											<td>
												<Form.Group className="">
													<Select name="state" options={Quantity} className="basic-multi-select " isSearchable
														menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Quantity[0]]}
													/>
												</Form.Group>
											</td>
											<td>USD 274</td>
											<td>
												<OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
													<Button variant="danger me-1" size='sm' className=" text-fixed-white" ><i className="fe fe-trash"></i></Button>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip >Save to Wishlist</Tooltip>}>
													<Button variant="info" size='sm' className=" text-fixed-white" ><i className="fe fe-heart"></i></Button>
												</OverlayTrigger>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} xl={4} className="">
					<Card className="">
						<Card.Header className="pb-0">
							<Card.Title className="mb-0">Estimate Shipping and tax</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<Form.Group className="">
								<Form.Label className="text-dark">Country</Form.Label>
								<Select name="state" options={Country} className="basic-multi-select mb-2" isSearchable
									menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Country[0]]}
								/>
							</Form.Group>
							<Form.Group className="">
								<Form.Label className="text-dark">Expiration Date</Form.Label>
								<Select name="state" options={Expirationdata} className="basic-multi-select mb-2" isSearchable
									menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Expirationdata[0]]}
								/>
							</Form.Group>
							<Form.Group className="mb-4">
								<Form.Label className="fs-15">Zip/Postal Code</Form.Label>
								<Form.Group className="mb-0">
									<Form.Group className="">
										<Form.Control type="number" className="" id="postal" placeholder="Zip/Postal" />
									</Form.Group>
								</Form.Group>
							</Form.Group>
							<Card.Footer className="mt-2">
								<Button variant='primary' className="">GET A QUOTE</Button>
							</Card.Footer>
						</Card.Body>
					</Card>

					<Col lg="12" className="">
						<Card className="">
							<Card.Header className="pb-0">
								<Card.Title className="mb-0">Order Summery</Card.Title>

							</Card.Header>
							<Card.Body className="">
								<Row className=" mb-4">
									<div className="col-6"><Form.Control className="productcart" type="text" placeholder="Coupon Code" /></div>
									<div className="col-6"><Button variant='primary' size='md' className="">Apply</Button></div>
								</Row>
								<div className="table-responsive">
									<Table bordered className="">
										<tbody>
											<tr>
												<td>Cart Subtotal</td>
												<td className="text-end">$792.00</td>
											</tr>
											<tr>
												<td><span>Totals</span></td>
												<td className="text-end text-muted"><span>$792.00</span></td>
											</tr>
											<tr>
												<td><span>Order Total</span></td>
												<td><h2 className="price text-end mb-0">$792.00</h2></td>
											</tr>
										</tbody>
									</Table>
								</div>
								<form className="text-center">
									<Button variant="secondary" className="float-start mt-2 m-b-20 " value="Proceed To Checkout">Proceed To Checkout</Button>
									<Button variant="success" className="mt-2 float-end" value="Continue Shopping">Continue Shopping</Button>
								</form>
							</Card.Body>
						</Card>
					</Col>
				</Col>
			</Row>
			{/* <!-- row closed -->          */}
		</Fragment>
	);
};

export default Cart;
