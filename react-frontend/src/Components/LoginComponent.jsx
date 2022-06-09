import React, { Component } from 'react'


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
      
        if(this.state.username==='Mukesh' && this.state.password==='kumar'){
            
            this.props.navigate("/cardetails")
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }

    

    }

    render() {
        return (
            <div className = " text-center"style={{bottom:'1rpm'}}>
                <h1 className="text-center">Login</h1>
                <div className="container">
                   
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    
                   <p/>
                   User Name: <input type="text" placeholder='Enter UserName' name="username"  value={this.state.username} onChange={this.handleChange} />
                   <p/>
                   Password: <input type="password" placeholder='Enter Password' name="password" 
                    value={this.state.password} onChange={this.handleChange} />
                    <p/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>

                    
                </div>
            </div>
        )
    }
}

export default LoginComponent