import React from "react";
import './TableData.css'
import SubstitutesPopUp from './SubstitutesPopUp'
import {Button} from "react-bootstrap";
import {generateSubstitute} from "../backend/generateSubstitute";
import finalizedData from "./FinalRendering";

class TableData extends React.Component {
    constructor(props, ingredient, instruction) {
        super(props)
        this.state = {
            finalized: false,
            ingredientArray: undefined,
            instructionArray: undefined,
            substituteArray: undefined,
            title : ['']
        }
    }
    
    renderTableContent(){
        return this.state.ingredientArray.map((ingredientEntry , index) =>{
            let availableSubstitute = generateSubstitute(ingredientEntry)
            let substituteRow
            if (availableSubstitute === undefined) {
                substituteRow = <a>No Available Substitute</a>
            } else {
                substituteRow = SubstitutesPopUp(generateSubstitute(ingredientEntry), (selectedSubstitute) => {
                    this.state.substituteArray[index] = selectedSubstitute
                    this.forceUpdate()
                })
            }

            let str = ""

            if (this.state.substituteArray === undefined || this.state.substituteArray[index].length === 0) {
                str = "None"
            } else {
                this.state.substituteArray[index].map(el => str = str + el.name + "\n")
            }

            return(
                <tr className="table-entries" key={index}> 
                    <div className="checkbox">
                        <input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>
                    </div>
                    <td>{ingredientEntry.name}</td>
                    <td width='400px'>{str}</td>
                    <td width='200px'>{substituteRow}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = [];
        header.push("Already in Pantry");
        header.push("Ingredient")
        header.push("Substitute")
        return header.map((key, index) => {
            return <th className='header-words' key={index}>{key.toUpperCase()}</th>
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
                <h3 className="recipe-title">{title}</h3>
                <table id='ingredients'>
                    <tbody className='table-body'>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableContent()}
                    </tbody>
                </table>
                <Button className='finalize-button'
                  variant="finalize"
                        onClick={() => {
                            this.setState({
                              finalized : true
                        })
                            this.forceUpdate()
                        }}
                  /*add what to do when clicked - render final recipe*/>
                    Finalize
                </Button>
                {this.state.finalized && finalizedData(this.state.ingredientArray, this.state.substituteArray, this.state.instructionArray)}
            </div>
        );
    }
}
export default TableData;