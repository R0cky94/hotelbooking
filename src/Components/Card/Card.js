import React, {Component} from 'react';
import './Card.css';
import {Row, Col} from 'react-bootstrap';
import Button from "../Buttons/Button";
import {Icon} from 'semantic-ui-react';

class Card extends Component {
    render() {
        return (
            <div className={"cardMainDiv"}>
                <Row>
                    <Col className={"cardFirstCol"} md={10} lg={10}>
                        <div className={"cardFirstDiv"}>
                            <p className={"cardTypeStyle"}>Ac Deluxe</p>
                            <Icon name={"tv"}/>  Lcd tv with dth <br/>
                            <Icon name={"wifi"}/> Free Wifi

                        </div>
                    </Col>
                    <Col className={"cardSecondCol"} md={2} lg={2}>
                        <div className={"cardCostStyle"}>
                            <Icon name={"rupee"}/>2,000
                        </div>
                        <div className={"cardButtonStyle"}>
                            <Button name={"Select"}/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Card;