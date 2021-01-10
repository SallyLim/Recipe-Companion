import React from "react";
import ReactDOM from 'react-dom';
import RecipePage from './RecipePage'

export default class URLForm extends React.Component {
    
    render() {
        return (
            <form>
                <h1> Please enter the URL of the recipe below. </h1>
                <input
                type="text"
                />
                <RecipePage />
            </form>
        );
    }
}
ReactDOM.render(<URLForm />, document.getElementById('root'));
