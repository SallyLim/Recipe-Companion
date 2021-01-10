import React from "react";
import './TableData.css'
import SubstitutesPopUp from './SubstitutesPopUp'
import FinalRecipe from "../FinalRecipe";
import {Button} from "react-bootstrap";

class TableData extends React.Component {
    constructor(props, ingredient, instruction) {
        super(props)
        this.state = {
            ingredientArray: undefined,
            instructionArray: undefined,
            substituteArray: undefined,
            title : ['Test title']
        }
    }
    
    renderTableContent(){
        return this.state.ingredientArray.map((ingredientEntry, index) =>{
            let ingredient = ingredientEntry.ingredient
            return(
                <tr key={index}> 
                    <div className="checkbox">
                        <input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>
                    </div>
                    <td>{ingredient}</td>
                    <td>{this.state.substituteArray[index]}</td>
                    {SubstitutesPopUp(["test1", "test2", "test3"], (selectedSubstitute) => {
                        this.state.substituteArray[index] = selectedSubstitute
                        this.forceUpdate()
                    })}
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = [];
        header.push("Already in Pantry");
        Object.keys(this.state.ingredientArray[0]).forEach(item =>{
            header.push(item)
        })
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    editSubs(index, sub){
        this.setState(
        this.state.substituteArray[index] = sub
        )
    }

    render() {
        if (this.state.ingredientArray === undefined) {
            return (null)
        }

        const {title} = this.state;

        return (
            <div className="ingredient-data">
                <h3 id="title">{title}</h3>
                <table id='ingredients'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableContent()}
                    </tbody>
                </table>
                <Button
                  variant="finalize"
                  /*add what to do when clicked - render final recipe*/>
                    Finalize
                </Button>
            </div>
        );
    }
}
export default TableData;