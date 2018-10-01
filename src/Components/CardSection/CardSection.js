import React from 'react';
import './CardSection.css';
import {Grid,Row,Col,Image} from 'react-bootstrap';
import Card from "../Card/Card";

const CardSection = () => {
    return(
        <Grid className={"cardSectionDivStyle"}>
            <Row>
                <Col className={"apple"} xs={12} sm={12} md={4} lg={4}>
                    <Image className={"cardImageStyle"}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbUjBg0hsOXnScELNx3cAz3xpwb1vtjagw0yMiEeLZ2J8ea484Q" />

                </Col>
                <Col className={"orange"} xs={12} sm={12} md={8} lg={8}>
                    <Card/>
                </Col>
            </Row>

        </Grid>
    )
};
export default CardSection;