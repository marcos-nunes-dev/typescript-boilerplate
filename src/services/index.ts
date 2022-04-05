export * from 'axios';
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_URL,
});
