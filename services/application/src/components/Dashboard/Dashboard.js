import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import "./Dashboard.css";

import { grommet, Grommet, Anchor, Box, Button, Nav, Sidebar, Avatar} from 'grommet';
import { Login, Menu, Logout, Add, Close, Analytics, Chat, Clock, Configure, Help, Projects, StatusInfoSmall } from "grommet-icons";

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
        
        
    }
    

    render() {

        return (
            <Grommet theme={grommet}>
                <Box
                    direction="column"
                    pad="none"
                    width="100vw"
                    height="100vh"
                    round="xxsmall"
                >
                    <Box pad="none" direction="row"  width="100%" height="100%"> 
                        {this.state.open && (
                            <Layer
                            onEsc={() => this.setOpen(false)}
                            onClickOutside={() => this.setOpen(false)}
                            >
                                <Box width="150px" height="100%" background={{color:"accent-1"}}>
                                    hello
                                </Box>
                            </Layer>
                            
                        )}
                        <Box align="center" direction="row" width="50px" height="50px">
                            
                            <Button
                                icon={<Menu />}
                                align="center"
                                onClick={() => {this.setOpen(!this.state.open)}}
                                fill
                                color="#00de90"
                            />
                            
                        </Box>
                        
                    </Box>
                </Box>
            </Grommet>
        );
    }
    
}

export default withRouter(Dashboard);