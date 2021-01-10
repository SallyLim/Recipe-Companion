export async function getIngredients(url) {
  return fetch("/ingredient:" + url.replaceAll('/', "%2F"))
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      return res;
    })
}

export async function getInstruction(url) {
  return fetch("/instruction:" + url.replaceAll('/', "%2F"))
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      return res;
    })
}