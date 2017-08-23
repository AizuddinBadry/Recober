import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

class group_main extends React.Component{
	render(){
		return(
			<div className="dash-sub-content">
				<div className="row">
					<div className="large-9 columns multi-prof">
						<a href=""><i className="fa fa-check-circle publish"></i> Publish</a>
						<a href=""><i className="fa fa-times-circle unpublish"></i> Unpublish</a> 
						<a href=""><i className="fa fa-trash"></i> Delete</a> 
						<Modal trigger={<a><i className="fa fa-plus-circle"></i> New</a>}>
						    <Modal.Header>NEW GROUP</Modal.Header>
						    <Modal.Content>
						      <Modal.Description>
						        <div>
									<div>
										<div className="row">
											<div className="large-12 columns">
													<div className="row">
														<div className="large-6 columns">
															<label>Name</label> <input name="group_name" type="text"/> <label>Description</label> 
															<textarea id="member-about" rows="5"></textarea> <label>Parent Group</label> <select className="pilih">
																<option>
																</option>
																<option>
																</option>
																<option>
																</option>
															</select>
														</div>
														<div className="large-6 columns">
															<label>Assign Admin</label> <input name="assign-admin" type="text"/>
															<div className="label-checkbox">
																<input checked="checked" type="checkbox"/><label className="mid-bold">Public</label>
																<p>Make this group visible to everyoune</p>
															</div>
														</div>
													</div><br/>
													<div className=" button-group1 float-right">
														<a className="button1 reset">SAVE AS DRAFT</a> <a className="button1 save">CREATE</a>
													</div>
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
				<table className="noBorder full table-center">
					<thead>
						<tr>
							<td className="multi-prof"><input id="public-reg" type="checkbox"/></td>
							<td className="align-left">GROUP NAME</td>
							<td className="align-left">DESCRIPTION</td>
							<td>ADMIN</td>
							<td>MEMBERS</td>
							<td>STATUS</td>
						</tr>
					</thead>
					<tbody className="table-primary">
						<tr>
							<td className="multi-prof"><input id="public-reg" type="checkbox"/></td>
							<td className="align-left">
								<a data-open="modal4">HR Management</a>
							</td>
							<td className="align-left">HR department group</td>
							<td>2</td>
							<td>10</td>
							<td><i className="fa fa-check-circle publish"></i></td>
						</tr>
					</tbody>
				</table>
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

export default group_main