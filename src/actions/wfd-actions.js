import AppDispatcher from '../dispatcher/app-dispatcher';
import WfdConstants from '../constants/wfd-constants';

export default {
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
