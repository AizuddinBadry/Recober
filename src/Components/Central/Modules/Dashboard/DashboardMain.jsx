import React from 'react'
import axios from 'axios'
import Sidebar from 'Components/Central/CentralSidebar'
import Associations from 'Components/Central/Modules/Associations/Components/Associations'
import AssociationLogo from 'img/logo-ass.png'
import Logo from 'img/logo-white.svg'
import { Button, Modal } from 'semantic-ui-react'


class Dashboard extends React.Component{
	constructor(props) {
		super(props);
		this.state = {name:'', email:'', password: '', open: false, asscoiations_count:'' }
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

		axios.get('http://localhost:3001/associations/list/'+id)
		.then(function (response){
			console.log(response.data)
				self.setState({asscoiations_count:response.data.length})
		})
		.catch(function (error){
			console.log(error);
		});
	}

  	show = (size) => () => this.setState({ size, open: true })
  	close = () => this.setState({ open: false })

	render(){
		const { open, size, name, asscoiations_count } = this.state
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
							<h1>DASHBOARD</h1>
						</div>
						<div className="content">
								<div className="row ad-block">
									<div className="medium-6 columns">
										<p>Welcome {name}</p>
									</div>
									<div className="medium-6 columns">
										<p className="float-right">Monday, January 05, 2017</p>
									</div>
								</div>
								<div className="row">
									<div className="large-4 medium-4 columns">
										<div className="row noti">
											<div className="large-12 columns">
												<div className="large-2 columns noti-1">
													<center>
														<i className="fa fa-bell-o"></i>
													</center>
												</div>
												<div className="large-10 columns noti-4">
													<h5>0</h5>
													<p>NOTIFICATIONS</p>
												</div>
											</div>
										</div>
									</div>
									<div className="large-4 medium-4 columns">
										<div className="row noti">
											<div className="large-12 columns">
												<div className="large-2 columns noti-2">
													<center>
														<i className="fa fa-th-large"></i>
													</center>
												</div>
												<div className="large-10 columns noti-4">
													<h5>{asscoiations_count}</h5>
													<p>ASSOCIATION</p>
												</div>
											</div>
										</div>
									</div>
									<div className="large-4 medium-4 columns">
										<div className="row noti">
											<div className="large-12 columns">
												<div className="large-2 columns noti-3">
													<center>
														<i className="fa fa-tag"></i>
													</center>
												</div>
												<div className="large-10 columns noti-4">
													<h5>RM0.00</h5>
													<p>OVERDUE BILL</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="large-12 columns">
										<ul className="tabs1 nav-justified">
											<li className="tabs-title"><a className="align-left" aria-selected="true">ASSOCIATION</a></li>
										</ul>

										<Associations/>

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

export default Dashboard