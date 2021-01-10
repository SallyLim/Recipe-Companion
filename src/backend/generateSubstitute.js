import Ingredient from './model'
import { getMegaList } from './substituteList'

export function generateSubstitute(ingredient) {
  var keywords = ingredient.name.toLowerCase().split(" ")

  var megaList = getMegaList()

  var maxHits = 0;
  var bestSub = undefined;

  for (var i = 0; i < megaList.length; i++) {
    var curHits = 0;
    var source = megaList[i].original.toLowerCase().replace(',', '').split(" ")

    for (var j = 0; j < source.length; j++) {
      for (var k = 0; k < keywords.length; k++) {
        if (keywords[k].includes(source[j])) {
          curHits++;
        }
      }
    }

    if (curHits > maxHits) {
      maxHits = curHits;
      bestSub = megaList[i];
    }
  }

  var retVal = []

  if (bestSub === undefined) {
    return undefined;
  } else {
    for (i = 0; i < bestSub.subs.length; i++) {
      var curArr = []
      for (j = 0; j < bestSub.subs[i].length; j++) {
        var curIng = new Ingredient(bestSub.subs[i][j])
        if (curIng.quantity !== undefined) {
          curIng.quantity = curIng.quantity * ingredient.quantity
        }
        curArr.push(curIng)
      }
      retVal.push(curArr)
    }
  }
  return retVal
}