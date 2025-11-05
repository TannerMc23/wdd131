const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {
    const chapter = input.value.trim();
    if (chapter !== '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        listItem.textContent = chapter;
        deleteButton.textContent = '❌';
        listItem.append(deleteButton);
        list.append(listItem);
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});
