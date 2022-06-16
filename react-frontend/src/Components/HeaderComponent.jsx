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
                        <div style={{ display: 'flex' }}>
                            <a href="" className="navbar-brand">Vechile Management System </a>
                            {this.props.isLoggedIn ?
                            <React.Fragment>
                                <div style={{position: 'fixed',right: 10, top: 10, }}>
                                <span className="navbar-brand" style={{ cursor: 'pointer' }} onClick={this.props.showListHandler}>View details</span>
                                {/* <span className="navbar-brand" style={{ cursor: 'pointer' }} onClick={this.props.logoutHandler}>Update</span>
                                <span className="navbar-brand" style={{ cursor: 'pointer' }} onClick={this.props.logoutHandler}>Delete</span> */}
                                <span className="navbar-brand" style={{ cursor: 'pointer' }} onClick={this.props.logoutHandler}>Logout</span>
                                </div>
                                

                            </React.Fragment>
                                :
                                <span className="navbar-brand" style={{ position: 'fixed', right: 10, top: 10, cursor: 'pointer' }} onClick={this.props.showLogin}>Login</span>

                            }
                            {/* <span className="navbar-brand" style={{position:'fixed',right:10,top:10,cursor:'pointer'}} onClick={this.props.showLogin}>Login</span> */}


                        </div>
                    </nav>

                </header>
            </div>
        )
    }
}

export default HeaderComponent
