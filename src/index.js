import { createAllTasks } from './modules/all_tasks.js';

const main = document.querySelector('.main');

main.append(createAllTasks());
