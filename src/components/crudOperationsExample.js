import React, { Component } from 'react';

export default class CRUDOperationsExample extends Component {

constructor(props) {
		super(props);
		this.state={
			inputValue:"",
			saveConfirm:false
			};

	}

	numberReading(event) {
		let inputText = event.target.value;
		console.log("input val:",inputText)
		if(inputText.length>0) {
			this.setState({
			inputValue:inputText		
		},()=>{
			console.log("input is in state:",this.state.inputValue);		
		})
		}
	}

	saveValue(event) {
		//alert("input value is:",this.state.inputValue)
		this.setState({
			saveConfirm:true		
		})
	}

	handleEdit(event) {
		this.setState({
			saveConfirm:false,
			inputValue:this.state.inputValue		
		})
	}

	handleDelete(event) {
		this.setState({
			saveConfirm:false,
			inputValue:""		
		})
	}

	renderForm() {
		console.log("saveConfirm val:",this.state.saveConfirm);
		if(this.state.saveConfirm) {
			console.log("inside if");
			return( 
				<div><label>Value saved is : {this.state.inputValue}</label><br/>
			 		 <a href="#" onClick={this.handleEdit.bind(this)}>Edit</a>&nbsp;&nbsp;
			 		 <a href="#" onClick={this.handleDelete.bind(this)}>Delete</a> 
			 	</div>
			 	)	
		} else {
			console.log("inside else");
			return(
			<div>
				<input type="text" value={this.state.inputValue} onChange={this.numberReading.bind(this)} /><br/>
				<input type="button" className="w3-button w3-cyan" value="Save" onClick={this.saveValue.bind(this)} />
			</div>
			 	)
		}
		
	}

	render() {
			return(
				<div className="w3-panel">
						<form name="testForm">
							<label>CRUD Operations Example</label><br/><br/>
							
							<br/>
							{this.renderForm()}							

						</form>
				</div>
				)
	}

}