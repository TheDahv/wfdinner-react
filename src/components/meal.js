import DeletableListItem from './deletable-list-item';
import EditableListItem from './editable-list-item';
import WfdActions from '../actions/wfd-actions';
import React from 'react';

const {PropTypes} = React;

export default class Meal extends React.Component {
  constructor (...args) {
    super(...args);

    this._addIngredient = this._addIngredient.bind(this);
    this._onRequestDelete = this._onRequestDelete.bind(this);
  }

  render () {
    debugger;
    return (
      <div className="meal">
        <h3>{this.props.meal}</h3>
        <p>
          <label htmlFor="{this.props.meal}-name">Name</label>
          <input type="text" val="{this.props.data.name}"
            onBlur={this._onBlur.bind(this, 'name')}
          />
        </p>

        <p>
          <label htmlFor="{this.props.name}-url">URL</label>
          <input type="text" val="{this.props.data.url}"
            onBlur={this._onBlur.bind(this, 'url')}
          />
        </p>

        <label htmlFor="{this.props.name}-ingredients">Ingredients</label>
        <ul>
          {
            this.props.data.ingredients.map((ingredient, index) => {
              return (
                <DeletableListItem item={ingredient} index={index}
                    onRequestDelete={this._onRequestDelete}
                    key={`ingredient-${index}`}
                    />
              );
            })
          }
          <EditableListItem day={this.props.day} meal={this.props.meal}
              onItemAdded={this._addIngredient} />
        </ul>
      </div>
    );
  }

  _onBlur (field, {target}) {
    let {value} = target;

    WfdActions.updateMeal(
      this.props.day,
      this.props.meal,
      field,
      value
    );
  }

  _addIngredient (ingredient) {
    WfdActions.addIngredient(
      this.props.day,
      this.props.meal,
      ingredient
    );
  }

  _onRequestDelete (index) {
    WfdActions.removeIngredientAtIndex(
      this.props.day,
      this.props.meal,
      index
    );
  }

  componentWillReceiveProps (newProps) {
    debugger;
  }
};

Meal.propTypes = {
  day: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};
