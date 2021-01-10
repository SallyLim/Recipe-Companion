import React from "react";
import Popup from "reactjs-popup";
import "./SubstitutesPopUp.css" 

/*function renderSubstitutes(subs,index) {
        return <div className="substitute"
                    >
            <a>element</a>
            </div>
    });
}*/
    
     /* make all substitutes clickable and will swap with current ingredient*/

export default function SubstitutesPopUp(subs, index) {
    return (
        <div className="pop-up">
            <Popup
                trigger={<div className="ingredient-to-sub">Find a substitute</div>}
                position="right top"
                on='click'
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{padding: "0px", border:"none"}}
                arrow={false}>
                <div className="substitutes">
                    <a>test</a>
                </div>
            </Popup>
        </div>
    );
}