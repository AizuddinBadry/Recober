import React from 'react'
import Logo from 'img/logo-full-recober-white.svg'

class Registration extends React.Component{
	render(){
		return(
			<div className="devise">
				<div className="row align-center">
					<div className="small-11 medium-8 large-5 large-centered medium-centered small-centered columns">
						<div className="heading"><center><img src={Logo}/></center></div>
						<form className="register-form">
							<div className="row">
								<div className="large-12 columns">
									<p className="align-text sign">SIGN UP NOW!</p>
									<p className="align-text">Create your account in less than a minute</p>
									<p className="align-text thin">Already have an account? <a className="highlight" href="/central/account/login">Login</a></p>
								</div>
							</div>
							
							<div className="row"> 
								<div className="large-12 column">
									<input type="text" name="name" placeholder="Name"/>
									<input type="text" name="emel" placeholder="Email Address"/>
									<input type="text" name="password" placeholder="Password"/>
									<input type="text" name="confirm-password" placeholder="Confirm Password"/>
									<input id="checkbox1" type="checkbox"/><label for="checkbox1" className="term thin">I agree with the <a href="#" className="highlight">Terms and Conditions</a></label>
									<button className="btn btn-primary"><a href="/central/account/registration/complete">REGISTER</a></button>
								</div>
						
							</div>
					
		      				
		   	 			</form>
					</div>
				</div>
			</div>
			)
	}
}

export default Registration