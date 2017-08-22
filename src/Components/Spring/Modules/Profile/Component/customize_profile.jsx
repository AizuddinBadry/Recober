import React from 'react'
import axios from 'axios'
import {Modal} from 'semantic-ui-react'

class Item extends React.Component {
  render() {
    return (
    <tbody>
		<tr>
			<td className="multi-prof"><input id="public-reg" type="checkbox"/></td>
			<th>
				<a href="#">{this.props.name}</a> (Group)
			</th>
			<td></td>
			<td>{this.props.published ? <i className="fa fa-check-circle publish"></i> : <i className="fa fa-times-circle unpublish"></i>}</td>
			<td>{this.props.required ? <i className="fa fa-check-circle publish"></i> : <i className="fa fa-times-circle unpublish"></i>}</td>
			<td>{this.props.registraion ? <i className="fa fa-check-circle publish"></i> : <i className="fa fa-times-circle unpublish"></i>}</td>
		</tr>
      { this.props.fields }
    </tbody>
    )
  }
}


class customize_profile extends React.Component{
	constructor(props) {
		super(props);
		this.state = {name:'', registration:false, required:false, published:false,type:'',group_id:'',group_list:[],groups:[],fields:[]}
	}

	componentDidMount() {
		var self = this;
		var association_id = localStorage.getItem('association_id');
		axios.get('http://localhost:3001/profiles/group/'+association_id+'/list/')
		  .then(function (response) {
			self.setState({group_list:response.data})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

		  axios.get('http://localhost:3001/profiles/data/'+association_id+'/list/')
		  .then(function (response) {
			self.setState({groups:response.data})
			console.log(response.data)
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

	}

	handleChange = (e) => {
		this.setState({[e.target.name]:e.target.value})	
	}

	handleBoolean = (e) => {
		this.setState({[e.target.name]:e.target.checked})	
	}

	handleSubmit = (e) => {
		var self = this;
		const {name,registration,required,published} = this.state;
		var association_id = localStorage.getItem('association_id');
		axios.post('http://localhost:3001/profiles/group/new',{
			name:name,
			registration:registration,
			required:required,
			published:published,
			association_id:association_id

		})
		  .then(function (response) {
			window.location.reload()
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	addFields = (e) => {
		var self = this;
		const {name,registration,required,published,group_id,type} = this.state;
		var association_id = localStorage.getItem('association_id');
		axios.post('http://localhost:3001/profiles/fields/new',{
			name:name,
			registration:registration,
			required:required,
			published:published,
			association_id:association_id,
			field_type:type,
			profile_group_id:group_id

		})
		  .then(function (response) {
			window.location.reload()
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
							<td className="multi-prof"><input id="public-reg" type="checkbox"/></td>
							<td>
								<a href="#">{index.name}</a>
							</td>
							<td>{index.field_type}</td>
							<td>{index.published ? <i className="fa fa-check-circle publish"></i> : <i className="fa fa-times-circle unpublish"></i>}</td>
							<td>{index.required ? <i className="fa fa-check-circle publish"></i> : <i className="fa fa-times-circle unpublish"></i>}</td>
							<td>{index.registration ? <i className="fa fa-check-circle publish"></i> : <i className="fa fa-times-circle unpublish"></i>}</td>
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
			      	required={node.required} 
			      	published={node.published}
			      	registration={node.registration}
			      	fields={ fields(node.profile_fields) }>
			        { fields(node.profile_fields) }
			      </Item>
			      )
			    });
		}

	render(){
		const {name,registration,required,published,type,group_id,groups} = this.state;
		const group_list = this.state.group_list.map(function(index, i){
			  return(
					<option value={index.id} key={i}>
						{index.name}
					</option>
			  	)
			})
		return(
			<div>
				<div className="dash-sub-content">
					<p>Create your own profile group and fields</p>
						<div className="row">
							<div className="large-9 columns multi-prof">
								<a href=""><i className="fa fa-check-circle publish"></i> Publish</a> <a href=""><i className="fa fa-times-circle unpublish"></i> Unpublish</a> <a href=""><i className="fa fa-trash"></i> Delete</a>
									 <Modal size={'tiny'} trigger={<a><i className="fa fa-plus-circle"></i> New Group</a>}>
								    <Modal.Header>New Profile Group</Modal.Header>
								    <Modal.Content>
								      <Modal.Description>
								        <div className="row">
											<div className="large-12 columns">
												<p>Create new group for your custom profile</p>
													<label>Name</label> <input name="name" type="text" value={name} onChange={this.handleChange}/>
													<div className="label-checkbox">
														<input name="registration" type="checkbox" checked={registration} onChange={this.handleBoolean}/><label className="mid-bold">Registration</label>
														<p>The profile group will appears on registration form{registration}</p>
													</div>
													<div className="label-checkbox">
														<input name="required" type="checkbox" checked={required} onChange={this.handleBoolean}/><label className="mid-bold">Required</label>
														<p>User must fill in all the details of this profile group</p>
													</div>
													<div className="label-checkbox">
														<input name="published" type="checkbox" checked={published} onChange={this.handleBoolean}/><label className="mid-bold">Published</label>
														<p>Profile group will appear on user profile</p>
													</div><br/>
													<div className=" button-group1 float-right">
														<a className="button1 save" onClick={this.handleSubmit}>CREATE</a>
													</div>
											</div>
										</div>
								      </Modal.Description>
								    </Modal.Content>
								  </Modal>
								 <Modal size={'small'} trigger={<a><i className="fa fa-plus-circle"></i> New Field</a>}>
								    <Modal.Header>Add New Field Group</Modal.Header>
								    <Modal.Content>
								      <Modal.Description>
								        <div className="row">
											<div className="large-12 columns">
												<p>Add new field to your groups</p>
													<div className="row">
														<div className="large-6 columns">
															<label>Name</label> 
															<input name="name" type="text" onChange={this.handleChange}/> <label>Groups</label> 
															<select className="pilih" value={group_id} name="group_id" onChange={this.handleChange}>
															<option>
																Select Groups
															</option>
																{group_list}
															</select> 
															<label>Type</label> 
															<select className="pilih" name="type" value={type} onChange={this.handleChange}>
																<option value="text">
																	text
																</option>
																<option value="textarea">
																	textarea
																</option>
																<option value="email">
																	email
																</option>
																<option value="date">
																	date
																</option>
																<option value="checkbox">
																	checkbox
																</option>
																<option value="radio">
																	radio
																</option>
																<option value="select">
																	select
																</option>
															</select>
														</div>
														<div className="large-6 columns">
															<div className="label-checkbox">
																<input type="checkbox" name="registration" checked={registration} onChange={this.handleBoolean}/><label className="mid-bold">Registration</label>
																<p>The profile field will appears on registration form</p>
															</div>
															<div className="label-checkbox">
																<input type="checkbox" name="required" checked={required} onChange={this.handleBoolean}/><label className="mid-bold">Required</label>
																<p>User must fill in this field</p>
															</div>
															<div className="label-checkbox">
																<input type="checkbox" name="published" checked={published} onChange={this.handleBoolean}/><label className="mid-bold">Published</label>
																<p>Field will be publish on user profile</p>
															</div>
														</div>
													</div><br/>
													<div className=" button-group1 float-right">
														<a className="button1 save" onClick={this.addFields}>CREATE</a>
													</div>
											</div>
										</div>
								      </Modal.Description>
								    </Modal.Content>
								  </Modal>
							</div>
							<div className="large-3 columns search">
								<input placeholder="Search" type="text"/> 
								<a className="float-right" href="#"><i className="fa fa-search"></i></a>
							</div>
						</div>
						<table className="noBorder full">
							<thead>
								<tr>
									<td className="multi-prof"><input id="public-reg" type="checkbox"/></td>
									<td>NAME</td>
									<td>TYPE</td>
									<td>PUBLISHED</td>
									<td>REQUIRED</td>
									<td>REGISTRATION</td>
								</tr>
							</thead>
							{ this.list(this.state.groups) }
						</table>
				</div>
			</div>
			)
	}
}

export default customize_profile