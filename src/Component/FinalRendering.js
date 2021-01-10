import './FinalRendering.css';

export default function finalizedData(ingredient, chosenSubtitute, instruction) {
  return (
    <div>
      {finalMeasurement(ingredient, chosenSubtitute)}
      {finalSteps(instruction)}
    </div>
  )
}

function finalMeasurement(ingredient, chosenSubstitute) {
  let arr = []
  ingredient.map((element, index) => {
    if (chosenSubstitute[index].length === 0) {
      arr.push(element)
    } else {
      chosenSubstitute[index].map(
        el => arr.push(el)
      )
    }

  })


  let component = []

  arr.map((el) => {
    var str = ""
    if (el.quantity !== undefined) {
      str = str + Math.round(el.quantity * 100) / 100 + " "
    }
    if (el.measurement !== undefined) {
      str = str + el.measurement + " "
    }
    if (el.name !== undefined) {
      str = str + el.name + " "
    }
    component.push(
      <tr>
        <a>{str}</a>
      </tr>
    )
  })

  return <div className='ingredients-with-measure'>
    {component}
  </div>
}

function finalSteps(instruction) {
  let component = []
  instruction.map(el => {
    component.push(<li>{el}</li>)
  })
  return <ol className='recipe-steps'>
    {component}
  </ol>
}