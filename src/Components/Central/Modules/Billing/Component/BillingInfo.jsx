import React from 'react'
import Sidebar from 'Components/Central/CentralSidebar'

class BillingInfo extends React.Component{
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
								<h1>BILLING</h1>
							</div>
							<div className="content">
								<div className="row">
									<div className="large-12 columns">
										<ul className="tabs1 nav-justified" data-deep-link="true" data-deep-link-smudge="500" data-tabs="" data-update-history="true" id="deeplinked-tabs">
											<li className="tabs-title is-active">
												<a aria-selected="true" href="#panel1d">BILLING INFO</a>
											</li>
											<li className="tabs-title">
												<a href="#panel2d">BILLING HISTORY</a>
											</li>
										</ul>
										<div className="tabs-content" data-tabs-content="deeplinked-tabs">
											<div className="tabs-panel is-active" id="panel1d">
												<div className="dash-sub-content">
														<div className="row">
															<div className="large-7 columns">
																<p>You can manage your Recober subscription here</p>
															</div>
															<div className="large-2 columns">
																<label className="float-right label-ass">Association</label>
															</div>
															<div className="large-3 column-1 float-right">
																<select className="pilih">
																	<option>
																		Kelab Rakan Muda Selangor
																	</option>
																	<option>
																		Persatuan Aspirasi
																	</option>
																	<option>
																		Persatuan Beliawanis Malaysia
																	</option>
																</select>
															</div>
														</div>
														<div className="row sub-content">
															<div className="large-12 columns">
																<div className="row">
																	<div className="large-8 columns">
																		<h5>Recober Package</h5>
																		<p className="thin">You are currently <span className="mid-bold">Small Association.</span> If you have more than 7 members, you may <span className="mid-bold">upgrade</span> your packege to <span className="mid-bold">Growing Association</span></p><button className="btn"><a href="upgrade_package.html">UPGRADE PACKAGE</a></button>
																	</div>
																	<div className="large-4 columns right billing-tag-width">
																		<div className="billing-tag">
																			<h5>SMALL ASSOCIATION</h5>
																			<p>FREE</p>
																		</div>
																		<div className="billing-tag-desc">
																			<p>Up to 7 members only</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
											</div>
											<div className="tabs-panel" id="panel2d">
												<div className="dash-sub-content">
														<div className="row">
															<div className="large-6 columns">
																<label className="float-right label-ass">Association</label>
															</div>
															<div className="large-3 columns">
																<select className="pilih">
																	<option>
																		Kelab Rakan Muda Selangor
																	</option>
																	<option>
																		Persatuan Aspirasi
																	</option>
																	<option>
																		Persatuan Beliawanis Malaysia
																	</option>
																</select>
															</div>
															<div className="large-3 columns search">
																<input placeholder="Search" type="text"/> <a className="float-right" href="#"><i className="fa fa-search"></i></a>
															</div>
														</div>
														<div className="row">
															<table className="full table-noti">
																<tr>
																	<th>DATE <i aria-hidden="true" className="fa fa-sort"></i></th>
																	<th>TRANSACTION <i aria-hidden="true" className="fa fa-sort"></i></th>
																	<th>DESCRIPTION <i aria-hidden="true" className="fa fa-sort"></i></th>
																	<th>PACKAGE <i aria-hidden="true" className="fa fa-sort"></i></th>
																	<th>PAID <i aria-hidden="true" className="fa fa-sort"></i></th>
																</tr>
																<tr>
																	<td>Dec 08, 2016</td>
																	<td>
																		<a data-open="modal1">#1635R6789TZ</a>
																	</td>
																	<td>Kelab Rakan Muda Selangor</td>
																	<td>Small Association</td>
																	<td>RM 0.00</td>
																</tr>
																<tr>
																	<td>Dec 08, 2016</td>
																	<td>
																		<a data-open="modal1">#1635R6789TZ</a>
																	</td>
																	<td>Kelab Rakan Muda Selangor</td>
																	<td>Small Association</td>
																	<td>RM 0.00</td>
																</tr>
																<tr>
																	<td>Dec 08, 2016</td>
																	<td>
																		<a data-open="modal1">#1635R6789TZ</a>
																	</td>
																	<td>Kelab Rakan Muda Selangor</td>
																	<td>Small Association</td>
																	<td>RM 0.00</td>
																</tr>
																<tr>
																	<td>Dec 08, 2016</td>
																	<td>
																		<a data-open="modal1">#1635R6789TZ</a>
																	</td>
																	<td>Kelab Rakan Muda Selangor</td>
																	<td>Small Association</td>
																	<td>RM 0.00</td>
																</tr>
																<tr>
																	<td>Dec 08, 2016</td>
																	<td>
																		<a data-open="modal1">#1635R6789TZ</a>
																	</td>
																	<td>Kelab Rakan Muda Selangor</td>
																	<td>Small Association</td>
																	<td>RM 0.00</td>
																</tr>
															</table>
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
export default BillingInfo