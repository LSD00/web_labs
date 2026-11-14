'use strict';

const orderForm = document.querySelector('.order-form');

const selected = {
    soup: null,
    main: null,
    starter: null,
    drink: null,
    dessert: null
};

const emptyTexts = {
    soup: 'Суп не выбран',
    main: 'Главное блюдо не выбрано',
    starter: 'Закуска не выбрана',
    drink: 'Напиток не выбран',
    dessert: 'Десерт не выбран'
};

const orderStatus = orderForm.querySelector('.order-status');

function renderOrder() {
    orderStatus.textContent = '';
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

    selected[dish.category] = selected[dish.category] === dish ? null : dish;

    document.querySelectorAll(
        `.menu-section[data-category="${dish.category}"] .dish`
    ).forEach(item => {
        const isSelected = item.dataset.dish === selected[dish.category]?.keyword;

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

function getOrderError(selection) {
    const categories = Object.keys(selection).filter(
        category => category !== 'dessert' && selection[category]
    );

    const matchesCombo = combo => combo.length === categories.length &&
        combo.every(category => selection[category]);

    if (lunchCombos.some(matchesCombo)) {
        return '';
    }
    if (!categories.length && !selection.dessert) {
        return 'Ничего не выбрано. Выберите блюда для заказа';
    }
    if (!selection.drink && lunchCombos.some(
        combo => matchesCombo(combo.filter(category => category !== 'drink'))
    )) {
        return 'Выберите напиток';
    }
    if (selection.soup && !selection.main && !selection.starter) {
        return 'Выберите главное блюдо/салат/стартер';
    }
    if (selection.starter && !selection.soup && !selection.main) {
        return 'Выберите суп или главное блюдо';
    }

    return 'Выберите главное блюдо';
}

function showOrderNotification(message) {
    const dialog = document.createElement('dialog');
    dialog.className = 'order-notification';
    dialog.setAttribute('role', 'alertdialog');
    dialog.setAttribute('aria-labelledby', 'order-notification-message');

    const text = document.createElement('p');
    text.id = 'order-notification-message';
    text.textContent = message;

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Окей 👌';
    button.autofocus = true;
    button.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => dialog.remove(), { once: true });

    dialog.append(text, button);
    document.body.append(dialog);
    dialog.showModal();
}

orderForm.addEventListener('submit', event => {
    const error = getOrderError(selected);

    if (error) {
        event.preventDefault();
        showOrderNotification(error);
        return;
    }

    if (!orderForm.reportValidity()) {
        event.preventDefault();
        return;
    }

    // У статической версии сайта нет обработчика заказов.
    if (orderForm.getAttribute('action') === '#') {
        event.preventDefault();
        orderStatus.textContent = 'Комбо собрано. Это учебный заказ, данные не отправлены.';
    }
});

renderOrder();
