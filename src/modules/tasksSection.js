export const tasksArr = [
  { title: 'Aufgabe 1', project: 'home', date: '22.05.2023' },
  { title: 'Aufgabe 2', project: 'test', date: '24.05.2023' },
];

let filterName = 'ALL TASKS'; // default
// filterName = "TODAY'S TASKS";

// function addTask() {
//   const addTaskBtn = document.querySelector('#addTask');

//   addTaskBtn.addEventListener('click', openModal());
// }

export function createTasksSectionHTML() {
  const taskSection = document.createElement('section');
  taskSection.classList.add(
    'allTasks',
    'flex',
    // 'flex-col',
    'justify-center',
    // 'items-center',
    'w-full',
    'm-10'
  );

  const taskSectionContainer = document.createElement('div');
  taskSectionContainer.classList.add(
    'flex',
    'flex-col',
    'w-6/12',
    'border',
    'border-gray-500'
  );

  const taskSectionHeader = document.createElement('h1');
  taskSectionHeader.classList.add(
    'flex',
    'justify-start',
    // 'w-6/12',
    // 'pt-10',
    'pb-5',
    'text-3xl',
    'font-bold'
    // 'underline'
  );
  taskSectionHeader.textContent = filterName;

  const taskList = document.createElement('ul');
  taskList.classList.add('mt-4', 'gap-3', 'w-full', 'text-xl');

  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add(
    'flex',
    'justify-start',
    'pl-3',
    'pb-3',
    'p-3'
  );

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

  newTaskBtn.prepend(plusIcon);
  newTaskContainer.append(newTaskBtn);

  // Seitenstruktur erzeugen
  taskSectionContainer.append(taskSectionHeader);
  taskSectionContainer.append(newTaskContainer);
  taskSectionContainer.append(createModal());
  taskSectionContainer.append(taskList);
  taskSection.append(taskSectionContainer);

  for (const task of tasksArr) {
    taskList.append(createLiElement(task));
  }

  return taskSection;
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

// Eingabemaske
function createModal() {
  const container = document.createElement('div');
  container.classList.add(
    'flex',
    'justify-start',
    'p-3',
    // 'ml-3',
    'gap-3',
    'w-full'
  );

  const inputTitle = document.createElement('input');
  inputTitle.classList.add(
    'border',
    'border-gray-500',
    'rounded-lg',
    'p-1',
    'pl-2',
    'w-6/12'
  );
  inputTitle.type = 'text';
  inputTitle.placeholder = 'Title';

  const inputDate = document.createElement('input');
  inputDate.classList.add(
    'border',
    'border-gray-500',
    'rounded-lg',
    'p-1',
    'pl-2',
    'w-6/12'
  );
  inputDate.type = 'text';
  inputDate.placeholder = 'DueDate';

  const agreeBtn = document.createElement('button');
  agreeBtn.classList.add('text-2xl', 'w-auto');
  const agreeIcon = document.createElement('i');
  agreeIcon.classList.add('fa-solid', 'fa-check');
  agreeBtn.append(agreeIcon);

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('text-xl', 'w-auto');
  const cancelIcon = document.createElement('i');
  cancelIcon.classList.add('fa-solid', 'fa-ban');
  cancelBtn.append(cancelIcon);

  container.append(inputTitle);
  container.append(inputDate);
  container.append(agreeBtn);
  container.append(cancelBtn);

  return container;
}

// So aufbauen wie Task-ELement
// Label
