import React from 'react'
import Sidebar from 'Components/Central/CentralSidebar'

class AssociationsPackage extends React.Component{
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
													<div className="sub-content align-text">
														<p>You just need a few steps to add your association</p>
														<div className="row">
															<div className="large-12 columns">
																<ol className="progress-indicator">
																	<li className="is-complete" data-step="1"></li>
																	<li className="is-complete" data-step="2"></li>
																	<li className="is-current" data-step="3"></li>
																	<li className="" data-step="4"></li>
																	<li className="" data-step="5"></li>
																</ol>
															</div>
														</div>
														<div className="row">
															<div className="large-12 columns">
																<p className="mid-bold">STEP 3 : RECOBER PACKAGE</p>
																<p>Choose your monthly subscribtion package for your association</p>
															</div>
														</div>
														<div className="row">
															<div className="large-12 columns">
																<div className="cc-selector-2">
																	<input id="smallAsso" name="package" type="radio" value="smallAssociation"/> <label className="drinkcard-cc smallAss" for="smallAsso"></label> <input checked="checked" id="growAsso" name="package" type="radio" value="growAssociation"/> <label className="drinkcard-cc growAss" for="growAsso"></label>
																</div>
															</div>
															<div className="row step-button">
																<div className="small-6 large-6 columns-1">
																	<button className="btn cancel"><a href="/central/associations/create/success">BACK</a></button>
																</div>
																<div className="small-6 large-6 columns-2">
																	<button className="btn btn-primary"><a href="/central/associations/create/payment">CONTINUE <i className="fa fa-long-arrow-right"></i></a></button>
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
export default AssociationsPackage