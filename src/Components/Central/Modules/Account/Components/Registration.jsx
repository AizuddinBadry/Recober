import React from 'react'
import axios from 'axios'
import Logo from 'img/logo-full-recober-white.svg'

class Registration extends React.Component{
	constructor(props) {
		super(props);
		this.state = {name:'', email:'', password: ''}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		var {name,email,password} = this.state
		axios.post('http://localhost:3001/account/registration', {
		    name: name,
		    email: email,
		    password: password
		  })
		  .then(function (response) {
		    window.location = '/central/account/login'
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render(){
		return(
			<div className="devise">
				<div className="row align-center">
					<div className="small-11 medium-8 large-5 large-centered medium-centered small-centered columns">
						<div className="heading"><center><img src={Logo}/></center></div>
						<div className="register-form">
							<div className="row">
								<div className="large-12 columns">
									<p className="align-text sign">SIGN UP NOW!</p>
									<p className="align-text">Create your account in less than a minute</p>
									<p className="align-text thin">Already have an account? <a className="highlight" href="/central/account/login">Login</a></p>
								</div>
							</div>
							
							<div className="row"> 
								<div className="large-12 column">
									<input type="text" name="name" placeholder="Name" onChange={this.handleChange}/>
									<input type="text" name="email" placeholder="Email Address" onChange={this.handleChange}/>
									<input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
									<input type="text" name="confirm-password" placeholder="Confirm Password"/>
									<input id="checkbox1" type="checkbox"/><label for="checkbox1" className="term thin">I agree with the <a href="#" className="highlight">Terms and Conditions</a></label>
									<button className="btn btn-primary" onClick={this.handleSubmit}>REGISTER</button>
								</div>				
							</div>
		   	 			</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Registration