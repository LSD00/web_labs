'use strict';

const orderForm = document.querySelector('.order-form');

const selected = {
    'black-tea': null,
    'green-tea': null,
    'pastry': null
};

const emptyTexts = {
    'black-tea': 'Чай не выбран',
    'green-tea': 'Чай не выбран',
    'pastry': 'Выпечка не выбрана'
};

function renderOrder() {
    const hasSelection = Object.values(selected).some(Boolean);

    document.querySelector('.order-empty').hidden = hasSelection;
    document.querySelector('.order-summary').hidden = !hasSelection;

    let total = 0;

    document.querySelectorAll('.order-entry[data-category]').forEach(entry => {
        const category = entry.dataset.category;
        const dish = selected[category];
        const description = entry.querySelector('.chosen-dish');

        if (dish) {
            description.textContent = `${dish.name} ${dish.price} ₽`;
            total += dish.price;
        } else {
            description.textContent = emptyTexts[category];
        }

        orderForm.querySelector(`input[name="${category}"]`).value =
            dish ? dish.keyword : '';
    });

    document.querySelector('.order-total-value').textContent = `${total} ₽`;
}

document.querySelector('.lunch-main').addEventListener('click', event => {
    const button = event.target.closest('.dish button');

    if (!button) {
        return;
    }

    const card = button.closest('.dish');
    const keyword = card.dataset.dish;
    const dish = dishes.find(item => item.keyword === keyword);

    if (!dish) {
        return;
    }

    selected[dish.category] = dish;

    document.querySelectorAll(
        `.menu-section[data-category="${dish.category}"] .dish`
    ).forEach(item => {
        const isSelected = item.dataset.dish === dish.keyword;

        item.classList.toggle('is-selected', isSelected);
        item.querySelector('button').setAttribute(
            'aria-pressed',
            String(isSelected)
        );
    });

    renderOrder();
});

orderForm.addEventListener('reset', () => {
    Object.keys(selected).forEach(category => {
        selected[category] = null;
    });

    document.querySelectorAll('.dish.is-selected').forEach(card => {
        card.classList.remove('is-selected');
        card.querySelector('button').setAttribute('aria-pressed', 'false');
    });

    renderOrder();
});

renderOrder();
