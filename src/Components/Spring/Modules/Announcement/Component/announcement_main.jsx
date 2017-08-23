//Core
import React from 'react';
import axios from 'axios';

//Component
import ViewAnnouncement from 'Components/Spring/Modules/Announcement/Component/view_announcement'

//Assets
import {Modal} from 'semantic-ui-react';

class announcement_main extends React.Component{
	state = { open: false }

	show = size => () => this.setState({ size, open: true })
	close = () => this.setState({ open: false })

	render(){
		const { open, size } = this.state
		return(
			<div className="dash-sub-content">
				<div className="row">
					<div className="large-9 columns multi-prof">
						<a href=""><i className="fa fa-check-circle publish"></i> Approve</a> 
						<a href=""><i className="fa fa-times-circle unpublish"></i> Block</a> 
						<a href=""><i className="fa fa-trash"></i> Delete</a> 
						<Modal trigger={<a><i className="fa fa-plus-circle"></i> New</a>}>
						    <Modal.Header>CREATE ANNOUNCEMENT</Modal.Header>
						    <Modal.Content>
						      <Modal.Description>
						        <div className="popup-sub-content">
									<div className="row">
										<div className="large-12 columns">
											<div className="row">
												<div className="large-12 columns">
													<label>Title</label>
													<input name="announce-title" type="text"/> 
													<label>Description</label> 
													<textarea id="announce-desc" rows="5"></textarea>
												</div>
											</div><br/>
											<div className="button-group1 float-right">
												<a className="button1 reset">SAVE AS DRAFT</a> <a className="button1 save">CREATE</a>
											</div>
										</div>
									</div>
								</div>
						      </Modal.Description>
						    </Modal.Content>
						  </Modal>
						<a href="#"><i className="fa fa-download"></i> Export</a>
					</div>
					<div className="large-3 columns search">
						<input placeholder="Search" type="text"/> <a className="float-right" href="#"><i className="fa fa-search"></i></a>
					</div>
				</div>
				<table className="noBorder full table-center table-members">
					<thead>
						<tr>
							<td className="multi-prof"><input id="" type="checkbox"/></td>
							<td className="align-left-announcement">TITLE DESCRIPTION</td>
							<td className="post-by">POST BY</td>
							<td>DATE/TIME</td>
							<td>READ</td>
							<td>STATUS</td>
							<td></td>
						</tr>
					</thead>
					<tbody className="table-primary">
						<tr>
							<td className="multi-prof"><input id="" type="checkbox"/></td>
							<td className="align-left title-desc">
								<div className="align-left title-desc">
									<a href="#">Urgent Meeting</a>
									<p>Lorem ipsum dolor sisdasdt amet, consectetuerb dfsfsdfsfsdadipdfdsfsdfsiscing elit.sdssdss</p>
								</div>
							</td>
							<td>
								<div className="float-left">
									<a href="#"><img src="img/afgan.jpg"/></a>
								</div>
								<div className="align-left ann-id">
									<a href="#">KRSM006</a>
								</div>
							</td>
							<td>
								<p>20/12/2016</p>
								<p>11.30 PM</p>
							</td>
							<td>
								<a href="">10/20</a>
							</td>
							<td className="multi-prof"><i className="fa fa-check-circle publish"></i></td>
							<td>
								<a onClick={this.show('large')}>VIEW</a>
							</td>
						</tr>
					</tbody>
				</table>
				<Modal size={size} open={open} onClose={this.close}>
				<Modal.Header>VIEW ANNOUNCEMENT</Modal.Header>
		          <Modal.Content>
		            <ViewAnnouncement/>
		          </Modal.Content>
		        </Modal>
				<p className="align-text bold">24 <span className="thin">out of</span> 10,010</p>
				<div className="menu-centered">
					<ul className="menu mukasurat">
						<li><i className="fa fa-angle-double-left"></i></li>
						<li>
							<a href="#">1</a>
						</li>
						<li><i className="fa fa-angle-double-right"></i></li>
					</ul>
				</div>
			</div>
			)
		}
	}

export default announcement_main