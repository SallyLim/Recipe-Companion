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
                {Possess: 'yes', ingredient: 'Flour', substitute:''},
                {Possess: 'no', ingredient: 'Eggs',substitute:''},
                {Possess: 'no', ingredient: 'Chicken',substitute:''}
            ],
            title : ['Test title']
        }
    }
    
    renderTableContent(){

        return this.state.singleIngredients.map((singleIngredient, index) =>{
            const {Possess, ingredient,substitute} = singleIngredient
            return(
                <tr key={index}> 
                    <td>{Possess}</td>
                    <td>{ingredient}</td>
                    <td>{substitute}</td>
                    {SubstitutesPopUp(["test1", "test2", "test3"], index)}
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.singleIngredients[0])
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