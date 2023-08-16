export const tasksArr = [
  { title: 'Aufgabe 1', dueDate: '22.05.2023' },
  { title: 'Aufgabe 2', dueDate: '24.05.2023' },
];

let filterName = 'ALL TASKS'; // default
// filterName = "TODAY'S TASKS";

export function createTasksSectionHTML() {
  const taskSection = document.createElement('section');
  taskSection.classList.add(
    'allTasks',
    'flex',
    'justify-center',
    'w-full',
    'm-10'
  );

  const taskSectionContainer = document.createElement('div');
  taskSectionContainer.classList.add(
    'flex',
    'flex-col',
    'w-6/12',
    'p-10',
    'bg-gray-300',
    'border',
    'border-gray-500',
    'rounded-xl',
    'shadow-xl'
  );

  const taskSectionHeader = document.createElement('h1');
  taskSectionHeader.classList.add(
    'flex',
    'justify-center',
    'pb-5',
    'text-5xl',
    'font-black',
    'font-["Chilanka"]'
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
    'text-2xl',
    'hover:scale-105'
  );
  newTaskBtn.id = 'addTaskBtn';
  newTaskBtn.textContent = 'New Task';

  const plusIcon = document.createElement('i');
  plusIcon.classList.add('fa-solid', 'fa-plus', 'text-2xl');

  newTaskBtn.prepend(plusIcon);
  newTaskContainer.append(newTaskBtn);

  // Seitenstruktur erzeugen
  taskSectionContainer.append(taskSectionHeader);
  taskSectionContainer.append(newTaskContainer);
  taskSectionContainer.append(createNewTaskInput());
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
    // 'bg-gray-400',
    'border',
    'border-gray-300',
    // 'hover:border',
    // 'hover:border-gray-400',
    'rounded-md'
    // 'shadow-sm'
  );

  const label = document.createElement('label');
  label.for = 'task-1';
  label.classList.add('flex', 'items-center', 'gap-3', 'col-span-5');
  label.textContent = obj.title;

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.name = 'task-1';
  inputElement.id = 'task-1';
  inputElement.classList.add('hover:scale-105');

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
  taskDate.textContent = obj.dueDate;

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
  editBtn.classList.add('hover:scale-105');
  editBtn.id = 'editBtn';

  const removeIcon = document.createElement('i');
  removeIcon.classList.add('fa-solid', 'fa-x');

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('hover:scale-105');
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
function createNewTaskInput() {
  const container = document.createElement('div');
  container.classList.add(
    'flex',
    'justify-start',
    'p-3',
    // 'pl-0',
    'pr-0',
    // 'ml-3',
    'gap-3',
    'w-full',
    'hidden'
  );
  container.id = 'inputContainer';

  const inputTitle = document.createElement('input');
  inputTitle.classList.add(
    'border',
    'border-gray-500',
    'rounded-lg',
    'p-1',
    'pl-2',
    'w-6/12'
  );
  inputTitle.id = 'inputTitle';
  inputTitle.type = 'text';
  inputTitle.placeholder = 'Title';
  inputTitle.setAttribute('required', '');

  const inputDate = document.createElement('input');
  inputDate.classList.add(
    'border',
    'border-gray-500',
    'rounded-lg',
    'p-1',
    'pl-2',
    'w-6/12'
  );
  inputDate.id = 'inputDate';
  inputDate.type = 'date';
  inputDate.placeholder = 'DueDate';
  // inputDate.setAttribute('required', '');

  const agreeBtn = document.createElement('button');
  agreeBtn.classList.add('text-2xl', 'hover:scale-110', 'w-auto');
  agreeBtn.id = 'agreeBtn';
  const agreeIcon = document.createElement('i');
  agreeIcon.classList.add('fa-solid', 'fa-check', 'text-green-700');
  agreeBtn.append(agreeIcon);

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('text-xl', 'hover:scale-110', 'w-auto');
  cancelBtn.id = 'cancelBtn';
  const cancelIcon = document.createElement('i');
  cancelIcon.classList.add('fa-solid', 'fa-ban', 'text-red-700');
  cancelBtn.append(cancelIcon);

  container.append(inputTitle);
  container.append(inputDate);
  container.append(agreeBtn);
  container.append(cancelBtn);

  return container;
}

// --------------
// --- EVENTS ---
// --------------

document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.querySelector('#addTaskBtn');
  const agreeBtn = document.querySelector('#agreeBtn');
  const cancelBtn = document.querySelector('#cancelBtn');
  const inputContainer = document.querySelector('#inputContainer');
  const inputTitle = document.querySelector('#inputTitle');
  const inputDate = document.querySelector('#inputDate');

  // console.log(addTaskBtn);

  addTaskBtn.addEventListener('click', () => openNewTaskInput());
  agreeBtn.addEventListener('click', () => saveNewTaskInput());

  function openNewTaskInput() {
    // console.log('New Task Button clicked!');
    addTaskBtn.classList.add('hidden');
    inputContainer.classList.remove('hidden');
  }

  function saveNewTaskInput() {
    if (inputTitle.value != '') {
      // TODO: Nachricht "Bitte Titel eingeben!" einbauen
      tasksArr.push({ title: inputTitle.value, dueDate: inputDate.value });
      addTaskBtn.classList.remove('hidden');
      inputContainer.classList.add('hidden');
    }

    console.log(tasksArr);

    createTasksSectionHTML();
  }
});
