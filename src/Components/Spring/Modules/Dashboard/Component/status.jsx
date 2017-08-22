import React from 'react'
import axios from 'axios'
import Logo from 'img/logo-white.svg'
import TalkIcon from 'img/icon-talk.svg'
import { Button, Modal } from 'semantic-ui-react'


class Status extends React.Component{
	constructor(props) {
		super(props);
		this.state = {association_name:''}
	}

	componentDidMount() {
		var self = this;
		var id = localStorage.getItem('association_id');
		axios.get('http://localhost:3001/associations/details/' + id)
		  .then(function (response) {
			self.setState({association_name:response.data['name']})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render(){
		var {association_name} = this.state;
		return(
			<div>
				<div className="row ad-block">
							<div className="medium-6 columns">
								<p>Welcome to {association_name} </p>
							</div>
							<div className="medium-6 columns">
								<p className="float-right">Monday, January 05, 2017</p>
							</div>
						</div>
						<div className="row">
							<div className="large-3 medium-3 columns">
								<div className="row noti">
									<div className="large-12 columns">
										<div className="large-3 columns noti-1">
											<center>
												<i className="fa fa-bell-o"></i>
											</center>
										</div>
										<div className="large-9 columns noti-4">
											<h5>0</h5>
											<p>NOTIFICATIONS</p>
										</div>
									</div>
								</div>
							</div>
							<div className="large-3 medium-3 columns">
								<div className="row noti">
									<div className="large-12 columns">
										<div className="large-3 columns noti-bar-2">
											<center>
												<i className="fa fa-user-o"></i>
											</center>
										</div>
										<div className="large-9 columns noti-4">
											<h5>0</h5>
											<p>MEMBERS</p>
										</div>
									</div>
								</div>
							</div>
							<div className="large-3 medium-3 columns">
								<div className="row noti">
									<div className="large-12 columns">
										<div className="large-3 columns noti-bar-3">
											<center>
												<i className="fa fa-users"></i>
											</center>
										</div>
										<div className="large-9 columns noti-4">
											<h5>0</h5>
											<p>GROUPS</p>
										</div>
									</div>
								</div>
							</div>
							<div className="large-3 medium-3 columns">
								<div className="row noti">
									<div className="large-12 columns">
										<div className="large-3 columns noti-bar-4">
											<center>
												<i className="fa fa-thumb-tack"></i>
											</center>
										</div>
										<div className="large-9 columns noti-4">
											<h5>0</h5>
											<p>ANNOUNCEMENT</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row noti-bar">
							<div className="large-3 medium-3 columns">
								<div className="row noti">
									<div className="large-12 columns">
										<div className="large-3 columns noti-bar-5">
											<center>
												<i className="fa fa-calendar"></i>
											</center>
										</div>
										<div className="large-9 columns noti-4">
											<h5>0</h5>
											<p>EVENTS</p>
										</div>
									</div>
								</div>
							</div>
							<div className="large-3 medium-3 columns">
								<div className="row noti">
									<div className="large-12 columns">
										<div className="large-3 columns noti-bar-6">
											<center>
												<i className="icon-talk"><img src={TalkIcon}/></i>
											</center>
										</div>
										<div className="large-9 columns noti-4">
											<h5>0</h5>
											<p>TALKS</p>
										</div>
									</div>
								</div>
							</div>
							<div className="large-3 medium-3 columns">
								<div className="row noti">
									<div className="large-12 columns">
										<div className="large-3 columns noti-bar-7">
											<center>
												<i className="fa fa-picture-o"></i>
											</center>
										</div>
										<div className="large-9 columns noti-4">
											<h5>0</h5>
											<p>PHOTOS</p>
										</div>
									</div>
								</div>
							</div>
							<div className="large-3 medium-3 columns">
								<div className="row noti">
									<div className="large-12 columns">
										<div className="large-3 columns noti-bar-8">
											<center>
												<i className="fa fa-video-camera"></i>
											</center>
										</div>
										<div className="large-9 columns noti-4">
											<h5>0</h5>
											<p>VIDEOS</p>
										</div>
									</div>
								</div>
							</div>
						</div>
			</div>
			)
		}
	}

export default Status