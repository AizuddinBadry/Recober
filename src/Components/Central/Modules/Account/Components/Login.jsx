import React from 'react'
import axios from 'axios'
import Logo from 'img/logo-full-recober-white.svg'

class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state = {name:'', email:'', password: ''}
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
		  	console.log(response.data['id'])
		  	if(response.data['status'] ==  false)
		    {
		    	alert('Wrong username or password')
		    }
		    else
		    {
		    	localStorage.setItem('id', response.data['id'])
		    	window.location = '/central/dashboard'
		    }
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
							<p className="align-text sign">LOGIN</p>
							<p className="align-text thin">Dont have an account? <a className="highlight" href="/central/account/registration">Create one now!</a></p>
						</div>
					</div>
					
					<div className="row"> 
						<div className="large-12 column">
							<input type="email" name="email" placeholder="Email Address" onChange={this.handleChange}/>
							<input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
						</div>
					</div>

					<div className="row">
						<div className="large-12">
						<input id="checkbox1" type="checkbox"/><label for="checkbox1" className="term thin">Keep me signed in</label>
						<p className="thin small float-right forgot"><a href="forgot_password.html">Forgot your password?</a></p>
						</div>
					</div>

					<div className="row">
						<div className="small-6 large-6 columns-1">
						<button className="btn cancel"><a href="#">CANCEL</a></button>
						</div>
						<div className="large-6 columns-2">
						<button className="btn btn-primary" onClick={this.handleSubmit}>LOG IN</button>
						</div>
						
					</div>
						</div>
					</div>
			</div>
			</div>
			)
	}
}

export default Login