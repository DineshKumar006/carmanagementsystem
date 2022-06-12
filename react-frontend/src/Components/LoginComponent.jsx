import React, { Component } from 'react'


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
            isLoggedIn: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }



    render() {
        return (
            <div className=" text-center" style={{ marginTop:100}}>
              
                <div className="container">

                    {this.props.isWrongCredentials && <div className="alert alert-warning">Invalid Credentials</div>}
                    
                    <div style={{height:200,display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'column'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',width:'50%',flexWrap:'wrap',flexDirection:'column'}}>
                        <label style={{marginBottom:8,marginTop:10}}>  User Name:  </label>
                        <input type="text" placeholder='Enter UserName' name="username" value={this.state.username} onChange={this.handleChange} style={{height:40,width:'80%'}} />

                        </div>
                      
                        <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',width:'50%',flexWrap:'wrap',flexDirection:'column'}}>
                        <label style={{marginBottom:8,marginTop:10}}> Password:</label>
                        <input type="password" placeholder='Enter Password' name="password" value={this.state.password} onChange={this.handleChange} style={{height:40,width:'80%'}} />
                        </div>

                        <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',width:'50%',flexWrap:'wrap',flexDirection:'column'}}>

                        <button className="btn btn-success" onClick={()=>this.props.loginClicked(this.state.username,this.state.password)} style={{marginTop:10,width:'80%'}}>Login</button>
                        </div>
                    </div>

                    {/* <p />
                    User Name: 
                    <p />
                    Password: <input type="password" placeholder='Enter Password' name="password"
                        value={this.state.password} onChange={this.handleChange} />
                    <p /> */}
                </div>
            </div>
        )
    }
}

export default LoginComponent