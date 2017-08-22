import React from 'react'
import SpringDashboard from 'Components/Spring/Modules/Dashboard/SpringDashboard'
import SpringProfile from 'Components/Spring/Modules/Profile/SpringProfile'
import AddProfile from 'Components/Spring/Modules/Profile/Component/add_profile'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
		  { path: '/spring/dashboard',
		    main: () => <SpringDashboard/>
		  },
		  { path: '/spring/profile',
		  	exact: true,
		    main: () => <SpringProfile/>
		  },
		  { path: '/spring/profile/new',
		  	exact: true,
		    main: () => <AddProfile/>
		  }
		]

class SpringMain extends React.Component{
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

export default SpringMain