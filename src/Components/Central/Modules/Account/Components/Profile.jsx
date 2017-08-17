import React from 'react'
import Sidebar from 'Components/Central/CentralSidebar'

class Profile extends React.Component{
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
								<h1>PROFILE</h1>
							</div>
							<div className="content">
								<div className="row">
									<div className="large-12 columns">
										<ul className="tabs1 nav-justified" data-deep-link="true" data-deep-link-smudge="500" data-tabs="" data-update-history="true" id="deeplinked-tabs">
											<li className="tabs-title">
												<a>PROFILE SETTING</a>
											</li>
										</ul>
										<div className="tabs-content" data-tabs-content="deeplinked-tabs">
										<form>
											<div className="sub-content">
												<div className="row align-text">
													<div className="large-12 columns profile-pic">
														<img src="img/afgan.jpg"/>
														<br/>
														<a className="small" href="#">Change Photo</a>
														<br/>
													</div>
												</div>

												<div className="row ass-input profile-setting">
													<div className="large-6 columns">
														<label>Name</label>
														<input name="ass_name" type="text"/>
														<label>Email Address</label>
														<input name="email-address" type="email"/>
														
														
													</div>
													<div className="large-6 columns">
														<label for="password">Password</label>
           												<input id="password" type="password" required="" name="password"/>
														<label for="confirm-password">Confirm Password</label>
           												<input id="confirm-password" type="password" required="" name="password"/>
														
													</div>
													
												</div>

												<div className="row profile-setting btn-set">
													<div className="small-12 large-6 columns-1">
														<button className="btn cancel"><a href="index.html">CANCEL</a></button>
													</div>
													<div className="small-12 large-6 columns-2">
														
														<button className="btn btn-primary"><a href="index.html">SAVE</a></button>
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
export default Profile