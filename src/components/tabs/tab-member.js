import React from 'react';
import StyleSheet from 'react-style';
import _ from 'underscore';

const {PropTypes} = React;

const styles = StyleSheet.create({
  tab: {
    display: 'none'
  },
  activeTab: {
    display: 'block'
  }
});

export default class TabMember extends React.Component {
  getName () {
    return this.name;
  }

  render () {
    let style = [styles.tab];
    if (this.props.active) {
      style.push(styles.activeTab);
    }

    let updatedChildren = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child,
        _.extend({},
          child.props,
          this.props
        )
      );
    });

    return (
      <div className='tab' styles={style}>
        {updatedChildren}
      </div>
    );
  }
};

TabMember.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool
};
