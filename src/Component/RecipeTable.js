import React from "react";

class RecipeTable extends React.Component {
    render() {
        const headings = [
            'Have in Pantry',
            'Ingredient',
            'Substitutes'
        ]

        const rows =[
            [
                'yes',
                'flour',
                [
                    'gluten-free flour',
                    'wheat flour'
                ]
            ],
            [
                'yes',
                'eggs',
                [
                    'quill eggs',
                    'duck eggs',
                    'test eggs'
                ]
            ],
            [
                'yes',
                'burger',
                [
                    'test burger1',
                    'test burger2',
                    'test burger3',
                    'test burger4'
                ]
            ],
        ]

        return (
            <div className="recipe-table">
                <h3> Title of the food </h3>
            </div>
        );
    }
}
export default RecipeTable;