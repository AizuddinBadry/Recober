import React from 'react'
import axios from 'axios'
import Sidebar from 'Components/Central/CentralSidebar'
import AssociationLogo from 'img/logo-ass.png'
import Logo from 'img/logo-white.svg'
import { Button, Modal } from 'semantic-ui-react'


class Associations extends React.Component{
	constructor(props) {
		super(props);
		this.state = {exists: false, associations:[], open: false}
	}

	componentDidMount() {
		var self = this;
		var id = localStorage.getItem('id');
		axios.get('http://localhost:3001/associations/list/' + id)
		  .then(function (response) {
			self.setState({associations:response.data})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	show = (size) => () => this.setState({ size, open: true })
  	close = () => this.setState({ open: false })


	render(){
		var {open, size, exists, associations} = this.state;
		return(
			<div className="tabs-content">
				<center>
					<img className="content-icon" src={AssociationLogo}/>
					<p className="mid-bold">There are no associations!</p>
					<p>Create your associations account to get more features from recober!</p>
					<Button onClick={this.show('tiny')} color="teal">ADD ASSOCIATION</Button>
				</center>
				<Modal size={size} open={open} onClose={this.close}>
		          <Modal.Content>
		            <Modal.Description>
		            <center>
		              <p><b>OOPS!</b></p>
		              <p>You dont have any association yet. </p> <p>Lets create one!</p>
		              <Button onClick={this.show('tiny')} color="teal">CREATE ASSOCIATION</Button>
		            </center>
		            </Modal.Description>
		          </Modal.Content>
		        </Modal>
			</div>
			)
		}
	}

export default Associations