import React from 'react';
import Meal from './meal';
const {PropTypes} = React;

export default class Day extends React.Component {
  render () {
    let day =
      this.props.day[0].toUpperCase() +
      this.props.day.slice(1);

    return (
      <div className="day">
        <h2>{day}</h2>

        <Meal name={"Breakfast"} data={this.props.data.breakfast} />
        <Meal name={"Lunch"} data={this.props.data.lunch} />
        <Meal name={"Dinner"} data={this.props.data.dinner} />
      </div>
    );
  }
};

Meal.propTypes = {
  day: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};
