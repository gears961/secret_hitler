import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Heading, Grommet } from 'grommet';
import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
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

    componentDidMount() {
        
    }

    render() {
        
        return (
            <Grommet>
                <Heading level={1}> SECRET HITLER !!!!!!!!!!! Testing content</Heading>
                <Box border={{ color: 'brand', size: 'large' }} pad='xlarge' >Grommet Box</Box>
            </Grommet>
        );
      }
    
}

export default withRouter(Home);