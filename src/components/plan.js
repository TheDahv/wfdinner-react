import Day from './day';
import React from 'react';
import {DAYS} from '../constants/wfd-constants';
const {PropTypes} = React;

export default class Plan extends React.Component {
  render () {
    let dayComponents = DAYS.map(day => {
      return <Day day={day} data={this.props.plan[day]} />
    });

    return (
      <div className="plan">
        {dayComponents}
      </div>
    );
  }
};

Plan.propTypes = {
  plan: PropTypes.object.isRequired
};
