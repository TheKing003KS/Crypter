import React from "react";

function Buttons(props){

  const clickedStyle = {borderWidth: "0px 0px 0.5rem", borderBottomColor: "greenyellow"};
  const defaultStyle = {border: "0"};
  const [mode, updateMode] = React.useState(1);
  const [style1, updateStyle1] = React.useState(clickedStyle);
  const [style2, updateStyle2] = React.useState(defaultStyle);

  function modeChange1(){
    if(mode === 1) {
      updateMode(2);
      updateStyle1(defaultStyle);
      updateStyle2(clickedStyle);
      props.modeChange(2);
	  }
  }
  function modeChange2(){
    if(mode === 2) {
      updateMode(1);
      updateStyle1(clickedStyle);
      updateStyle2(defaultStyle);
      props.modeChange(1);
	  }
  }
  
  return (
    <div className="button-div">
      <button style={style1} onClick={modeChange2} className="mode-button"><h2>{props.name1}</h2></button>
      <button style={style2} onClick={modeChange1} className="mode-button"><h2>{props.name2}</h2></button>
    </div>
  );
};

export default Buttons;