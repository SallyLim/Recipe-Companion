import React from "react";
import Popup from "reactjs-popup";
import "./SubstitutesPopUp.css" 

function renderSubstitutes(subs,index) {
    let rows = []
    console.log(subs)
    subs.map((element) => {
      rows.push((
        <tr key={element}>
          {element}
        </tr>
      ))
    })
    return rows;
}
    
     /* make all substitutes clickable and will swap with current ingredient*/

export default function SubstitutesPopUp(subs, index) {
    return (
          <Popup
              trigger={<div className="ingredient-to-sub">Find a substitute</div>}
              position="right top"
              on='click'
              closeOnDocumentClick
              mouseLeaveDelay={300}
              mouseEnterDelay={0}
              contentStyle={{padding: "0px", border:"none"}}
              arrow={false}>
                {renderSubstitutes(subs)}
          </Popup>
    );
}