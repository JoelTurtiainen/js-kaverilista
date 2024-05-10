const add = document.getElementById('start');

function addFriend() {
  add.remove();
  const list = document.querySelector('.friend-list');
  const ol = document.createElement('ol');
  const amount = 10;

  for (let i = 0; i < amount; i++) {
    const li = document.createElement('li');
    const friend = document.createTextNode(
      prompt(`Syötä kaverin ${i + 1} nimi:`)
    );

    li.appendChild(friend);
    ol.appendChild(li);
  }
  list.appendChild(ol);
}

function onMouseOver(e) {
  e.target.style.color = 'red';
}

function onMouseOut(e) {
  e.target.style.color = 'black';
}

add.addEventListener('click', addFriend);
add.addEventListener('mouseover', onMouseOver);
add.addEventListener('mouseout', onMouseOut);
