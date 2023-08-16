import { createSidebarHTML } from './modules/sidebar.js';
import { createTasksSectionHTML } from './modules/tasksSection.js';

const main = document.querySelector('.main');
// main.append(createSidebarHTML());
main.append(createTasksSectionHTML());
