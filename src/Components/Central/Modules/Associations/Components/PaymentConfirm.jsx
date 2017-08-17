import React from 'react'
import Sidebar from 'Components/Central/CentralSidebar'

class PaymentConfirm extends React.Component{
	render(){
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
								<h1>ASSOCIATION</h1>
							</div>
							<div className="content">
								<div className="row">
									<div className="large-12 columns">
										<ul className="tabs1 nav-justified">
											<li className="tabs-title"><a className="align-left" aria-selected="true">ASSOCIATION SETTINGS</a></li>
										</ul>
										<div className="tabs-content" data-tabs-content="deeplinked-tabs">
												<form>
													<div className="sub-content">
														<p className="align-text">You just need a few steps to add your association</p>
														<div className="row">
															<div className="large-12 columns">
																<ol className="progress-indicator">
																	<li className="is-complete" data-step="1"></li>
																	<li className="is-complete" data-step="2"></li>
																	<li className="is-complete" data-step="3"></li>
																	<li className="is-complete" data-step="4"></li>
																	<li className="is-current" data-step="5"></li>
																</ol>
															</div>
														</div>
														<div className="row align-text">
															<div className="large-12 columns">
																<p className="mid-bold">STEP 5 : CONFIRMATION</p>
															</div>
														</div>
														<div className="form-details">
															<p className="mid-bold">Billing Details</p>
															<p>Please check your billing details before proceed</p><br/>
															<div className="row">
																<div className="small-8 large-12 columns">
																	<p className="mid-bold">ASSOCIATION DETAILS</p>
																	<hr/>
																	<table className="unstriped noBorder">
																		<tr>
																			<td>Association Name</td>
																			<td>:</td>
																			<td>Kelab Rakan Muda Selangor</td>
																		</tr>
																		<tr>
																			<td>Domain Name</td>
																			<td>:</td>
																			<td>krmselangor.recober.com</td>
																		</tr>
																		<tr>
																			<td>Membership ID</td>
																			<td>:</td>
																			<td>KRMS</td>
																		</tr>
																	</table><br/>
																	<p className="mid-bold">PAYMENT SUMMARY</p>
																	<hr/>
																	<table className="full unstriped">
																		<tr>
																			<th>RECOBER PACKAGE</th>
																			<th>DESCRIPTION</th>
																			<th>PRICE</th>
																		</tr>
																		<tr>
																			<td>GROWING ASSOCIATION</td>
																			<td>Up to 5 members only</td>
																			<td>RM 0.00</td>
																		</tr>
																		<tfoot>
																		<tr>
																			<td className="mid-bold">TOTAL AMOUNT</td>
																			<td></td>
																			<td>RM 0.00</td>
																		</tr>
																		</tfoot>
																	</table>
																	<hr/>
																</div>
															</div>
															<div className="row btn-right">
																<div className="small-6 large-6 columns-1">
																	<button className="btn cancel"><a href="payment.html">BACK</a></button>
																</div>
																<div className="small-6 large-6 columns-2">
																	<button className="btn btn-primary"><a data-open="modal">CONTINUE <i className="fa fa-long-arrow-right"></i></a></button>
																</div>
															</div>
														</div>
													</div>
												</form>
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
export default PaymentConfirm