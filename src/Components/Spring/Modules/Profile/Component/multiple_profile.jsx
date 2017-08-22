import React from 'react'

class multiple_profile extends React.Component{
	render(){
		return(
			<div>
				<div className="dash-sub-content">
					<p>Multipe profile allows administrator to setup different types of user profiles</p><input id="public-reg" type="checkbox"/><label className="mid-bold" for="public-reg">Public Registration <span className="thin">(Association members are allow to register by themselves)</span></label>
					<div className="row">
						<div className="large-9 columns multi-prof">
							<a href=""><i className="fa fa-check-circle publish"></i> Publish</a> <a href=""><i className="fa fa-times-circle unpublish"></i> Unpublish</a> <a href=""><i className="fa fa-trash"></i> Delete</a> <a href="/spring/profile/new"><i className="fa fa-plus-circle"></i> New</a>
						</div>
						<div className="large-3 columns search">
							<input placeholder="Search" type="text"/> <a className="float-right" href="#"><i className="fa fa-search"></i></a>
						</div>
					</div>
					<table className="noBorder full table-center">
						<thead>
							<tr>
								<td className="multi-prof"><input id="public-reg" type="checkbox"/></td>
								<td>NAME</td>
								<td>DESCRIPTION</td>
								<td>TOTAL USER</td>
								<td>STATUS</td>
								<td>DATE CREATION</td>
							</tr>
						</thead>
						<tbody className="table-main">
						<tr>
							<td className="multi-prof"><input id="public-reg" type="checkbox"/></td>
							<td>
								<a href="#">Member</a>
							</td>
							<td><p>Association Members</p></td>
							<td>2</td>
							<td><i className="fa fa-check-circle publish"></i></td>
							<td>08/12/2016</td>
						</tr>
						<tr>
							<td className="multi-prof"><input id="public-reg" type="checkbox"/></td>
							<td>
								<a href="#">Member</a>
							</td>
							<td><p>Association Members</p></td>
							<td>2</td>
							<td><i className="fa fa-check-circle publish"></i></td>
							<td>08/12/2016</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			)
	}
}

export default multiple_profile