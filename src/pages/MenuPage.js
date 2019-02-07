import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';

import MenuGrid from '../components/modules/menu/MenuGrid/MenuGrid';
import Loading from '../components/Loading';
import CategorySelector from '../components/modules/menu/CategorySelector';
import ErrorNotification from '../components/ErrorNotification';

import { menuSelectors, menuOperations } from '../components/features/menu';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuPage extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.handleDefaultCategory();
    this.props.fetchMenuItems();
  }

  componentDidUpdate(prevState) {
    const prevCategory = getCategoryFromProps(prevState);
    const nextCategory = getCategoryFromProps(this.props);

    if (!nextCategory) return;
    if (prevCategory === nextCategory) return;
    this.props.fetchItemsWithCategory(nextCategory);
  }

  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  handleDefaultCategory() {
    const category = getCategoryFromProps(this.props);

    if (!category) {
      this.props.history.replace({
        pathname: this.props.location.pathname,
        search: '?category=main%20course',
      });
    }

    this.props.fetchItemsWithCategory(category);
  }

  render() {
    const { categoriedItems, isLoading, errorStatus } = this.props;
    const { match } = this.props;
    return (
      <div>
        {errorStatus !== null && <ErrorNotification err={errorStatus} />}
        {isLoading && <Loading />}
        <CategorySelector onChange={this.handleCategoryChange} />
        <MenuGrid items={categoriedItems} match={match} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoriedItems: menuSelectors.getCategoriedItems(state),
  categories: menuSelectors.getCategories(state),
  isLoading: menuSelectors.getIsLoading(state),
  errorStatus: menuSelectors.getError(state),
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchItemsWithCategory: menuOperations.fetchMenuItemsWithCategory,
  fetchCategories: menuOperations.fetchCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuPage);
