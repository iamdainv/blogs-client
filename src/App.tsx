import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from 'container/Home/Home';
import { router } from 'router';

function App() {
	return (
		<React.Suspense fallback={<>hello</>}>
			<Router>
				<Switch>
					{router.map(
						({ component: Component, ...route }) =>
							//because Component is an optional , so you must check Component null ( link : https://stackoverflow.com/questions/53452966/typescript-3-jsx-element-type-component-does-not-have-any-construct-or-call-s/53453431)

							Component && (
								<Route
									{...route}
									render={props => <Component {...props} />}></Route>
							)
					)}
				</Switch>
			</Router>
		</React.Suspense>
	);
}

export default App;
