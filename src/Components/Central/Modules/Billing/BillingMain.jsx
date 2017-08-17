import React from 'react'
import BillingInfo from 'Components/Central/Modules/Billing/Component/BillingInfo'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
		  { path: '/central/billing',
		    main: () => <BillingInfo/>
		  }
		]

class BillingMain extends React.Component{
	render(){
		return(
			<Router>
				<div>
			        {routes.map((route, index) => (
			          <Route
			            key={index}
			            path={route.path}
			            exact={route.exact}
			            component={route.main}
			          />
			        ))}
			    </div>
		  	</Router>
			)
		}
	}

export default BillingMain