import { config } from './config.js';

export function getTodoList() {
  return fetch(config.url.getTodoList).then(res => res.json());
}

export default { getTodoList: getTodoList };
