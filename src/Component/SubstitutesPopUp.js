import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Popup } from 'semantic-ui-react'
import './SubstitutesPopUp.css'

function renderSubstitutes(subs, modifySelectedSubstitute) {
    let rows = []
    subs.map((element) => {
      let innerRow = []
      element.map((val) => {
        innerRow.push(<tr>
          {val.name}
        </tr>)
      })


      rows.push((
        <tr onClick={() => modifySelectedSubstitute(element)} key={element}>
          {innerRow}
        </tr>
      ))
    })
    return rows;
}
    

export default function SubstitutesPopUp(subs, onClick) {

    return (
          <Popup
              trigger={<div className="ingredient-to-sub">Find a substitute</div>}
              display="flex"
              justify-content="center"
              text-align="center"
              position="absolute"
              modal="true"
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
