import React from 'react';
import axios from 'axios';

const ApiSandbox = React.createClass({

	render(){
		return(
			<div className="jumbotron">
				<h2>Your API Sandbox</h2>
				<div>Make CRUD requests to this collection to test out your data</div>
				<br></br>
				<form>
				<div className="form-group">	
					<div className="input-group input-group-md">
						<label for="dbName">POST</label><br></br>
						<small id="postHelp" className="form-text text-muted">Add a document to this collection</small>
						<input 
							className="form-control"
							placeholder="Enter {<key>: <value>} of new document"
							type="text"
							name="postInput"
							onChange={this.props.onChange}>
						</input>
						<button
							className="btn btn-primary btn-lg"
							onClick={this.props.postClick}>
								POST
						</button>
					</div>
				</div>
				</form>
				<form>
				<div className="form-group">	
					<div className="input-group input-group-md">
						<label for="dbName">PUT</label><br></br>
						<small id="putHelp" className="form-text text-muted">Update a document in this collection</small>
							<input 
								className="form-control"
								placeholder="Copy and paste _id of desired document"
								type="text"
								name="putID"
								onChange={this.props.onChange}>
							</input>
							<input 
								className="form-control"
								placeholder="Enter {<key>: <value>} to change"
								type="text"
								name="putInput"
								onChange={this.props.onChange}>
							</input>
							<button
								className="btn btn-primary btn-lg"
								onClick={this.props.putClick}>
									PUT
							</button>
						</div>
					</div>
				</form>
				<form>
					<div className="form-group">	
						<div className="input-group input-group-md">
						<label for="dbName">DELETE</label><br></br>
							<small id="deleteHelp" className="form-text text-muted">Delete a record from this collection</small>
							<input 
								className="form-control"
								placeholder="Copy and paste _id of desired document"
								type="text"
								name="deleteID"
								onChange={this.props.onChange}>
							</input>
							<button
								className="btn btn-primary btn-lg"
								onClick={this.props.deleteClick}>
									DELETE
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
})

export default ApiSandbox;