import React from 'react'
import Sidebar from 'Components/Spring/SpringSidebar';
import {Modal,Tab} from 'semantic-ui-react'

const NewProfileWindow = () =>{
		return(
			<div className="tabs-content main-tab" data-tabs-content="deeplinked-tabs">
				<div className="dash-sub-content">
					<p>Create a new custom profile for your association</p>
					<div className="row">
						<div className="large-12 columns multi-prof">
							<a href="/spring/profile"><i className="fa fa-reply"></i> Back</a> <a data-open="modal"><i className="fa fa-floppy-o"></i> Save</a>
						</div>
					</div>
					<div className="sub-content1">
						<p className="mid-bold">GENERAL</p>
						<hr className="nipis"/>
						<p>Fill in additional details for your custom profile type here</p>
						<form>
							<div className="row">
								<div className="large-6 columns">
									<div className="row">
										<div className="small-3 columns">
											<label className="middle" for="profile-name">Name</label> <label className="middle" for="profile-desc">Description</label>
										</div>
										<div className="small-9 columns">
											<input id="profile-name" type="text"/> 
											<textarea rows="5"></textarea>
										</div>
									</div>
								</div>
								<div className="large-6 columns profile-column">
									<div className="label-checkbox">
										<input type="checkbox"/><label className="mid-bold">Published</label>
										<p>This profile will be published</p>
									</div>
									<div className="label-checkbox">
										<input type="checkbox"/><label className="mid-bold">Approval</label>
										<p>This custom profile need approval from admin</p>
									</div>
									<div className="label-checkbox">
										<p><i className="fa fa-plus-circle"></i><a className="garis featured-title"> Featured Field on Profile</a></p>
									</div>
									<table className="noBorder unstriped full">
										<tbody>
											<tr>
												<td>Email Address</td>
												<td>
													<a className="garis red align-right" href="#">remove</a>
												</td>
											</tr>
											<tr>
												<td>User Profile</td>
												<td>
													<a className="garis red align-right" href="#">remove</a>
												</td>
											</tr>
											<tr>
												<td>Mobile Phone</td>
												<td>
													<a className="garis red align-right" href="#">remove</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="sub-content1">
					<p className="mid-bold">FIELDS</p>
					<hr className="nipis"/>
					<p>Select the field codes which are to appear in this custom profile type. Field that are not included will not be displayed in the user profile area.</p>
					<table className="noBorder full">
						<thead>
							<tr>
								<td className="align-text">#</td>
								<td>NAME</td>
								<td>TYPE</td>
								<td>INCLUDE</td>
							</tr>
						</thead>
						<tbody className="table-main">
							<tr>
								<td></td>
								<th >Basic Information</th>
							</tr>
							<tr>
								<td className="align-text">1</td>
								<td>Gender</td>
								<td>gender</td>
								<td>
									<div className="switch2 tiny">
										<input className="switch-input" id="enable-switch" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch"></label>
									</div>
								</td>
							</tr>
							<tr>
								<td className="align-text">2</td>
								<td>Birthdate</td>
								<td>birthdate</td>
								<td>
									<div className="switch2 tiny">
										<input className="switch-input" id="enable-switch2" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch2"></label>
									</div>
								</td>
							</tr>
							<tr>
								<td className="align-text">3</td>
								<td>About Me</td>
								<td>textarea</td>
								<td>
									<div className="switch2 tiny">
										<input className="switch-input" id="enable-switch3" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch3"></label>
									</div>
								</td>
							</tr>
							<tr>
								<td></td>
								<th>Contact Information</th>
							</tr>
							<tr>
								<td className="align-text">1</td>
								<td>Gender</td>
								<td>gender</td>
								<td>
									<div className="switch2 tiny">
										<input className="switch-input" id="enable-switch4" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch4"></label>
									</div>
								</td>
							</tr>
							<tr>
								<td className="align-text">2</td>
								<td>Birthdate</td>
								<td>birthdate</td>
								<td>
									<div className="switch2 tiny">
										<input className="switch-input" id="enable-switch5" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch5"></label>
									</div>
								</td>
							</tr>
							<tr>
								<td className="align-text">3</td>
								<td>About Me</td>
								<td>textarea</td>
								<td>
									<div className="switch2 tiny">
										<input className="switch-input" id="enable-switch6" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch6"></label>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
		</div>	
			)
	}


class add_profile extends React.Component{
	constructor(props) {
		super(props);
		this.state = {color:'black'}
	}
	
	render(){
		const panes = [
		  { menuItem: 'CREATE NEW PROFILE', render: () => <Tab.Pane attached='bottom'><NewProfileWindow/></Tab.Pane> },
		]
		const {color} = this.state
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
								<h1>PROFILE SETTING</h1>
							</div>
							<div className="content">
								<div>
									<div className="row">
										<div className="large-12 columns">
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

export default add_profile