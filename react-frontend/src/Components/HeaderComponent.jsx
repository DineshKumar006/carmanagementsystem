import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav >
                    <div style={{display:'flex'}}>
                    <a href="" className="navbar-brand">Car Management App </a>
                    <span className="navbar-brand" style={{position:'fixed',right:10,top:10,cursor:'pointer'}} onClick={this.props.showLogin}>Login</span>
                    

                    </div>
                    </nav>
                    
                </header>
            </div>
        )
    }
}

export default HeaderComponent
