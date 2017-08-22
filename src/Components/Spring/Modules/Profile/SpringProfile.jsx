//Core
import React from 'react';
import axios from 'axios';

//Component
import Sidebar from 'Components/Spring/SpringSidebar';
import MultipleProfile from 'Components/Spring/Modules/Profile/Component/multiple_profile'
import CustomizeProfile from 'Components/Spring/Modules/Profile/Component/customize_profile'
import PaymentSetting from 'Components/Spring/Modules/Profile/Component/payment_setting'
import MembershipPlan from 'Components/Spring/Modules/Profile/Component/membership_plan'

//Assets
import AssociationLogo from 'img/logo-ass.png';
import Logo from 'img/logo-white.svg';
import ArmLogo from 'img/arm.svg';
import TalkIcon from 'img/icon-talk.svg';
import { Button, Modal, Tab } from 'semantic-ui-react';


class SpringProfile extends React.Component{
	constructor(props) {
		super(props);
		this.state = {name:'', email:'', password: '', open: false, color: 'black' }
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		var {email,password} = this.state
		axios.post('http://localhost:3001/account/login', {
		    email: email,
		    password: password
		  })
		  .then(function (response) {
		  	if(response.data['status'] ==  false)
		    {
		    	alert('Wrong username or password')
		    }
		    else
		    {
		    	window.location = '/central/dashboard'
		    }
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	componentDidMount() {
		var self = this;
		var id = localStorage.getItem('id');
		axios.get('http://localhost:3001/account/details/' + id)
		  .then(function (response) {
			self.setState({name:response.data['name']})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

  	show = (size) => () => this.setState({ size, open: true })
  	close = () => this.setState({ open: false })

	render(){
		const { open, size, name, color } = this.state;
		const panes = [
		  { menuItem: 'MULTIPLE PROFILE', render: () => <Tab.Pane attached='bottom'><MultipleProfile/></Tab.Pane> },
		  { menuItem: 'CUSTOMIZE PROFILE', render: () => <Tab.Pane attached='bottom'><CustomizeProfile/></Tab.Pane> },
		  { menuItem: 'PAYMENT SETTING', render: () => <Tab.Pane attached='bottom'><PaymentSetting/></Tab.Pane> },
		  { menuItem: 'MEMBERSHIP PLAN', render: () => <Tab.Pane attached='bottom'><MembershipPlan/></Tab.Pane> },
		]
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
								<a href="/central/dashboard" className="dsh01"><img src={ArmLogo}/> GO TO ARM</a>
							</div>
							<div className="content">
								<div className="row">
									<div className="large-12 columns">
										<div className="tab1 nav-justified">
											<Tab menu={{size: 'small', widths: 'four', color, inverted: true, attached: 'top' }} panes={panes} />
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

export default SpringProfile