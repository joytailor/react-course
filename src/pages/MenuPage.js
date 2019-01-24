import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';

import MenuGrid from '../components/modules/menu/MenuGrid';
import Loading from '../components/Loading';
import CategorySelector from '../components/modules/menu/CategorySelector';
import ErrorNotification from '../components/ErrorNotification';

import { menuSelectors, menuOperations } from '../components/features/menu';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuPage extends Component {
  componentDidMount() {
    this.props.fetchCategoriesSuccess();
    this.handleDefaultCategory();
    const category = getCategoryFromProps(this.props);
    if (!category) {
      this.props.fetchMenuItems();
    }
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;

    this.handleMenuItemsWithCategories(nextCategory);
  }

  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  // handleMenuItemsWithCategories = category => {
  //   API.getMenuItemsWithCategory(category).then(menu => {
  //     this.setState({ menu });
  //   });
  // };

  handleDefaultCategory() {
    const category = getCategoryFromProps(this.props);

    if (!category) {
      this.props.history.replace({
        pathname: this.props.location.pathname,
        search: '?category=main%20course',
      });
    }

    this.props.fetchItemsWithCategory();
  }

  render() {
    const { items, categories, isLoading, errorStatus } = this.props;
    const { match } = this.props;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
        {errorStatus !== null && <ErrorNotification err={errorStatus} />}
        {isLoading && <Loading />}
        <CategorySelector
          options={categories.map(el => el.name)}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <MenuGrid items={items} match={match} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: menuSelectors.getMenuItemsWithCategory(state),
  categories: menuSelectors.getCategories(state),
  isLoading: menuSelectors.getIsLoading(state),
  errorStatus: menuSelectors.getError(state),
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchItemsWithCategory: menuOperations.fetchMenuItemsWithCategory,
  fetchCategoriesSuccess: menuOperations.fetchCategoriesSuccess,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuPage);
