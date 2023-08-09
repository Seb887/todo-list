export const projectArr = [
  { title: 'Privat', sum: '3' },
  { title: 'Work', sum: '17' },
  { title: 'Test', sum: '111' },
];

export function newProject(obj) {
  const liElement = document.createElement('li');
  liElement.classList.add('flex', 'justify-between', 'items-center');

  const button = document.createElement('button');
  button.classList.add(
    'flex',
    'justify-between',
    'items-center',
    'hover:font-medium',
    'w-full'
  );
  //   button.id = 'projectBtn';

  const title = document.createElement('div');
  title.classList.add('flex', 'justify-start', 'w-9/12');
  title.textContent = obj.title;

  const sum = document.createElement('div');
  sum.classList.add(
    'flex',
    'justify-end',
    'items-center',
    'w-5/12',
    'font-bold',
    'text-lg',
    'text-blue-400'
  );
  sum.textContent = obj.sum;

  button.append(title);
  button.append(sum);
  liElement.append(button);

  return liElement;
}
