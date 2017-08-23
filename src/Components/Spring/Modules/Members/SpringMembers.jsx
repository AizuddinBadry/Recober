//Core
import React from 'react';
import axios from 'axios';

//Component
import Sidebar from 'Components/Spring/SpringSidebar';

//Assets
import { Button, Modal, Tab } from 'semantic-ui-react';


class SpringProfile extends React.Component{
	constructor(props) {
		super(props);
		this.state = {name:'', email:'', password: '', open: false, color: 'black' }
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		var {email,password} = this.state
		axios.post('http://localhost:3001/account/login', {
		    email: email,
		    password: password
		  })
		  .then(function (response) {
		  	if(response.data['status'] ==  false)
		    {
		    	alert('Wrong username or password')
		    }
		    else
		    {
		    	window.location = '/central/dashboard'
		    }
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	componentDidMount() {
		var self = this;
		var id = localStorage.getItem('id');
		axios.get('http://localhost:3001/account/details/' + id)
		  .then(function (response) {
			self.setState({name:response.data['name']})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

  	show = (size) => () => this.setState({ size, open: true })
  	close = () => this.setState({ open: false })

	render(){
		const { open, size, name, color } = this.state;
		const panes = [
		  { menuItem: 'MEMBERS', render: () => 
		  <Tab.Pane attached='bottom'>
		  	<div className="dash-sub-content">
				<div className="row">
					<div className="large-9 columns multi-prof">
						<a href=""><i className="fa fa-check-circle publish"></i> Approve</a> <a href=""><i className="fa fa-times-circle unpublish"></i> Block</a> <a href=""><i className="fa fa-trash"></i> Delete</a> <a href="add_members.html"><i className="fa fa-plus-circle"></i> New</a> <a href="#"><i className="fa fa-download"></i> Export</a>
					</div>
					<div className="large-3 columns search">
						<input placeholder="Search" type="text"/> <a className="float-right" href="#"><i className="fa fa-search"></i></a>
					</div>
				</div>
				<table className="noBorder full table-center table-members">
					<thead>
						<tr>
							<td className="multi-prof"><input id="" type="checkbox"/></td>
							<td>MEMBER ID</td>
							<td>NAME/EMAIL</td>
							<td>USERNAME</td>
							<td>PROFILE</td>
							<td>ADMIN</td>
							<td></td>
						</tr>
					</thead>
					<tr>
						<td className="multi-prof"><input id="" type="checkbox"/></td>
						<td>KRMS1</td>
						<td>
						<div className="float-left">
							<a href="#"><img src="img/afgan.jpg"/></a>
						</div>
						<div className="align-left member-email"><p>Afgansyah Redza</p><a href="#">afgansyah.redza@gmail.com</a></div>
						</td>
						<td>afgansyah</td>
						<td>User Profile 1</td>
						<td className="multi-prof"><input id="" type="checkbox"/></td>
						<td>
							<div className="small button-group1 float-left">
								<a className="button1 success">APPROVE</a> <a className="button1 alert">DELETE</a>
							</div>
						</td>
					</tr>
				</table>
			</div>
		  </Tab.Pane> },
		]
		return(
			<div className="off-canvas-wrapper1">
				<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper="">
					<Sidebar/>
					<div className="off-canvas-content1" data-off-canvas-content="">
						<div className="title-bar hide-for-large">
							<div className="title-bar-left">
								<button className="menu-icon" data-open="my-info" type="button"></button> <span className="title-bar-title">Recober</span>
							</div>
						</div>
						<div className="row expanded1">
							<div className="row column top-head">
								<h1>MEMBERS</h1>
								<a href="/central/dashboard" className="dsh01"><img /> GO TO ARM</a>
							</div>
							<div className="content">
								<div className="row">
									<div className="large-12 columns">
										<div className="tab1 nav-justified">
											<Tab menu={{size: 'small', widths: 'one', color, inverted: true, attached: 'top' }} panes={panes} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
		}
	}

export default SpringProfile