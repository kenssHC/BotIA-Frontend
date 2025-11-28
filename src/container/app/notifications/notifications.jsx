import React, { Fragment } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Swal from 'sweetalert2';

const Notifications = () => {
	//Basic Notification
	const BasicNotification = () => {
		toast("This is an example of tip");
	};

	//Async Notification With Error Message
	const showErrorToast = () => {
		toast.error('Some error!', {
			position: "bottom-right",
			autoClose: 500000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Bounce,
		});
	};
	//Async Notification With Success Message
	const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
	const showToastWithPromise = () => {
		toast.promise(
			resolveAfter3Sec,
			{
				success: 'Action has been succeeded',
			}
		);
	};


	//PopUp Notification
	function Basicsweetalert() {
		Swal.fire({
			title: 'Welcome To Bootstrap Admin Template',
			showConfirmButton: false
		});
	}

	//Info Notification
	const Infonotification = () => {
		toast.info('This Is An Example Of Info', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	}

	//Success Notification
	const Successnotification = () => {
		toast.success('This Is An Example Of Success', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	}
	//Warning Notification
	const Warningnotification = () => {
		toast.warning('This Is An Example Of Warning', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	}

	//Error Notification
	const Errornotification = () => {
		toast.error('This Is An Example Of Error', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	}
	//Confirmation Notification
	function Confirmnotification() {
		Swal.fire({
			title: 'Confirmation required',
			text: "Are you sure you want to reset the password",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, reset it!'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					'Reseted!',
					'Your password has been reseted.',
					'success'
				);
			}
		});
	}
	//Auto Close Notification
	function Autoclose() {
		let timerInterval;

		Swal.fire({
			title: 'Auto close notification!',
			html: 'I will close in <b></b> milliseconds.',
			timer: 5000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
				const b = Swal.getHtmlContainer()?.querySelector('b'); // Use optional chaining here
				if (b) {
					timerInterval = setInterval(() => {
						const timerLeft = Swal.getTimerLeft()?.toString() || '0'; // Use optional chaining and provide a default value
						b.textContent = timerLeft;
					}, 100);
				}
			},
			willClose: () => {
				clearInterval(timerInterval);
			},
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('I was closed by the timer');
			}
		});
	}
	//Ajax Request Notification
	function Ajaxalert() {
		Swal.fire({
			title: 'Submit your Github username',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Look up',
			showLoaderOnConfirm: true,
			preConfirm: (login) => {
				return fetch(`//api.github.com/users/${login}`)
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.catch(error => {
						Swal.showValidationMessage(
							`Request failed: ${error}`
						);
					});
			},
			allowOutsideClick: () => !Swal.isLoading()
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: `${result.value.login}'s avatar`,
					imageUrl: result.value.avatar_url
				});
			}
		});
	}
	return (
		<Fragment>
			<Row className="">
				<Col xl={3} lg={6} className="">
					<Card className="">
						<Card.Header className=" border-bottom">
							<Card.Title className="mb-0">Basic Notification</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<Button variant='primary' type="button" className="" id="basic" onClick={BasicNotification}>Basic Notification</Button>
							<ToastContainer
								position="top-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="light"
								transition={Bounce}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={6} className="">
					<Card className="">
						<Card.Header className="border-bottom">
							<Card.Title className=" mb-0">Async Notification With Error Message</Card.Title>
						</Card.Header>
						<Card.Body className=" text-center">
							<Button variant='primary' type="button" className="" id="async-error" onClick={showErrorToast}>Async Notification</Button>
							<ToastContainer
								position="top-right"
								autoClose={50000000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="dark"
								transition={Bounce}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={6} className="">
					<Card className="">
						<Card.Header className=" border-bottom">
							<Card.Title className=" mb-0">Async Notification With Success Message</Card.Title>
						</Card.Header>
						<Card.Body className=" text-center">
							<Button variant='primary' type="button" className="" id="async-success" onClick={showToastWithPromise}>Async Notification</Button>
							<ToastContainer
								position="top-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="dark"
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={6} className="">
					<Card className="">
						<Card.Header className=" border-bottom">
							<Card.Title className=" mb-0">PopUp Notification</Card.Title>
						</Card.Header>
						<Card.Body className=" text-center">
							<Button variant='primary' type="button" className="" id="popup" onClick={Basicsweetalert} >Notification</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End::row-1 --> */}

			{/* <!-- Start::row-2 --> */}
			<Row className="">
				<Col xl={3} lg={6} className="">
					<Card className="">
						<Card.Header className=" border-bottom">
							<Card.Title className=" mb-0">Info Notification</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<Button variant='info' type="button" className="btn " id="info" onClick={Infonotification}>Info Notification</Button>
							<ToastContainer
								position="top-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="colored"
								transition:Bounce />
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={6} className="">
					<Card className="">
						<Card.Header className=" border-bottom">
							<Card.Title className=" mb-0">Success Notification</Card.Title>
						</Card.Header>
						<Card.Body className=" text-center">
							<Button variant='success' type="button" className="btn  " id="success" onClick={Successnotification}>Success Notification</Button>
							<ToastContainer
								position="top-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="colored"
								transition:Bounce />
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={6} className="">
					<Card className="">
						<Card.Header className=" border-bottom">
							<Card.Title className=" mb-0">Warning Notification</Card.Title>
						</Card.Header>
						<Card.Body className=" text-center">
							<Button variant='warning' type="button" className="btn " id="warning" onClick={Warningnotification}>Warning Notification</Button>
							<ToastContainer
								position="top-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="colored"
								transition:Bounce />
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={6} className="">
					<Card className="">
						<Card.Header className=" border-bottom">
							<Card.Title className="mb-0">Error Notification</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<Button variant='danger' type="button" className="btn " id="error" onClick={Errornotification}>Error Notification</Button>
							<ToastContainer
								position="top-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="colored"
								transition:Bounce />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End::row-2 --> */}

			{/* <!-- Start::row-3 --> */}
			<Row className="">
				<Col xl={4} lg={6} className="">
					<Card className="">
						<Card.Header className="border-bottom">
							<Card.Title className="mb-0">Confirmation Notification</Card.Title>
						</Card.Header>
						<Card.Body className=" text-center">
							<Button variant='secondary' type="button" className="btn  " id="confirm" onClick={Confirmnotification}>Notification</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4} lg={6} className="">
					<Card className="">
						<Card.Header className=" border-bottom">
							<Card.Title className=" mb-0">Auto Close Notification</Card.Title>
						</Card.Header>
						<Card.Body className=" text-center">
							<Button variant='primary' type="button" className="btn " id="async" onClick={Autoclose}>Notification</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4} lg={6} className="">
					<Card className="">
						<Card.Header className="border-bottom">
							<Card.Title className="mb-0">Ajax Request Notification</Card.Title>
						</Card.Header>
						<Card.Body className=" text-center">
							<Button variant='primary' type="button" className="btn btn-primary" id="async-block" onClick={Ajaxalert}>Notification</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End::row-3 -->          */}
		</Fragment>
	);
};
export default Notifications;
