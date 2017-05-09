import instance from 'axios'

export const axios = instance.create({
  baseURL: 'http://api-bill.click',
  //timeout: 1000,
  //headers: {'namespace': 'ugm'}
});