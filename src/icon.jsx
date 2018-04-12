import React from 'react';

const iconStyle = {
  position: 'absolute',
  left: '0',
  bottom: '0',
  padding: '20px',
  background:'#000',
  color: '#fff'
}
const spanStyle = {

}

const Icon = props => (
    <div style={iconStyle}><span style={spanStyle}>{props.month}</span></div>
);

export default Icon;
