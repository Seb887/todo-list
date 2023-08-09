import { projectArr, newProject } from './newProject.js';

export function createSidebarHTML() {
  const aside = document.createElement('aside');
  aside.classList.add(
    'sidebar',
    'flex',
    'flex-col',
    'pt-10',
    'pb-10',
    'w-2/12',
    'min-w-fit',
    'bg-gray-300',
    'text-2xl',
    'border-r',
    'border-gray-500'
  );

  // Filter Section
  const filterSection = document.createElement('section');

  const filterUl = document.createElement('ul');
  filterUl.classList.add('filter', 'flex', 'flex-col', 'pl-10', 'space-y-5');

  const allTasksLi = document.createElement('li');
  const todayLi = document.createElement('li');
  const thisWeekLi = document.createElement('li');

  const allTasksBtn = document.createElement('button');
  allTasksBtn.classList.add('hover:font-medium');
  allTasksBtn.id = 'allTasks';
  allTasksBtn.textContent = 'All';

  const todayBtn = document.createElement('button');
  todayBtn.classList.add('hover:font-medium');
  todayBtn.id = 'today';
  todayBtn.textContent = 'Today';

  const thisWeekBtn = document.createElement('button');
  thisWeekBtn.classList.add('hover:font-medium');
  thisWeekBtn.id = 'thisWeek';
  thisWeekBtn.textContent = 'This Week';

  // Project Section
  const projectSection = document.createElement('section');
  projectSection.classList.add('projectFilter', 'pt-10');
  projectSection.id = 'projectFilter';

  const projectsHeader = document.createElement('h1');
  projectsHeader.classList.add(
    'flex',
    'justify-between',
    'pl-7',
    'pr-7',
    'pb-3',
    'text-3xl',
    'font-extrabold'
  );

  const pElementHeader = document.createElement('p');
  pElementHeader.textContent = 'Projects';

  const projectsUl = document.createElement('ul');
  projectsUl.classList.add(
    'projectList',
    'h-80',
    'pt-3',
    'pb-3',
    'pl-10',
    'pr-10',
    'space-y-5',
    'overflow-auto',
    'border-t-2',
    'border-gray-500'
  );

  for (const project of projectArr) {
    projectsUl.append(newProject(project));
  }

  // Create Structure
  allTasksLi.append(allTasksBtn);
  todayLi.append(todayBtn);
  thisWeekLi.append(thisWeekBtn);
  filterUl.append(allTasksLi);
  filterUl.append(todayLi);
  filterUl.append(thisWeekLi);
  filterSection.append(filterUl);
  projectsHeader.append(pElementHeader);
  projectSection.append(projectsHeader);
  projectSection.append(projectsUl);
  aside.append(filterSection);
  aside.append(projectSection);

  return aside;
}
