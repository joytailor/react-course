import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import MenuGrid from '../modules/menu/MenuGrid';
import Loading from '../components/Loading';
import * as API from '../services/menu/api';
import CategorySelector from '../modules/menu/CategorySelector';
import ErrorNotification from '../components/ErrorNotification';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class MenuPage extends Component {
  state = { menu: [], categories: [], isLoading: false, error: null };

  async componentDidMount() {
    this.setState({ isLoading: true, error: null });
    try {
      await API.getCategories().then(items => {
        this.setState({ categories: items, isLoading: false });
      });

      if (this.props.location.search === '') {
        API.getAllMenuItems().then(menu => {
          this.setState({ menu });
        });
        return;
      }
    } catch (err) {
      this.setState({ error: err });
    }

    this.handleDefaultCategory();
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

  handleMenuItemsWithCategories = category => {
    API.getMenuItemsWithCategory(category).then(menu => {
      this.setState({ menu });
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

    this.handleMenuItemsWithCategories(category);
  }

  render() {
    const { menu, categories, isLoading, error } = this.state;
    const { match } = this.props;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
        {error !== null && <ErrorNotification err={error} />}
        {isLoading && <Loading />}
        <Link to={`${match.url}/add`}>Добавить элемент меню</Link>
        <CategorySelector
          options={categories.map(el => el.name)}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <MenuGrid items={menu} match={match} />
      </div>
    );
  }
}
