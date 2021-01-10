export default function finalizedData(Ingredient, ChosenSubtitute, ) {
  return (
    <div>
      {finalMeasurement()}
      {finalSteps()}
    </div>
  )
}

function finalMeasurement() {
  return <div>
    measurement
  </div>
}

function finalSteps() {
  return <div>
    steps
  </div>
}