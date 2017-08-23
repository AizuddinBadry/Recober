import React from 'react'
import axios from 'axios'

class multiple_profile extends React.Component{
	constructor(props) {
		super(props);
		this.state = {profile_list:[]}
	}

	componentDidMount() {
		var self = this;
		var association_id = localStorage.getItem('association_id');
		axios.get('http://localhost:3001/profiles/'+association_id+'/list/')
		  .then(function (response) {
			self.setState({profile_list:response.data})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

	}
	render(){
		const {profile_list} = this.state;
		const list = profile_list.map((index, i) =>{
			return(
					<tr>
						<td className="multi-prof"><input id="public-reg" type="checkbox"/></td>
						<td>
							<a href="#">{index.name}</a>
						</td>
						<td><p>{index.description}</p></td>
						<td>0</td>
						<td>{index.published ? <i className="fa fa-check-circle publish"></i> : <i className="fa fa-times-circle unpublish"></i>}</td>
						<td>{index.created_at}</td>
					</tr>
				)
		})
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
						{list}
						</tbody>
					</table>
				</div>
			</div>
			)
	}
}

export default multiple_profile