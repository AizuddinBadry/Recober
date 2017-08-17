import React from 'react'
import Logo from 'img/logo-full-recober-white.svg'

class Login extends React.Component{
	render(){
		return(
			<div className="devise">
			<div className="row align-center">
			<div className="small-11 medium-8 large-5 large-centered medium-centered small-centered columns">
				<div className="heading"><center><img src={Logo}/></center></div>
				<form className="register-form">
					<div className="row">
						<div className="large-12 columns">
							<p className="align-text sign">LOGIN</p>
							<p className="align-text thin">Dont have an account? <a className="highlight" href="/central/account/registration">Create one now!</a></p>
						</div>
					</div>
					
					<div className="row"> 
						<div className="large-12 column">
							<input type="email" name="emel" placeholder="Email Address"/>
							<input type="text" name="password" placeholder="Password"/>
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
						<button className="btn btn-primary"><a href="/central/dashboard">LOG IN</a></button>
						</div>
						
					</div>
						</form>
					</div>
			</div>
			</div>
			)
	}
}

export default Login