import React from 'react'
import Account from 'Components/Central/Modules/Account/AccountMain'
import Dashboard from 'Components/Central/Modules/Dashboard/DashboardMain'
import Associations from 'Components/Central/Modules/Associations/AssociationsMain'
import Billing from 'Components/Central/Modules/Billing/BillingMain'
import AssociationsName from 'Components/Central/Modules/Associations/Components/AssociationsName'
import AssociationsDomain from 'Components/Central/Modules/Associations/Components/AssociationsDomain'
import AssociationsMembership from 'Components/Central/Modules/Associations/Components/AssociationsMembership'
import AssociationsManual from 'Components/Central/Modules/Associations/Components/AssociationsManual'
import AssociationsSuccess from 'Components/Central/Modules/Associations/Components/AssociationsSuccess'
import AssociationsPackage from 'Components/Central/Modules/Associations/Components/AssociationsPackage'
import AssociationsPayment from 'Components/Central/Modules/Associations/Components/AssociationsPayment'
import PaymentConfirm from 'Components/Central/Modules/Associations/Components/PaymentConfirm'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
		  { path: '/central/account',
		    main: () => <Account/>
		  },
		  { path: '/central/dashboard',
		    main: () => <Dashboard/>
		  },
		  { path: '/central/associations',
		  	exact: true,
		    main: () => <Associations/>
		  },
		  { path: '/central/billing',
		  	exact: true,
		    main: () => <Billing/>
		  },
		  { path: '/central/associations/create/name',
		  	exact: true,
		    main: () => <AssociationsName/>
		  },
		  { path: '/central/associations/create/domain',
		  	exact: true,
		    main: () => <AssociationsDomain/>
		  },
		  { path: '/central/associations/create/membership',
		  	exact: true,
		    main: () => <AssociationsMembership/>
		  },
		  { path: '/central/associations/create/manual',
		  	exact: true,
		    main: () => <AssociationsManual/>
		  },
		  { path: '/central/associations/create/success',
		  	exact: true,
		    main: () => <AssociationsSuccess/>
		  },
		  { path: '/central/associations/create/package',
		  	exact: true,
		    main: () => <AssociationsPackage/>
		  },
		  { path: '/central/associations/create/payment',
		  	exact: true,
		    main: () => <AssociationsPayment/>
		  },
		  { path: '/central/associations/create/payment/confirm',
		  	exact: true,
		    main: () => <PaymentConfirm/>
		  },
		]

class CentralMain extends React.Component{
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

export default CentralMain