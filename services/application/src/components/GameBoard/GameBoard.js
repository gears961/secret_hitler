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
    BoardFascist
} from 'GameAssets';

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
            this.setState(this.props.data);
            this.setState({width: document.getElementById('gameboards').clientWidth});
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
                >

                </Box>
            </Grommet>
             
        );
    }
    
}

export default GameBoard;