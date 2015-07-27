import React from 'react';

const {PropTypes} = React;

export default class EditableListItem extends React.Component {
  constructor () {
    super();

    this.state = {
      editing: false
    }

    this._saveInput = this._saveInput.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._startEditing = this._startEditing.bind(this);
  }

  render () {
    let control = null;
    if (this.state.editing) {
      control = <input type="text" onBlur={this._onBlur} onKeyUp={this._onKeyUp} />;
    } else {
      control = <a href="#" onClick={this._startEditing}>Add new...</a>;
    }

    return (
      <li>{control}</li>
    );
  }

  _startEditing (e) {
    e.preventDefault();
    this.setState({
      editing: true
    });
  }

  _onKeyUp ({keyCode, target}) {
    // Trigger on Enter
    if (keyCode === 13) {
      this._saveInput(target.value);
    }
  }

  _onBlur ({target}) {
    this._saveInput(target.value);
  }

  _saveInput (value) {
    this.props.onItemAdded(value);

    this.setState({
      editing: false
    });
  }

};

EditableListItem.propTypes = {
  day: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
  onItemAdded: PropTypes.func.isRequired
};
