const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', addScripture);
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { 
        addScripture(); 
    }
});

function addScripture() {
    let scripture = document.createElement('li');
    let deleteButton = document.createElement('button');
    scripture.textContent = input.value;
    deleteButton.textContent = '❌';
    scripture.appendChild(deleteButton);
    list.appendChild(scripture);
    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', () => {
        list.removeChild(scripture);
    });
}
