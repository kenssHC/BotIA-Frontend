import React, { Fragment, useState } from 'react';
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import { Customizable, HoverRating } from './ratingsdata';

const Ratings = () => {
    const [ratingValue, setRatingValue] = useState(null);
    const handleRatingChange = (_event, newValue) => {
		setRatingValue(newValue);
	};

	const handleResetRating = () => {
		setRatingValue(null);
	};
    const [value, _setValue] = useState(5);
    const [value2, setValue2] = useState(2);
    const [value0, _setValue0] = useState();
    return (
        <Fragment>
           

            <Row className="row-sm">
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Rating
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Show Some <span className="text-danger">&#10084;</span> with rating :</p>

                                <Rating name="read-only" value={value} emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                5 star rater with steps
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Dont forget to rate the product :</p>

                                <Rating name="simple-controlled" value={value2} onChange={(_event, newValue) => { setValue2(newValue); }} emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Custom messages
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Your rating is much appreciated&#128079; :</p>

                                <Rating name="customized-10" defaultValue={6} max={10} emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                            5 Star rater with custom isBusyText and simulated backend 
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <div>
                                    <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                                </div>
                                <div>
                                    <Customizable />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Rating Size
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <Rating name="size-small" defaultValue={2} size="small" emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                                <Rating name="size-medium" defaultValue={2} emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                                <Rating name="size-large" defaultValue={2} size="large" emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                On hover event
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Please give your valuable rating :</p>
                                <div className="d-flex flex-wrap align-items-center">
                                    <HoverRating />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Disabled
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Disabled rating :</p>
                                <div className="d-flex flex-wrap align-items-center">
                                    <Rating name="disabled" defaultValue={value0} disabled emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Readonly Rating
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Show Some <span className="text-danger">&#10084;</span> with rating :</p>

                                <Rating name="read-only" value={value} readOnly />

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
					<Card className="custom-card">
						<Card.Header>

							<div className="card-title">
								Clear/reset rater
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex flex-wrap align-items-center justify-content-between">
								<p className="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
								<div className="d-flex flex-wrap align-items-center">
									<Rating
										name="clickable-rating"
										value={ratingValue}
										onChange={handleRatingChange} // Handle rating change when the user clicks
									/>
									<OverlayTrigger
										placement="top"
										overlay={<Tooltip>Reset</Tooltip>}
									>
										<Button
											variant='danger-light'
											className="btn btn-icon btn-sm ms-3"
											id="rater-reset-button"

											onClick={handleResetRating}
										>
											<i className="ri-restart-line"></i>
										</Button>
									</OverlayTrigger>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Unlimited number of stars readOnly
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                                <Stack spacing={1} className="rating-stars block my-rating-7">
                                    <Rating name="half-rating-read" value={3} max={10} size="large" readOnly />
                                </Stack>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Ratings;
