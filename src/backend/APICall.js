export async function getIngredients(url) {
  url = "/ingredient:" + url.replaceAll('/', "%2F")
  console.log(url)
  return fetch(url)    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      return res;
    })
}

export async function getInstruction(url) {
  url = "/instruction:" + url.replaceAll('/', "%2F")
  console.log(url)
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      return res;
    })
}