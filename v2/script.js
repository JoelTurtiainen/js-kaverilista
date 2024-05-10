const friends = [];

function displayFriends() {
  const list = document.querySelector('.friend-list');
  const ul = document.querySelector('ul');

  ul.innerText = '';

  for (friend of friends) {
    const li = document.createElement('li');
    const name = document.createTextNode(friend);

    li.appendChild(name);
    ul.appendChild(li);
    list.appendChild(ul);
  }
}

function addFriend(name) {
  if (name !== '' && friends.indexOf(name) === -1) {
    friends.push(name);
  }
}

function delFriend(name) {
  const i = friends.indexOf(name);
  if (i >= 0) {
    friends.splice(i, 1);
  }
}

function onClick(e) {
  e.preventDefault();

  const txtInput = document.getElementById('form-input');
  const name = txtInput.value;

  switch (e.target.id) {
    case 'add':
      addFriend(name);
      break;

    case 'del':
      delFriend(name);
      break;

    case 'sort':
      friends.sort();
      break;

    default:
      return;
  }
  displayFriends();
  txtInput.value = '';
}

document.querySelector('form').addEventListener('click', onClick);
