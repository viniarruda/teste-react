var React = require('react');
var SearchUser = require('./SearchUser');
var UserInfo = require('./UserInfo');

var GitHub = React.createClass({
	getInitialState: function() {
		return {
			user: null,
			repos: [],
		};
	},
	updateUser: function(user){
		this.setState({user: user});
	},
	updateRepos: function(repos){
		this.setState({repos: repos});
	},
	render: function() {
		return (
			<div className="container">	
				<SearchUser 
					// Passa a função para o componente filho
					updateUser={this.updateUser}
					updateRepos={this.updateRepos} 
				/>
				<UserInfo 
				//Tanto user quanto repos mudam, por isso precisa ser state
					user={this.state.user}
					repos={this.state.repos}
				/>
			</div>
		);
	}
});


module.exports = GitHub;