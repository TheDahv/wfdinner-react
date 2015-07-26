//import Dispatcher from './dispatcher';
import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
  /**
   * A bridge function between the views and the dispatcher, marking the
   * action as a view action. Another variant here could be the handleServerAction.
   * @param {object} action The data coming from the view.
   */
  handleViewAction (action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
};

export default new Dispatcher();
