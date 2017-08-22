import React from 'react';
import axios from 'axios';
import Sidebar from 'Components/Spring/SpringSidebar';
import Associations from 'Components/Central/Modules/Associations/Components/Associations';
import Status from 'Components/Spring/Modules/Dashboard/Component/status';
import AssociationLogo from 'img/logo-ass.png';
import Logo from 'img/logo-white.svg';
import ArmLogo from 'img/arm.svg';
import TalkIcon from 'img/icon-talk.svg';
import { Button, Modal } from 'semantic-ui-react';


class SpringDashboard extends React.Component{
	constructor(props) {
		super(props);
		this.state = {name:'', email:'', password: '', open: false }
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
		const { open, size, name } = this.state;
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
						<a href="/central/dashboard" className="dsh01"><img src={ArmLogo}/> GO TO ARM</a>
					</div>
					<div className="content">
						<Status/>
						<div className="content-spring">
							<div className="row sub-content-spring">
								<div className="large-7 columns">
									<div className="content-chart">
										<div className="row">
											<div className="large-5 columns">
												<p className="bold">USER ENGAGEMENT</p>
											</div>
											<div className="large-6 columns">
												<div className="button-group1 float-right">
												<a className="btnMonth month">Month</a> <a className="btnMonth year btnGraph">Year</a>
												</div>
											</div>
											<div className="large-1 columns">
												<a href="#"><i className="fa fa-download float-right dwnld"></i></a><br/>
												 
											</div>
										</div>

										<div className="row" >
											<div className="large-12 columns">
												<canvas id="bar-chart" width="600" height="350"></canvas>

												<script src="js/chart.js"></script>
											</div>
											
										</div>
									</div>
									<div className="content-chart">
										<div className="row">
											<div className="large-5 columns">
												<p className="bold">DATA STATISTIC</p>
												
											</div>
											<div className="large-6 columns">
												<div className="button-group1 float-right">
												<a className="btnMonth month btnGraph">Month</a> <a className="btnMonth year ">Year</a>
												</div>
											</div>
											<div className="large-1 columns">
												<a href="#"><i className="fa fa-download float-right dwnld"></i></a><br/>
												 
											</div>
										</div>

										<div className="row">
											<div className="large-12 columns">

												
												<canvas id="bar-chart1" width="600" height="350"></canvas>
												<script src="js/columnChart1.js"></script>

												
											</div>
											
										</div>

										<hr/>

										<div className="row">
											<div className="large-12 columns">
												
												
												<canvas id="bar-chart2" width="600" height="350"></canvas>
												<script src="js/columnChart2.js"></script>
											</div>
											
										</div>

										<hr/>
										
										<div className="row">
											<div className="large-12 columns">
												
												<canvas id="bar-chart3" width="600" height="350"></canvas>
												<script src="js/columnChart3.js"></script>
												
											</div>
											
										</div>

										<hr/>
										
										<div className="row">
											<div className="large-12 columns">
												
												<canvas id="bar-chart4" width="600" height="350"></canvas>
												<script src="js/columnChart4.js"></script>
												
											</div>
											
										</div>

										<hr/>

										<div className="row">
											<div className="large-12 columns">
												<canvas id="bar-chart5" width="600" height="350"></canvas>
												
											</div>
											
										</div>

									</div>
									<div className="content-chart">
										<div className="row">
											<div className="large-6 columns">
												<p className="bold">USER TYPE</p>

											</div>
											<div className="large-6 columns">
												<a href="#"><i className="fa fa-download float-right dwnld"></i></a><br/>
											</div>
										</div>

										<div className="row">
											<div className="large-12 columns">
												
												<canvas id="oilChart1" width="400" height="200"></canvas>
												<script type="text/javascript" src="js/donut1.js"></script>
											</div>
											
										</div>

									</div>
									<div className="content-chart">
										<div className="row">
											<div className="large-6 columns">
												<p className="bold">USER PROFILE</p>

											</div>
											<div className="large-6 columns">
												<a href="#"><i className="fa fa-download float-right dwnld"></i></a><br/>
											</div>
										</div>

										<div className="row">
											<div className="large-12 columns">
												
												<canvas id="oilChart" width="400" height="200"></canvas>
												<script type="text/javascript" src="js/donut.js"></script>
												
											</div>
											
										</div>

									</div>
								</div>
								<div className="large-5 columns">
									<div className="row">
										<div className="large-12 columns">
											<ul className="tabs1 nav-justified" data-deep-link="true" data-deep-link-smudge="500" data-tabs="" data-update-history="true" id="deeplinked-tabs">
												<li className="tabs-title is-active">
													<a aria-selected="true" href="#panel1d">MEMBERS ACTIVITY</a>
												</li>
												<li className="tabs-title">
													<a href="#panel2d">MEMBERS</a>
												</li>
											</ul>
											<div className="tabs-content" data-tabs-content="deeplinked-tabs">
												<div className="tabs-panel is-active" id="panel1d">
													<a className="small float-right" href="#">View All</a>
													<hr className="aktiviti"/>
													<table className="full aktiviti unstriped">
														<tbody>
															<tr>
																<td className="img-align">
																	<a href="#"><img src="img/afgan.jpg"/></a>
																</td>
																<td>
																	<p>Afgan comment on Amin Makrufs post<br/></p>
																</td>
																<td className="align-right">
																	<p><i className="fa fa-clock-o"></i> 2 Hours ago</p>
																</td>
															</tr>
															
															<tr>
																<td className="img-align">
																	<a href="#"><img src="img/afgan.jpg"/></a>
																</td>
																<td>
																	<p>Afgan comment on Amin Makrufs post<br/></p>
																</td>
																<td className="align-right">
																	<p><i className="fa fa-clock-o"></i> 2 Hours ago</p>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div className="tabs-panel" id="panel2d">
													<a className="small float-right" href="#">View All</a>
													<hr className="aktiviti"/>
													<table className="full aktiviti unstriped">
														<tbody>
														<tr>
															<td className="img-align"><img src="img/afgan.jpg"/></td>
															<td>
																<a className="mid-bold" data-open="modal1">Ahmad Faisal Ahmad Faisal</a>
																<p className="thin"><i className="fa fa-clock-o"></i> 2 Hours ago</p>
															</td>
															<td className="btn-aktiviti">
																<p className="green small"><i className="fa fa-check"></i> APPROVED</p>
															</td>
														</tr>
														<tr>
															<td className="img-align"><img src="img/afgan.jpg"/></td>
															<td>
																<a className="mid-bold" data-open="modal1">Ahmad Faisal Ahmad Faisal</a>
																<p className="thin"><i className="fa fa-clock-o"></i> 2 Hours ago</p>
															</td>
															<td className="btn-aktiviti">
																<div className="tiny button-group1">
																	<a className="button1 success">APPROVE</a> <a className="button1 alert">DELETE</a>
																</div>
															</td>
														</tr>
														<tr>
															<td className="img-align"><img src="img/afgan.jpg"/></td>
															<td>
																<a className="mid-bold" data-open="modal1">Ahmad Faisal Ahmad Faisal</a>
																<p className="thin"><i className="fa fa-clock-o"></i> 2 Hours ago</p>
															</td>
															<td className="btn-aktiviti">
																<div className="tiny button-group1">
																	<a className="button1 success">APPROVE</a> <a className="button1 alert">DELETE</a>
																</div>
															</td>
														</tr>
														<tr>
															<td className="img-align"><img src="img/afgan.jpg"/></td>
															<td>
																<a className="mid-bold" data-open="modal1">Ahmad Faisal Ahmad Faisal</a>
																<p className="thin"><i className="fa fa-clock-o"></i> 2 Hours ago</p>
															</td>
															<td className="btn-aktiviti">
																<div className="tiny button-group1">
																	<a className="button1 success">APPROVE</a> <a className="button1 alert">DELETE</a>
																</div>
															</td>
														</tr>
														<tr>
															<td className="img-align"><img src="img/afgan.jpg"/></td>
															<td>
																<a className="mid-bold" data-open="modal1">Ahmad Faisal Ahmad Faisal</a>
																<p className="thin"><i className="fa fa-clock-o"></i> 2 Hours ago</p>
															</td>
															<td className="btn-aktiviti">
																<div className="tiny button-group1">
																	<a className="button1 success">APPROVE</a> <a className="button1 alert">DELETE</a>
																</div>
															</td>
														</tr>
														<tr>
															<td className="img-align"><img src="img/afgan.jpg"/></td>
															<td>
																<a className="mid-bold" data-open="modal1">Ahmad Faisal Ahmad Faisal</a>
																<p className="thin"><i className="fa fa-clock-o"></i> 2 Hours ago</p>
															</td>
															<td className="btn-aktiviti">
																<div className="tiny button-group1">
																	<a className="button1 success">APPROVE</a> <a className="button1 alert">DELETE</a>
																</div>
															</td>
														</tr>
														<tr>
															<td className="img-align"><img src="img/afgan.jpg"/></td>
															<td>
																<a className="mid-bold" data-open="modal1">Ahmad Faisal Ahmad Faisal</a>
																<p className="thin"><i className="fa fa-clock-o"></i> 2 Hours ago</p>
															</td>
															<td className="btn-aktiviti">
																<div className="tiny button-group1">
																	<a className="button1 success">APPROVE</a> <a className="button1 alert">DELETE</a>
																</div>
															</td>
														</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									<div className="row tab-spring">
										<div className="large-12 columns">
											<ul className="tabs1 nav-justified" data-deep-link="true" data-deep-link-smudge="500" data-tabs="" data-update-history="true" id="deeplinked-tabs-1">
												<li className="tabs-title is-active">
													<a aria-selected="true" className="align-left" href="#panel3d">EVENTS</a>
												</li>
											</ul>
											<div className="tabs-content" data-tabs-content="deeplinked-tabs-1">
												<div className="tabs-panel is-active" id="panel3d">
													<div id="calendar"></div>
													<hr className="aktiviti"/>
													<br/>
													<div className="row cal-event">
														<div className="large-3 columns align-text mid-bold">
															<center>
																<div className="cal-tag">
																	<h4>13</h4>
																	<p>NOV</p>
																</div>
															</center>
														</div>
														<div className="large-9 columns cal-event">
															<p className="highlight mid-bold">Club Appreciation Day</p>
															<p><i className="fa fa-clock-o"></i> 9.00 AM - 5.30 PM</p>
															<p><i className="fa fa-map-marker"></i> Cyberjaya, Selangor</p>
														</div>
													</div>
													<div className="row cal-event">
														<div className="large-3 columns align-text mid-bold">
															<center>
																<div className="cal-tag" style={{width: "80px"}}>
																	<h4>13</h4>
																	<p>NOV</p>
																</div>
															</center>
														</div>
														<div className="large-9 columns cal-event">
															<p className="highlight mid-bold">Club Appreciation Day</p>
															<p><i className="fa fa-clock-o"></i> 9.00 AM - 5.30 PM</p>
															<p><i className="fa fa-map-marker"></i> Cyberjaya, Selangor</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row tab-spring">
										<div className="large-12 columns">
											<ul className="tabs1 nav-justified" data-deep-link="true" data-deep-link-smudge="500" data-tabs="" data-update-history="true" id="deeplinked-tabs-2">
												<li className="tabs-title is-active">
													<a aria-selected="true" className="align-left" href="#panel4d">USER DEMOGRAPHIC</a>
												</li>
											</ul>
											<div className="tabs-content" data-tabs-content="deeplinked-tabs-2">
												<div className="tabs-panel is-active" id="panel4d">
													<a href="#"><i className="fa fa-download float-right dwnld"></i></a><br/>
													<div className="row">
														<div className="large-6 columns demographic-male">
															<div className="row demo">
																<div className="large-3 columns">
																	<i className="fa fa-male"></i>
																</div>
																<div className="large-9 columns demographic-details">
																	<p>MALE</p>
																	<h4 className="bold">70%</h4>
																</div>
															</div>
														</div>
														<div className="large-6 columns demographic-female">
															<div className="row">
																<div className="large-3 columns">
																	<i className="fa fa-female"></i>
																</div>
																<div className="large-9 columns demographic-details">
																	<p>FEMALE</p>
																	<h4 className="bold">30%</h4>
																</div>
															</div>
														</div>
													</div>
													<hr className="nipis"/>
													<div className="row">
														<div className="large-12 columns">
															<div className="row">
																<div className="large-3 columns">
																	<p className="align-right mid-bold">0 - 15</p>
																</div>
																<div className="large-9 columns">
																	<ul className="bar-graph">
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-male" style={{width: "20%"}}></span>
																			</div>
																		</li>
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-female" style={{width: "70%"}}></span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
															<hr className="nipis"/>
															<div className="row">
																<div className="large-3 columns">
																	<p className="align-right mid-bold">16 - 30</p>
																</div>
																<div className="large-9 columns">
																	<ul className="bar-graph">
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-male" style={{width: "20%"}}></span>
																			</div>
																		</li>
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-female" style={{width: "70%"}}></span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
															<hr className="nipis"/>
															<div className="row">
																<div className="large-3 columns">
																	<p className="align-right mid-bold">31 - 45</p>
																</div>
																<div className="large-9 columns">
																	<ul className="bar-graph">
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-male" style={{width: "20%"}}></span>
																			</div>
																		</li>
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-female" style={{width: "70%"}}></span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
															<hr className="nipis"/>
															<div className="row">
																<div className="large-3 columns">
																	<p className="align-right mid-bold">46 - 65</p>
																</div>
																<div className="large-9 columns">
																	<ul className="bar-graph">
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-male" style={{width: "20%"}}></span>
																			</div>
																		</li>
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-female" style={{width: "70%"}}></span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
															<hr className="nipis"/>
															<div className="row">
																<div className="large-3 columns">
																	<p className="align-right mid-bold">66 & above</p>
																</div>
																<div className="large-9 columns">
																	<ul className="bar-graph">
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-male" style={{width: "20%"}}></span>
																			</div>
																		</li>
																		<li>
																			<div className="bar-wrap">
																				<span className="bar-fill bar-female" style={{width: "70%"}}></span>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
															<hr className="nipis"/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
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

export default SpringDashboard