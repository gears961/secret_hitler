import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import "./GameDash.css";

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

import {GameEnvelope, GameBoard} from 'Components';


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

class GameDash extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            reveal: 0,
            envWidth: 80,
            role:null, 
            member:null, 
            fascist:false,
            hitler:false
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
            
            // test Data
            this.setState({
                role:RoleHitler, 
                member:MemberFascist, 
                fascist:true,
                hitler:true
            });
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

        return (
            <Grommet 
                theme={customFocus} 
                background="none" 
                full 
            >
                <Box
                    width="100%"
                    height="100%"
                    direction="row"
                    align="center"
                    justify="evenly"
                    pad="small"
                >
                    <Box
                        width="12%"
                        height="100%"
                        direction="column"
                        align="center"
                        justify="between"
                        background={grey}
                        round="xsmall"
                        pad="small"
                    >
                        <Box
                            width="100%"
                            height="70%"
                            direction="column"
                            align="center"
                            justify="start"
                            pad="10px"
                            overflow="auto"
                        >
                            <Text color={offWhite} style={{"textAlign": "center"}}>Party Membership &amp; Secret Role</Text>
                            <Box height="60px"/>
                            <GameEnvelope 
                                data={{
                                    envWidth:90, 
                                    role:this.state.role, 
                                    member:this.state.member, 
                                    fascist:this.state.fascist,
                                    hitler:this.state.hitler
                                }}
                            />
                        </Box>
                        <Box height="28%" width="100%" background={offWhite} pad="small" round="xsmall">
                            Other INFO

                            Other fascists
                        </Box>
                    </Box>
                    <Box
                        width="64%"
                        height="100%"
                        direction="column"
                        align="center"
                        justify="between"
                        background={grey}
                        round="xsmall"
                        pad="medium"
                        gap="small"
                    >
                        <Box 
                            width="60%" 
                            height="50px" 
                            background={orange}
                            align="center"
                            justify="center"
                        >
                            Game Info
                        </Box>
                        <Box
                            width="95%"
                            direction="column"
                            align="center"
                            justify="center"
                            gap="small"
                            id="gameboards"
                        >
                            <GameBoard 
                                width="95%"
                                data={{
                                    fascist:false,
                                    playersNum: this.props.data.players.length,
                                }}
                            />
                            <GameBoard 
                                width="95%"
                                data={{
                                    fascist:true,
                                    playersNum: this.props.data.players.length,
                                }}
                            />
                            
                        </Box>
                        
                    </Box>
                    <Box
                        width="22%"
                        height="100%"
                        direction="column"
                        align="center"
                        justify="between"
                        background={grey}
                        round="xsmall"
                    >
                        INFO
                    </Box>
                </Box>

                
            </Grommet>
             
        );
    }
    
}

export default GameDash;