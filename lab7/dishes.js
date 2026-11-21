'use strict';

let dishes = [];

async function loadDishes() {
    const firstContainer = document.querySelector('.menu-section .dishes');
    const message = document.createElement('p');
    message.textContent = 'Загрузка блюд…';
    message.setAttribute('role', 'status');
    firstContainer.replaceChildren(message);

    try {
        const response = await fetch('./dishes.json');
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data) || !data.every(dish =>
            dish && typeof dish.keyword === 'string' &&
            typeof dish.name === 'string' &&
            Number.isFinite(dish.price) &&
            typeof dish.category === 'string' &&
            typeof dish.count === 'string' &&
            typeof dish.image === 'string' &&
            typeof dish.kind === 'string'
        )) {
            throw new Error('Некорректный формат данных о блюдах');
        }

        dishes = data;
        renderMenu();
        return dishes;
    } catch (error) {
        console.error('Не удалось загрузить блюда:', error);
        message.textContent = 'Не удалось загрузить меню. Обновите страницу.';
        message.setAttribute('role', 'alert');
        return [];
    }
}

document.addEventListener('DOMContentLoaded', loadDishes);
