import React, {Component} from 'react';
import DateSelect from "../DateSelect/DateSelect";
import moment from 'moment';
import './ThirdColumn.css';
import Button from "../Buttons/Button";
import DropDown from "../DropDown/DropDown";

class ThirdColumn extends Component {
    constructor() {
        super();
        this.state = {
            startDate: moment(),
            endDate: moment()
        };
        this.checkInChanged = this.checkInChanged.bind(this);
        this.checkOutChanged = this.checkOutChanged.bind(this);
    }

    checkInChanged(inDate) {
        this.setState({startDate: inDate})
    }

    checkOutChanged(outDate) {
        this.setState({endDate: outDate})
    }

    render() {
        return (
            <div className={"thirdColMainDiv"}>
                <div className={"thirdColFirstDiv"}>

                    <div className={"thirdCheckInDiv"}>
                    <DateSelect
                        name="Check-In &#xf073;"
                        onChange={this.checkInChanged}
                        selected={this.state.startDate}
                    />
                    </div>

                    <div className={"thirdCheckOutDiv"}>
                    <DateSelect
                        name="Check-Out &#xf073;"
                        onChange={this.checkOutChanged}
                        selected={this.state.endDate}
                    />
                    </div>

                    <div className={"thirdDivSelect"}>
                    <DropDown name={"Adults"}/>
                    </div>

                    <div className={"thirdDivSelect"}>
                    <DropDown name={"Child"}/>
                    </div>
                </div>

                <div className={"thirdColSecondDiv"}>
                    <div>
                        <Button name={"All"}/>
                    </div>

                    <div className={"thirdColButton"}>
                        <Button name={"Coorg Shell"}/>
                    </div>

                    <div className={"thirdColButton"}>
                        <Button name={"Omkar Homes"}/>
                    </div>

                    <div className={"thirdColButton"}>
                        <Button name={"Front Valley"}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default ThirdColumn;