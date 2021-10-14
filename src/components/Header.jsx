import React from "react";
import Buttons from "./Buttons";

function Header(prop) {
  
  function modeChange(mod){
    prop.moduleChange(mod);
  }

  return (
    <header>
      <h1>Crypter</h1>
	  <Buttons
      name1 = "Morse"
      name2 = "Caesar"
      modeChange = {modeChange}
	  />
    </header>
  );
}

export default Header;
