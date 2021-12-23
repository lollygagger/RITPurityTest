import React from "react";
import {
    Col,
    Row,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, InputGroupText,
    InputGroup
} from 'reactstrap';

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            index: props.index,
            key: props.key
        }
        this.handleCheck = this.handleCheck.bind(this)

    }

    handleCheck(event){
        if(event.target.checked){
            this.props.updateScore(1);
        }else{
            this.props.updateScore(-1);
        }

    }


    render() {

        return (
            <Row>
                <InputGroupText>
                    <Label for="check"> {this.state.index+1}{":  \n"}</Label>
                    <Input id="check" type="checkbox" onChange={this.handleCheck}/>
                    <p>__</p>
                    {this.state.content}
                </InputGroupText>
            </Row>
        );
    }
}
