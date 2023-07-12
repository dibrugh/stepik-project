let nameEl = document.getElementById('name');
let surnameEl = document.getElementById('surname');
let result = document.querySelector('.result__text_js');
let btnSubmit = document.querySelector('.btn');
let checkboxes = document.querySelectorAll('input[name="goods"]');
let numbers = document.querySelectorAll('#goodsCount');
let labels = document.querySelectorAll('.checkbox label');

btnSubmit.addEventListener('click', () => {
    if (!nameEl.value) {
        alert('Введите имя');
        return;
    }
    else if (!surnameEl.value) {
        alert('Введите фамилию');
        return;
    }
    if (!sum()) {
        alert('Вы ничего не выбрали...');
        return;
    }
    alert(`Здравствуйте, ${nameEl.value} ${surnameEl.value}! \nИтого: ${sum()}р.`)
})

labels.forEach((el, index) => {
    el.textContent += ` ${checkboxes[index].dataset.cost}р.`;
})

checkboxes.forEach((el, index) => {
    el.addEventListener('change', () => {
        el.checked ? numbers[index].value = 1 : numbers[index].value = 0;
        sum() !== 0 ? result.textContent = sum() + ' р.' : result.textContent = null;
    })
})

numbers.forEach((el, index) => {
    el.addEventListener('change', () => {
        el.value > 0 ? checkboxes[index].checked = true : checkboxes[index].checked = false;
        sum() !== 0 ? result.textContent = sum() + ' р.' : result.textContent = null;
    })
})

function sum () {
    let res = [];
    numbers.forEach((el, index) => res.push(Number(el.value) * Number(checkboxes[index].dataset.cost)));
    return res.reduce((curr, prev) => curr + prev, 0);
}
