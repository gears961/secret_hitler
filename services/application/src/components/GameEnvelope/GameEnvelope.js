import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import "./GameEnvelope.css";

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
        focus: "none"
      }
    }
});

class GameEnvelope extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            reveal: 0,
            envWidth: 80,
            role:null,
            member: null,
            fascist: false,
            id: Date.now()
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

        const envWidth = this.state.envWidth * 0.98;
        const M = {w: 1174, h:1660}
        const R = {w: 738, h:1080}
        const E = {w: 637, h:1080}

        const offsetR = ((envWidth / R.w) * R.h) - (this.state.reveal * 1.5);
        const offsetM = ((envWidth / M.w) * M.h) - this.state.reveal;
        const offsetE = (((envWidth / M.w) * M.h) + (envWidth * 0.15))  - (this.state.reveal * 1.5);

        const role = this.props.data.role;
        const member = this.props.data.member;
        const memberColour = this.props.data.fascist ? orange : blue;
        const roleText = !this.props.data.fascist ? "LIBERAL" : this.props.data.hitler ? "HITELER" : "FASCIST";
        const memberText = !this.props.data.fascist ? "LIBERAL" : "FASCIST";

        return (
            <Grommet theme={customFocus} background="none">
                <Box
                    width={(envWidth * 1.2) + "px"}
                    onClick={() => this.reveal()}
                    direction="column"
                    align="start"
                    justify="center"
                >
                    <Box 
                        width={(envWidth * R.w) + "px"} 
                        height={offsetR + "px"}
                        pad={(envWidth * 0.02) + "px" }
                        round={(envWidth * (1/30)) + "px" }
                        background={offWhite}
                        direction="row"
                        align="center"
                        justify="start"
                        className="game-card-border"
                        data-tip data-for={'role' + this.state.id}
                        border="all"
                    >
                        <Image src={role} width="100%"/>
                        <ReactTooltip id={'role' + this.state.id} type='info' backgroundColor={memberColour}>
                            <span>{roleText}</span>
                        </ReactTooltip>
                    </Box>
                    <Box 
                        width={(envWidth * M.w) + "px"} 
                        height={offsetR + "px"}
                        background={offWhite}
                        direction="row"
                        align="center"
                        justify="start"
                        className="game-card"
                        margin={{"top":(-1 * offsetM) + "px"}}
                        data-tip data-for={'member' + this.state.id}
                        border="all"
                    >
                        <Image src={member} width="100%" />
                        <ReactTooltip id={'member' + this.state.id} type='info' backgroundColor={memberColour}>
                            <span>{memberText}</span>
                        </ReactTooltip>
                    </Box>
                    <Box 
                        width={((this.state.envWidth * E.w) + (this.state.envWidth / 2)) + "px"} 
                        height={offsetR + "px"}
                        background={offWhite}
                        direction="row"
                        align="center"
                        justify="center"
                        className="game-card"
                        margin={{"top":(-1 * offsetE) + "px"}}
                    >
                        <Image src={Envelope} width="100%" />
                    </Box>
                </Box>
            </Grommet>
             
        );
    }
    
}

export default GameEnvelope;