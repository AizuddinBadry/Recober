import React from 'react'
import axios from 'axios'
import Logo from 'img/logo-white.svg'
import { Button, Modal } from 'semantic-ui-react'


class CentralSidebar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {profile_picture:''}
	}

	componentDidMount() {
		var self = this;
		var id = localStorage.getItem('id');
		axios.get('http://localhost:3001/account/details/' + id)
		  .then(function (response) {
			self.setState({profile_picture:response.data['profile_picture']})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render(){
		var {profile_picture} = this.state;
		return(
			<div className="off-canvas1 position-left1 reveal-for-large" >
				<div className="vertical menu icon-top">
					<a className="item logo" href="#"><img src={Logo} /></a>
					<a className="item profile" href="#"><img src={profile_picture} width="250px" height="250px"/></a>
					<span className="item1 small-item"><a data-toggle="example-dropdown2" href="#" className="left"><i className="fa fa-bell-o"></i></a>
					<a href="/central/account/profile" className="left"><i className="fa fa-sliders" aria-hidden="true"></i></a>
					<a className="left" href="/central/account/login"><i className="fa fa-sign-out" aria-hidden="true"></i></a></span>
					<a className="item" href="/central/dashboard"><i className="fa fa-tachometer"></i> <label>Dashboard</label></a> 
					<a className="item" href="/central/associations"><i className="fa fa-th-large"></i> <label>Association</label></a>
					<a className="item" href="/central/billing"><i className="fa fa-tag"></i> <label>Billing</label></a>
				</div>
			</div>
			)
		}
	}

export default CentralSidebar