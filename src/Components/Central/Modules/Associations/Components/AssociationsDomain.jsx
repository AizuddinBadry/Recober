import React from 'react'
import Sidebar from 'Components/Central/CentralSidebar'
import { Button, Modal } from 'semantic-ui-react'


class AssociationsDomain extends React.Component{
	constructor(props) {
		super(props);
		this.state = {open:false,domain:''}
	}

  	show = (size) => () => this.setState({ size, open: true })
  	close = () => this.setState({ open: false })

  	handleChange = (e) => {
  		this.setState({domain:e.target.value + '.recober.com'})
  	}

  	handleNext = (e) => {
		var {domain} = this.state
  		localStorage.setItem('domain', domain)
  		if(localStorage.getItem('domain'))
  		{
  			window.location = '/central/associations/create/membership'
  		}
  		else
  		{

  		}
  	}
	render(){
		const { open, size } = this.state
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
															<li className="is-to-complete" data-step="1"></li>
															<li className="" data-step="2"></li>
															<li className="" data-step="3"></li>
															<li className="" data-step="4"></li>
															<li className="" data-step="5"></li>
														</ol>
													</div>
												</div>
												<p className="mid-bold">STEP 1.1 : RECOBER DOMAIN</p>
												<p>Enter your association’s <span className="mid-bold">Recober Domain.</span></p>
												<div className="row">
													<div className="small-5 small-centered columns ass-input-center">
														<div className="row">
															<div className="large-9 columns-1">
																<input id="right-label" name="domain" type="text" onChange={this.handleChange}/>
															</div>
															<div className="large-3 columns-2 label-domain">
																<label for="right-label">.recober.com</label>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="large-12 large-centered columns">
														<p className="green small"><i className="fa fa-check-circle"></i> <span>Recober domain available</span></p>
													</div>
												</div>
												<div className="row step-button">
													<div className="small-6 large-6 columns-1">
														<button className="btn cancel"><a href="/central/associations/create/name">BACK</a></button>
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

export default AssociationsDomain