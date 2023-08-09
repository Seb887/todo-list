export const tasksArr = [
  { title: 'Aufgabe 1', project: 'home', date: '22.05.2023' },
  { title: 'Aufgabe 2', project: 'test', date: '24.05.2023' },
];

let filterName = 'ALL TASKS'; // default
// filterName = "TODAY'S TASKS";

function addTask() {
  const addTaskBtn = document.querySelector('#addTask');

  addTaskBtn.addEventListener('click', openModal());
}

export function createTasksSectionHTML() {
  const section = document.createElement('section');
  section.classList.add(
    'allTasks',
    'flex',
    'flex-col',
    'items-center',
    'w-10/12',
    'p-10'
  );

  const sectionHeader = document.createElement('h1');
  sectionHeader.classList.add(
    'flex',
    'justify-start',
    'w-6/12',
    // 'pt-10',
    'pb-5',
    'text-3xl',
    'font-bold'
    // 'underline'
  );
  sectionHeader.textContent = filterName;

  const ulElement = document.createElement('ul');
  ulElement.classList.add(
    'flex',
    'flex-col',
    'gap-3',
    'w-6/12',
    'min-w-min',
    'text-xl'
  );

  const btnLiElement = document.createElement('li');
  btnLiElement.classList.add('flex', 'justify-start', 'pl-3', 'pb-3', 'p-3');

  const newTaskBtn = document.createElement('button');
  newTaskBtn.classList.add(
    'flex',
    'justify-start',
    'font-medium',
    'gap-3',
    'text-2xl'
  );
  newTaskBtn.id = 'addTask';
  newTaskBtn.textContent = 'New Task';

  const plusIcon = document.createElement('i');
  plusIcon.classList.add('fa-solid', 'fa-plus', 'text-2xl');

  section.append(sectionHeader);
  newTaskBtn.prepend(plusIcon);
  btnLiElement.append(newTaskBtn);
  ulElement.append(btnLiElement);
  section.append(ulElement);

  for (const task of tasksArr) {
    ulElement.append(createLiElement(task));
  }

  return section;
}

// Listenelement erzeugen
export function createLiElement(obj) {
  const liElement = document.createElement('li');
  liElement.classList.add(
    'grid',
    'grid-cols-12',
    'items-center',
    'gap-3',
    'p-2',
    'pl-3',
    'pr-3',
    'bg-gray-300',
    'border',
    'border-gray-300',
    'hover:border',
    'hover:border-gray-400',
    'rounded-md',
    'shadow-sm'
  );

  const label = document.createElement('label');
  label.for = 'task-1';
  label.classList.add('flex', 'items-center', 'gap-3', 'col-span-5');
  label.textContent = obj.title;

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.name = 'task-1';
  inputElement.id = 'task-1';

  // const projectLabel = document.createElement('p');
  // projectLabel.classList.add('projectLabel', 'col-span-3', 'col-start-6');
  // projectLabel.textContent = obj.project;

  const taskDate = document.createElement('p');
  taskDate.classList.add(
    'taskDate',
    'flex',
    'justify-center',
    'col-span-3',
    'col-start-8'
  );
  taskDate.textContent = obj.date;

  const iconsContainer = document.createElement('div');
  iconsContainer.classList.add(
    'flex',
    'pl-10',
    'justify-center',
    'gap-5',
    'col-start-11',
    'col-span-2'
  );

  const editIcon = document.createElement('i');
  editIcon.classList.add('fa-solid', 'fa-pen-to-square');

  const editBtn = document.createElement('button');
  editBtn.id = 'editBtn';

  const removeIcon = document.createElement('i');
  removeIcon.classList.add('fa-solid', 'fa-x');

  const removeBtn = document.createElement('button');
  removeBtn.id = 'removeBtn';

  editBtn.append(editIcon);
  removeBtn.append(removeIcon);

  label.prepend(inputElement);
  liElement.append(label);
  // liElement.append(projectLabel);
  liElement.append(taskDate);
  iconsContainer.append(editBtn, removeBtn);
  liElement.append(iconsContainer);

  return liElement;
}
