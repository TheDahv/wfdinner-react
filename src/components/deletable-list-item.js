import React from 'react';

const {PropTypes} = React;

export default class DeletableListItem extends React.Component {
  constructor () {
    super();

    this._onRequestDelete = this._onRequestDelete.bind(this);
  }

  render () {
    return (
      <li>
        {this.props.item}

        <a href="#"
           className="deletableListItem-delete" onClick={this._onRequestDelete}>
          &#10060;
        </a>
      </li>
    );
  }

  _onRequestDelete (e) {
    e.preventDefault();

    this.props.onRequestDelete(this.props.index);
  }

};

DeletableListItem.PropTypes = {
  item: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  onRequestDelete: PropTypes.func
};
