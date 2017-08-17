import React from 'react'
import Sidebar from 'Components/Central/CentralSidebar'
import AssociationLogo from 'img/logo-ass.png'
import Logo from 'img/logo-white.svg'
import { Button, Modal } from 'semantic-ui-react'


class Associations extends React.Component{
	state = { open: false }

  	show = (size) => () => this.setState({ size, open: true })
  	close = () => this.setState({ open: false })

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
									<li className="tabs-title"><a className="align-left" aria-selected="true">ASSOCIATION</a></li>
								</ul>
								<div className="tabs-content align-text">
										<div className="dash-sub-content align-text">
											<div className="row">
												<div className="columns">
													<button className="btn float-right"><a href='/central/associations/create/name'>ADD ASSOCIATION</a></button>
												</div>
											</div>
											<div className="row">
												<div className="large-4 columns">
													<div className="ass-acc">
														<div className="row">
															<div className="large-12 columns">
																<div className="box">
																	<h2 className="thin">KRSM</h2>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="large-12 columns">
																<br/>
																<p className="mid-bold">KELAB RAKAN MUDA SELANGOR</p>
																<p className="thin">#KRSM</p><button className="btn btn-spring"><a href="../spring/dashboard.html">GO TO SPRING</a></button>
															</div>
															<div className="large-12 columns">
																<a className="mid-bold dlt-ass" onClick={this.show('tiny')}><i className="fa fa-trash"></i> Delete Association</a>
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
				<Modal size={size} open={open} onClose={this.close}>
		          <Modal.Content>
		            <Modal.Description>
		            <center>
		              <p>Are your sure to delete this association?</p>
		              	<div className=" button-group1">
							<a className="button1 reset">CANCEL</a> <a className="button1 save">DELETE</a>
						</div>
		            </center>
		            </Modal.Description>
		          </Modal.Content>
		        </Modal>
			</div>
				</div>
			</div>
			)
		}
	}

export default Associations