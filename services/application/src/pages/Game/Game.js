import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import queryString from 'query-string'

import "./Game.css";

import { Grommet, Box, Text, Button, Layer, Image} from 'grommet';

import ReactTooltip from "react-tooltip";

import { grommet } from "grommet/themes";
import { deepMerge } from 'grommet/utils';

import { Login} from "grommet-icons";

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

class Game extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            reveal: 0,
            envWidth: 80
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

        }
    }


    render() {

        const grey = "#474442";
        const grey2 = "#a89e9b";
        const yellow = "#fbb867";
        const brightYellow = "#fdde4e";
        const orange = "#f2664a";
        const back = "#fbb867";
        const offWhite = "#f7e1c3";
        const blue = "#6d97b9";


        const envWidth = this.state.envWidth;
        const M = {w: 1174, h:1660}
        const R = {w: 738, h:1080}
        const E = {w: 637, h:1080}

        const offsetR = ((envWidth / R.w) * R.h) - (this.state.reveal * 1.5);
        const offsetM = ((envWidth / M.w) * M.h) - this.state.reveal;

        return (
            <Grommet theme={customFocus} background="none">
                <Box  
                    width="100vw" 
                    min-height="100vh" 
                    direction="row" 
                    align="center" 
                    justify="center" 
                    margin={{"top":"100px", "bottom":"100px"}}
                >

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
                            data-tip data-for='role'
                        >
                            <Image src={RoleLiberal} width="100%"/>
                            <ReactTooltip id='role' type='info' backgroundColor={blue}>
                                <span>LIBERAL</span>
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
                            data-tip data-for='member'
                        >
                            <Image src={MemberLiberal} width="100%" />
                            <ReactTooltip id='member' type='info' backgroundColor={blue}>
                                <span>LIBERAL</span>
                            </ReactTooltip>
                        </Box>
                        <Box 
                            width={((envWidth * E.w) + (envWidth / 2)) + "px"} 
                            height={offsetR + "px"}
                            background={offWhite}
                            direction="row"
                            align="center"
                            justify="center"
                            className="game-card"
                            margin={{"top":(-1 * (offsetR + (envWidth * 0.15))) + "px"}}
                        >
                            <Image src={Envelope} width="100%" />
                        </Box>
                        
                        

                    </Box>
                   
                </Box>
            </Grommet>
        );
    }
    
}

export default withRouter(Game);