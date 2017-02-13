# Teste de React com Api do GitHub



Webpack -w -> Compila a cada mudança

#Usado:


-Webpack (Básico)

- React
	1. JSX
	2. Components
	3. Axios
	4. LifeCycle


- babel ( npm install --save-dev babel-core babel-loader babel-preset-react)



---------------------------------------

Versões anteriores do React:



var UserInfo = React.createClass({
	
	render: function() {
			
		var userInfo = this.props.user ?
		(
			<div className="row">
        <div className="col-lg-4">
          <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140" />
          <h2>{this.props.user.login}</h2>
          <p>{this.props.user.name}</p>
          <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
          <p><a className="btn btn-default" href={this.props.user.html_url} role="button">View details</a></p>
        </div>
	    </div>
  	) : null;

  	return userInfo;

	}
});


---------------------------------------
#Obs:

propTypes :

Serve para garantir que está passando com a tipagem correta. Garantir quais são as propriedades e quais seus tipos. Também pode-se colocar se é obrigatório ou não com isRequired
