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

export default class PlanStore extends Store {
  static createFromTemplate () {
    return _.extend({}, TEMPLATE);
  }

  constructor () {
    super();

    this.registerActions();
  }

  getDay (day = '') {
    day = day.toLowerCase()
    return _plan[day] || {};
  }

  /**
   * Given a `day` in the plan, merge `data` into the meal plan for that day.
   *
   * {day} string - Should be the name of the day: e.g., 'monday'.
   * {data} object - A key-value pair, representing the data to set and where
   *    to set it.
   */
  updateDay (day = '', meal = '', data = {}) {
    let dayData = this.getDay(day);
    if (dayData && Object.keys(dayData).length) {
      let meal = dayData[meal];
      if (meal) {
        _.extend(meal, data);
      }
    }
  }

  registerActions () {
    AppDispatcher.register((action) => {
      switch (action.actionType) {
        case WfdConstants.MEAL_UPDATE:
          this.updateDay(action.day, action.meal, action.data);
          this.emitChange();
          break;
      }
    });
  }
};
