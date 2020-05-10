import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import { grommet, Grommet, Anchor, Box, Button, Header, Nav, Image, Avatar } from 'grommet';

import { Login, Notes, Logout, Organization, User } from "grommet-icons";
import "./Home.css";

import {Dashboard} from 'Pages';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
    }

    componentDidMount() {
        this.setState(this.props.data);
    }

    render() {

        const customTheme = {
            global: {
              colors: {
                custom: "#cc6633"
              }
            }
        };

        const anchorColour = "#f2664a";
        const anchorColourAlt = "#fde0bc";
        const grey = "#474442";
        const yellow = "#fbb867"

        return (
            <Grommet theme={customTheme}>

                <Box
                    direction="column"
                    pad="none"
                    width="100vw"
                    height="100vh"
                    round="small"
                >
                    {/* <Box pad="small" width="100%" height="40%" />
                    <Box 
                        direction="column" 
                        justify="evenly" 
                        align="center"
                        pad="large"  
                        width="100%" 
                        height="40%"
                        gap="large"
                    > 
                        <Box pad="small" width="85%" height="25%"> 
                            <Link to="/register" style={{width: '100%', height: '100%'}}>
                                <Button
                                    primary
                                    icon={<Notes />}
                                    label="Register"
                                    onClick={()=>{}}
                                    fill
                                    color="accent-1"
                                />
                            </Link>
                        </Box>

                        <Box pad="small" width="85%" height="25%"> 
                            <Link to="/login" style={{width: '100%', height: '100%'}}>
                                <Button
                                    primary
                                    icon={<Notes />}
                                    label="Login"
                                    onClick={()=>{}}
                                    fill
                                    color="#00de90"
                                />
                            </Link>
                        </Box>
                    </Box> */}

                    <Box width="100%" direction="row" align="center" justify="between" background={grey} pad="small">
                        
                        <Box direction="row" align="center" gap="small">
                            {this.state.isLoggedIn && 
                                <Avatar background={anchorColourAlt}>
                                    <User color="dark-1" />
                                </Avatar>
                            }
                            {!this.state.isLoggedIn && 
                                <Anchor color={anchorColourAlt}>
                                    {this.props.data.playerTag}
                                </Anchor>
                            }
                            {this.state.isLoggedIn && 
                                <Link to="/profile" style={{ textDecoration: 'none' }}>
                                    <Anchor color={anchorColourAlt}>
                                        {this.props.data.playerTag}
                                    </Anchor>
                                </Link>
                            }
                        </Box>
                        <Nav direction="row">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Box direction="row" align="center">
                                    <Organization color={anchorColourAlt} size='20px' />
                                    <Anchor label="Home" key="Home" color={anchorColour} margin="xsmall"/>
                                </Box>
                            </Link>
                            {!this.state.isLoggedIn && 
                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                    <Box direction="row" align="center">
                                        <Notes color={anchorColourAlt} size='20px' />
                                        <Anchor label="Register" key="Register" color={anchorColour}  margin="xsmall"/>
                                    </Box>
                                </Link>
                            }
                            
                            {!this.state.isLoggedIn && 
                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                    <Box direction="row" align="center">
                                        <Login color={anchorColourAlt} size='20px' />
                                        <Anchor label="Login" key="Login" color={anchorColour}  margin="xsmall"/>
                                    </Box>
                                </Link>
                            }

                            {this.state.isLoggedIn && 
                                <Link to="/logout" style={{ textDecoration: 'none' }}>
                                    <Box direction="row" align="center">
                                        <Logout color={anchorColourAlt} size='20px' />
                                        <Anchor label="Logout" key="Logout" color={anchorColour}  margin="xsmall"/>
                                    </Box>
                                </Link>
                            }
                        </Nav>
                    </Box>
                </Box>
            
                
            </Grommet>
        );
    }
    
}

export default withRouter(Home);