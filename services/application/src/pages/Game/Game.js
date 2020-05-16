import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import queryString from 'query-string'

import "./Game.css";

import { Grommet, Box, Text, Button, Layer, Image} from 'grommet';
import { grommet } from "grommet/themes";

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

class Game extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            reveal: 0
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
            this.setState({reveal: 300});
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
        const back = "	#fbb867";
        const offWhite = "#f7e1c3";
        const blue = "#6d97b9";

        const envWidth = 300;
        const MF = {w: 1174, h:1660}
        const RH = {w: 738, h:1080}

        const offsetRH = ((envWidth / RH.w) * RH.h) - (this.state.reveal * 1.5);
        const offsetMF = ((envWidth / MF.w) * MF.h) - this.state.reveal;

        return (
            <Grommet>
                <Box  
                    width="100vw" 
                    min-height="100vh" 
                    direction="row" 
                    align="center" 
                    justify="center" 
                    margin={{"top":"100px", "bottom":"100px"}}
                    onClick={() => this.reveal()}
                >

                    <Box
                        width={envWidth + "px"}
                    >
                        <Box 
                            width={(envWidth * RH.w) + "px"} 
                            height={offsetRH + "px"}
                            pad="15px" 
                            round="10px" 
                            background={offWhite}
                            direction="row"
                            align="center"
                            justify="center"
                            className="game-card-border"
                        >
                            <Image src={RoleHitler} width="100%"/>
                        </Box>
                        <Image className="game-card" src={MemberFascist} width="100%" margin={{"top":(-1 * offsetMF) + "px"}}/>
                        <Image src={Envelope} width="101%" margin={{"top":(-1 * (offsetRH + 60)) + "px"}}/>

                    </Box>
                   
                </Box>
            </Grommet>
        );
    }
    
}

export default withRouter(Game);