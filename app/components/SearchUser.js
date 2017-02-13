var React = require('react');
//Faz a requisição para o serviço que bate na Api
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
	handleSubmit: function(e){
		//Prevenir que o Browser faça reload do form
		e.preventDefault();

		//Pega o valor da referencia passada como username, e pega o valor dela
		GitHubUser.getByUsername(this.refs.username.value).then(function(response){
			// Essa propriedade pega a chamada do updateUser no GitHub.js
			this.props.updateUser(response.data);
			// Passa o this para o escopo
		}.bind(this));

		GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
			this.props.updateRepos(response.data);
		}.bind(this));
	},
	render: function(){
		return (
			<div className="jumbotron">
				<h1>GitHub Info</h1>
				<div className="row">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Username</label>
							<input
								type="text"
								ref="username"
								className="form-control"
								placeholder="Ex: viniarruda"
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary">Buscar
						</button>
					</form>
				</div>
			</div>

		);
	}			
})

SearchUser.propTypes = {
	updateUser: React.PropTypes.func.isRequired,
	updateRepos: React.PropTypes.func.isRequired
};

module.exports = SearchUser;