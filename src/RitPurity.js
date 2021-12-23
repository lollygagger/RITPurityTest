import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row, Input, Form, FormGroup, Label} from 'reactstrap';

const QUESTIONS = [
    "held hands romantically",
    "been on a date",
    "been in a relationship",
    "kissed a non-family member on the lips",
    "french kissed",
    "kissed on the neck",
    "kissed horizontally",
    "given or recieved a hickey",
    "kissed below the belt",
    "kissed or been kissed on the titty",
    "kissed for more than 2 hours consecutively",
    "played a game involving stripping",
    "created a profile on a dating app",
    "watched porn",
    "watched hentai",
    "masturbated",
    "masturbated while someone else was in the room",
    "masturbated to incest/furry",
    "been caught masturbating",
    "masturbated with an inanimate obect",
    "undressed or been undressed by MPS",
    "showered with MPS",
    "had or given blue balls",
    "had an orgasm due to someone elses manipulation",
    "sent sexually explicit texts",
    "sent nudes",
    "cyber sex",
    "cheated on a signficant other during a relationship",
    "purchased contraceptives",
    "gave head",
    "recieved head",
    "ingested someone elses genital secretion",
    "used a sex toy with a partner",
    "spend the night with a MPS",
    "been walked in on while engaging in a sexual act",
    "sexiled a roomate",
    "played a drinking game",
    "faked sobriety to authority",
    "blacked out",
    "blacked out on a weekday",
    "blacked out more than 3 nights in a row",
    "drank/got high every night for over a week",
    "manufactured your own illegal substance",
    "passed out in someone else's bed",
    "consumed nicotine",
    "used weed",
    "tried hallucinogenics",
    "tried party drugs (molly, coke, etc.)",
    "used meth, crack, pcp, horse tranqs, or heroin",
    "been forced to attend school sponsored alcohol/drug abuse training",
    "been put on disciplinary probation or suspended",
    "urinated in public",
    "gone skinny-dipping",
    "gone streaking",
    "seen a stripper",
    "had the police called on you",
    "ran from the police",
    "had the police question you",
    "had the police handcuff you",
    "been arresteed",
    "been convicted of a crime",
    "been convicted of a felony",
    "committed vandalism",
    "had sex",
    "had sex 3 or more times in one night",
    "had sex more than 10 times",
    "had sex in four or more positions",
    "had sex with someone you met within 24 hours",
    ";)",
    "had sex in a motor vehicle",
    "had sex outdoors",
    "had sex in public",
    "had sex in a swimming pool or hottub",
    "had sex in a bed not belonging to anyone involved",
    "had sex while your or your partener's parents were home",
    "had sex with a non-participating 3rd party in the room",
    "had sex with a professor/teacher/mentor/TA",
    "joined the mile high club",
    "had sex with a virgin",
    "had sex without a contraceptive",
    "had an STI",
    "had a threesome",
    "attended an orgy",
    "had two or more distinct acts of sexual intercourse with two or more people within 24 hours",
    "eaten or had your ass eaten",
    "had sexual intercourse with five or more partners",
    "been photographed or filmed during sexual intercourse by yourself or others",
    "had period sex",
    "had anal sex",
    "had a pregnancy scare",
    "impregnated someone or been impregnated",
    "paid or been paid for a sexual act/pics",
    "created/subscribed to OnlyFans",
    "committed an act of voyeurism",
    "participated in furry sex",
    "been sexually harrased/catcalled",
    "feared for own safety on campus",
    "felt uncomfortable due to actions by a member of the opposite sex",
    "attended a greek life party",
    "performed sexual acts with a member of your non-preffered sex"
]

class RitPurity extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }

    updateScore = (val) => {
        this.setState({score: this.state.score+val})
    }

    render(){
        let buttons = []
        for(let i=0; i<QUESTIONS.length; i++){
            buttons.push()
        }

        return(

        );
    }


}