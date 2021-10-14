import React from "react";
import Buttons from "./Buttons";
import Header from "./Header";

const { Cipher } = require("js-cipher");
const cipher = new Cipher();
const { encode, decode } = require('morsee');


function Center(){
 
    const [module, updateModule] = React.useState(1);
    const [mode, updateMode] = React.useState(1);
    
    const [sourceText, updateSourceText] = React.useState("");
    const [finalText, updateFinalText] = React.useState("");

    function addingText(event){
        updateSourceText(event.target.value);
    }

    function go(){
        var str = "";
        if(module === 2){
            if(mode === 1){
                str = cipher.encrypt(sourceText,3);
            }
            else{
                str = cipher.decrypt(sourceText,3);
            }
        }
        else{
            if(mode === 1){
                str = encode(sourceText);
            }
            else{
                str = decode(sourceText);
            }
        }
        updateFinalText(str);
    }

    function moduleChange(mod){
        updateModule(mod);
        updateSourceText("");
        updateFinalText("");
    }
    function modeChange(mod){
        updateMode(mod);
        updateSourceText("");
        updateFinalText("");
    }
    
    return (
        <div>
            <Header moduleChange={moduleChange} />
            <section>
                <div className="center-button">
                    <Buttons 
                        name1 = "Encode"
                        name2 = "Decode"
                        modeChange={modeChange}
                    />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <textarea type="text" 
                            placeholder="Enter Text"
                            onChange={addingText}
                            value={sourceText}
                            name = "sourceText"
                            rows = "5"
                            col = "25"
                            autoFocus
                        />
                    </div>
                    <div className="col-md-6 output-block">
                        <p>{finalText}</p>
                    </div>
                </div>
                <div class="btn-div d-grid gap-2">
                    <button type="button" class="btn btn-outline-primary btn-lg" onClick={go}>GO!</button>
                </div>
            </section>
        </div>
    );
};

export default Center;