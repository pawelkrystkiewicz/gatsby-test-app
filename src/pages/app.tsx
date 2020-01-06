import React from 'react';
import { Dashboard } from '../modules/Dashboard';
import { Router } from '@reach/router';

const App = () => {
	return (
		<Router>
			<Dashboard path="/app/dashboard" />
		</Router>
	);
};

export default App;
