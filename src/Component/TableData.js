import React from "react";
import './TableData.css'
import SubstitutesPopUp from './SubstitutesPopUp'
import {Button} from "react-bootstrap";
import {generateSubstitute} from "../backend/generateSubstitute";

class TableData extends React.Component {
    constructor(props, ingredient, instruction) {
        super(props)
        this.state = {
            ingredientArray: [
                {
                    "quantity": 2,
                    "name": "pork tenderloins"
                },
                {
                    "quantity": 0.5,
                    "name": "soy sauce",
                    "measurement": "cup"
                },
                {
                    "quantity": 0.3333333333333333,
                    "name": "honey",
                    "measurement": "cup"
                },
                {
                    "quantity": 0.3333333333333333,
                    "name": "ketchup",
                    "measurement": "cup"
                },
                {
                    "quantity": 0.3333333333333333,
                    "name": "brown sugar",
                    "measurement": "cup"
                },
                {
                    "quantity": 0.25,
                    "name": "Chinese rice wine",
                    "measurement": "cup"
                },
                {
                    "quantity": 2,
                    "name": "hoisin sauce",
                    "measurement": "tablespoons"
                },
                {
                    "quantity": 0.5,
                    "name": "red food coloring",
                    "measurement": "teaspoon"
                },
                {
                    "quantity": 1,
                    "name": "Chinese five-spice powder",
                    "measurement": "teaspoon"
                }
            ],
            instructionArray: [
                "Cut pork with the grain into strips 1 1/2- to 2-inches long; put into a large resealable plastic bag.\n",
                "Stir soy sauce, honey, ketchup, brown sugar, rice wine, hoisin sauce, red food coloring or red bean curd (see Cook's Note), and Chinese five-spice powder together in a saucepan over medium-low heat. Cook and stir until just combined and slightly warm, 2 to 3 minutes. Pour the marinade into the bag with the pork, squeeze air from the bag, and seal. Turn bag a few times to coat all pork pieces in marinade.\n",
                "Marinate pork in refrigerator, 2 hours to overnight.\n",
                "Preheat an outdoor grill for medium-high heat and lightly oil the grate.\n",
                "Remove pork from marinade and shake to remove excess liquid. Discard remaining marinade.\n",
                "Cook pork on preheated grill for 20 minutes. Put a small container of water onto the grill and continue cooking, turning the pork regularly, until cooked through, about 1 hour. An instant-read thermometer inserted into the center should read at least 145 degrees F (63 degrees C).\n"
            ],
            substituteArray: undefined,
            title : ['Test title']
        }

        this.state.substituteArray = this.state.ingredientArray.map(el => "none")
    }
    
    renderTableContent(){
        return this.state.ingredientArray.map((ingredientEntry, index) =>{
            let availableSubstitute = generateSubstitute(ingredientEntry)
            let substituteRow
            if (availableSubstitute === undefined) {
                substituteRow = <a>No Available Substitute</a>
            } else {
                substituteRow = SubstitutesPopUp(generateSubstitute(ingredientEntry), (selectedSubstitute) => {
                    this.state.substituteArray[index] = selectedSubstitute
                    this.forceUpdate()
                })
            }

            return(
                <tr className="table-entries" key={index}> 
                    <div className="checkbox">
                        <input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>
                    </div>
                    <td>{ingredientEntry.name}</td>
                    <td>{this.state.substituteArray[index]}</td>
                    <td>{substituteRow}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = [];
        header.push("Already in Pantry");
        header.push("Ingredient")
        header.push("Substitute")
        return header.map((key, index) => {
            return <th className='header-words' key={index}>{key.toUpperCase()}</th>
        })
    }

    editSubs(index, sub){
        this.setState(
        this.state.substituteArray[index] = sub
        )
    }

    render() {
        if (this.state.ingredientArray === undefined) {
            return (null)
        }

        const {title} = this.state;

        return (
            <div className="ingredient-data">
                <h3 className="recipe-title">{title}</h3>
                <table id='ingredients'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableContent()}
                    </tbody>
                </table>
                <Button className='finalize-button'
                  variant="finalize"
                  /*add what to do when clicked - render final recipe*/>
                    Finalize
                </Button>
            </div>
        );
    }
}
export default TableData;