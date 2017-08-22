import React from 'react'
import axios from 'axios'
import { Modal } from 'semantic-ui-react'

class membership_plan extends React.Component{
	constructor(props) {
		super(props);
		this.state = {name:'',description:'',payment_type:'',duration:'',units:'',currency:'',amount:'',membership_list:[]}
	}

	componentDidMount() {
		var self = this;
		var association_id = localStorage.getItem('association_id');
		axios.get('http://localhost:3001/profiles/membership/'+association_id+'/list/')
		  .then(function (response) {
			self.setState({membership_list:response.data})
			console.log(response.data)
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	handleChange = (e) =>{
		this.setState({[e.target.name]:e.target.value})
	}

	handleChecked = (e) =>{
		if(e.target.checked)
		{
			this.setState({[e.target.name]:e.target.value})
		}
		else
		{

		}
	}

	handleSubmit = (e) =>{
		var self = this;
		const {name,description,payment_type,duration,units,currency,amount} = this.state;
		var association_id = localStorage.getItem('association_id');
		axios.post('http://localhost:3001/profiles/membership/new',{
			name:name,
			description:description,
			payment_type:payment_type,
			duration:duration,
			units:units,
			currency:currency,
			amount:amount,
			association_id:association_id

		})
		  .then(function (response) {
			window.location.reload()
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}


	render(){
		const {name,description,payment_type,duration,units,currency,amount,membership_list} = this.state;
		const list = membership_list.map((index, i) => {
			return(
				<tr>
					<td className="multi-prof"><input id="memberplan2" type="checkbox"/></td>
					<td>
						<a href="#">{index.name}</a>
					</td>
					<td>{index.description}</td>
					<td>{index.currency+''}{index.amount}</td>
					<td>{index.payment_type}</td>
					<td>{index.duration+''}{index.units}</td>
					<td>{index.created_at}</td>
					<td><i className="fa fa-check-circle publish"></i></td>
				</tr>
				)
		})
		return(
			<div>
				<div className="dash-sub-content">
					<p>Set your own membership plan for your association</p>
						<div className="row">
							<div className="large-9 columns multi-prof">
								<a href=""><i className="fa fa-check-circle publish"></i> Publish</a> <a href=""><i className="fa fa-times-circle unpublish"></i> Unpublish</a> <a href=""><i className="fa fa-trash"></i> Delete</a> 
								<Modal trigger={<a><i className="fa fa-plus-circle"></i> New</a>}>
							    <Modal.Header>Membership Plan Details</Modal.Header>
							    <Modal.Content>
							      <Modal.Description>
							        <div className="row">
										<div className="large-6 columns">
											<label for="plan-name">Plan Name</label>
											<input name="name" type="text" value={name	} onChange={this.handleChange}/> 
											<label for="plan-desc">Description</label> 
											<textarea id="plan-desc" rows="5" name='description' onChange={this.handleChange}></textarea>
										</div>
										<div className="large-6 columns">
											<label>Payment Type</label>
											 <input checked="checked"  name="payment_type" required="" type="radio" value="single" onChange={this.handleChecked}/>
											 <label for="payment-type">Single</label> 
											 <input  name="payment_type" type="radio" value="recurring" onChange={this.handleChecked}/>
											 <label for="payment-type">Recurring</label> 
											 <input id="payment-type" name="payment_type" type="radio" value="free" onChange={this.handleChecked}/>
											 <label for="payment-type">Free</label>
											<div className="row">
												<div className="large-4 columns-1">
													<label for="payment-duration">Durations</label>
													<input id="payment-duration" name="duration" type="text" value={duration} onChange={this.handleChange}/>
												</div>
												<div className="large-8 columns-2">
													<label for="plan-unit">Units</label> 
													<select value={units} className="pilih" name='units' onChange={this.handleChange}>
														<option value="month">
															Month
														</option>
														<option value="year">
															Year
														</option>
													</select>
												</div>
											</div>
											<div className="row">
												<div className="large-8 columns-1">
													<label for="plan-currency">Currency</label> 
													<select className="pilih" name="currency" value={currency} onChange={this.handleChange}>
														<option value="MYR">
															Malaysia Ringgits – MYR
														</option>
														<option value="USD">
															United States Dollars – USD
														</option>
													</select>
												</div>
												<div className="large-4 columns-2">
													<label for="payment-amount">Amount</label>
													<input id="payment-amount" name="amount" type="text" value={amount} onChange={this.handleChange}/>
												</div>
											</div><br/>
											<div className=" button-group1 float-right">
												<a className="button1 reset">CANCEL</a> <a className="button1 save" onClick={this.handleSubmit}>SAVE</a>
											</div>
										</div>
									</div>
							      </Modal.Description>
							    </Modal.Content>
							  </Modal>
							</div>
							<div className="large-3 columns search">
								<input placeholder="Search" type="text"/> <a className="float-right" href="#"><i className="fa fa-search"></i></a>
							</div>
						</div>
						<table className="noBorder full table-center">
							<thead>
								<tr>
									<td className="multi-prof"><input id="memberplan1" type="checkbox"/></td>
									<td>PLAN</td>
									<td>DESCRIPTION</td>
									<td>AMOUNT</td>
									<td>TYPE</td>
									<td>DURATION</td>
									<td>DATE CREATION</td>
									<td>STATUS</td>
								</tr>
							</thead>
							<tbody>
							{list}
							</tbody>
						</table>
				</div>
			</div>
			)
	}
}

export default membership_plan