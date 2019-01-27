import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from '../components/modules/menu/MenuItem';
import { menuOperations, menuSelectors } from '../components/features/menu';

class MenuItemPage extends Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id);
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    const { category } = this.props.item.category;
    console.log(category);

    if (state) {
      this.props.history.push(state.from);
      return;
    }

    this.props.history.push({
      pathname: '/articles',
      search: `?category=${category}`,
    });
  };

  render() {
    const { match } = this.props;
    return <MenuItem match={match} onGoBack={this.handleGoBack} />;
  }
}

const mapStateToProps = state => ({
  item: menuSelectors.getCurrentItem(state),
});

const mapDispatchToProps = {
  fetchItem: menuOperations.fetchMenuItemByID,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuItemPage);
