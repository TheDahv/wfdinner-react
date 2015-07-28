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

        <Meal day={this.props.day} meal={"Breakfast"}
              data={this.props.data.breakfast}
              key={`meal-${day}-breakfast`}
              />
        <Meal day={this.props.day} meal={"Lunch"}
              data={this.props.data.lunch}
              key={`meal-${day}-lunch`}
              />
        <Meal day={this.props.day} meal={"Dinner"}
              data={this.props.data.dinner}
              key={`meal-${day}-dinner`}
              />
      </div>
    );
  }
};

Meal.propTypes = {
  day: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};
