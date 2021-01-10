import React from "react";
import ReactDOM from 'react-dom';
import RecipePage from './RecipePage'
import './URLForm.css'

import {getIngredients, getInstruction, getTitle} from "../backend/APICall";
import { FormField } from "semantic-ui-react";

export default class URLForm extends React.Component {
    
    render() {
        let recipePage = React.createRef()

        return (
            <form className='form-input'>
                <h1 className="instruction"> Enter the Recipe URL below. </h1>
                <input className='field'
                type="text"
                onChange={(listener) => {
                    getIngredients(listener.target.value).then(
                        (ret) => {
                          if (ret.length < 1) {
                            alert("This website is not supported")
                            return
                          }
                          getInstruction(listener.target.value).then(
                            (ret) => recipePage.current.setInstruction(ret)
                          )
                          getTitle(listener.target.value).then(
                            (ret) => recipePage.current.setTitle(ret)
                          )
                          recipePage.current.setIngredients(ret)
                        }
                    ).catch(
                        () => alert("Invalid URL. Try to include the https: or http: in front")
                    )

                }}
                />
                <RecipePage ref={recipePage} />
            </form>
        );
    }
}
ReactDOM.render(<URLForm />, document.getElementById('root'));
