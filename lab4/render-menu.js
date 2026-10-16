'use strict';

const cardTemplate = document.querySelector('#dish-template');

document.querySelectorAll('.menu-section[data-category]').forEach(section => {
    const category = section.dataset.category;
    const container = section.querySelector('.dishes');

    const categoryDishes = dishes
        .filter(dish => dish.category === category)
        .sort((a, b) => a.name.localeCompare(b.name, 'ru'));

    categoryDishes.forEach(dish => {
        const fragment = cardTemplate.content.cloneNode(true);
        const card = fragment.querySelector('.dish');

        card.dataset.dish = dish.keyword;

        const image = card.querySelector('.dish-image');
        image.src = dish.image;
        image.alt = dish.name;

        card.querySelector('.dish-price').textContent = `${dish.price} ₽`;
        card.querySelector('.dish-name').textContent = dish.name;
        card.querySelector('.dish-weight').textContent = dish.count;

        container.append(fragment);
    });
});
