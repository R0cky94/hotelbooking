import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './DateSelect.css';
import DatePicker from 'react-datepicker';

const DateSelect = (props) => {
    return (
        <div>
            <DatePicker
                className={"dateSelectStyle"}
                onChange={props.onChange}
                placeholderText={props.name}>
            </DatePicker>

        </div>
    );
};
export default DateSelect;