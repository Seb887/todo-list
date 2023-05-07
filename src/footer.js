export const createFooter = () => {
  const pElement = document.createElement('p');
  pElement.classList.add('flex', 'items-center', 'text-gray-300');
  pElement.textContent = `Copyright © ${new Date().getFullYear()} - Seb887`;

  const iElement = document.createElement('i');
  iElement.classList.add('fab', 'fa-github');
  const aElement = document.createElement('a');
  aElement.classList.add(
    'flex',
    'items-center',
    'pl-2',
    'text-gray-300',
    'hover:text-lime-600',
    'no-underline'
  );
  aElement.href = 'https://github.com/seb887';
  aElement.target = '_blank';
  aElement.append(iElement);

  // Footer-Bereich erstellen
  const footer = document.createElement('footer');
  footer.classList.add(
    'footer',
    'flex',
    'justify-center',
    'w-screen',
    'h-1/6',
    'border-t',
    'border-gray-500',
    'bg-[#00000099]',
    'h-16'
  );
  footer.append(pElement);
  footer.append(aElement);

  return footer;
};
