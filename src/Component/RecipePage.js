import React, {Component, createRef} from "react";
import './RecipePage.css';
import TableData from './TableData'
<<<<<<< HEAD
=======
import finalizedData from "./FinalRendering";
import Button from 'react-bootstrap/Button'
>>>>>>> ec768bb122e72f7fd82c61d0a8cc73923177889b

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
        this.state.tableData.current.setState({
            ingredientArray: ingredients,
            substituteArray: ingredients.map((element) => [])
        })
    }

    setInstruction(instruction) {
        this.state.tableData.current.setState({
            instructionArray: instruction
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