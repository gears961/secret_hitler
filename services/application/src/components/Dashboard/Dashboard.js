import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import "./Dashboard.css";

import { grommet, Grommet, Anchor, Box, Button, Nav, Sidebar, Avatar, Image} from 'grommet';
import { Login, Menu, Logout, Add, Close, Analytics, Chat, Clock, Configure, Help, Projects, StatusInfoSmall } from "grommet-icons";

import {Banner} from 'Media';

class Dashboard extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            open: false
        };
        
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    setOpen = (val) => {
        console.log(val);
        this.setState({open: val});
    }

    onSubmit = (event) => {
        event.preventDefault();
    }

    componentDidMount() {
        this.setState(this.props.data);
    }
    

    render() {

        const grey = "#474442";
        const yellow = "#fbb867";
        const brightYellow = "#fdde4e";
        const orange = "#f2664a";
        const back = "	#fbb867";

        return (
            <Grommet theme={grommet} full>
                <Box
                    direction="column"
                    pad="none"
                    background={back}
                    fill
                    align="center"
                    justify="center"
                >
                 
                    {this.state.isLoggedIn ?
                        // ADD the logged in dash
                        // join game
                        // create game
                        
                        <div>show dash</div>
                    :
                        <Box width="80%" height="auto">
                            <Image src={Banner} fit="contain"/>
                        </Box>
                    }

                </Box>
            </Grommet>
        );
    }
    
}

export default Dashboard;