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
    Layer,
    Meter,
    ResponsiveContext

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
import { AiFillEdit,  } from "react-icons/ai";
import { RiGamepadLine } from "react-icons/ri";
import { IoMdTrophy } from "react-icons/io";
import { GiLibertyWing, GiMinigun } from "react-icons/gi";
import { FaSkull } from "react-icons/fa";

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
            data: {
                playerTag: '',
                numberOfGames: 0,
                numberOfWins: 0,
                liberals: 0,
                facists: 0,
                hitler: 0
            }
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
            fetch('/api/users/update', {
                method: 'POST',
                body: JSON.stringify({
                    playerTag:this.state.playerTag,
                    password:this.state.password
                }),
                headers: {
                    'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                if ('error' in data) {
                    this.setState({error: data.msg});
                }
                else {
                    this.setState({edit: false, playerTag:data.playerTag});
                    console.log(this.state);
                    this.props.data.setPlayerTag(data.playerTag);
                }
            }) 
            .catch(err => {
                alert('Error logging in please try again');
            });
            
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
                                    data: data.data,
                                    playerTag: this.props.data.playerTag
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

        console.log(this.state);
        
        const stats = 
            <Box width="100%" height="100%" direction="column">
                <Box 
                    width="100%"
                    direction="row"
                    align="center"
                    justify="between"
                >
                    <Box direction="row" align="center" gap="medium">
                        <RiGamepadLine color={grey} size="20px"/>
                        <Text color={grey} size="large">
                            Total number of games
                        </Text>
                    </Box>
                    <Box direction="row" align="center" justify="end" gap="medium">
                        <Text color={grey} size="large">
                            {this.state.data.numberOfGames}                                    
                        </Text>
                    </Box>
                </Box>
                <Box 
                    width="100%"
                    direction="row"
                    align="center"
                    justify="between"
                >
                    <Box direction="row" align="center" gap="medium">
                        <IoMdTrophy color={grey} size="20px"/>
                        <Text color={grey} size="large">
                            Total number of Wins
                        </Text>
                    </Box>
                    <Box direction="row" align="center" justify="end" gap="medium">
                        <Text color={grey} size="large">
                            {this.state.data.numberOfWins}
                        </Text>
                    </Box>
                </Box>
                <Box 
                    width="100%"
                    direction="row"
                    align="center"
                    justify="between"
                >
                    <Box direction="row" align="center" gap="medium">
                        <GiLibertyWing color={blue} size="20px"/>
                        <Text color={blue} size="large">
                            Total number of liberal wins
                        </Text>
                    </Box>
                    <Box direction="row" align="center" justify="end" gap="medium">
                        <Text color={blue} size="large">
                            {this.state.data.liberals}
                        </Text>
                    </Box>
                </Box>
                <Box 
                    width="100%"
                    direction="row"
                    align="center"
                    justify="between"
                >
                    <Box direction="row" align="center" gap="medium">
                        <GiMinigun color={orange} size="20px"/>
                        <Text color={orange} size="large">
                            Total number of fascist wins
                        </Text>
                    </Box>
                    <Box direction="row" align="center" justify="end" gap="medium">
                        <Text color={orange} size="large">
                            {this.state.data.facists}
                        </Text>
                    </Box>
                </Box>
                <Box 
                    width="100%"
                    direction="row"
                    align="center"
                    justify="between"
                >
                    <Box direction="row" align="center" gap="medium">
                        <FaSkull color={orange} size="20px"/>
                        <Text color={orange} size="large">
                            Total number of hitler wins
                        </Text>
                    </Box>
                    <Box direction="row" align="center" justify="end" gap="medium">
                        <Text color={orange} size="large">
                            {this.state.data.hitler}                                    
                        </Text>
                    </Box>
                </Box>
            </Box>
        ;

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
                        height={{"min":"200px"}} 
                        margin="small" 
                        gap="small"
                        direction="row"
                        align="start"
                        justify="evenly"
                        pad="large"
                    >
                        <ResponsiveContext.Consumer>
                            {responsive =>
                                responsive === "small" ? (
                                    <Box 
                                        width="100%"
                                        direction="column"
                                        align="center"
                                        justify="start"
                                        pad="medium"
                                        gap="small"
                                        border = {{
                                            "color": "border",
                                            "size": "medium",
                                            "side": "all"
                                        }}
                                        round="10px"
                                    >
                                        {stats}
                                    </Box>
                                ) : (
                                    <Box 
                                        width="35%"
                                        direction="column"
                                        align="center"
                                        justify="start"
                                        pad="medium"
                                        gap="small"
                                        border = {{
                                            "color": "border",
                                            "size": "medium",
                                            "side": "all"
                                        }}
                                        round="10px"
                                    >
                                        {stats}
                                    </Box>
                                )
                            }
                        </ResponsiveContext.Consumer>
                        
                    </Box>       
                    
                </Box>
            </Box>
        );
    }
    
}

export default withRouter(Profile);