const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2 982de96a-68ac-4ed8-8022-d7541bf8e5c1

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604691c37cdc054bd0c0?key=982de96a-68ac-4ed8-8022-d7541bf8e5c1')
    const data = await res.json()

    if (!res.ok) throw new Error(`${data.message} (${res.status})`)

    let { recipe } = data.data

    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }

    console.log(recipe)
  } catch (err) {
    alert(err)
  }
}


showRecipe()