import React from 'react'
import Logo from 'img/logo-white.svg'
import { Button, Modal } from 'semantic-ui-react'


class CentralSidebar extends React.Component{

	render(){
		return(
			<div className="off-canvas1 position-left1 reveal-for-large" data-off-canvas="" data-position="left" id="my-info">
				<div className="menu vertical icon-top">
					<a className="item logo" href="#"><img src={Logo}/></a>
					<a className="item profile" href="#"><img src=""/></a>
					<span className="item1 small-item"><a data-toggle="example-dropdown2" href="#" className="left"><i className="fa fa-bell-o"></i></a>
					<a href="/central/account/profile" className="left"><i className="fa fa-sliders" aria-hidden="true"></i></a>
					<a className="left" href="login.html"><i className="fa fa-sign-out" aria-hidden="true"></i></a></span>
					<a className="item" href="/central/dashboard"><i className="fa fa-tachometer"></i> <label>Dashboard</label></a> 
					<a className="item" href="/central/associations"><i className="fa fa-th-large"></i> <label>Association</label></a>
					<a className="item" href="/central/billing"><i className="fa fa-tag"></i> <label>Billing</label></a>
				</div>
			</div>
			)
		}
	}

export default CentralSidebar