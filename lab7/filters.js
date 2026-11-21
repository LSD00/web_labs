'use strict';

function updateSectionFilter(section) {
    const activeFilter = section.querySelector('.filter-button.active');
    const kind = activeFilter?.dataset.kind ?? null;

    section.querySelectorAll('.dish').forEach(card => {
        card.hidden = kind !== null && card.dataset.kind !== kind;
    });
}

document.querySelectorAll('.menu-section[data-category]').forEach(section => {
    const filters = section.querySelectorAll('.filter-button');

    filters.forEach(button => {
        button.addEventListener('click', () => {
            const wasActive = button.classList.contains('active');

            filters.forEach(filter => {
                filter.classList.remove('active');
                filter.setAttribute('aria-pressed', 'false');
            });

            if (!wasActive) {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
            }

            updateSectionFilter(section);
        });
    });
});
