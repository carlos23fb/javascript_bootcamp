import { async } from "regenerator-runtime"


export const state = {
    recipe: {}
}

export const loadRecipe = async function (id) {

    try {

        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=982de96a-68ac-4ed8-8022-d7541bf8e5c1`)
        const data = await res.json()

        if (!res.ok) throw new Error(`${data.message} (${res.status})`)

        const { recipe } = data.data

        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        }

    } catch (err) {
        console.log(err)
    }
}