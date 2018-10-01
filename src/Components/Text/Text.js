import React from 'react';
import './Text.css'

const Text = (props) => {
  return(
      <div className={"textDivStyle"}>
          <p className={"textStyle"}>{props.name}</p>
      </div>
  )
};
export default Text;