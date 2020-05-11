import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import "./Rules.css";

import { 
    grommet, 
    Grommet, 
    Text, 
    Box, 
    Button, 
    Avatar, 
    Image, 
    ResponsiveContext, 
    Anchor, 
    Paragraph,
    Heading, 
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHeader 
} from 'grommet';

import { Search, Menu, Logout, Add, Close, Analytics, Chat, Clock, Configure, Help, Projects, StatusInfoSmall } from "grommet-icons";

import { RiSearchEyeLine } from "react-icons/ri";
import { AiFillCrown, AiFillEye } from "react-icons/ai";
import { GiDeathSkull } from "react-icons/gi";


import {Banner, BannerAlt, LicensePic} from 'Media';

class Rules extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            open: false
        };
        
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    setOpen = (val) => {
        console.log(val);
        this.setState({open: val});
    }

    onSubmit = (event) => {
        event.preventDefault();
    }

    componentDidMount() {
        this.setState(this.props.data);
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

        const Liberals = <Text color={blue}>Liberals</Text>;
        const Liberal = <Text color={blue}>Liberal</Text>;
        const Fascists = <Text color={orange}>Fascists</Text>;
        const Fascist = <Text color={orange}>Fascist</Text>;
        const Hitler = <Text color={orange}>Hitler</Text>;

        const rs =
            <Box 
                fill 
                background={grey} 
                round="xsmall"
                direction="column"
                gap="xsmall"
                justify="start"
                align="center"
                overflow="auto"
                pad={{"bottom":"30px"}}
            >
                <Box width="100%" height={{"min":"250px"}} background={orange} >
                    <Image src={BannerAlt} fit="contain"/>
                </Box>
                <Box width="90%" pad="medium" direction="column" gap="xxsmall" margin={{"bottom":"30px"}}>

                    <Heading  size="60px" color={offWhite}>RULES ...</Heading>
                    <Paragraph fill size="medium" color={offWhite}>
                        The year is 1932. The place is pre -WWII Germany. In Secret Hitler , players are German politicians attempting to hold a fragile Liberal government together and stem the rising tide of Fascism. Watch out though—there are secret Fascists among you, and one player is Secret Hitler.
                    </Paragraph>

                    <Text 
                        size="30px" 
                        color={offWhite} 
                        style={{"paddingBottom":"2px", "borderBottom": "2px solid " + offWhite}}
                    >
                        OVERVIEW
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        At the beginning of the game, each player is secretly assigned to one of three roles: {Liberal} , {Fascist} , or  {Hitler}. The {Liberals} have a majority, but they don’t know for sure who anyone is; {Fascists} must resort to secrecy and sabotage to accomplish their goals. {Hitler} plays for the {Fascist} team, and the {Fascists} know {Hitler}’s identity from the outset, but {Hitler} doesn’t know the {Fascists} and must work to figure them out.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        The {Liberals} win by  enacting five {Liberal} Policies  or     killing {Hitler} . The {Fascists} win by  enacting six {Fascist} Policies , or  if {Hitler} is elected Chancellor  after three {Fascist} Policies have been enacted.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        Whenever a {Fascist} Policy is enacted, the government becomes more powerful, and the President is granted a single-use power which must be used before the next round can begin. It doesn’t matter what team the President is on; in fact, even {Liberal} players might be tempted to enact a {Fascist} Policy to gain new powers.
                    </Paragraph>

                    <Text 
                        size="30px" 
                        color={offWhite} 
                        style={{"paddingBottom":"2px", "borderBottom": "2px solid " + offWhite}}
                    >
                        OBJECT
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        Every player has a secret identity as a member of either the Liberal team or the Fascist team.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        Players on the {Liberal} team win if either:
                    </Paragraph>
                    <Paragraph fill size="medium" color={blue} margin={{"left": "20px"}}>
                        Five Liberal Policies are enacted.  <Text color={offWhite}>OR</Text>  Hitler is assassinated.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        Players on the {Fascist} team win if either:
                    </Paragraph>
                    <Paragraph fill size="medium" color={orange} margin={{"left": "20px"}}>
                        Six Fascist Policies are enacted.  <Text color={offWhite}>OR</Text>  Hitler is elected Chancellor any time  after the third Fascist Policy has been enacted.
                    </Paragraph>

                    <Text 
                        size="30px" 
                        color={offWhite} 
                        style={{"paddingBottom":"2px", "borderBottom": "2px solid " + offWhite}}
                    >
                        GAME CONTENT
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        6   &nbsp;&nbsp;&nbsp;  . . . . . . . &nbsp;&nbsp;&nbsp;  {Liberal} policy tiles
                    </Paragraph>
                    
                    <Paragraph fill size="medium" color={offWhite}>
                        11  &nbsp;&nbsp;&nbsp;  . . . . . . . &nbsp;&nbsp;&nbsp;  {Fascist} policy tiles
                    </Paragraph>

                    <Text 
                        size="30px" 
                        color={offWhite} 
                        style={{"paddingBottom":"2px", "borderBottom": "2px solid " + offWhite}}
                    >
                        GAMEPLAY
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        Secret Hitler is played in rounds. Each round has an <Text color={back}>Election</Text> to form a government, a <Text color={back}>Legislative Session</Text> to enact a new Policy, and an <Text color={back}>Executive Action</Text> to exercise governmental power.
                    </Paragraph>
                    <Text 
                        size="large" 
                        color={offWhite} 
                        style={{"textDecoration":"underline"}}
                    >
                        ELECTION
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        1. <Text color={back}>Pass the Presidential Candidacy</Text> <br/>
                        At the beginning of a new round, the Presidential candidacy moves clockwise to the next player.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        2. <Text color={back}>Nominate a Chancellor</Text> <br/>
                        The Presidential Candidate chooses a Chancellor Candidate from any other eligible player. The Presidential Candidate is free to discuss Chancellor options with the table to build consensus and make it more likely the Government gets elected.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>Eligibility:</Text> <br/>
                        Eligibility:The last elected President and Chancellor are “term-limited,” and ineligible to be nominated as Chancellor Candidate.
                    </Paragraph>
                    <Paragraph fill size="medium" color={grey2} margin={{"left": "20px"}}>
                        ON ELIGIBILITY: <br/>
                        + Term limits apply to the President and Chancellor who were last elected, not to the last pair nominated. <br />
                        + Term limits only affect nominations to the Chancellorship; anyone can be President, even someone who was just Chancellor.<br />
                        + If there are only five players left in the game,  only the last elected  Chancellor  is ineligible to be Chancellor Candidate; the last President may be nominated.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        3. <Text color={back}>Vote on the government</Text> <br/>
                        Once the Presidential Candidate has chosen an eligible Chancellor Candidate, players may discuss the proposed government until everyone is ready to vote. Every player, including the Candidates, votes on the proposed government. Once everyone is ready to vote, reveal your Ballot cards simultaneously so that everyone’s vote is public.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>If the vote is a tie, or if a majority of players votes no:</Text> <br/>
                        The vote fails. The Presidential Candidate misses this chance to be elected, and the President placard moves clockwise to the next player. The Election Tracker is advanced byone Election.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>Election Tracker: </Text> 
                        If the group rejects three governments in a row, the country is thrown into chaos. Immediately reveal the Policy on top of the Policy deck and enact it. Any power granted by this Policy is ignored, but the Election Tracker resets, and existing term-limits are forgotten.  All players  become eligible to hold the office of Chancellor for the next Election. If there are fewer than three tiles remaining in the Policy deck at this point, shuffle them with the Discard pile to create a new Policy deck. <br /><br />
                        Any time a new Policy tile is played face-up, the Election Tracker is reset, whether it was enacted by an elected government or enacted by the frustrated populace.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>If a majority of players votes yes:</Text> <br/>
                        The Presidential Candidate and Chancellor Candidate become the new President and Chancellor, respectively.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite} margin={{"left": "20px"}}>
                        <Text color={back}>If three or more Fascist Policies have been enacted already:</Text> <br/>
                        Ask if the new Chancellor is Hitler. If so, the game is over and the Fascists win. Otherwise,  other players know for sure the Chancellor is not Hitler.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        Proceed as usual to the Legislative Session.
                    </Paragraph>
                    <Text 
                        size="large" 
                        color={offWhite} 
                        style={{"textDecoration":"underline"}}
                    >
                        LEGISLATIVE SESSION
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        During the Legislative Session, the President and Chancellor work together to enact a new Policy in secret. The President draws the top three tiles from the Policy deck, looks at them in secret, and discards one tile face down into the Discard pile. The remaining two tiles go to the Chancellor, who looks in secret, discards one Policy tile face down, and enacts the remaining Policy by placing the tile face up on the corresponding track.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        Verbal and nonverbal communication between the President and Chancellor is forbidden. The President and Chancellor MAY NOT pick Policies to play at random, shuffle the tiles before discarding one, or do anything else clever to avoid secretly and intentionally selecting a Policy. Additionally, the President should hand both Policies over at the same time, rather than one at a time to gauge the Chancellor’s reaction. Attempting to telegraph the contents of your hand using randomness or any other unusual selection procedure violates the spirit of the game. Don’t do it.
                    </Paragraph>
                    <Paragraph fill size="medium" color={back}>
                        Discarded Policy tiles should never be revealed to the group. Players must rely on the word of the President and Chancellor, who are free to lie.
                    </Paragraph>
                    <Paragraph fill size="medium" color={grey2}>
                        <Text color={back}>ABOUT LYING:</Text> Often, some players learn things that the rest of the players don’t know, like when the President and Chancellor get to see Policy tiles, or when a President uses the Investigate power to see someone’s Party Membership card. You can always lie about hidden knowledge in Secret Hitler. The only time players MUST tell the truth is in game-ending, Hitler-related scenarios: a player who is Hitler must say so if assassinated or if elected Chancellor after three Fascist Policies have been enacted.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>If there are fewer than three tiles remaining in the Policy deck at the end of a Legislative Session,</Text> shuffle them with the Discard pile to create a new Policy deck. Unused Policy tiles should never  be revealed, and they should  not     be simply placed on top of the new Policy deck.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>If the government enacted a Fascist Policy that covered up a Presidential Power,</Text> the sitting President gets to use that power. Proceed to the Executive Action.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>If the government enacted a Liberal Policy or a Fascist Policy that grants no Presidential Power,</Text> begin a new round with a new Election.
                    </Paragraph>
                    <Text 
                        size="large" 
                        color={offWhite} 
                        style={{"textDecoration":"underline"}}
                    >
                        EXECUTIVE ACTION
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        If the newly-enacted Fascist Policy grants a Presidential Power, the President  must use it before the next round can begin. Before using a power, the President is free to discuss the issue with other players, but ultimately the President gets to decide how and when the power is used. Gameplay cannot continue until the President uses the power. Presidential Powers are used only once; they don’t stack or roll over to future turns.
                    </Paragraph>
                    <Text 
                        size="large" 
                        color={offWhite} 
                        style={{"textDecoration":"underline"}}
                    >
                        PRESIDENTIAL POWERS
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}><RiSearchEyeLine color={orange} /> Investigate Loyalty</Text> <br/> 
                        The President chooses a player to investigate. Investigated players should hand their Party Membership card (not Secret Role card!) to the President, who checks the player’s loyalty in secret and then returns the card to the player. The President may share (or lie about!) the results of their investigation at their discretion. No player may be investigated twice in the same game.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}><AiFillCrown color={orange} /> Call Special Election</Text> <br/> 
                        The President chooses any other player at the table to be the next Presidential Candidate. Any player can become President—even players that are term-limited. The new President nominates an eligible player as Chancellor Candidate and the Election proceeds as usual.
                    </Paragraph>
                    <Paragraph fill size="medium" color={back}>
                        A Special Election does not skip any players. After a Special Election, the President placard returns to the left of the President who enacted the Special Election.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        If the President passes the presidency to the next player in the rotation, that player would get to run for President twice in a row: once for the Special Election and once for their normal shift in the Presidential rotation.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}><AiFillEye color={orange} /> Policy Peek</Text> <br/> 
                        The President secretly looks at the top three tiles in the Policy deck.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}><GiDeathSkull color={orange} /> Execution</Text> <br/> 
                        The President executes one player at the table. If that player is Hitler, the game ends in a Liberal victory. If the executed player is  not   Hitler, the table should <Text color={back}>not</Text> learn whether a Fascist or a Liberal has been killed; players must try to work out for themselves the new table balance. Executed players are removed from the game and may not speak, vote, or runfor office.
                    </Paragraph>
                    <Text 
                        size="large" 
                        color={offWhite} 
                        style={{"textDecoration":"underline"}}
                    >
                        VETO POWER
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        The Veto Power is a special rule that comes into effect after five Fascist Policies have been enacted. For all Legislative Sessions after the fifth Fascist Policy is enacted, the Executive branch gains a permanent new ability to discard all three Policy tiles if <Text color={back}>both</Text> the Chancellor and President agree.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        The President draws three Policy tiles, discards one, and passes the remaining two to the Chancellor as usual. Then Chancellor may, instead of enacting either Policy, say “I wish to veto this agenda.” If the President consents by saying, “I agree to the veto,” both Policies are discarded and the Presidential candidate moves on as usual. If the President  does not consent, the Chancellor must enact a Policy as normal.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        Each use of the Veto Power represents an inactive government and advances the Election Tracker by one.
                    </Paragraph>

                    <Text 
                        size="30px" 
                        color={offWhite} 
                        style={{"paddingBottom":"2px", "borderBottom": "2px solid " + offWhite}}
                    >
                        CREDITS &amp; LICENSE
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        Secret Hitler was created by Mike Boxleiter, Tommy Maranges, Max Temkin, and Mac Schubert.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        This redistribution of the game was created by Janarthanan Manoharan, Kathryn Kodama, Kalindu De Costa, Mahima Bhayana, and Mohammed Faizan.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        Secret Hitler is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. <br />
                        <Image src={LicensePic} />
                    </Paragraph>
                    <Text 
                        size="large" 
                        color={offWhite} 
                        style={{"textDecoration":"underline"}}
                    >
                        YOU ARE FREE TO:
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>Share</Text> — copy and redistribute the game in any medium or format
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>Adapt</Text> — remix, transform, and build upon the game
                    </Paragraph>
                    <Text 
                        size="large" 
                        color={offWhite} 
                        style={{"textDecoration":"underline"}}
                    >
                        UNDER THE FOLLOWING TERMS:
                    </Text>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>Attribution</Text> — If you make something using our game, you need to give us credit and link back to us, and you need to explain what you changed.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>Non-Commercial</Text> — You can’t use our game to make money.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>Share Alike</Text> — If you remix, transform, or build upon our game, you have to release your work under the same Creative Commons license that we use (BY-NC-SA 4.0).
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        <Text color={back}>No additional restrictions</Text> — You can’t apply legal terms or technological measures to your work that legally restrict others from doing anything our license allows. That means you can’t submit anything using our game to any app store without our approval.
                    </Paragraph>
                    <Paragraph fill size="medium" color={offWhite}>
                        You can learn more about Creative Commons at CreativeCommons.org. (Our license is available at CreativeCommons.org/licenses/by-nc-sa/4.0/legalcode).
                    </Paragraph>

                    
                    
                    <Paragraph fill size="medium" color={offWhite}>
                        <Anchor href="https://cdn.vapid.site/sites/a67e0c72-4902-4365-a899-3386df73c2c4/assets/Secret_Hitler_Rules-023bc755617986cb2276a3b6920e43e0.pdf" label="original rules document" style={{"marginTop":"30px", "marginBottom":"30px"}}/>
                        <br />
                        <br />
                        <br />
                    </Paragraph>
                </Box>
                
            </Box>
        ;

        return (
            rs
        );
    }
    
}

export default Rules;