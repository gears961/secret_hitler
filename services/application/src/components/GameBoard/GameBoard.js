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


import {
    BoardLiberal,
    BoardFascist,
    CardLibWin,
    CardFasWin
} from 'GameAssets';

import {GameCard} from 'Components';

const customFocus = deepMerge(grommet, {
    global: {
      colors: {
        focus: "none"
      }
    }
});

class GameBoard extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            gameCards: [],
            width:0
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


    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            var w = document.getElementById('gameboards').clientWidth;
            this.setState(this.props.data);
            this.setState({width: w});

            var cards = [];

            if (this.props.data.fascist) {
                var icon1 = null;
                var icon2 = null;
                var icon3 = null;
                var icon4 = null;
                var icon5 = null;
                var icon6 = CardFasWin;

                cards = [
                    {
                        id:"fas",
                        fascist:true,
                        ability:null,
                        factor:6,
                        width:w,
                        special:false,
                        icon:icon1,
                        msg:[]
                    },
                    {
                        id:"fas",
                        fascist:true,
                        ability:null,
                        factor:6,
                        width:w,
                        special:false,
                        icon:icon2,
                        msg:[]
                    },
                    {
                        id:"fas",
                        fascist:true,
                        ability:null,
                        factor:6,
                        width:w,
                        special:false,
                        icon:icon3,
                        msg:[]
                    },
                    {
                        id:"fas",
                        fascist:true,
                        ability:null,
                        factor:6,
                        width:w,
                        special:true,
                        icon:icon4,
                        msg:[]
                    },
                    {
                        id:"fas",
                        fascist:true,
                        ability:null,
                        factor:6,
                        width:w,
                        special:true,
                        icon:icon5,
                        msg:[]
                    },
                    {
                        id:"fas",
                        fascist:true,
                        ability:null,
                        factor:6,
                        width:w,
                        special:true,
                        icon:icon6,
                        msg:[]
                    }
                ];
            }
            else {

                cards = [
                    {
                        id:"lib",
                        fascist:false,
                        ability:null,
                        factor:5,
                        width:w,
                        special:false,
                        icon:null,
                        msg:[]
                    },
                    {
                        id:"lib",
                        fascist:false,
                        ability:null,
                        factor:5,
                        width:w,
                        special:false,
                        icon:null,
                        msg:[]
                    },
                    {
                        id:"lib",
                        fascist:false,
                        ability:null,
                        factor:5,
                        width:w,
                        special:false,
                        icon:null,
                        msg:[]
                    },
                    {
                        id:"lib",
                        fascist:false,
                        ability:null,
                        factor:5,
                        width:w,
                        special:false,
                        icon:null,
                        msg:[]
                    },
                    {
                        id:"lib",
                        fascist:false,
                        ability:null,
                        factor:5,
                        width:w,
                        special:true,
                        icon:CardLibWin,
                        msg:["LIBERALS WIN THE GAME"]
                    }
                ];
            }
            this.setState({gameCards:cards});
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

        const width = this.state.width*0.97;
        const height = width * 0.3135;

        console.log(this.state);
        return (
            <Grommet theme={customFocus}>
                <Box 
                    width={width+"px"} 
                    height={height + "px"} 
                    style={{
                        backgroundImage: `url(${this.props.data.fascist ? BoardFascist : BoardLiberal})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    direction="column"
                    align="center"
                    justify="end"
                    pad="medium"
                    gap="xsmall"
                >
                    <Box
                        width="100%"
                        direction="row"
                        align="end"
                        justify="center"
                        gap="xsmall"                    
                    >
                        {this.state.gameCards.map((item, i) => (
                            
                            <GameCard id={"card" + item.id + i} data={item} />
                        ))}
                    </Box>
                    <Text size="small" color={this.props.data.fascist ? orange : blue} > SOME TEXT</Text>

                </Box>
            </Grommet>
             
        );
    }
    
}

export default GameBoard;