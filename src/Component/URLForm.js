import React from "react";
import ReactDOM from 'react-dom';
import RecipePage from './RecipePage'
import './URLForm.css'

export default class URLForm extends React.Component {
    
    render() {
        return (
            <form>
                <h1 className="instruction"> Enter the Recipe URL below. </h1>
                <input
                type="text"
                />
                <RecipePage />
            </form>
        );
    }
}
ReactDOM.render(<URLForm />, document.getElementById('root'));
