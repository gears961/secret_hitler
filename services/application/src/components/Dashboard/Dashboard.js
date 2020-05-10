import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import "./Dashboard.css";

import { 
    grommet, 
    Grommet, 
    Text, 
    Box, 
    Button, 
    Avatar, 
    Image, 
    ResponsiveContext, 
    Anchor, 
    Paragraph,
    Heading, 
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHeader 
} from 'grommet';

import { Login, Menu, Logout, Add, Close, Analytics, Chat, Clock, Configure, Help, Projects, StatusInfoSmall } from "grommet-icons";

import {Banner, BannerAlt} from 'Media';

import {Rules} from 'Components';

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
        const grey2 = "#a89e9b";
        const yellow = "#fbb867";
        const brightYellow = "#fdde4e";
        const orange = "#f2664a";
        const back = "	#fbb867";
        const offWhite = "#fde0bc";
        const blue = "#6d97b9";

        const Liberals = <Text color={blue}>Liberals</Text>;
        const Liberal = <Text color={blue}>Liberal</Text>;
        const Fascists = <Text color={orange}>Fascists</Text>;
        const Fascist = <Text color={orange}>Fascist</Text>;
        const Hitler = <Text color={orange}>Hitler</Text>;

        const rs =
            <Rules />
        ;
        const ls =
            <Box fill background={grey} round="xsmall" overflow="auto">

            </Box>
        ;

        return (
            <Grommet theme={grommet} full background={back}>
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
                        <ResponsiveContext.Consumer>
                            {responsive =>
                                responsive === "small" ? (
                                    <Box
                                        margin="small" 
                                        width="98%" 
                                        height={{"min":"96.5%"}} 
                                        direction="column" 
                                        gap="small"
                                    >
                                        <Box width="100%" height={{"min":"80%"}}>
                                            {ls}
                                        </Box>
                                        <Box width="100%"  height={{"min":"80%"}}>
                                            {rs}
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box 
                                        margin="small" 
                                        width="98%" 
                                        height="96.5%" 
                                        direction="row" 
                                        align="center"
                                        justify="between"
                                    >
                                        <Box width="65%" height="100%">
                                            {rs}
                                        </Box>
                                        <Box width="34%" height="100%">
                                            {ls}
                                        </Box>
                                    </Box>
                                )
                            }
                        </ResponsiveContext.Consumer>
                        
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