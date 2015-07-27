import AppDispatcher from '../dispatcher/app-dispatcher';
import WfdConstants from '../constants/wfd-constants';

export default {
  addIngredient (day, meal, ingredient) {
    AppDispatcher.dispatch({
      day,
      meal,
      ingredient,
      actionType: WfdConstants.MEAL_ADD_INGREDIENT
    });
  }
};
