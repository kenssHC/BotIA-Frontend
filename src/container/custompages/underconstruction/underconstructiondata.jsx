import { Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
// import TimeFormat from 'hh-mm-ss'

const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <Row className=" mt-4 gy-xxl-0 gap-3 justify-content-center">
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-12 p-2 under-maintenance-time clock-presenter days_dash rounded me-0' >
         
            <p className='mb-0 fs-12 op-9'>DAYS</p>
            <h4 className="fw-semibold digit mb-0 text-fixed-white">{days}</h4>
         
        </Col>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-12 p-2 under-maintenance-time clock-presenter days_dash rounded me-0' >
         
            <p className='mb-0 fs-12 op-9'>HOURS</p>
            <h4 className="fw-semibold digit mb-0 text-fixed-white">{hours}</h4>
          
        </Col>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-12 p-2 under-maintenance-time clock-presenter days_dash rounded me-0' >
         
            <p className='mb-0 fs-12 op-9'>MINUTES</p>
            <h4 className="fw-semibold digit mb-0 text-fixed-white">{minutes}</h4>
         
        </Col>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-12 p-2 under-maintenance-time clock-presenter days_dash rounded me-0' >
         
            <p className='mb-0 fs-12 op-9'>SECONDS</p>
            <h4 className="fw-semibold digit mb-0 text-fixed-white">{seconds}</h4>
          
        </Col>
      </Row>
    );
  }
};

export function DayCounter() {
  return (<Countdown date={Date.now() + 8500590000} renderer={rendering} />);
}
