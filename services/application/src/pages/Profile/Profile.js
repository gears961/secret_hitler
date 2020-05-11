import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import queryString from 'query-string'

import "./Profile.css";

import {
    Grommet,
    Box, 
    Text, 
    Button, 
    Form,
    FormField,
    MaskedInput,
    TextInput,
    Layer

} from 'grommet';
import { grommet } from "grommet/themes";

import { 
    Login, 
    Organization, 
    User, 
    CloudUpload, 
    MailOption, 
    Hide, 
    View, 
    Add, 
    FormClose, 
    StatusGood, 
    Tag, 
    Alert
} from "grommet-icons";
import { AiFillEdit } from "react-icons/ai";

class Profile extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {
            playerTag:null,
            password:null,
            password2:null,
            reveal: false,
            message: null,
            canEdit:false,
            edit:false,
            error:'',
            data: {}
        };
        
    }

    handleInputChange = (value) => {

        if (Object.keys(value).length ==  0) {
            this.setState({
                playerTag:null,
                password:null,
                password2:null,
                reveal: false,
                message: null,
                error:''
            });
        }
        else {
            for ( var property in value ) {
                this.setState({[property]: value[property]});
            }
        }
        this.setState({
            error:''
        });
    }

    setReveal = (val) => {
        this.setState({reveal: val});
    }

    setInvalid = (val) => {
        console.log(val);
        this.setState({invalid: val});
    }

    setWorking = (working) => {
        this.setState({working:working});
    }

    setEdit = (edit) => {
        this.setState({edit: edit, error:''});
    }

    saveData = () => {
        
        console.log(this.state);
        this.setState({
            error:''
        });

        if (this.state.password != this.state.password2) {
            this.setState({message: "Password does not match."});
        }
        else {  

            this.setState({edit: false});
            console.log(this.state);
        }
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
            const values = queryString.parse(this.props.location.search)
            var user = values.user ;

            if (!user) {
                user = this.props.data.playerTag;
                this.setState({canEdit: true});
            }

            if (user) {
                fetch('/api/users/' + user, {
                    headers: {
                        'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    if (data) {
                        if ('error' in data) {
                            if (this._isMounted) {
                                this.setState({error: data.msg});
                            }
                        }
                        else {
                            if (this._isMounted) {
                                this.setState({
                                    data: data
                                });
                            }
                        }
                    }
                }) 
                .catch(err => {
                    console.error(err);
                });
            }
        }
    }
    

    render() {
        var value = this.state;
        const onOpen = () => this.setInvalid(true);

        const onClose = () => this.setInvalid(undefined);

        const grey = "#474442";
        const offWhite = "#fde0bc";
        const orange = "#f2664a";
        const grey2 = "#a89e9b";
        const yellow = "#fbb867";
        const brightYellow = "#fdde4e";
        const back = "	#fbb867";
        const blue = "#6d97b9";

        return (
            <Box  
                width="100vw"
                height="100vh"
                direction="row" 
                align="center" 
                justify="center" 
                pad="large"
            >
                <Box 
                    direction="column"
                    pad="none"
                    width="85%"
                    height="95%"
                    overflow="auto"
                    round="xsmall"
                    direction="column"
                    align="center"
                    justify="start"
                    background={offWhite}
                >
                    <Box 
                        width="100%" 
                        background={grey} 
                        pad="large"
                        direction="row"
                        align="center"
                        justify="between"
                    > 
                        <Text color={offWhite} size="xxlarge">
                            <User color={offWhite} /> {this.props.data.playerTag}
                        </Text>
                        <Box direction="row" gap="small">
                            <Button icon={<Organization />} primary label="Home" color={orange} onClick={() => this.props.history.push("/")}/>
                            {(this.state.canEdit && this.state.edit) ? 
                                <Button icon={<CloudUpload />} primary label="Save" color={blue} onClick={() => this.saveData()}/>
                            :
                                <Button icon={<AiFillEdit />} primary label="Edit" color={orange} onClick={() => this.setEdit(!this.state.edit)}/>
                            }

                            {(this.state.canEdit && this.state.edit) &&
                                <Button icon={<FormClose />} primary label="Cancel" color={back} onClick={() => this.setEdit(false)}/>
                            }
                            
                        </Box>
                        
                    </Box>
                    {this.state.error != '' && 
                    <Box width="75%" background={orange} pad="small" direction="row" align="center"> 
                        <Alert color={offWhite} />
                        <Text margin="small" color={offWhite} size="medium">{this.state.error}</Text>
                    </Box>}
                    {(this.state.canEdit && this.state.edit) &&
                        <Box width="70%" height={{"min":"300px"}}>
                            <Form
                                fill
                                value={value}
                                onChange={nextValue => this.handleInputChange(nextValue)}
                                onReset={() => this.handleInputChange({})}
                                onSubmit={({ value }) => {this.submit()}}
                            >
                                <FormField name="password" label="New Password">
                                    <Box
                                        direction="row"
                                        align="center"
                                        round="small"
                                    >
                                        <TextInput
                                            plain
                                            type={this.state.reveal ? "text" : "password"}
                                            name="password"
                                        />
                                        <Button
                                            icon={this.state.reveal ? <View size="medium" /> : <Hide size="medium" />}
                                            onClick={() => this.setReveal(!this.state.reveal)}
                                        />
                                    </Box>
                                </FormField>
                                <FormField name="password2" label="Confirm Password">
                                    <Box
                                        direction="row"
                                        align="center"
                                        round="small"
                                    >
                                        <TextInput
                                            plain
                                            type={this.state.reveal ? "text" : "password"}
                                            name="password2"
                                        />
                                        <Button
                                            icon={this.state.reveal ? <View size="medium" /> : <Hide size="medium" />}
                                            onClick={() => this.setReveal(!this.state.reveal)}
                                        />
                                    </Box>
                                </FormField>
                                {this.state.message && (
                                    <Box pad={{ horizontal: "small" }}>
                                        <Text color="status-error">{this.state.message}</Text>
                                    </Box>
                                )}

                                <FormField name="playerTag" label="Player Tag">
                                    <TextInput icon={<Tag />} placeholder='bobby21' name="playerTag" />
                                </FormField>
                            </Form>
                        </Box>
                    }

                    <Box 
                        width="100%" 
                        height={{"min":"200px"}} margin="small" background={grey2}>
                        hello 2
                    </Box>       
                    
                </Box>
            </Box>
        );
    }
    
}

export default withRouter(Profile);