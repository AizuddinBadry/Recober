import React from 'react'
import axios from 'axios'
import Logo from 'img/logo-white.svg'
import TalkIcon from 'img/icon-talk.svg'
import { Button, Modal } from 'semantic-ui-react'


class SpringSidebar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {profile_picture:'',association_id:''}
	}

	componentDidMount() {
		var self = this;
		var id = localStorage.getItem('id');
		var association_id = localStorage.getItem('association_id')
		axios.get('http://localhost:3001/account/details/' + id)
		  .then(function (response) {
			self.setState({profile_picture:response.data['profile_picture'],association_id:association_id})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render(){
		var {profile_picture,association_id} = this.state;
		return(
			<div className="off-canvas1 position-left1 reveal-for-large" data-off-canvas="" data-position="left" id="my-info">
				<div className="menu vertical icon-top">
					<a className="item logo" href="#"><img src={Logo}/></a> 
					<div className="thumbnail thumbnail-logo">
					<img src={profile_picture}/></div>
					<a className="item profile" href="#">
					<img src={profile_picture}/>
					</a>
					<span className="item1 small-item">
					<a href="talk.html"><i className="icon-talk">
					<img className="small-talk" src={TalkIcon}/></i>
					</a> 
					<a className="left" href="acc_setting.html"><i aria-hidden="true" className="fa fa-sliders"></i></a>
					</span> 
					<span className="item1 small-item">
					<a className="left" data-toggle="example-dropdown2" href="#">
					<i className="fa fa-bell-o"></i></a> 
					<a className="left" href="login.html">
					<i aria-hidden="true" className="fa fa-sign-out"></i></a>
					</span>
					<a className="item" href={"/spring/dashboard"}><i className="fa fa-tachometer"></i>
					<label>Dashboard</label></a> 
					<a className="item" href="/spring/profile"><i className="fa fa-id-card-o"></i> 
					<label>Profile</label></a> 
					<a className="item" href="/spring/members"><i className="fa fa-user-o"></i> 
					<label>Members</label></a> 
					<a className="item" href="/spring/groups"><i className="fa fa-users"></i> 
					<label>Groups</label></a> 
					<a className="item" href="/spring/announcement"><i className="fa fa-thumb-tack"></i> 
					<label className="label-left">Announcement</label></a> 
					<a className="item" href="/spring/events"><i className="fa fa-calendar"></i> 
					<label>Events</label></a> 
					<a className="item" href="/spring/gallery"><i className="fa fa-picture-o"></i> 
					<label>Gallery</label></a> 
					<a className="item" href="/spring/billing"><i className="fa fa-tag"></i> 
					<label>Billing</label></a>
				</div>
			</div>
			)
		}
	}

export default SpringSidebar