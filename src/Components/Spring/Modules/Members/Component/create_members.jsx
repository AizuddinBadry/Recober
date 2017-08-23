import React from 'react'

//Component
import Sidebar from 'Components/Spring/SpringSidebar';

//Assets
import { Button, Modal, Tab } from 'semantic-ui-react';

class create_members extends React.Component{
	constructor(props) {
		super(props);
		this.state = {members_list:[],color:'black'}
	}
	render(){
		const {color} = this.state
		const panes = [
		  { menuItem: 'MEMBERS', render: () => 
		  <Tab.Pane attached='bottom'>
		  	<div className="dash-sub-content">
				<div className="row">
					<div className="large-4 columns">
					<h5 className="mid-bold">Add a new member</h5>
					</div>
					<div className="large-8 columns">
						<div className="button-group1 float-right">
							<a className="button1 reset">CANCEL</a> <a className="button1" >SAVE AS DRAFT</a>
							<a className="button1 save" >SAVE</a>
						</div>
					</div>
				</div>
					<div className="sub-content1">
						<form className="input-primary">
							<p className="mid-bold">ACCOUNT DETAILS</p>
							<hr className="nipis"/>
							<p>Fill in your member account details below</p>
							<h6 className="bold">Membership ID : <span className="blue">KRMS90</span></h6><br/>
							<div className="row">
								<div className="large-6 columns">
									<label>Username</label> <input name="member-username" type="text"/> 
									<label>First Name</label> <input name="member-firstname" type="text"/> 
									<label>Last Name</label> <input name="member-lastname" type="text"/> 
									<label>Email Address</label> <input name="member-email" type="email"/>
								</div>
								<div className="large-6 columns">
									<div className="row">
										<div className="large-3 column">
											<label className="upload-label" for="member-photo">Profile Picture</label>
										</div>
										<div className="large-9 columns">
											<div className="member-photo">
												<div className="member-photo-content">
													<p className="align-text small"><span className="bold">Drag & Drop</span> your image pick your image from your computer and paste here</p>
													<a href="" className="btn">UPLOAD PHOTO</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="large-6 columns member-form">
									<label>Password</label> <input name="member-password" type="password"/> 
									<label>Confirm Password</label> <input name="member-confirm" type="password"/>
								</div>
							</div><br/>
							<br/>
							<p className="mid-bold">USER PROFILE</p>
							<hr className="nipis"/>
							<p>Please choose user profile for this member</p><br/>
							<div className="row">
								<div className="large-12 columns">
									<div className="label-checkbox">
										<input checked="checked" type="radio" name="member-profile"/><label className="mid-bold">User Profile 1</label>
										<p>Bafe Management</p>
									</div>
									<div className="label-checkbox">
										<input type="radio" name="member-profile"/><label className="mid-bold">User Profile 2</label>
										<p>Bafe Creative</p>
									</div>
									<div className="label-checkbox">
										<input type="radio" name="member-profile"/><label className="mid-bold">User Profile 3</label>
										<p>Bafe Engineering</p>
									</div>
								</div>
							</div><br/>
							<br/>
							<p className="mid-bold">BASIC INFORMATION</p>
							<hr className="nipis"/>
							<div className="row">
								<div className="large-12 columns">
									<label for="member-gender">Gender</label> <select className="pilih" id="member-gender">
										<option>
											Male
										</option>
										<option>
											Female
										</option>
									</select>
									<label for="member-about">Description</label> <textarea rows="5" id="member-about"></textarea>
								</div>
							</div><br/>
							<br/>
							<p className="mid-bold">CONTACT INFORMATION</p>
							<hr className="nipis"/>
							<div className="row">
								<div className="large-12 columns">
									<label>Mobile Phone</label>
									<div className="row">
										<div className="large-3 columns-1">
											<select className="pilih" id="">
										<option>
										</option>
										<option>
										</option>
									</select>
										</div>
										<div className="large-9 columns-2">
											<input type="text" name=""/>
										</div>
										
									</div>
									<label for="member-address">Address</label> <textarea rows="5" id="member-address"></textarea>
									<label>Country</label>
									<select className="pilih">
										<option>
											
										</option>
										<option>
											
										</option>
									</select>
								</div>
								</div>
								<br/>
								<div className="row">
								<div className="large-12 columns">
									<div className=" button-group1 float-right">
									<a className="button1 reset">CANCEL</a> <a className="button1" >SAVE AS DRAFT</a>
									<a className="button1 save" >SAVE</a>
								</div>
								</div>
							</div>
						</form>
					</div>
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

export default create_members