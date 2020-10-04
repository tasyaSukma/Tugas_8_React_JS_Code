import React from 'react';
import {Container, Row, Col, Dropdown,Figure} from 'react-bootstrap';

const mystyle = {
      color: "white",
      backgroundColor: "Black",
      padding: "10px",
      textAlign : "center",
      fontSize : "15px",
      fontWeight : "bold"
    };

function PageDropdown(){

	return(
		<div style={mystyle}>
		<Container>
		<Row>
		<Col>
		<Dropdown>
		<Dropdown.Toggle variant="success" id="dropdown-basic">
		Pilih Bahasa
		</Dropdown.Toggle>
		<Dropdown.Menu>
			<Dropdown.Item href="#/action-1">Bahasa Indonesia</Dropdown.Item>
			<Dropdown.Item href="#/action-2">English</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
		</Col>
		<Col xs={8}></Col>
		<Col>
		<Figure>
              <Figure.Image
                width={60}
                height={60}
                alt="171x180"
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
              />
              <Figure.Caption style={{color : "white"}}>
                <h6>Alan Saputra</h6>
              </Figure.Caption>
            </Figure>
		</Col>
		</Row>
		</Container>
		</div>
	)
}

export default PageDropdown;