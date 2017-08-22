import React from 'react'
import Sidebar from 'Components/Central/CentralSidebar'
import successLogo from 'img/success.svg'
import { Button, Modal } from 'semantic-ui-react'


class AssociationsSuccess extends React.Component{
	constructor(props) {
		super(props);
		this.state = {custom_id:''}
	}

	componentDidMount() {
		this.setState({custom_id:localStorage.getItem('custom_id')})
	}

  	handleNext = (e) => {
		var {custom_id} = this.state
  		localStorage.setItem('custom_id', custom_id)
  		if(localStorage.getItem('custom_id'))
  		{
  			window.location = '/central/associations/create/success'
  		}
  		else
  		{

  		}
  	}
	render(){
		var {custom_id} = this.state;
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
																<li className="" data-step="3"></li>
																<li className="" data-step="4"></li>
																<li className="" data-step="5"></li>
															</ol>
														</div>
													</div>
													<div className="row">
														<div className="large-12 columns">
															<center>
																<img src={successLogo}/>
															</center>
														</div>
													</div>
													<div className="row">
														<div className="large-12 large-centered column ass-input">
															<p className="bold">SUCCESS!</p>
															<p>Your association’s membership ID is</p>
															<h4 className="mid-bold green">{custom_id}</h4>
														</div>
													</div>
													<div className="row step-button">
														<div className="small-6 large-6 large-centered column">
															<button className="btn btn-primary"><a href="/central/associations/create/package">CONTINUE <i className="fa fa-long-arrow-right"></i></a></button>
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

export default AssociationsSuccess