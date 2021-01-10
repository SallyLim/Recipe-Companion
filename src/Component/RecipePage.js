import React, { Component } from "react";
import './RecipePage.css';
import RecipeTable from './RecipeTable'
import { Button } from 'react-bootstrap';

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
            <div className='test'>
                <div>
                <Button 
                    variant="search"
                    onClick={this.showRecipeTable}>
                    Show Ingredients
                </Button>
                </div>
                {display && (
                    <RecipeTable/>
                )}
            </div>
        );
    }
}

export default RecipePage;