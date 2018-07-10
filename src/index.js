import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import {Provider} from "react-redux";
import routes from "./routes.js";
import {applyMiddleware,createStore} from "redux";
import logger from "redux-logger";

import CRUDOperationsExample from './components/crudOperationsExample';

const middleware=applyMiddleware(logger);
const store=createStore(middleware);

render(

		<Provider store={store}>
		<CRUDOperationsExample />
		</Provider>,document.getElementById("container")
	);
