import React, { Component } from 'react';
import './App.css';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Box, Heading, Grommet } from 'grommet';

import {Home, Login, Logout, Register} from 'Pages';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mag:'',
            loading:true,
            isLoggedIn:false,
            playerTag:''
        };

        this.logout = this.logout.bind(this);
        this.setPlayerTag = this.setPlayerTag.bind(this);
        this.setAdmin = this.setAdmin.bind(this);
    }

    login() {
        this.setState({isLoggedIn: true});
    }

    logout() {
        this.setState({isLoggedIn: false});
    }

    setPlayerTag(tag) {
        this.setState({playerTag: tag});
    }

    setAdmin(admin) {
        this.setState({isAdmin: admin});
    }

    componentDidMount() {
        fetch('/api/checkToken', {
            headers: {
                'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    msg: "USER LOGGED IN!",
                    isLoggedIn:true,
                    loading:false
                });
                return res.json();
            } else {
                this.setState({
                    msg: "PLEASE LOGIN FIRST.",
                    isLoggedIn:false,
                    loading:false
                });
            }
        })
        .then(data => {
            if (data) {
                //console.log(data);
                this.setState({
                    playerTag: data.playerTag,
                    isAdmin: data.isAdmin
                });
            }
            
        }) 
        .catch(err => {
            console.error(err);
            alert('Error checking token');
        });
        
    }


    render() {
        var loginButton = this.state.isLoggedIn ? (<div className='nav-item'><Link to="/logout">Logout</Link></div>) : (
            <div>
                <div className='nav-item'><Link to="/login">Login</Link></div>
                <div className='nav-item'><Link to="/register">Register</Link></div></div>
            );
        
        return (
            <BrowserRouter>
                <div className='container'>
                    <div className='nav'>
                        <div className='logo'>SecretHitler</div>
                        <div className='nav-cont'>
                            {this.state.isAdmin ?
                                <div className='admin-tag'>A</div>
                            :
                                <span></span>
                            }
                            <div className='playerTag'>{this.state.playerTag}</div>
                            <div className='nav-item'><Link to="/">Home</Link></div>
                            {loginButton}
                        </div>
                    </div>
                    <div className='content'>
                        <Switch>
                            <Route exact path="/" component={() => 
                                <Home login={this.login} logout={this.logout} setPlayerTag={this.setPlayerTag} setAdmin={this.setAdmin}/>
                            }/>
                            <Route exact path="/login" component={() =>
                                <Login login={this.login} logout={this.logout}  setPlayerTag={this.setPlayerTag} setAdmin={this.setAdmin}/>
                            }/>
                            <Route exact path="/logout" component={() =>
                                <Logout login={this.login} logout={this.logout}  setPlayerTag={this.setPlayerTag} setAdmin={this.setAdmin}/>
                            }/>
                            <Route exact path="/register" component={() =>
                                <Registration login={this.login} logout={this.logout} setPlayerTag={this.setPlayerTag} setAdmin={this.setAdmin}/>
                            }/>
                            
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
