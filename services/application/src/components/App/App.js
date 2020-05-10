import React, { Component } from 'react';
import './App.css';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Box, Heading, Grommet } from 'grommet';

import {Home, Login, Logout, Register, Loading, Verify} from 'Pages';

class App extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            mag:'',
            loading:true,
            isLoggedIn:false,
            playerTag:'',
            verified:false
        };

        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
        this.setPlayerTag = this.setPlayerTag.bind(this);
    }

    login(data) {
        this.setState({isLoggedIn: true, playerTag:data.playerTag, verified:data.verified});
    }

    logout() {
        this.setState({isLoggedIn: false, playerTag:""});

    }

    setPlayerTag(tag) {
        this.setState({playerTag: tag});
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;


        fetch('/api/checkToken', {
            headers: {
                'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.status);
            if (res.status === 200) {
                return res.json();
            } else {
                if (this._isMounted) {
                    this.setState({
                        msg: "PLEASE LOGIN FIRST.",
                        isLoggedIn:false,
                        loading:false
                    });
                }
            }
        })
        .then(data => {
            if (data) {
                //console.log(data);
                if (this._isMounted) {
                    this.setState({
                        playerTag: data.playerTag,
                        msg: "USER LOGGED IN!",
                        isLoggedIn:true,
                        loading:false,
                        verified: data.verified
                    });
                }
            }
            
        }) 
        .catch(err => {
            console.error(err);
            alert('Error checking token');
        });
        
    }


    render() {
        var propsData = {
            login: this.login,
            logout:this.logout,
            setPlayerTag: this.setPlayerTag,
            playerTag:this.state.playerTag,
            verified:this.state.verified,
            isLoggedIn:this.state.isLoggedIn
        };

        var content = this.state.loading ? <Loading /> :
            <Home data={propsData}/>
        return (
          <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => 
                        content
                    }/>
                    <Route exact path="/login" component={() =>
                        <Login data={propsData}/>
                    }/>
                    <Route exact path="/logout" component={() =>
                        <Logout data={propsData}/>
                    }/>
                    <Route exact path="/register" component={() =>
                        <Register data={propsData}/>

                    }/>
                    <Route exact path="/verify" component={() =>
                        <Verify data={propsData}/>

                    }/>
                    
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
