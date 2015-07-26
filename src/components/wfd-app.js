import Plan from './plan';
import PlanStore from '../stores/plan-store';
import React from 'react';

export default class WfdApp extends React.Component {
  constructor () {
    super();
    this.state = {
      plan: PlanStore.createFromTemplate()
    };
  }

  render () {
    return <Plan plan={this.state.plan || {}} />;
  }
}
