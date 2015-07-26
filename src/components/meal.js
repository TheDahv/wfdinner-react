import React from 'react';
const {PropTypes} = React;

export default class Meal extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="meal">
        <h3>{this.props.name}</h3>
        <p>
          <label htmlFor="{this.props.name}-name">Name</label>
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
            this.props.data.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>
            })
          }
        </ul>
      </div>
    );
  }

  _onBlur (name, e) {
    e.preventDefault();

    let {value} = e.target;

    console.log({
      [name]: value
    });
  }
};

Meal.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};
