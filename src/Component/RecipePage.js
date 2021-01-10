import React, {Component, createRef} from "react";
import './RecipePage.css';
import TableData from './TableData'
import finalizedData from "./FinalRendering";
import Button from 'react-bootstrap/Button'

class RecipePage extends Component {
    
    constructor(props) {
        console.log("hello")
        super(props);
        this.state = {
          display: false,
          tableData: createRef()
        };
        this.showRecipeTable = this.showRecipeTable.bind(this);
    }

    setIngredients(ingredients) {
        console.log(ingredients)
        this.state.tableData.current.setState({
            ingredientArray: ingredients,
        })
    }

    setInstruction(instruction) {
        this.state.tableData.current.setState({
            instructionArray: instruction
        })
    }

    setTitle(title) {
        this.state.tableData.current.setState({
            title: title
        })
    }

    showRecipeTable() {
        this.setState({
            display: true
        });
        console.log(this.state.display)
    }

    render() {
        const {display} = this.state;
        console.log(display)

        return (
            <div className='recipe'>
                <TableData ref={this.state.tableData} />
            </div>
        );
    }
}

export default RecipePage;