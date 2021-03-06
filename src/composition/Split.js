import React from 'react';
import './Split.css'

function Split(props) {
  const classNames = `split ${props.className}`;
  const newStyles = {flex: props.flexBasis};
  return (
    <div className={classNames} style={newStyles}>
      {props.children}
    </div>
  );
}

export default Split;
