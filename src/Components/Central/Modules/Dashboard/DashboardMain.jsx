import React from 'react'
import Sidebar from 'Components/Central/CentralSidebar'
import AssociationLogo from 'img/logo-ass.png'
import Logo from 'img/logo-white.svg'
import { Button, Modal } from 'semantic-ui-react'


class Dashboard extends React.Component{
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
							<h1>DASHBOARD</h1>
						</div>
						<div className="content">
								<div className="row ad-block">
									<div className="medium-6 columns">
										<p>Welcome Aizuddin Badry</p>
									</div>
									<div className="medium-6 columns">
										<p className="float-right">Monday, January 05, 2017</p>
									</div>
								</div>
								<div className="row">
									<div className="large-4 medium-4 columns">
										<div className="row noti">
											<div className="large-12 columns">
												<div className="large-2 columns noti-1">
													<center>
														<i className="fa fa-bell-o"></i>
													</center>
												</div>
												<div className="large-10 columns noti-4">
													<h5>0</h5>
													<p>NOTIFICATIONS</p>
												</div>
											</div>
										</div>
									</div>
									<div className="large-4 medium-4 columns">
										<div className="row noti">
											<div className="large-12 columns">
												<div className="large-2 columns noti-2">
													<center>
														<i className="fa fa-th-large"></i>
													</center>
												</div>
												<div className="large-10 columns noti-4">
													<h5>0</h5>
													<p>ASSOCIATION</p>
												</div>
											</div>
										</div>
									</div>
									<div className="large-4 medium-4 columns">
										<div className="row noti">
											<div className="large-12 columns">
												<div className="large-2 columns noti-3">
													<center>
														<i className="fa fa-tag"></i>
													</center>
												</div>
												<div className="large-10 columns noti-4">
													<h5>RM0.00</h5>
													<p>OVERDUE BILL</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="large-12 columns">
										<ul className="tabs1 nav-justified">
											<li className="tabs-title"><a className="align-left" aria-selected="true">ASSOCIATION</a></li>
										</ul>

										<div className="tabs-content">
											<center>
												<img className="content-icon" src={AssociationLogo}/>
												<p className="mid-bold">There are no associations!</p>
												<p>Create your associations account to get more features from recober!</p>
												<Button onClick={this.show('tiny')} color="teal">ADD ASSOCIATION</Button>
											</center>
										</div>
									</div>
								</div>
								<Modal size={size} open={open} onClose={this.close}>
						          <Modal.Content>
						            <Modal.Description>
						            <center>
						              <p><b>OOPS!</b></p>
						              <p>You dont have any association yet. </p> <p>Lets create one!</p>
						              <Button onClick={this.show('tiny')} color="teal">CREATE ASSOCIATION</Button>
						            </center>
						            </Modal.Description>
						          </Modal.Content>
						        </Modal>

							</div>
						</div>
					</div>
				</div>
			</div>
			)
		}
	}

export default Dashboard