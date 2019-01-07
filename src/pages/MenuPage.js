import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import MenuGrid from '../components/MenuGrid';
import * as API from '../services/menu/api';
import CategorySelector from '../components/CategorySelector';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class MenuPage extends Component {
  state = { menu: [], categories: [] };

  componentDidMount() {
    this.handleDefaultCategory();
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
    API.getCategories().then(items => {
      this.setState({ categories: items });
    });
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    console.log(prevCategory);
    console.log(nextCategory);

    if (prevCategory === nextCategory) return;

    API.getMenuItemsWithCategory(nextCategory).then(menu => {
      this.setState({ menu });
    });
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
        search: 'category=main%20course',
      });
    }

    API.getMenuItemsWithCategory(category).then(menu => {
      this.setState({ menu });
    });
  }

  render() {
    const { menu, categories } = this.state;
    const { match } = this.props;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
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
