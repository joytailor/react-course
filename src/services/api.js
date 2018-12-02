import axios from 'axios';

const BASE_URL = 'http://localhost:3000/menu';

const getAllMenuItems = () =>
  axios.get(BASE_URL).then(response => response.data);

const getMenuItemById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const deleteMenuItem = id =>
  axios.delete(`${BASE_URL} / ${id}`).then(response => {
    console.log(response);
  });

const addMenuItem = item =>
  axios.post(BASE_URL, item).then(response => {
    console.log(response);
  });

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
