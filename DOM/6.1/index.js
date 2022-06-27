"use strict";

/**
 * Генерация HTML списка чатов
 * @param {Chat[]} chats
 * @return {HTMLUListElement}
 */
function makeChatsList(chats) {
  const ul = document.createElement("ul");
  chats.forEach((chat) => {
    const li = document.createElement("li");
    li.textContent = `${chat.title} - ${chat.lastMessage}`;
    ul.appendChild(li);
  });
  return ul;
}

/*
// авторское решение
function makeChatsList(chats) {
    const ul = document.createElement('ul');
 
    ul.innerHTML = chats
                .map(item => {
                return `<li>${item.title} ${item.lastMessage}</li>`;
            })
                .join('');
 
    return ul;
}
*/
