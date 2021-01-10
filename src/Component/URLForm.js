import React from "react";
import ReactDOM from 'react-dom';
import RecipePage from './RecipePage'
import './URLForm.css'

import { getIngredients, getInstruction } from "../backend/APICall";

export default class URLForm extends React.Component {
    
    render() {
        let recipePage = React.createRef()

        return (
            <form>
                <h1 className="instruction"> Enter the Recipe URL below. </h1>
                <input
                type="text"
                onChange={(listener) => {
                    getIngredients(listener.target.value).then(
                        (ret) => { recipePage.current.setIngredients(ret)
                        console.log(JSON.parse(ret)) }
                    )
                    getInstruction(listener.target.value).then(
                        (ret) => { recipePage.current.setInstruction(ret)
                          console.log(JSON.parse(ret)) }
                    )
                }}
                />
                <RecipePage ref={recipePage} />
            </form>
        );
    }
}
ReactDOM.render(<URLForm />, document.getElementById('root'));
