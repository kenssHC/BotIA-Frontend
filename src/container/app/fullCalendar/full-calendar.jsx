import { Fragment, useState, useEffect, useRef } from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Swal from 'sweetalert2';

const Fullcalendar = () => {
  let eventGuid = 0;
  const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }
  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "Calendar Events",
        id: "1",
        bg: "bg-primary",
      },
      {
        title: "Birthday Events",
        id: "2",
        bg: " bg-secondary",
      },
      {
        title: "Holiday Calendar",
        id: "3",
        bg: "bg-success",
      },
      {
        title: "Office Events",
        id: "4", bg: "bg-info",
        border: "border-info"
      },
      {
        title: "Other Events",
        id: "5",
        bg: "bg-warning",
      },
      {
        title: "Festival Events",
        id: "6",
        bg: "bg-danger",
      },
      {
        title: "Timeline Events",
        id: "7",
        bg: "bg-teal",
      },
    ],
  };
  const [state] = useState(initialstate1);

  const draggableRef = useRef(null);

  useEffect(() => {
    const draggableEl = draggableRef.current;
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          const title = eventEl.getAttribute("title");
          const id = eventEl.getAttribute("data");
          const classValue = eventEl.getAttribute("class");
          return {
            title: title,
            id: id,
            className: classValue,
          };
        },
      });
    }
  }, []);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo) => {
    Swal.fire({
      title: `Are you sure you want to delete the event '${clickInfo.event.title}'?`,
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        clickInfo.event.remove();
        Swal.fire(
          'Deleted!',
          'Your event has been deleted.',
          'success'
        );
      }
    });
  };
  const handleEvents = () => { };

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  return (
    <Fragment>
      <Row>

        <Col xl={9} >
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Full Calendar</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id='calendar2'>
                <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,]}
                  headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay", }}
                  initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}
                  initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                  eventsSet={handleEvents}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card className="custom-card">
            <div className="card-header d-grid">
              <button className="btn btn-primary-light btn-wave"><i className="ri-add-line align-middle me-1 fw-semibold d-inline-block"></i>Create New Event</button>
            </div>
            <div className="card-body p-0">
              <div ref={draggableRef} id="external-events" className="border-bottom p-3">
                {state.events.map((event) => (
                  <div
                    className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} border ${event.border}`}
                    title={event.title}
                    key={event.id}>
                    <div className="fc-event-main">{event.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <div className="d-flex align-items-center mb-4 justify-content-between">
            <h5 className="fw-semibold">
              upcoming Events
            </h5>
            <button className="btn btn-primary-light btn-sm btn-wave">View All</button>
          </div>
          <div className="card custom-card">
            <div className="card-body">
              <div className="d-flex justify-conent-between">
                <span className="fs-14 text-muted"><i className="text-primary  bx bxs-circle me-1"></i>10:00-30:00</span>
                <Dropdown className="ms-auto">
                  <Dropdown.Toggle as="a" className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
                    <i className="fe fe-more-horizontal"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <li className="border-bottom"><Dropdown.Item as="a">Action</Dropdown.Item></li>
                    <li className="border-bottom"><Dropdown.Item as="a">Another action</Dropdown.Item></li>
                    <li><Dropdown.Item as="a">Something else here</Dropdown.Item></li>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <h6 className="mb-1 mt-2">Monday, Jan 1,2023</h6>
              <p className="text-muted mb-0">Meeting with a client About new project</p>
            </div>
          </div>
          <div className="card custom-card">
            <div className="card-body">
              <div className="d-flex justify-conent-between">
                <span className="fs-14 text-muted"><i className="text-success  bx bxs-circle me-1"></i>11:00-01:00</span>
                <Dropdown className="ms-auto">
                  <Dropdown.Toggle as="a" className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
                    <i className="fe fe-more-horizontal"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <li className="border-bottom"><Dropdown.Item as="a">Action</Dropdown.Item></li>
                    <li className="border-bottom"><Dropdown.Item as="a">Another action</Dropdown.Item></li>
                    <li><Dropdown.Item as="a">Something else here</Dropdown.Item></li>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <h6 className="mb-1 mt-2">Friday, Jan 20,2023</h6>
              <p className="text-muted mb-0">Check about the new design styles</p>
            </div>
          </div>
          <div className="card custom-card">
            <div className="card-body">
              <div className="d-flex justify-conent-between">
                <span className="fs-14 text-muted"><i className="text-info  bx bxs-circle me-1"></i>08:00-12:00</span>
                <Dropdown className="ms-auto">
                  <Dropdown.Toggle as="a" className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
                    <i className="fe fe-more-horizontal"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <li className="border-bottom"><Dropdown.Item as="a">Action</Dropdown.Item></li>
                    <li className="border-bottom"><Dropdown.Item as="a">Another action</Dropdown.Item></li>
                    <li><Dropdown.Item as="a">Something else here</Dropdown.Item></li>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <h6 className="mb-1 mt-2">Saturday, Jan 23,2023</h6>
              <p className="text-muted mb-0">Trip with School friends</p>
            </div>
          </div>
          <div className="card custom-card">
            <div className="card-body">
              <div className="d-flex justify-conent-between">
                <span className="fs-14 text-muted"><i className="text-pink  bx bxs-circle me-1"></i>06:00-19:00</span>
                <Dropdown className="ms-auto">
                  <Dropdown.Toggle as="a" className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
                    <i className="fe fe-more-horizontal"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <li className="border-bottom"><Dropdown.Item as="a">Action</Dropdown.Item></li>
                    <li className="border-bottom"><Dropdown.Item as="a">Another action</Dropdown.Item></li>
                    <li><Dropdown.Item as="a">Something else here</Dropdown.Item></li>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <h6 className="mb-1 mt-2">Sunday, Jan 24,2023</h6>
              <p className="text-muted mb-0">Birthday Party of Alizajohn</p>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Fullcalendar;
