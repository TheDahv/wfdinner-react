import AppDispatcher from '../dispatcher/app-dispatcher';
import Store from './store';
import WfdConstants from '../constants/wfd-constants';
import _ from 'underscore';
import {DAYS, MEALS} from '../constants/wfd-constants';

/**
 * Shape of the data looks like:
 * {
 *    'monday|tuesday|etc..': {
 *      'breakfast|lunch|dinner': {
 *        name: '',
 *        url: '',
 *        ingredients: []
 *      }
 *    }
 * }
 */
let _plan = {};

const TEMPLATE = _.reduce(DAYS, (total, day) => {
  total[day] = _.reduce(MEALS, (meals, meal) => {
    meals[meal] = {
      name: '',
      url: '',
      ingredients: [`${meal} ingredient for ${day}`]
    };

    return meals;
  }, {});

  return total;
}, {});

class PlanStore extends Store {
  createFromTemplate () {
    _plan = _.extend({}, TEMPLATE);
    return _plan;
  }

  constructor () {
    super();

    this.registerActions();
  }

  getPlan () {
    return _plan;
  }

  getDay (day = '') {
    day = day.toLowerCase()
    return _plan[day] || {};
  }

  /**
   * Given a `day` in the plan, merge `data` into the meal plan for that day.
   *
   * {day} string - Should be the name of the day: e.g., 'monday'.
   * {meal} string - Should be the name of the meal: e.g., 'breakfast'.
   * {field} string - The name of the field to set in the plan.
   * {value} any - The value to set the field.
   */
  updateDay (day = '', meal = '', field, value) {
    if (_plan[day] && _plan[day][meal]) {
      _plan[day][meal][field] = value;
    }
  }

  addIngredient (day, meal, ingredient) {
    this.getDay(day)[meal].ingredients.push(ingredient);
  }

  removeIngredientAtIndex (day, meal, index) {
    this.getDay(day)[meal].ingredients.splice(index, 1);
  }

  registerActions () {
    AppDispatcher.register((action) => {
      let {day, meal} = action;

      switch (action.actionType) {
        case WfdConstants.MEAL_UPDATE:
          let {field, value} = action;
          this.updateDay(action.day, action.meal, field, value);
          this.emitChange();
          break;

        case WfdConstants.MEAL_ADD_INGREDIENT:
          let {ingredient} = action;
          this.addIngredient(day, meal, ingredient);
          this.emitChange();
          break;

        case WfdConstants.MEAL_REMOVE_INGREDIENT_AT_INDEX:
          let {index} = action;
          this.removeIngredientAtIndex(day, meal, index);
          this.emitChange();
          break;
      }
    });
  }
};

export default new PlanStore();
