import Day from './day';
import TabGroup from './tabs/tab-group';
import TabMember from './tabs/tab-member';
import React from 'react';
import {DAYS} from '../constants/wfd-constants';

const {PropTypes} = React;

export default class Plan extends React.Component {
  render () {
    let dayComponents = DAYS.map(day => {
      return (
        <TabMember name={day} key={`tm-${day}`}>
          <Day day={day} data={this.props.plan[day]} key={`day-${day}`} />
        </TabMember>
      );
    });

    return (
      <div className="plan">
        <TabGroup>
          {dayComponents}
        </TabGroup>
      </div>
    );
  }
};

Plan.propTypes = {
  plan: PropTypes.object.isRequired
};
