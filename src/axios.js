import axios from 'axios'

export const axios = axios.create({
  baseURL: 'http://api-bill.click',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});