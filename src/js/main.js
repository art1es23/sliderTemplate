
const prev = document.querySelector('.btn--prev');
const next = document.querySelector('.btn--next');
const slider = document.querySelector('.slider--wrapper');
const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider-dots__item');

let index = 0;

const active = (array, n) => {
    array.forEach(item => {
        item.classList.remove('active');
    })
    array[n].classList.add('active');
}

const activeSlide = () => active(slides, index)
const activeDots = () => active(dots, index)
const currentActive = (x) => {
    activeSlide(x);
    activeDots(x);
}

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        currentActive(index)
    }
    else {
        index++;
        currentActive(index)
    }

}

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
        currentActive(index)
    }
    else {
        index--;
        currentActive(index)
    }
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
/*

function slideNext () {
    const slidesVisible = document.querySelectorAll('.slider__item');
    let offset2 = 0;

    for (let i = 0; i < slidesVisible.length; i++) {
        slidesVisible[i].style.left = offset2 * 512 + 512 - 'px';
        offset2++;
    }
}
*/

/*
rightBtn.addEventListener('click', slideNext);
leftBtn.addEventListener('click', slidePrev);

function slideNext(e) {
    e.preventDefault();
}
*/


/*
const ages = [1,2,3,0,4,5,6];

let ar = 0;
for (let i = 0; i < ages.length; i++) {
    if (ages[i] === 0) break;
    ar = ar + ages[i];
    console.log(ages[i]);
}
console.log(ar)
*/



/*let regExp = /^[a-zA-Z]{1,10} [a-zA-Z]{1,20}$/;

console.log(regExp.test('Denys Symak'))*/
/*
const f1 = document.forms['f1'];
*/

/*
const btnAddUser = document.querySelector('.add');
const btnEditUser = document.querySelector('.editUser');
let tableUsers = document.querySelector('.menu');
let tableUsersWrapper = document.querySelector('.menu tbody');

let count = 0;
document.getElementById('tableUsers').addEventListener('click', tableClick,false);

btnAddUser.addEventListener('click', () => {
    let loginValue = f1.login.value;
    let passwordValue = f1.password.value;
    let mailValue = f1.mail.value;

    count++;

    let tableRow = document.createElement('tr');
    tableRow.className = 'menu--wrapper';
    tableRow.innerHTML = `
            <td class="menu__item menu__item--number">${count}</td>
            <td class="menu__item menu__item--login">${loginValue}</td>
            <td class="menu__item menu__item--password">${passwordValue}</td>
            <td class="menu__item menu__item--mail">${mailValue}</td>
            <td class="menu__item menu__item--edit"><button id="edit" value="Edit">Edit</button></td>
            <td class="menu__item menu__item--remove"><button id="remove" value="Remove">Remove</button></td>
        `;
    tableUsersWrapper.appendChild(tableRow);

    f1.login.value = '';
    f1.password.value = '';
    f1.mail.value = '';
})

function deleteRow(row) {
    document.getElementById('tableUsers').deleteRow(row);
}

function editRow(row) {
    let arrayCols = row.querySelectorAll('td');

    let loginCol = arrayCols[1].innerHTML;
    let passwordCol = arrayCols[2].innerHTML;
    let mailCol = arrayCols[3].innerHTML;

    f1.login.value = loginCol;
    f1.password.value = passwordCol;
    f1.mail.value = mailCol;

    btnAddUser.classList.remove('active');
    btnEditUser.classList.add('active');

    btnEditUser.addEventListener('click', () => {
        btnAddUser.classList.add('active');
        btnEditUser.classList.remove('active');

        row.innerHTML = `
            <td class="menu__item menu__item--number">${row.rowIndex}</td>
            <td class="menu__item menu__item--login">${f1.login.value}</td>
            <td class="menu__item menu__item--password">${f1.password.value}</td>
            <td class="menu__item menu__item--mail">${f1.mail.value}</td>
            <td class="menu__item menu__item--edit"><button id="edit" value="Edit">Edit</button></td>
            <td class="menu__item menu__item--remove"><button id="remove" value="Remove">Remove</button></td>
        `;
    })
}

function tableClick(e) {
    if(!e)
        e = window.event;
    if (e.target.value === "Remove") {
        deleteRow( e.target.parentNode.parentNode.rowIndex );
    }

    if (e.target.value === "Edit") {
        editRow(e.target.parentNode.parentNode);
    }
}

*/



/* ---------- 14 -------------
const createEl = document.querySelector('.create');
const coord = document.querySelector('.coord');

createEl.addEventListener('click', function () {
    const valueWidth = f1.width.value;
    const valueHeight = f1.height.value;
    const valueColor = f1.color.value;

    let box = document.createElement("div");
    box.innerHTML = "SUKA";
    box.style.width = f1.width.value + 'px';
    box.style.height = f1.height.value + 'px';
    box.style.backgroundColor = valueColor;

    let wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(box);

    console.log(valueHeight);
    console.log(valueWidth);

})

*/

/* ----------------- 15 -----------------
const createEl = document.querySelector('.add');
let newWord = document.querySelector('.badwords')

createEl.addEventListener('click', function () {
    const word = f1.word.value;

    newWord.innerHTML += word + ', ';

})

const censor = document.querySelector('.censor');

censor.addEventListener('click', (e) => {

    let i;
    let mas = newWord.innerHTML.split(', ');

    let text = f1.textarea.value;
    let CHAR = '*';

    const censored = text
        .split(' ' || ', ')
        .map(item => mas.includes(item) ? CHAR.repeat(item.length) : item)
        .join(' ');

    f1.textarea.value = censored;
    console.log(censored);
})*/

