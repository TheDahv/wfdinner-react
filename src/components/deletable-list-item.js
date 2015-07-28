import React from 'react';
import StyleSheet from 'react-style';

const {PropTypes} = React;

let styles = StyleSheet.create({
  listItem: {
    width: '20em'
  },
  listItemDelete: {
    'display': 'none'
  }
  , listItemDeleteHover: {
    'float': 'right',
    'display': 'inline-block',
    'textDecoration': 'none'
  }
});

export default class DeletableListItem extends React.Component {
  constructor () {
    super();

    this.state = {
      hover: false
    };

    this._onRequestDelete = this._onRequestDelete.bind(this);
    this._setHover = this._setHover.bind(this);
    this._releaseHover = this._releaseHover.bind(this);
  }
  // className="deletableListItem-delete"

  render () {
    let hoverStyles = [styles.listItemDelete];
    if (this.state.hover) {
      hoverStyles.push(styles.listItemDeleteHover);
    }

    return (
      <li styles={[styles.listItem]}
          onMouseEnter={this._setHover}
          onMouseLeave={this._releaseHover} >

        {this.props.item}

        <a href="#"
           styles={hoverStyles}
           onClick={this._onRequestDelete} >
          &#10060;
        </a>
      </li>
    );
  }

  _onRequestDelete (e) {
    e.preventDefault();

    this.props.onRequestDelete(this.props.index);
  }

  _setHover () {
    this.setState({
      hover: true
    });
  }

  _releaseHover () {
    this.setState({
      hover: false
    });
  }
};

DeletableListItem.PropTypes = {
  item: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  onRequestDelete: PropTypes.func
};
