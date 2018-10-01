import React, {Component} from 'react';
import InputField from "../InputField/InputField";
import './SecondColumn.css';

class SecondColumn extends Component {
    render() {
        return (
            <div className={"secondColMainDiv"}>
                <div className={"secondFirstDiv"}>
                    <div>
                        <InputField style={{color: "white"}} name="FirstName"/>
                    </div>
                    <div className={'lastNameStyle'}>
                        <InputField name="LastName"/>
                    </div>
                </div>

                <div className={"secondSecondDiv"}>
                    <div>
                        <InputField style={{color: "white"}} name="Email"/>
                    </div>

                    <div className={"phoneNumberStyle"}>
                        <InputField name="PhoneNumber"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default SecondColumn;