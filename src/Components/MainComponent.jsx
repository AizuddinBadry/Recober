import React from 'react'
import Central from 'Components/Central/CentralMain'
import Spring from 'Components/Spring/SpringMain'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
		  { path: '/central',
		    main: () => <Central/>
		  },
		  { path: '/spring',
		    main: () => <Spring/>
		  }
		]

class MainComponent extends React.Component{
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

export default MainComponent