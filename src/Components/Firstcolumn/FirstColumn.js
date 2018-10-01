import React from 'react';
import './FirstColumn.css';
import {Image} from 'semantic-ui-react';
const FirstColumn = () => {
    return(
        <div className={"firstColDiv"}>
            <Image style={{width:"80px", height:"60px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1KXr6ULj__Ssh3AFhOzEm0_N4xOD9RQHdkv2QPLLFMFWezGXLg"/>
        </div>
    );
};
export default FirstColumn;