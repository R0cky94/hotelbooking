import React from 'react';
import './Header.css';
import FirstColumn from "../Firstcolumn/FirstColumn";
import {Grid, Row, Col} from 'react-bootstrap';
import SecondColumn from "../SecondColumn/SecondColumn";
import ThirdColumn from "../ThirdColumn/ThirdColumn";


const Header = () => {
    return (
        <Grid fluid className={"headerDiv"}>
            <Row>
                <Col xs={12} sm={12} md={2} lg={2}>
                    <FirstColumn/>
                </Col>

                <Col xs={12} sm={12} md={3} lg={3}>
                    <SecondColumn/>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4}>
                    <ThirdColumn/>
                </Col>

                <Col xs={12} sm={12} md={3} lg={3}>
                    <p style={{color: "white"}}>Coming Soon</p>
                </Col>
            </Row>
        </Grid>
    );
};
export default Header;