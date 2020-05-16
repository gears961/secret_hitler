import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import "./Lobby.css";

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

import { Search, Menu, Logout, Add, Close, Analytics, Chat, Clock, Configure, Help, Projects, StatusInfoSmall } from "grommet-icons";

import { RiSearchEyeLine } from "react-icons/ri";
import { AiFillCrown, AiFillEye } from "react-icons/ai";
import { GiDeathSkull } from "react-icons/gi";


import {Banner, BannerAlt, LicensePic} from 'Media';

class Lobby extends Component {
    

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

        

        return (
            <Text>GAME!</Text>
        );
    }
    
}

export default Lobby;