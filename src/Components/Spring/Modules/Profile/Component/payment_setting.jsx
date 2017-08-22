import React from 'react'

class payment_setting extends React.Component{
	render(){
		return(
			<div>
				<div className="dash-sub-content">
					<p>Set your payment method for your own association</p>
						<div className="sub-content1">
							<form>
								<div className="accordian pay-details">
									<p>PAYPAL</p><input className="switch-input checkbox-pay" id="accordian-1" type="checkbox"/><label className="switch-paddle2 checkbox-pay" for="accordian-1"></label>
									<div className="accordian--content">
										<div className="accordian--inner">
											<hr className="nipis"/>
											<div className="row input-primary">
												<div className="large-6 columns">
													<label for="paypal-email">PayPal Email</label> <input id="paypal-email" type="email"/> <label>API Username</label> <input name="api-name" type="text"/>
												</div>
												<div className="large-6 columns">
													<label for="api-pswd">API Password</label> <input id="api-pswd" type="password"/> <label>API Signature</label> <input name="api-signature" type="email"/>
												</div>
											</div>
											<p>Sandbox Mode</p><br/>
											<div className="row">
												<div className="large-6 columns sandbox">
													<p>Test payments via PayPal sandbox</p><input className="switch-input" id="paypal-sandbox" name="enable-disable" type="checkbox"/> <label className="switch-paddle2" for="paypal-sandbox"></label>
												</div>
												<div className="large-6 columns">
													<div className=" button-group1 float-right">
														<a className="button1 save">SAVE</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="sub-content1">
							<form>
								<div className="accordian pay-details">
									<p>BILLPLZ</p><input className="switch-input checkbox-pay" id="accordian-2" type="checkbox"/><label className="switch-paddle2 checkbox-pay" for="accordian-2"></label>
									<div className="accordian--content">
										<div className="accordian--inner">
											<hr className="nipis"/>
											<div className="row input-primary">
												<div className="large-6 columns">
													<label for="billplz-api">API Key</label> <input id="billplz-api" type="text"/>
												</div>
												<div className="large-6 columns">
													<label for="billplz-id">Collection ID</label> <input id="billplz-id" type="text"/>
												</div>
											</div>
											<p>Sandbox Mode</p><br/>
											<div className="row">
												<div className="large-6 columns sandbox">
													<p>Test payments via BillPlz sandbox</p><input className="switch-input" id="billplz-sandbox" name="enable-disable" type="checkbox"/> <label className="switch-paddle2" for="billplz-sandbox"></label>
												</div>
												<div className="large-6 columns">
													<div className=" button-group1 float-right">
														<a className="button1 save">SAVE</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="sub-content1">
							<form>
								<div className="accordian pay-details">
									<p>2CHECKOUT</p><input className="switch-input checkbox-pay" id="accordian-3" type="checkbox"/><label className="switch-paddle2 checkbox-pay" for="accordian-3"></label>
									<div className="accordian--content">
										<div className="accordian--inner">
											<hr className="nipis"/>
											<div className="row input-primary">
												<div className="large-6 columns">
													<label for="check-acc-num">2Checkout Account Number</label> <input id="check-acc-num" type="email"/> <label for="check-secret-code">API Username</label> <input id="check-secret-code" type="text"/>
												</div>
												<div className="large-6 columns">
													<label for="check-api-name">API Username</label> <input id="check-api-name" type="text"/> <label for="check-api-pswd">API Password</label> <input id="check-api-pswd" type="text"/>
												</div>
											</div>
											<p>Sandbox Mode</p><br/>
											<div className="row">
												<div className="large-6 columns sandbox">
													<p>Test payments via 2Checkout sandbox</p><input className="switch-input" id="checkout-sandbox" name="enable-disable" type="checkbox"/> <label className="switch-paddle2" for="checkout-sandbox"></label>
												</div>
												<div className="large-6 columns">
													<div className=" button-group1 float-right">
														<a className="button1 save">SAVE</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="sub-content1">
							<form>
								<div className="accordian pay-details">
									<p>BANK TRANSFER</p><input className="switch-input checkbox-pay" id="accordian-4" type="checkbox"/><label className="switch-paddle2 checkbox-pay" for="accordian-4"></label>
									<div className="accordian--content">
										<div className="accordian--inner">
											<hr className="nipis"/>
											<div className="row input-primary">
												<div className="large-6 columns">
													<label for="bank-name">Bank Name</label> <input id="bank-name" type="text"/> <label for="recipient-name">Recipient Name</label> <input id="recipient-name" type="text"/>
												</div>
												<div className="large-6 columns">
													<label for="bank-num">Account Number</label> <input id="bank-num" type="text"/> <label>Recipient Email</label> <input id="recipient-email" type="email"/>
												</div>
											</div><br/>
											<div className="row">
												<div className="large-6 columns sandbox"></div>
												<div className="large-6 columns">
													<div className=" button-group1 float-right">
														<a className="button1 save">SAVE</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
				</div>
			</div>
			)
	}
}

export default payment_setting