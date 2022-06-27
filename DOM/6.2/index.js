"use strict";

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const rows = table.children[1].querySelectorAll("tr");
  // console.log(rows);
  rows.forEach((row) => {
    const tds = row.querySelectorAll("td");
    // console.log(tds);
    let role = tds[3].dataset.role;
    let gender = tds[2].textContent;
    let age = tds[1].textContent;
    if (Number(age) < 18) {
      row.style.textDecoration = "line-through";
    }
    if (!role) {
      row.setAttribute("hidden", "hidden");
    } else if (role === "admin") {
      row.classList.add("admin");
    } else {
      row.classList.add("regular");
    }
    if (gender === "f") {
      row.classList.add("female");
    } else {
      row.classList.add("male");
    }
  });
}

/* 
// Авторское решение
function highlight(table) {
    const actions = {
        3: (root, td) => {
            if (td.dataset.role === 'regular') {
                root.classList.toggle('regular', true);
            } else if (td.dataset.role === 'admin') {
                root.classList.toggle('admin', true);
            } else if (!td.hasAttribute('data-role')) {
                root.hidden = true;
            }
        },
        2: (root, td) => {
            if (td.textContent === 'm') {
                root.classList.toggle('male', true);
            } else if (td.textContent === 'f') {
                root.classList.toggle('female', true);
            }
        },
        1: (root, td) => {
            const age = parseInt(td.textContent, 10);
 
            if (age < 18) {
                root.style.textDecoration = 'line-through';
            }
 
        }
    };
 
    for (let tr of table.rows) {
        Array.from(tr.cells).forEach((td, index) => {
            const fn = actions[index];
 
            if (typeof fn === 'function') {
                fn(tr, td);
            }
        });
    }
}
*/
