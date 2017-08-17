import React from 'react'
import Login from 'Components/Central/Modules/Account/Components/Login'
import Registration from 'Components/Central/Modules/Account/Components/Registration'
import Complete from 'Components/Central/Modules/Account/Components/Complete'
import Profile from 'Components/Central/Modules/Account/Components/Profile'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
		  { path: '/central/account/login',
		    main: () => <Login/>
		  },
		  { path: '/central/account/registration',
		  	exact: true,
		    main: () => <Registration/>
		  },
		  { path: '/central/account/registration/complete',
		    main: () => <Complete/>
		  },
		  { path: '/central/account/profile',
		    main: () => <Profile/>
		  },
		]

class AccountMain extends React.Component{
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

export default AccountMain