import React from 'react'
import { Modal } from 'semantic-ui-react'

class membership_plan extends React.Component{
	render(){
		return(
			<div>
				<div className="dash-sub-content">
					<p>Set your own membership plan for your association</p>
						<div className="row">
							<div className="large-9 columns multi-prof">
								<a href=""><i className="fa fa-check-circle publish"></i> Publish</a> <a href=""><i className="fa fa-times-circle unpublish"></i> Unpublish</a> <a href=""><i className="fa fa-trash"></i> Delete</a> 
								<Modal trigger={<a><i className="fa fa-plus-circle"></i> New</a>}>
							    <Modal.Header>Membership Plan Details</Modal.Header>
							    <Modal.Content>
							      <Modal.Description>
							        <div className="row">
										<div className="large-6 columns">
											<label for="plan-name">Plan Name</label> <input id="plan-name" type="text"/> <label for="plan-desc">Description</label> 
											<textarea id="plan-desc" rows="5"></textarea>
										</div>
										<div className="large-6 columns">
											<label>Payment Type</label> <input checked="checked" id="payment-type" name="payment-type" required="" type="radio" value="single"/><label for="payment-type">Single</label> <input id="payment-type" name="payment-type" type="radio" value="recurring"/><label for="payment-type">Recurring</label> <input id="payment-type" name="payment-type" type="radio" value="free"/><label for="payment-type">Free</label>
											<div className="row">
												<div className="large-4 columns-1">
													<label for="payment-duration">Durations</label><input id="payment-duration" name="payment-duration" type="text"/>
												</div>
												<div className="large-8 columns-2">
													<label for="plan-unit">Units</label> <select className="pilih" id="plan-unit">
														<option>
															Month
														</option>
														<option>
															Year
														</option>
													</select>
												</div>
											</div>
											<div className="row">
												<div className="large-8 columns-1">
													<label for="plan-currency">Currency</label> <select className="pilih" id="plan-currency">
														<option value="Malaysia Ringgits - MYR">
															Malaysia Ringgits – MYR
														</option>
														<option value="United States Dollars - USD">
															United States Dollars – USD
														</option>
													</select>
												</div>
												<div className="large-4 columns-2">
													<label for="payment-amount">Amount</label><input id="payment-amount" name="payment-amount" type="text"/>
												</div>
											</div><br/>
											<div className=" button-group1 float-right">
												<a className="button1 reset">CANCEL</a> <a className="button1 save">SAVE</a>
											</div>
										</div>
									</div>
							      </Modal.Description>
							    </Modal.Content>
							  </Modal>
							</div>
							<div className="large-3 columns search">
								<input placeholder="Search" type="text"/> <a className="float-right" href="#"><i className="fa fa-search"></i></a>
							</div>
						</div>
						<table className="noBorder full table-center">
							<thead>
								<tr>
									<td className="multi-prof"><input id="memberplan1" type="checkbox"/></td>
									<td>PLAN</td>
									<td>DESCRIPTION</td>
									<td>AMOUNT</td>
									<td>TYPE</td>
									<td>DURATION</td>
									<td>DATE CREATION</td>
									<td>STATUS</td>
								</tr>
							</thead>
							<tr>
								<td className="multi-prof"><input id="memberplan2" type="checkbox"/></td>
								<td>
									<a href="#">PREMIUM</a>
								</td>
								<td>Unlimited Plan</td>
								<td>RM 19.99</td>
								<td>Single</td>
								<td>1 month</td>
								<td>08/12/2016</td>
								<td><i className="fa fa-check-circle publish"></i></td>
							</tr>
							<tr>
								<td className="multi-prof"><input id="memberplan3" type="checkbox"/></td>
								<td>
									<a href="#">PREMIUM</a>
								</td>
								<td>Unlimited Plan</td>
								<td>RM 19.99</td>
								<td>Single</td>
								<td>-</td>
								<td>08/12/2016</td>
								<td><i className="fa fa-check-circle publish"></i></td>
							</tr>
							<tr>
								<td className="multi-prof"><input id="memberplan4" type="checkbox"/></td>
								<td>
									<a href="#">PREMIUM</a>
								</td>
								<td>Unlimited Plan</td>
								<td>RM 19.99</td>
								<td>Single</td>
								<td>2 months</td>
								<td>08/12/2016</td>
								<td><i className="fa fa-check-circle publish"></i></td>
							</tr>
							<tr>
								<td className="multi-prof"><input id="memberplan5" type="checkbox"/></td>
								<td>
									<a href="#">PREMIUM</a>
								</td>
								<td>Unlimited Plan</td>
								<td>RM 19.99</td>
								<td>Single</td>
								<td>1 month</td>
								<td>08/12/2016</td>
								<td><i className="fa fa-check-circle publish"></i></td>
							</tr>
							<tr>
								<td className="multi-prof"><input id="memberplan6" type="checkbox"/></td>
								<td>
									<a href="#">PREMIUM</a>
								</td>
								<td>Unlimited Plan</td>
								<td>RM 19.99</td>
								<td>Single</td>
								<td>-</td>
								<td>08/12/2016</td>
								<td><i className="fa fa-check-circle publish"></i></td>
							</tr>
							<tr>
								<td className="multi-prof"><input id="memberplan7" type="checkbox"/></td>
								<td>
									<a href="#">PREMIUM</a>
								</td>
								<td>Unlimited Plan</td>
								<td>RM 19.99</td>
								<td>Single</td>
								<td>-</td>
								<td>08/12/2016</td>
								<td><i className="fa fa-check-circle publish"></i></td>
							</tr>
						</table>
				</div>
			</div>
			)
	}
}

export default membership_plan