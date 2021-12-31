
import React from "react";
 const style={
     background:'pink',
     border:'4px solid black',
     fontSize:'40px',
     fontWeight:'800',
     cursor:'pointer',
    outline:'none',
padding:'10px' }

const Square = ({value,onClick}) => (
  <button style={style} onClick={onClick}>
      {value}
  </button>
)

export default Square;