import React from 'react'
import Logo from 'img/logo-full-recober-white.svg'
import SuccessIcon from 'img/success.svg'

class Complete extends React.Component{
	render(){
		return(
			<div className="devise">
				<div className="row align-center">
					<div className="small-11 medium-8 large-5 large-centered medium-centered small-centered columns">
						<div className="heading"><center><img src={Logo}/></center></div>
						<form className="register-form">
							<div className="row">
								<div className="large-12 columns">
									<center><img src={SuccessIcon}/></center>
									<p className="align-text sign">SIGN UP COMPLETE!</p>
									<p className="align-text thin">You have join Recober.<span><br/>Please check your email and click the link to activate!</span></p>
								</div>
								</div>
								<div className="row">
								<div className="large-12 columns">
									<button className="btn btn-primary"><a href="/central/account/login">LOGIN NOW</a></button>
							</div>
							</div>
		   	 			</form>
					</div>
				</div>
			</div>
			)
	}
}

export default Complete