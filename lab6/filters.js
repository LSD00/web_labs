'use strict';

document.querySelectorAll('.menu-section[data-category]').forEach(section => {
    const filters = section.querySelectorAll('.filter-button');
    const cards = section.querySelectorAll('.dish');

    filters.forEach(button => {
        button.addEventListener('click', () => {
            const wasActive = button.classList.contains('active');

            filters.forEach(filter => {
                filter.classList.remove('active');
                filter.setAttribute('aria-pressed', 'false');
            });

            const kind = wasActive ? null : button.dataset.kind;

            if (kind) {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
            }

            cards.forEach(card => {
                card.hidden = kind !== null && card.dataset.kind !== kind;
            });
        });
    });
});
