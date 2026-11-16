'use strict';

const comboCategories = {
    soup: 'Суп',
    main: 'Главное блюдо',
    starter: 'Салат',
    drink: 'Напиток',
    dessert: 'Десерт'
};

const lunchCombos = [
    ['soup', 'main', 'starter', 'drink'],
    ['soup', 'main', 'drink'],
    ['soup', 'starter', 'drink'],
    ['main', 'starter', 'drink'],
    ['main', 'drink']
];

function createCombo(categories) {
    const combo = document.createElement('li');
    combo.className = 'combo';

    categories.forEach(category => {
        const item = document.createElement('div');
        item.className = 'combo-item';

        const icon = document.createElement('img');
        icon.src = `icons/${category}.svg`;
        icon.alt = '';
        icon.width = 52;
        icon.height = 52;

        const caption = document.createElement('span');
        caption.textContent = comboCategories[category];

        item.append(icon, caption);
        combo.append(item);
    });

    return combo;
}

const combosList = document.querySelector('.combos');
lunchCombos.forEach(combo => combosList.append(createCombo(combo)));

const dessertCombo = createCombo(['dessert']);
dessertCombo.classList.add('combo-dessert');
const dessertNote = document.createElement('p');
dessertNote.className = 'combo-note';
dessertNote.textContent = '(Можно добавить к любому заказу)';
dessertCombo.append(dessertNote);
combosList.append(dessertCombo);
