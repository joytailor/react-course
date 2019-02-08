import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getAllMenuItems = async () => {
  const response = await axios.get(`${BASE_URL}/menu`);

  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);

  return response.data;
};

export const getMenuItemById = async id => {
  const response = await axios.get(`${BASE_URL}/menu/${id}`);

  return response.data;
};

export const getMenuItemsWithCategory = async category => {
  const response = await axios.get(`${BASE_URL}/menu?category=${category}`);

  return response.data;
};

export const addMenuItem = async item => {
  const response = await axios.post(`${BASE_URL}/menu/`, {
    name: item.name,
    description: item.description,
    image: item.image,
    price: item.price,
    category: item.category,
    ingredients: [...item.ingridients],
  });
  return response.data;
};
