import * as model from './model.js';

import recipeView from './views/recipeView.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime'


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



const controlRecipes = async function () {
  try {


    const id = window.location.hash.slice(1)

    if (!id) return



    recipeView.renderSpinner()

    // 1) Loading recipe

    await model.loadRecipe(id);

    // 2) Rendering recipe

    recipeView.render(model.state.recipe)

  } catch (err) {
    alert(err)
  }
}

controlRecipes()

const events = ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipes))
