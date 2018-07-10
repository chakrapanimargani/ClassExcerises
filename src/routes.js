import React from 'react';

import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	ReactRouter
} from "react-router-dom";

import HomePage from "./components/home";

const APP_ROUTES=[
	{
		path: "/",
		isExactPath:true,
		component:<HomePage />
	}
];

const routes = (
	<HashRouter>
		<Switch>
			{APP_ROUTES.map((routeItem,idx)=>{
				return <Route
				key={routeItem.path}
				path={routeItem.path}
				exact={routeItem.isExactPath}
				render={(params)=>{
					return routeItem.component;
				}}
				/>;
			})}
		</Switch>
	</HashRouter>
	);

export default routes;