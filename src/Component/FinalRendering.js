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
    component.push(
      <tr>
        <a>{Math.round(el.quantity * 100) / 100 + " " + el.measurement + " " + el.name}</a>
      </tr>
    )
  })

  return <div>
    {component}
  </div>
}

function finalSteps(instruction) {
  let component = []
  instruction.map(el => {
    component.push(<li>{el}</li>)
  })
  return <ol>
    {component}
  </ol>
}