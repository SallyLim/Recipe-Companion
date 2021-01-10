export async function getIngredients(url) {
  return fetch("/ingredient:" + url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      return res;
    })
}