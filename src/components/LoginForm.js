import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "", password: ""};
  }
  

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username
    const password = this.state.password
    if (username !== "" && password !== "") {
      this.props.handleLogin(this.state)
      this.setState({
        username: '',
        password: ''
      });
    }


  }
  
  handleInputChange = (event) => {
    // console.log(event)
    this.setState ({
      [event.target.name]: event.target.value
      
    })
  }
  
  render() {
    const {username, password} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username}  onChange={(event) => this.handleInputChange(event)} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} onChange={(event) => this.handleInputChange(event)} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
