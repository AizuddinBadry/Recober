import React from 'react'
import axios from 'axios'
import Sidebar from 'Components/Spring/SpringSidebar';
import {Modal,Tab,Radio} from 'semantic-ui-react'

import successLogo from 'img/success.svg'

class Item extends React.Component {
  render() {
    return (
    <tbody>
		<tr>
			<td>{this.props.key}</td>
			<th>
				<b>{this.props.name}</b>
			</th>
			<td></td>
			<td></td>
		</tr>
      { this.props.fields }
    </tbody>
    )
  }
}

class NewProfileWindow extends React.Component{
	constructor(props) {
		super(props);
		this.state = {groups:[],name:'',description:'',published:false,approval:false}
	}

	componentDidMount() {
		var self = this;
		var association_id = localStorage.getItem('association_id');
		  axios.get('http://localhost:3001/profiles/data/'+association_id+'/list/')
		  .then(function (response) {
			self.setState({groups:response.data})
			console.log(response.data)
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	list = (data) =>{
			var fields = (profile_fields) => {
				if(profile_fields){
					return profile_fields.map((index, i) => {
						return (
		                 <tr key={i}>
							<td>{i+1}</td>
							<td>{index.name}</td>
							<td>{index.field_type}</td>
							<td><Radio toggle /></td>
						</tr>
		              )
					})    
		          }
		      }
		      return data.map((node, index) => {
			      return (
			      	<Item 
			      	key={ node.id } 
			      	name={ node.name } 
			      	fields={ fields(node.profile_fields) }>
			        { fields(node.profile_fields) }
			      </Item>
			      )
			    });
		}

	handleChange = (e) => {
		this.setState({[e.target.name]:e.target.value})
	}

	handleSubmit = (e) => {
		var self = this;
		const {name,approval,published,description} = this.state;
		var association_id = localStorage.getItem('association_id');
		axios.post('http://localhost:3001/profiles/new',{
			name:name,
			description:description,
			published:published,
			approval:approval,
			association_id:association_id

		})
		  .then(function (response) {
			window.location = '/spring/profile'
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render(){
		const {name,description,published,approval} = this.state
		return(
			<div className="tabs-content main-tab" data-tabs-content="deeplinked-tabs">
				<div className="dash-sub-content">
					<p>Create a new custom profile for your association</p>
					<div className="row">
						<div className="large-12 columns multi-prof">
							<a href="/spring/profile"><i className="fa fa-reply"></i> Back</a> 
							<Modal size={'tiny'} trigger={<a data-open="modal"><i className="fa fa-floppy-o"></i> Save</a>}>
							    <Modal.Content>
							      <Modal.Description>
							        <div className="content2">
										<center>
											<img src={successLogo}/>
											<p className="thin">Profile has been successfully saved!</p>
										</center>
										<div className="row">
											<div className="large-10 large-centered columns">
												<p><button className="btn btn-primary" onClick={this.handleSubmit}>OK</button></p>
											</div>
										</div>
									</div>
							      </Modal.Description>
							    </Modal.Content>
							  </Modal>
						</div>
					</div>
					<div className="sub-content1">
						<p className="mid-bold">GENERAL</p>
						<hr className="nipis"/>
						<p>Fill in additional details for your custom profile type here</p>
						<form>
							<div className="row">
								<div className="large-6 columns">
									<div className="row">
										<div className="small-3 columns">
											<label className="middle" for="profile-name">Name</label> 
											<label className="middle" for="profile-desc">Description</label>
										</div>
										<div className="small-9 columns">
											<input id="profile-name" type="text" name='name' value={name} onChange={this.handleChange}/> 
											<textarea rows="5" name="description" value={description} onChange={this.handleChange}></textarea>
										</div>
									</div>
								</div>
								<div className="large-6 columns profile-column">
									<div className="label-checkbox">
										<input type="checkbox"/><label className="mid-bold">Published</label>
										<p>This profile will be published</p>
									</div>
									<div className="label-checkbox">
										<input type="checkbox"/><label className="mid-bold">Approval</label>
										<p>This custom profile need approval from admin</p>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="sub-content1">
					<p className="mid-bold">FIELDS</p>
					<hr className="nipis"/>
					<p>Select the field codes which are to appear in this custom profile type. Field that are not included will not be displayed in the user profile area.</p>
					<table className="noBorder full">
						<thead>
							<tr>
								<td className="align-text">#</td>
								<td>NAME</td>
								<td>TYPE</td>
								<td>INCLUDE</td>
							</tr>
						</thead>
							{ this.list(this.state.groups) }
					</table>
				</div>
		</div>	
	)}
}


class add_profile extends React.Component{
	constructor(props) {
		super(props);
		this.state = {color:'black'}
	}
	
	render(){
		const panes = [
		  { menuItem: 'CREATE NEW PROFILE', render: () => <Tab.Pane attached='bottom'><NewProfileWindow/></Tab.Pane> },
		]
		const {color} = this.state
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
								<h1>PROFILE SETTING</h1>
							</div>
							<div className="content">
								<div>
									<div className="row">
										<div className="large-12 columns">
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

export default add_profile