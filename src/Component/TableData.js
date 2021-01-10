import React from "react";
import './TableData.css'
import SubstitutesPopUp from './SubstitutesPopUp'
import FinalRecipe from "../FinalRecipe";
import {Button} from "react-bootstrap";

class TableData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleIngredients: [
                {ingredient: 'Flour', substitute:''},
                {ingredient: 'Eggs',substitute:''},
                {ingredient: 'Chicken',substitute:''}
            ],
            title : ['Test title']
        }
    }
    
    renderTableContent(){
        return this.state.singleIngredients.map((singleIngredient, index) =>{
            const {ingredient,substitute} = singleIngredient
            return(
                <tr key={index}> 
                    <div className="checkbox">
                        <input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>
                    </div>
                    <td>{ingredient}</td>
                    <td>{substitute}</td>
                    {SubstitutesPopUp(["test1", "test2", "test3"], index)}
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = [];
        header.push("Already in Pantry");
        Object.keys(this.state.singleIngredients[0]).forEach(item =>{
            header.push(item)
        })
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    editSubs(index, sub){
        this.setState(
            this.state.singleIngredients[index].substitute = sub
        )
    }

    render() {
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