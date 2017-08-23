//Core
import React from 'react';
import axios from 'axios';

//Component
import Sidebar from 'Components/Spring/SpringSidebar';
import AnnouncementMain from 'Components/Spring/Modules/Announcement/Component/announcement_main';

//Assets
import { Button, Modal, Tab } from 'semantic-ui-react';


class SpringAnnouncement extends React.Component{
	constructor(props) {
		super(props);
		this.state = {color: 'black' }
	}

	render(){
		const {color} = this.state;
		const panes = [
		  { menuItem: 'ANNOUNCEMENT', render: () => <Tab.Pane attached='bottom'><AnnouncementMain/></Tab.Pane> },
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
								<h1>MEMBERS</h1>
								<a href="/central/dashboard" className="dsh01"><img /> GO TO ARM</a>
							</div>
							<div className="content">
								<div className="row">
									<div className="large-12 columns">
										<div className="tab1 nav-justified">
											<Tab menu={{size: 'small', widths: 'one', color, inverted: true, attached: 'top' }} panes={panes} />
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

export default SpringAnnouncement