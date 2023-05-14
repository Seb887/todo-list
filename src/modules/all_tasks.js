export function createAllTasks() {
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
    'justify-center',
    'pt-10',
    'pb-20',
    'text-3xl',
    'font-bold',
    'underline'
  );
  sectionHeader.textContent = 'ALL TASKS';

  const ulElement = document.createElement('ul');
  ulElement.classList.add(
    'flex',
    'flex-col',
    'gap-3',
    'w-6/12',
    'min-w-min',
    'text-xl'
  );

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
  label.textContent = 'Task 1';

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.name = 'task-1';
  inputElement.id = 'task-1';

  const projectLabel = document.createElement('p');
  projectLabel.classList.add('projectLabel', 'col-span-3', 'col-start-6');
  projectLabel.textContent = 'Project 1';

  const taskDate = document.createElement('p');
  taskDate.classList.add(
    'taskDate',
    'flex',
    'justify-center',
    'col-span-3',
    'col-start-9'
  );
  taskDate.textContent = '11.05.2023';

  const iconsContainer = document.createElement('div');
  iconsContainer.classList.add('flex', 'justify-between', 'col-start-12');

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
  liElement.append(projectLabel);
  liElement.append(taskDate);
  iconsContainer.append(editBtn, removeBtn);
  liElement.append(iconsContainer);
  ulElement.append(liElement);
  section.append(sectionHeader);
  section.append(ulElement);

  return section;
}

/* <section class="allTasks flex flex-col items-center w-10/12 p-10">
  x <h1 class="flex justify-center pt-10 pb-20 text-3xl font-bold underline">
    ALL TASKS
  x </h1>
  x <ul class="flex flex-col justify- gap-3 w-6/12 min-w-min text-xl">
   x <li class="grid grid-cols-12 items-center gap-3 p-2 pl-3 pr-3 bg-gray-300 border border-gray-300 hover:border hover:border-gray-400 rounded-md shadow-sm">
     x <label
        for="task-1"
        class="flex items-center gap-3 col-span-5"
      >
       x <input
          type="checkbox"
          name="task-1"
          id="task-1"
          class=""
        />
        Task 1
      </label>
      <p class="projectLabel col-span-3 col-start-6">Project 1</p>
      <p class="taskDate flex justify-center col-span-3 col-start-9">
        11.05.2023
      </p>
      <div class="flex justify-between col-start-12">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-x"></i>
      </div>
    </li>
  </ul>
</section>; */
