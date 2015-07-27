import AppDispatcher from '../dispatcher/app-dispatcher';
import WfdConstants from '../constants/wfd-constants';

export default {
  updateMeal (day = '', meal = '', field, value) {
    AppDispatcher.dispatch({
      field,
      value,

      actionType: WfdConstants.MEAL_UPDATE,
      day: day.toLowerCase(),
      meal: meal.toLowerCase()
    });
  },

  addIngredient (day = '', meal = '', ingredient) {
    AppDispatcher.dispatch({
      ingredient,

      actionType: WfdConstants.MEAL_ADD_INGREDIENT,
      day: day.toLowerCase(),
      meal: meal.toLowerCase()
    });
  },

  removeIngredientAtIndex (day = '', meal = '', index) {
    AppDispatcher.dispatch({
      index,

      actionType: WfdConstants.MEAL_REMOVE_INGREDIENT_AT_INDEX,
      day: day.toLowerCase(),
      meal: meal.toLowerCase()
    })
  }
};
