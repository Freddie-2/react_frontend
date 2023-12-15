import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateTrip } from '../services/TripService';

const UpdateTripModal = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTrip = {
      trip_name: e.target.trip_name.value,
      trip_start_time: e.target.trip_start_time.value,
      trip_end_time: e.target.trip_end_time.value,
    };

    try {
      const result = await updateTrip(props.trip.trip_id, updatedTrip);
      alert(result.message);
      props.setUpdated(true);
      props.onHide();
    } catch (error) {
      alert('Failed to Update Trip');
    }
  };

  return (
    <div className="container">
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Update Trip Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="trip_name">
                  <Form.Label>Trip Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="trip_name"
                    required
                    defaultValue={props.trip.trip_name}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="trip_start_time">
                  <Form.Label>Trip Start Time</Form.Label>
                  <Form.Control
                    type="text"
                    name="trip_start_time"
                    required
                    defaultValue={props.trip.trip_start_time}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="trip_end_time">
                  <Form.Label>Trip End Time</Form.Label>
                  <Form.Control
                    type="text"
                    name="trip_end_time"
                    required
                    defaultValue={props.trip.trip_end_time}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group>
                  <p></p>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTripModal;


{/*import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateTrip } from '../services/TripService';

const UpdateTripModal = (props) => {
    if (!props.trip) {
        return null; // or handle the case where trip is undefined
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedTripData = {};

        formData.forEach((value, key) => {
            updatedTripData[key] = value;
        });

        updateTrip(props.trip.trip_id, updatedTripData)
            .then(() => {
                alert("Trip updated successfully");
                props.setUpdated(true);
                props.onHide();
            })
            .catch((error) => {
                alert("Failed to update Trip");
            });
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Update Trip Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="trip_name">
                                <Form.Label>Trip Name</Form.Label>
                                <Form.Control type="text" name="trip_name" required defaultValue={props.trip.trip_name || ''} />
                            </Form.Group>
                            <Form.Group controlId="trip_start_time">
                                <Form.Label>trip_start_time</Form.Label>
                                <Form.Control type="text" name="trip_start_time" required defaultValue={props.trip.trip_start_time || ''} />
                            </Form.Group>
                            <Form.Group controlId="trip_end_time">
                                <Form.Label>trip_end_time</Form.Label>
                                <Form.Control type="text" name="trip_end_time" required defaultValue={props.trip.trip_end_time || ''} />
                            </Form.Group>
                            {/* Add other form fields as needed
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateTripModal;



{/*import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateTrip } from '../services/TripService';

const UpdateTripModal = (props) => {
    if (!props.trip) {
        return null; // or handle the case where trip is undefined
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedTripData = {};

        formData.forEach((value, key) => {
            updatedTripData[key] = value;
        });

        updateTrip(props.trip.trip_id, updatedTripData)
            .then(() => {
                alert("Trip updated successfully");
                props.setUpdated(true);
                props.onHide();
            })
            .catch((error) => {
                alert("Failed to update Trip");
            });
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Update Trip Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="departure_location">
                                <Form.Label>Departure Location</Form.Label>
                                <Form.Control type="text" name="departure_location" required defaultValue={props.trip.departure_location || ''} />
                            </Form.Group>
                            <Form.Group controlId="destination_location">
                                <Form.Label>Destination Location</Form.Label>
                                <Form.Control type="text" name="destination_location" required defaultValue={props.trip.destination_location || ''} />
                            </Form.Group>
                            <Form.Group controlId="start_date">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="text" name="start_date" required defaultValue={props.trip.start_date || ''} />
                            </Form.Group>
                            {/* Add other form fields as needed *
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateTripModal;





// UpdateTripModal.js

import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { updateTrip } from '../services/TripService';

const UpdateTripModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.trip) {
      // Handle case when props.trip is not defined
      console.error('Trip data is undefined');
      return;
    }
    updateTrip(props.trip.trip_id, e.target)
      .then(
        (result) => {
          console.log('Update Trip Response:', result);
          alert(result.message);
          props.handleUpdateTrip(props.trip.trip_id);
        },
        (error) => {
          console.error('Error Updating Trip:', error);
          alert('Failed to Update Trip');
        }
      );
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Trip Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              {props.trip ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="trip_name">
                    <Form.Label>Trip Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="trip_name"
                      required
                      defaultValue={props.trip.trip_name}
                      placeholder=""
                    />
                  </Form.Group>
                  <Form.Group controlId="trip_start_time">
                    <Form.Label>Trip Start Time</Form.Label>
                    <Form.Control
                      type="text"
                      name="trip_start_time"
                      required
                      defaultValue={props.trip.trip_start_time}
                      placeholder=""
                    />
                  </Form.Group>
                  <Form.Group>
                    <p></p>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              ) : (
                <p>Trip data is undefined</p>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            type="submit"
            onClick={props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTripModal;






{/*import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateTrip } from '../services/TripService';

const UpdateTripModal = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTrip = {
      trip_name: e.target.trip_name.value,
      trip_start_time: e.target.trip_start_time.value,
      trip_end_time: e.target.trip_end_time.value,
    };

    try {
      await updateTrip(props.trip.trip_id, updatedTrip);
      alert('Trip updated successfully');
      props.setUpdated(true);
      props.onHide();
    } catch (error) {
      alert('Failed to update trip');
    }
  };

  return (
    <div className="container">
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Update Trip Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="trip_name">
                  <Form.Label>Trip Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="trip_name"
                    required
                    defaultValue={props.trip.trip_name}
                  />
                </Form.Group>
                <Form.Group controlId="trip_start_time">
                  <Form.Label>Trip Start Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="trip_start_time"
                    required
                    defaultValue={props.trip.trip_start_time}
                  />
                </Form.Group>
                <Form.Group controlId="trip_end_time">
                  <Form.Label>Trip End Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="trip_end_time"
                    required
                    defaultValue={props.trip.trip_end_time}
                  />
                </Form.Group>
                <Form.Group>
                  <p></p>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTripModal;





 UpdateTripModal.js

import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateTrip } from '../services/TripService';

const UpdateTripModal = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const tripData = {};
    formData.forEach((value, key) => {
      tripData[key] = value;
    });

    updateTrip(props.trip.trip_id, tripData)
      .then((result) => {
        alert(result.message);
        props.setUpdated(true);
      })
      .catch((error) => {
        alert('Failed to Update Trip');
      });
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Trip Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="trip_name">
                  <Form.Label>Trip Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="trip_name"
                    required
                    defaultValue={props.trip.trip_name}
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group controlId="trip_start_time">
                  <Form.Label>Trip_Start_Time</Form.Label>
                  <Form.Control
                    type="text"
                    name="trip_start_time"
                    required
                    defaultValue={props.trip.trip_start_time}
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group controlId="trip_end_time">
                  <Form.Label>Trip_End_Time</Form.Label>
                  <Form.Control
                    type="text"
                    name="trip_end_time"
                    required
                    defaultValue={props.trip.trip_end_time}
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group>
                  <p></p>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTripModal;





{/*import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateTrip } from '../services/TripService';

const UpdateTripModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if props.trip is defined before accessing its properties
    if (!props.trip || !props.trip.trip_id) {
      alert('Invalid trip data');
      return;
    }

    const updatedTrip = {
      trip_name: e.target.trip_name.value,
      trip_start_time: e.target.trip_start_time.value,
      trip_end_time: e.target.trip_end_time.value,
    };

    // Ensure that props.trip is defined before attempting to update
    updateTrip(props.trip.trip_id, updatedTrip)
      .then((result) => {
        alert(result.message);
        props.setUpdated(true);
        props.onHide();
      })
      .catch((error) => {
        alert('Failed to update trip');
      });
  };

  return (
    <div className="container">
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Update Trip Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                {/* Check if props.trip is defined and has necessary properties
                {props.trip && props.trip.trip_id && (
                  <>
                    <Form.Group controlId="trip_name">
                      <Form.Label>Trip Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="trip_name"
                        required
                        defaultValue={props.trip.trip_name || ''}
                      />
                    </Form.Group>
                    <Form.Group controlId="trip_start_time">
                      <Form.Label>Trip Start Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="trip_start_time"
                        required
                        defaultValue={props.trip.trip_start_time || ''}
                      />
                    </Form.Group>
                    <Form.Group controlId="trip_end_time">
                      <Form.Label>Trip End Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="trip_end_time"
                        required
                        defaultValue={props.trip.trip_end_time || ''}
                      />
                    </Form.Group>
                    <Form.Group>
                      <p></p>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form.Group>
                  </>
                )}
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTripModal;

*/}

