import axios from 'axios';

const BASE_URL = 'http://localhost:3000/order-history-items';

const getAllItems = () => axios.get(BASE_URL).then(response => response.data);

const getItemById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const deleteItem = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addItem = item =>
  axios.post(BASE_URL, item).then(response => response.data);

export { getAllItems, getItemById, deleteItem, addItem };
