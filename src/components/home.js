import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom";


class HomePage extends Component {

	navigationPage(event) {
		//this.props.history.push('/about');
	}

	render() {
			return(
				<div><label>this is home pagexxxxxxxxxxxxx</label>
				
			
				</div>
				)
		}
}

export default withRouter(HomePage);
