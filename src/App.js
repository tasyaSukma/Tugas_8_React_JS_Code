import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import PageDropdown from './Page/PageDropdown';
import PageCarousel from './Page/PageCarousel';
import PageBreadcrumbs from './Page/PageBreadcrumbs';
import PageListgroup from './Page/PageListgroup';
import PageForm from './Page/PageForm';
import {Container, Row, Col,Button, Jumbotron} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <PageDropdown/>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><PageBreadcrumbs/></Col>
        </Row>
        <Row>
          <center>
          <Col md={8}>
          <PageCarousel/>
          <br/>
          </Col>
          </center>
        </Row>
        <Row>
          <Col sm={3}>
          <PageListgroup/>
          </Col>
          <Col>
          <Jumbotron>
            <h1>DIVISI PRIMERA</h1>
            <p>
             Main untuk Catalunya, Gerard Pique minta dihormati.
            </p>
            <p>
              <Button variant="primary">Read more</Button>
            </p>
          </Jumbotron>
          </Col>
          <Col sm={3}>
          <PageForm/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
