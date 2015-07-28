import React from 'react';
import StyleSheet from 'react-style';
import TabMember from './tab-member';
import _ from 'underscore';

const styles = StyleSheet.create({
  tabNav: {
    paddingLeft: 0
  },
  tabNavItems: {
    display: 'inline-block',
    padding: '1em 2em'
  }
});

export default class TabGroup extends React.Component {
  constructor (...args) {
    super(...args);

    this.state = {
      tabMembers: this.props.children.filter((tab) => {
        return tab.type == TabMember;
      })
    };
    this.state.activeTabName = this.state.tabMembers[0].props.name;
  }

  render () {
    let tabNavHeaders = this.state.tabMembers.map((tab) => {
      return (
        <li key={`tab-${tab.props.name}`} styles={[styles.tabNavItems]}>
          <a href="#" onClick={this._navigate.bind(this, tab.props.name)}>
            {tab.props.name}
          </a>
        </li>
      );
    });

    return (
      <div className='tabGroup'>
        <div className="tabHeader">
          <ul styles={[styles.tabNav]}>{tabNavHeaders}</ul>
        </div>
        {
          this.state.tabMembers.map((tab) => {
            return React.cloneElement(tab,
              _.extend(
                {},
                tab.props,
                {active: tab.props.name === this.state.activeTabName}
              )
            );
          })
        }
      </div>
    );
  }

  _navigate (tabName, e) {
    e.preventDefault();
    this.setState({activeTabName: tabName});
  }
};

