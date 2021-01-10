import React from "react";
import Popup from "reactjs-popup";
import "./SubstitutesPopUp.css"

export default class SubstitutesPopUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            substitutes: [{sub:'test3'},{sub:'test2'},{sub:'test1'}]
        }
    }
    
    renderSubstitutes(){
        return this.state.substitutes.map((substitute, index) =>{
            const {sub} = substitute
            return <div className="substitute">{sub}</div>
        })
    }
    
    render() {
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
                        {this.renderSubstitutes()}
                    </div>
                </Popup>
            </div>
        );
    }
}