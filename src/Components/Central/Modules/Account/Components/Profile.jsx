import React from 'react'
import axios from 'axios'
import Sidebar from 'Components/Central/CentralSidebar'

class Profile extends React.Component{
	constructor(props) {
    super(props);
    this.state = {profile_picture:'',name:'',password:'',email:''}
  }

  componentDidMount() {
    var self = this;
		var id = localStorage.getItem('id');
		axios.get('http://localhost:3001/account/details/' + id)
		  .then(function (response) {
			self.setState({
				profile_picture:response.data['profile_picture'],
				name:response.data['name'],
				email:response.data['email'],
				password:response.data['password']
			})
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
  }

  handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

 handleChangeImage = (evt) => {
      var self = this;
      var reader = new FileReader();
      var file = evt.target.files[0];

      reader.onload = function(upload) {
          self.setState({
          profile_picture: upload.target.result
      }, function() {
      });
      };
      reader.readAsDataURL(file);
  }

  handleSubmit = (e) => {
		var {name,email,password,profile_picture} = this.state
		var id = localStorage.getItem('id');
		axios.post('http://localhost:3001/account/update/'+ id, {
			name: name,
		    email: email,
		    profile_picture: profile_picture,
		    password: password
		  })
		  .then(function (response) {
		 	window.location.reload()
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render(){
		var {name,email,password,profile_picture} = this.state
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
							</div>
							<div className="content">
								<div className="row">
									<div className="large-12 columns">
										<ul className="tabs1 nav-justified" data-deep-link="true" data-deep-link-smudge="500" data-tabs="" data-update-history="true" id="deeplinked-tabs">
											<li className="tabs-title">
												<a>PROFILE SETTING</a>
											</li>
										</ul>
										<div className="tabs-content" data-tabs-content="deeplinked-tabs">
											<div className="sub-content">
												<div className="row align-text">
													<div className="large-12 columns profile-pic">
														<img src={this.state.profile_picture} width="250px" height="80px"/>
														<br/>
														<div className="fileContainer">
															Change Photo
															<input name="profile_picture" type="file" hidden="hidden" onChange={this.handleChangeImage}/>
														</div>
														
														<br/>
													</div>
												</div>

												<div className="row ass-input profile-setting">
													<div className="large-6 columns">
														<label>Name</label>
														<input name="name" type="text" value={name} onChange={this.handleChange}/>
														<label>Email Address</label>
														<input name="email" type="email" value={email} onChange={this.handleChange}/>
														
														
													</div>
													<div className="large-6 columns">
														<label for="password">Password</label>
           												<input id="password" type="password" value={password} name="password" onChange={this.handleChange}/>
														<label for="confirm-password">Confirm Password</label>
           												<input id="confirm-password" type="password" required="" name="password"/>
														
													</div>
													
												</div>

													<div className="row profile-setting btn-set">
														<div className="small-12 large-6 columns-1">
															<button className="btn cancel"><a href="index.html">CANCEL</a></button>
														</div>
														<div className="small-12 large-6 columns-2">
															<button className="btn btn-primary" onClick={this.handleSubmit}>SAVE</button>
														</div>
													</div>
												</div>
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
export default Profile