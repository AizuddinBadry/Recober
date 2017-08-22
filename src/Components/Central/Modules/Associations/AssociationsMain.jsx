import React from 'react'
import axios from 'axios'
import Sidebar from 'Components/Central/CentralSidebar'
import AssociationLogo from 'img/logo-ass.png'
import Logo from 'img/logo-white.svg'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'semantic-ui-react'


class Associations extends React.Component{
	constructor(props) {
		super(props);
		this.state = {open: false, associations:[], associations_id:''}
	}

	componentDidMount() {
		var self = this;
		var id = localStorage.getItem('id');
		axios.get('http://localhost:3001/associations/list/'+ id)
		  .then(function (response) {
		 	self.setState({associations:response.data})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	handleDestroy = (e) =>
	{
		var self = this;
		axios.post('http://localhost:3001/associations/destroy',
		{
			id: self.state.associations_id
		})
		  .then(function (response) {
		 	window.location.reload()
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	redirect = (id) => () => {
		var association_id = localStorage.setItem('association_id',id)
		if(!association_id)
		{
			window.location = '/spring/'+id+'/dashboard'
		}
		else
		{
			alert('Failed to access.')
		}
		
	}

  	show = (size,id) => () => {
  		this.setState({ size, open: true, associations_id: id})
  	}
  	close = () => this.setState({ open: false })

	render(){
		var self = this;
		const { open, size } = this.state
		const asssociations_list = this.state.associations.map(function(index, i){
			  return(
			  	<div className="large-4 columns" key={i}>
					<div className="ass-acc">
						<div className="row">
							<div className="large-12 columns">
								<div className="box">
									<h2 className="thin">{index.custom_id}</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="large-12 columns">
								<br/>
								<p className="mid-bold">{index.name}</p>
								<p className="thin">#{index.custom_id}</p>
								<button className="btn btn-spring" onClick={self.redirect(index.id)}>GO TO SPRING</button>
							</div>
							<div className="large-12 columns">
								<a className="mid-bold dlt-ass" value={index.id} onClick={self.show('tiny', index.id)}><i className="fa fa-trash"></i> Delete Association</a>
							</div>
						</div>
					</div>
				</div>

			  	)
			})
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
						<h1>ASSOCIATION</h1>
					</div>
					<div className="content">
						<div className="row">
							<div className="large-12 columns">
								<ul className="tabs1 nav-justified">
									<li className="tabs-title"><a className="align-left" aria-selected="true">ASSOCIATION</a></li>
								</ul>
								<div className="tabs-content align-text">
										<div className="dash-sub-content align-text">
											<div className="row">
												<div className="columns">
													<button className="btn float-right"><a href='/central/associations/create/name'>ADD ASSOCIATION</a></button>
												</div>
											</div>
											<div className="row">
												{asssociations_list}
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Modal size={size} open={open} onClose={this.close}>
		          <Modal.Content>
		            <Modal.Description>
		            <center>
		              <p>Are your sure to delete this association?</p>
		              	<div className=" button-group1">
							<a className="button1 reset"  onClick={this.close}>CANCEL</a> <a className="button1 save"  onClick={this.handleDestroy}>DELETE</a>
						</div>
		            </center>
		            </Modal.Description>
		          </Modal.Content>
		        </Modal>
			</div>
				</div>
			</div>
			)
		}
	}

export default Associations