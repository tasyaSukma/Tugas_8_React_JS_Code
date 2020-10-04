import React, {Component} from 'react';
import {Form,Button,Figure, Modal} from 'react-bootstrap';

class PageForm extends Component{
	constructor(props){
		super(props)
		this.state={
			show : false,
			username : " "
		}
		this.handleLogin = this.handleLogin.bind(this)
	}

	handleLogin(e){
		e.preventDefault()
		this.setState({show : !this.state.show})
	}

	render(){
		return(
			<>
			<div align="center">
			<Form.Group>
				<Figure>
					<Figure.Image
					width={60}
					height={60}
					alt="171x180"
					src="https://www.flaticon.com/svg/static/icons/svg/1828/1828506.svg"
					align = "center"
					/>
					<Figure.Caption>
					Login
					</Figure.Caption>
				</Figure>
				<Form.Control size="sm" type="text" placeholder="Masukan Email"/>
				<br />
				<Form.Control size="sm" type="password" placeholder="Password" />
				<br />
				<Form.Check
				enabled
				type="checkbox"
				label={`Term & Condition`}
				id={`default-checkbox`}
				/>
			</Form.Group>
			</div>

			<div>
			<Button onClick={(e)=>this.handleLogin(e)}>Login</Button>
			<Modal show={this.state.show} onHide={(e)=> this.handleLogin(e)}>
			  <Modal.Header closeButton>
			    <Modal.Title>Login</Modal.Title>
			  </Modal.Header>

			  <Modal.Body>
			    <p>Anda Berhasil Login {this.state.username}</p>
			  </Modal.Body>

			  <Modal.Footer>
			    <Button variant="secondary" onClick={(e)=>this.handleLogin(e)}>Close</Button>
			    <Button variant="primary" onClick={(e)=>this.handleLogin(e)}>Simpan Username & Password</Button>
			  </Modal.Footer>
			</Modal>
			</div>
		</>
		)
	}
}

export default PageForm;