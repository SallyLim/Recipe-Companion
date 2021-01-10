import React from "react";
import Popup from "reactjs-popup";
import "./SubstitutesPopUp.css" 

function renderSubstitutes(subs, modifySelectedSubstitute) {
    let rows = []
    subs.map((element) => {
      let str = ""
      element.map((val) => {
        str = str + val.name + "\n"
      })

      rows.push((
        <tr onClick={() => modifySelectedSubstitute(element)} key={element}>
          {str}
        </tr>
      ))
    })
    return rows;
}
    
     /* make all substitutes clickable and will swap with current ingredient*/

export default function SubstitutesPopUp(subs, onClick) {
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
                {renderSubstitutes(subs, onClick)}
          </Popup>
    );
}