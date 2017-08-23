//Core
import React from 'react';
import axios from 'axios';

//Assets
import ProfilePicture from 'img/afgan.jpg';

class view_announcement extends React.Component{

	render(){
		return(
			<div className="popup-sub-content">
				<div className="row">
					<div className="large-12 columns">
						<table className="unstriped noBorder">
							<tr>
								<td>Date/Time</td>
								<td>:</td>
								<td>20/11/2016 11.30 PM</td>
							</tr>
							<tr>
								<td>Title</td>
								<td>:</td>
								<td>Urgent Meeting</td>
							</tr>
							<tr>
								<td>Description</td>
								<td>:</td>
								<td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</td>
							</tr>
						</table>
						<hr className="nipis"/>
					</div>
				</div>
				<div className="row">
					<div className="large-6 columns"></div>
					<div className="large-6 columns search">
						<div className="row input-primary">
							<div className="large-4 columns-1">
								<select className="pilih" id="member-gender">
									<option>
										All
									</option>
									<option>
										Read
									</option>
									<option>
										Unread
									</option>
								</select>
							</div>
							<div className="large-8 columns-2">
								<input placeholder="Search" type="text"/> <a className="float-right" href="#"><i className="fa fa-search"></i></a><br/>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="large-12 columns">
						<div className="boxes">
							<div className="span2">
								<table className="full ann-list unstriped">
									<tr>
										<td>
											<div className="float-left">
												<a href="#"><img src={ProfilePicture}/></a>
											</div>
											<div className=" ann-list-id">
												<p className="mid-bold">AFGANSYAH REDZA</p>
												<p>User Profile 1</p>
											</div>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
		}
	}

export default view_announcement