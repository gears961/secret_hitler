import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import "./GameBoard.css";

import { 
    grommet, 
    Grommet, 
    Text, 
    Box, 
    Button, 
    Avatar, 
    Image
} from 'grommet';

import { StatusInfoSmall } from "grommet-icons";
import { deepMerge } from 'grommet/utils';
import ReactTooltip from "react-tooltip";

import {GameEnvelope} from 'Components';


import {
    Envelope,
    VoteJa,
    VoteNein,
    MemberFascist,
    MemberLiberal,
    PolicyFascist,
    PolicyLiberal,
    RoleFascist,
    RoleHitler,
    RoleLiberal
} from 'GameAssets';

const customFocus = deepMerge(grommet, {
    global: {
      colors: {
        focus: "#fbb867"
      }
    }
});

class GameBoard extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            reveal: 0,
            envWidth: 80,
            role:null,
            member: null,
            fascist: false
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

    
    reveal = (event) => {
        if (this.state.reveal > 0) {
            this.setState({reveal: 0});
        }
        else {
            this.setState({reveal: this.state.envWidth});
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState(this.props.data);
        }
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

        const envWidth = this.state.envWidth;
        const M = {w: 1174, h:1660}
        const R = {w: 738, h:1080}
        const E = {w: 637, h:1080}

        const offsetR = ((envWidth / R.w) * R.h) - (this.state.reveal * 1.5);
        const offsetM = ((envWidth / M.w) * M.h) - this.state.reveal;

        return (
            <Grommet theme={customFocus} background="none">
                <Box direction="row" gap="large">
                    <GameEnvelope data={{envWidth:100, role:RoleHitler, member:MemberFascist, fascist:true}}/>
                    <GameEnvelope data={{envWidth:100, role:RoleLiberal, member:MemberLiberal, fascist:false}}/>
                </Box>
                
            </Grommet>
             
        );
    }
    
}

export default GameBoard;