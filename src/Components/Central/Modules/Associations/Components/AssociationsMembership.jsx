import React from 'react'
import Sidebar from 'Components/Central/CentralSidebar'
import { Button, Modal } from 'semantic-ui-react'


class AssociationsMembership extends React.Component{
	
	handleNext = () =>{
		window.location = '/central/associations/create/manual'
	}
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
													<div className="sub-content align-text">
														<p>You just need a few steps to add your association</p>
														<div className="row">
															<div className="large-12 columns">
																<ol className="progress-indicator">
																	<li className="is-complete" data-step="1"></li>
																	<li className="is-current" data-step="2"></li>
																	<li className="" data-step="3"></li>
																	<li className="" data-step="4"></li>
																	<li className="" data-step="5"></li>
																</ol>
															</div>
														</div>
														<div className="row">
															<div className="large-12 columns">
																<p className="mid-bold">STEP 2 : MEMBERSHIP ID</p>
																<p>Choose your <span className="mid-bold">membership ID</span> type</p>
															</div>
														</div>
														<div className="row">
															<div className="large-12 columns ass-type">
																<div className="member-type">
																	<ul className="payment-methods">
																		<li className="payment-method manual-id"><input id="manual-id" name="payment_methods" type="radio" value="manual_id"/> <label for="manual-id"></label></li>
																		<li className="payment-method custom-id"><input id="custom-id" checked="" name="payment_methods" type="radio" value="custom_id"/> <label for="custom-id"></label></li>
																		<li className="payment-method random-id"><input id="random-id" name="payment_methods" type="radio" value="random_id"/> <label for="random-id"></label></li>
																	</ul>
																</div>
															</div>
														</div>
														<div className="row step-button">
															<div className="small-6 large-6 columns-1">
																<button className="btn cancel"><a href="/central/associations/create/domain">BACK</a></button>
															</div>
															<div className="small-6 large-6 columns-2">
																<button className="btn btn-primary" onClick={this.handleNext}>CONTINUE <i className="fa fa-long-arrow-right"></i></button>
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

export default AssociationsMembership