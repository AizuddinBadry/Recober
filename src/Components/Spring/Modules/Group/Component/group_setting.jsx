import React from 'react'

class group_setting extends React.Component{
	render(){
		return(
			<div className="dash-sub-content">
				<div className="sub-content1">
					<p className="mid-bold">GROUP SETTING</p>
					<hr className="nipis"/>
					<div className="row">
						<div className="large-12 columns">
							<table className="noBorder unstriped">
								<tr>
									<td>Enable Group</td>
									<td>
										<div className="switch2 tiny">
											<input className="switch-input" id="enable-switch" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch"></label>
										</div>
									</td>
								</tr>
								<tr>
									<td>Allow guest to perform search groups</td>
									<td>
										<div className="switch2 tiny">
											<input className="switch-input" id="enable-switch2" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch2"></label>
										</div>
									</td>
								</tr>
								<tr>
									<td>Enable group photo</td>
									<td>
										<div className="switch2 tiny">
											<input className="switch-input" id="enable-switch3" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch3"></label>
										</div>
									</td>
								</tr>
								<tr>
									<td>Enable notifications</td>
									<td>
										<div className="switch2 tiny">
											<input className="switch-input" id="enable-switch4" name="enable-disable" type="checkbox"/> <label className="switch-paddle" for="enable-switch4"></label>
										</div>
									</td>
								</tr>
							</table><br/>
							<div className=" button-group1 float-right">
								<a className="button1 reset">CANCEL</a> <a className="button1 save">SAVE</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default group_setting