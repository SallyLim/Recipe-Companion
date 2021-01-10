import React, { Component } from "react";
import './RecipePage.css';
import TableData from './TableData'
import Button from 'react-bootstrap/Button'

class RecipePage extends Component {
    
    constructor(props) {
		super(props);
		this.state = {
			display: false,
		};
		this.showRecipeTable = this.showRecipeTable.bind(this);
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
                <div>
                <Button 
                    variant="outline-primary"
                    onClick={this.showRecipeTable}>
                    Show Ingredients
                </Button>
                </div>
                {display && (
                    <TableData/>
                )}
            </div>
        );
    }
}

export default RecipePage;